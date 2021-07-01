import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedApiData } from '../../redux/actions/actionCreators';

export default function Detail() {
  const { section, id } = useParams();
  const dispatch = useDispatch();
  const selectedApiData = useSelector((store) => store.selectedApiData);
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch(getSelectedApiData(section, id));
  }, []);
  return (
    <h1>{selectedApiData.name}</h1>
  );
}
