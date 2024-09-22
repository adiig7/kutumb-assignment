import React from "react";

const QuoteMeta = ({ quoteAuthor, quoteCreateDate }) => {
  return (
    <div className="flex max-w-full h-8 justify-between items-center text-xs rounded-b-md p-2 bg-white">
      <span className="truncate">{quoteAuthor}</span>
      <span>{new Date(quoteCreateDate).toDateString()}</span>
    </div>
  );
};

export default QuoteMeta;