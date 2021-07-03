/* eslint-disable react/prop-types */
import React from 'react';

export default function Location({ data }) {
  return (
    <>
      <h1>{data?.name}</h1>
      <p>{data?.type}</p>
      <p>{data?.residents}</p>
      <p>{data?.dimension}</p>
    </>
  );
}
