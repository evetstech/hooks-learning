import React, { useEffect } from 'react';

export const Input = ({ value, onChange }) => {
  return (
    <input value={value} onChange={onChange} />
  )
}

export const TestComponent = ({ value, onChange }) => {
  useEffect(() => {
    console.log('test component rerender');
  },[value, onChange]);

  return (
    <>
      Test Component
    </>
  );
};