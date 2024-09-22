import { useState, useEffect, useCallback, useRef } from "react";
import { getQuotes } from "../network/quoteService";

const QUOTES_LIMIT = 20;

export const useQuotesList = () => {
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

  return {
    quotes,
    loading,
    error,
    containerRef,
    currentPage,
  };
};
