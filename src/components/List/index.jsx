import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { getApiData } from '../../redux/actions/actionCreators';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function List() {
  const classes = useStyles();
  const { section } = useParams();
  const dispatch = useDispatch();
  const apiData = useSelector((store) => store.apiData);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    dispatch(getApiData(section, pagination));
  }, [pagination]);

  function handleChange(event, value) {
    setPagination(value);
    dispatch(getApiData(section, pagination));
  }

  return (
    <>
      {apiData.results?.map((dataItem) => (<li><Link to={`/${section}/${dataItem.id}`}>{dataItem.name}</Link></li>))}
      <div className={classes.root}>
        <Pagination color="secondary" count={apiData.info?.pages} page={pagination} onChange={handleChange} />
      </div>
    </>
  );
}

export default List;
