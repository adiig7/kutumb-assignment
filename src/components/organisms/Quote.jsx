import React from "react";

const Quote = ({ quote }) => {
  return (
    <div className="flex flex-col m-2">
      <div
        key={quote.id}
        className="relative w-60 h-60 overflow-hidden rounded-t-md shadow-lg flex flex-col"
      >
        <div className="relative flex-grow">
          <img
            src={quote.mediaUrl}
            alt={quote.text}
            className="object-cover w-full h-full"
          />
          <div className="absolute min-h-60 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-2">
            <p>{quote.text}</p>
          </div>
        </div>
      </div>
      <div className="flex max-w-full h-8 justify-between items-center text-xs rounded-b-md p-2 bg-white">
        <span className="truncate">{quote.username}</span>
        <span>{new Date(quote.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default Quote;
