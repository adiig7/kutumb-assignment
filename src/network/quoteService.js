import { toast } from "react-toastify";
import { getTokenFromStorage } from "../utils/functions";

export const uploadQuoteImage = async (file) => {
  if (!file || !file.type.startsWith("image/")) {
toast.error("Only image files allowed", {
  position: "top-right",
  autoClose: 5000,
  closeOnClick: true,
  transition: Bounce,
});    
return null;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(
      "https://crafto.app/crafto/v1.0/media/assignment/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      console.error("Error in file upload");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in file upload:", error);
    throw error;
  }
};

export const createQuote = async (quoteTitle, selectedFileUrl) => {
  try {
    const token = getTokenFromStorage();
    const response = await fetch(
      "https://assignment.stage.crafto.app/postQuote",
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: quoteTitle,
          mediaUrl: selectedFileUrl,
        }),
      }
    );

    if (!response.ok) {
      console.error("Error in creating quote");
    }

    return response.json();
  } catch (error) {
    console.error("Error in creating quote: ", error);
    throw error;
  }
};

export const getQuotes = async (limit = 20, offset = 0) => {
  const token = getTokenFromStorage();
  try {
    const response = await fetch(
      `https://assignment.stage.crafto.app/getQuotes?limit=${limit}&offset=${offset}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error("Error in fetching quotes");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetching quotes: ", error);
    throw error;
  }
};
