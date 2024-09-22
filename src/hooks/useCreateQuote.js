import { useState } from "react";
import { createQuote, uploadQuoteImage } from "../network/quoteService";
import { toast } from "react-toastify";

export const useCreateQuote = () => {
  const [quoteTitle, setQuoteTitle] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const loadingToast = toast.loading("Please wait...");
      try {
        const response = await uploadQuoteImage(file);
        if (response && response[0].type === "IMAGE") {
          setSelectedImageFile(response[0].url);
          toast.update(loadingToast, {
            render: "Image upload successful",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
        }
      } catch (error) {
        toast.update(loadingToast, {
          render: "Something went wrong! Was it really an image file?",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    }
  };

  const resetForm = () => {
    setQuoteTitle("");
    setSelectedImageFile(null);
  };

  const handleSubmit = async () => {
    try {
      const loadingToast = toast.loading("Please wait...");
      const result = await createQuote(quoteTitle, selectedImageFile);
      if (result) {
        resetForm();
        toast.update(loadingToast, {
          render: "Quote created successfully",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error creating quote:", error);
      toast.update(loadingToast, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return {
    quoteTitle,
    isLoading,
    setQuoteTitle,
    handleFileChange,
    handleSubmit,
  };
};
