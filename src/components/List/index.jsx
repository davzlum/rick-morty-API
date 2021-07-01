import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getApiData from '../../redux/actions/actionCreators';

function List() {
  const dispatch = useDispatch();
  const apiData = useSelector((store) => store.apiData);
  useEffect(() => {
    dispatch(getApiData('character'));
  }, []);
  return (
    <>
      {apiData.results?.map((dataItem) => (<li>{dataItem.name}</li>))}
    </>
  );
}

export default List;
