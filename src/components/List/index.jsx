import React, { useState, useEffect } from 'react';
import getCharacters from '../../service/rick-morty.service';

export default function List() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then(setCharacters());
  }, []);
  return (
    <>
      {characters.map((character) => <li>{character}</li>)}
    </>
  );
}
