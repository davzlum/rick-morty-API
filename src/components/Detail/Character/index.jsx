/* eslint-disable react/prop-types */
import React from 'react';

export default function Character({ data }) {
  return (
    <>
      <img src={data?.image} alt={data?.name} />
      <h1>{data?.name}</h1>
      <p>{data?.status}</p>
      <p>{data?.species}</p>
      <p>{data?.location?.name}</p>
    </>
  );
}
