import React from 'react'

const FloatingActionButton = ({onClick = () => {}}) => {
  return ( 
    <button
      type="button"
      onClick={onClick}
      className="fixed right-5 bottom-5 text-white bg-black rounded-full text-center items-center pb-2 justify-center w-12 h-12"
    >
      <span className="text-3xl">+</span>
    </button>
  );
}

export default FloatingActionButton
