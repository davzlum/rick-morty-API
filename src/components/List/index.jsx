import React, { useState, useEffect } from 'react';
import getCharacters from '../../service/rick-morty.service';

function List() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);
  return (
    <>
      {characters.map((character) => (<li>{character.name}</li>))}
    </>
  );
}

export default List;
