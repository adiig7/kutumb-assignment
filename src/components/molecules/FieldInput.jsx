import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const FieldInput = ({
  label,
  id,
  onChange = () => {},
  type,
  placeholder,
  classes,
  value,
}) => {
  return (
    <>
      <Label htmlFor={id} label={label} />
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        classes={classes}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FieldInput;
