import React from "react";
import CreateQuoteForm from "../templates/CreateQuoteForm";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const CreateQuotePage = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading classes="text-3xl font-bold p-2" text="Create Quote Page" />
      <CreateQuoteForm />
      <Button
        label="Go back to Quotes"
        onClick={() => {}}
      />
    </div>
  );
};

export default CreateQuotePage;
