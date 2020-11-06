import React, { useReducer, useCallback, useMemo, useRef, useState } from 'react';
import { Input, TestComponent } from '../common/components';

const initialState = {
  valueA: '',
  valueB: '',
  valueC: {
    valueD: '',
    valueE: ''
  },
  valueF: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateA': return { ...state, valueA: action.value };
    case 'updateD': return { ...state, valueC: { ...state.valueC, valueD: action.value } };
    case 'incrF': return { ...state, valueF: state.valueF + 1 };
    case 'decrF': return { ...state, valueF: state.valueF - 1 };
    default: return state;
  }
}

export const OtherReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Value A
      <Input value={state.valueA} onChange={(e) => dispatch({ 'type': 'updateA', value: e.target.value })} />
      Value D
      <Input value={state.valueC.valueD} onChange={(e) => dispatch({ 'type': 'updateD', value: e.target.value })} />
      <button onClick={() => { dispatch({ 'type': 'incrF' }) }}>incr</button>
      <button onClick={() => { dispatch({ 'type': 'decrF' }) }}>decr</button>
      value of object: {JSON.stringify(state)}
    </>
  )
}

export const OtherUseCallback = () => {
  const [state, setState] = useState('');
  const handleChange = (e) => {
    setState(e.target.value);
  };

  const callbackWithoutHook = (e) => {
    //does something
  }

  const callbackWithHook = useCallback((e) => {
    //does something
  }, []);

  return (
    <>
      <Input value={state} onChange={handleChange} />
      {true && <TestComponent onChange={callbackWithoutHook} />}
      {false && <TestComponent onChange={callbackWithHook} />}
    </>
  )
};

export const OtherUseMemo = () => {
  const [state, setState] = useState('');
  const handleChange = (e) => {
    setState(e.target.value);
  };

  const value = { a: 1, b: 2 };
  const memoValue = useMemo(() => ({ a: 1, b: 2 }), []);

  return (
    <>
      <Input value={state} onChange={handleChange} />
      {true && <TestComponent value={value} />}
      {false && <TestComponent values={memoValue} />}
    </>
  )
};

export const OtherUseRef = () => {
  const inputRef = useRef();

  const onClick = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={onClick}>Click Me!</button>
    </>
  )
}