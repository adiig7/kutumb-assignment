import React from "react";
import QuotesList from "../templates/QuotesList";
import { useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";
import FloatingActionButton from "../atoms/FloatingActionButton";

const QuotesPage = () => {
  const navigate = useNavigate();
  const openCreateQuotePage = () => {
    navigate("/create");
  };

  return (
    <div className="flex flex-col items-center">
      <Heading classes="text-3xl font-bold p-2" text="Quotes Page" />
      <QuotesList />
      <FloatingActionButton onClick={openCreateQuotePage} />
    </div>
  );
};

export default QuotesPage;
