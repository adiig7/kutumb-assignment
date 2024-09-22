import Quote from "../organisms/Quote";
import ShimmerQuote from "../../shimmers/ShimmerQuote.jsx";
import { useQuotesList } from "../../hooks/useQuotesList.js";

const QuotesList = () => {

  const { quotes, loading, error, containerRef, currentPage } = useQuotesList();

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="flex flex-wrap justify-center min-h-screen">
        {loading && currentPage === 0
          ? Array(20)
              .fill(0)
              .map((_, index) => <ShimmerQuote key={index} />)
          : quotes?.map((quote) => <Quote key={quote.id} quote={quote} />)}
      </div>
      {loading && currentPage > 0 && (
        <div className="flex justify-center w-full">Loading more quotes...</div>
      )}
      <div ref={containerRef} className="h-5"></div>
    </div>
  );
};

export default QuotesList;
