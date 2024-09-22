import Quote from "../organisms/Quote";
import { useState, useEffect, useCallback, useRef } from "react";
import { getQuotes } from "./../../network/quoteService.js";
import ShimmerQuote from "../../shimmers/ShimmerQuote.jsx";

const QUOTES_LIMIT = 20;

const QuotesList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const hasMore = useRef(true);
  const containerRef = useRef();

  const loadQuotes = useCallback(async () => {
    if (loading || !hasMore.current) return;
    setLoading(true);
    try {
      const response = await getQuotes(QUOTES_LIMIT, currentPage);
      if (response.data.length === 0) {
        hasMore.current = false;
      } else {
        setQuotes((prevQuotes) => [...prevQuotes, ...response.data]);
      }
      setCurrentPage((prev) => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [currentPage, loading]);

  useEffect(() => {
    loadQuotes();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore.current) {
        loadQuotes();
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [currentPage]);

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
      {!loading && <div ref={containerRef} className="h-5"></div>}
    </div>
  );
};

export default QuotesList;
