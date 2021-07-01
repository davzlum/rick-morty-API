import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getApiData from '../../redux/actions/actionCreators';

function List() {
  const { section } = useParams();
  // eslint-disable-next-line no-debugger
  debugger;
  const dispatch = useDispatch();
  const apiData = useSelector((store) => store.apiData);
  useEffect(() => {
    dispatch(getApiData(section));
  }, []);
  return (
    <>
      {apiData.results?.map((dataItem) => (<li>{dataItem.name}</li>))}
    </>
  );
}

export default List;
