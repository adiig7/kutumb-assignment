import { useState } from "react";
import { createQuote, uploadQuoteImage } from "../network/quoteService";

export const useCreateQuote = () => {
  const [quoteTitle, setQuoteTitle] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const response = await uploadQuoteImage(file);
        if (response && response[0].type === "IMAGE") {
          setSelectedImageFile(response[0].url);
        }
      } catch (error) {
        alert("Failed to upload image.");
        console.error("Upload error:", error);
      }
    }
  };

  const handleValidation = () => {
    if (!selectedImageFile) {
      alert("Please upload an image before creating the quote.");
      return false;
    }

    if (!quoteTitle.trim()) {
      alert("Please enter a quote.");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setQuoteTitle("");
    setSelectedImageFile(null);
  };

  const handleSubmit = async () => {
    if (!handleValidation()) {
      return;
    }

    try {
      const result = await createQuote(quoteTitle, selectedImageFile);
      if (result) {
        resetForm();
        alert("Quote created successfully!");
      }
    } catch (error) {
      console.error("Error creating quote:", error);
      alert("Failed to create quote.");
    }
  };

  return {
    quoteTitle,
    setQuoteTitle,
    handleFileChange,
    handleSubmit,
  };
};
