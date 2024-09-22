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
      setIsLoading(true);
      try {
        const response = await uploadQuoteImage(file);
        if (response && response[0].type === "IMAGE") {
          setSelectedImageFile(response[0].url);
        }
      } catch (error) {
        toast.error("Something went wrong! Was it really an image file?");
        console.error("Upload error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setQuoteTitle("");
    setSelectedImageFile(null);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await createQuote(quoteTitle, selectedImageFile);
      if (result) {
        resetForm();
        toast.success("Quote created successfully");
      }
    } catch (error) {
      console.error("Error creating quote:", error);
      toast.error("Failed to create quote.");
    } finally {
      setIsLoading(false);
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
