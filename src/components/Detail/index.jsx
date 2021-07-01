import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedApiData } from '../../redux/actions/actionCreators';
import Character from './Character';

export default function Detail() {
  const { section, id } = useParams();
  const dispatch = useDispatch();
  const selectedApiData = useSelector((store) => store.selectedApiData);
  useEffect(() => {
    dispatch(getSelectedApiData(section, id));
  }, []);
  return (
    <>
      <Character data={selectedApiData} />
    </>
  );
}
