import React from 'react'

const Input = ({id, type, placeholder, classes, value, onChange = () => {}}) => {
  return (
    <input
      required
      onChange={onChange}
      id={id}
      type={type}
      placeholder={placeholder}
      className={classes}
      value={value}
    />
  );
}

export default Input
