import { useState, useEffect, useRef } from "react";

const UsePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; //setting value in current object of ref
  }, [value]); //performing side effect on every new value

  return ref.current; //returning current which will return before useEffect
};
export default UsePrevious;
