import { useCreateQuote } from "../../hooks/useCreateQuote";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import FieldInput from "../molecules/FieldInput";

const CreateQuoteForm = () => {
  const { quoteTitle, setQuoteTitle, handleFileChange, handleSubmit } =
    useCreateQuote();

  return (
    <div className="flex flex-col border-2 w-[90%] md:w-auto border-gray-400 rounded-md p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex flex-col mt-2">
          <Label htmlFor="quoteTitle" label="Quote Title" />
          <textarea
            required
            id="quoteTitle"
            rows={1}
            cols={50}
            placeholder="Enter quote title"
            className="outline-none border-none p-2 rounded-md"
            value={quoteTitle}
            onChange={(e) => setQuoteTitle(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <FieldInput
            onChange={handleFileChange}
            label="Quote Image"
            id="quote_image_input"
            type="file"
            classes="w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2 cursor-pointer bg-gray-50"
          />
        </div>

        <div className="flex justify-center mt-4">
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default CreateQuoteForm;
