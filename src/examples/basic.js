import React, { useState, useEffect } from 'react';
import { Input } from '../common/components';

export const BasicState = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Input value={input} onChange={handleInputChange} />
  )
};

export const BasicUseEffect = ({value}) => {
  const [otherValue, setOtherValue] = useState('');

  useEffect(() => {
    setOtherValue(value.replace(/ /g, '-'));

    return () => {
      console.log("Umounted!");
    };
  }, [value, setOtherValue]);
  return (
    <>
      {otherValue}
    </>
  )
}