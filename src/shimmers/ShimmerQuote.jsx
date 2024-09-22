const ShimmerQuote = () => {
  return (
    <div className="flex flex-col m-2 animate-pulse">
      <div className="relative w-60 h-60 overflow-hidden rounded-t-md shadow-lg flex flex-col bg-gray-300">
        <div className="relative flex-grow bg-gray-300">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-3/4 h-4 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex max-w-full justify-between text-xs rounded-b-md p-2 bg-gray-200">
        <span className="w-1/3 h-4 bg-gray-400 rounded"></span>
        <span className="w-1/4 h-4 bg-gray-400 rounded"></span>
      </div>
    </div>
  );
};

export default ShimmerQuote;