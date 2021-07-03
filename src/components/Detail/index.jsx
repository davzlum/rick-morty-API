import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedApiData } from '../../redux/actions/actionCreators';
import Character from './Character';
import Location from './Location';
import Episode from './Episode';

export default function Detail() {
  const { section, id } = useParams();
  const dispatch = useDispatch();
  const selectedApiData = useSelector((store) => store.selectedApiData);
  useEffect(() => {
    dispatch(getSelectedApiData(section, id));
  }, []);

  function renderCondition(param) {
    switch (param) {
      case 'character':
        return <Character data={selectedApiData} />;
      case 'episode':
        return <Episode data={selectedApiData} />;
      case 'location':
        return <Location data={selectedApiData} />;
      default:
        return '';
    }
  }

  return (
    <>
      {renderCondition(section)}
    </>
  );
}
