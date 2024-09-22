import React from 'react'

const ImageWithTextOverlay = ({imageUrl, text}) => {
  return (
    <div className="relative flex-grow">
      <img
        src={imageUrl}
        alt={text}
        className="object-cover w-full h-full"
      />
      <div className="absolute min-h-60 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-2">
        <p>{quote.text}</p>
      </div>
    </div>
  );
}

export default ImageWithTextOverlay
