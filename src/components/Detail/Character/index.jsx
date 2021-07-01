import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Character() {
  const dispatch = useDispatch();
  const apiData = useSelector((store) => store.apiData);
  return (
    <div />
  );
}
