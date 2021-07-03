/* eslint-disable react/prop-types */
import React from 'react';

export default function Episode({ data }) {
  return (
    <>
      <h1>{data?.name}</h1>
      <p>{data?.air_date}</p>
      <p>{data?.episode}</p>
    </>
  );
}
