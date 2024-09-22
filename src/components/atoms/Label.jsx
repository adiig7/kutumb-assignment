import React from 'react'

const Label = ({label, htmlFor}) => {
  return <label htmlFor={htmlFor}>{label}</label>;
}

export default Label
