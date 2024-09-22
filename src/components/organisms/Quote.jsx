import React from "react";
import ImageWithTextOverlay from "../molecules/ImageWithTextOverlay";
import QuoteMeta from "../molecules/QuoteMeta";

const Quote = ({ quote }) => {
  return (
    <div className="flex flex-col m-2">
      <div
        key={quote.id}
        className="relative w-60 h-60 overflow-hidden rounded-t-md shadow-lg flex flex-col"
      >
        <ImageWithTextOverlay imageUrl={quote.mediaUrl} text={quote.text} />
      </div>
      <QuoteMeta
        quoteAuthor={quote.username}
        quoteCreateDate={quote.createdAt}
      />
    </div>
  );
};

export default Quote;
