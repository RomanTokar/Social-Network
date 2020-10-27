import React, {memo, useEffect, useState} from 'react';
import {Pagination, PaginationItem} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles({
  paginationWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    margin: 20,
  },
  root: {
    fontWeight: 'bolder',
    backgroundColor: 'white',
    marginTop: 5,
    color: blue[300],
    borderColor: blue[200],
    '&$selected': {
      backgroundColor: blue[300],
      color: 'white',
      '&:hover': {
        backgroundColor: blue[100],
      },
    },
    '&:hover': {
      backgroundColor: blue[50],
    },
  },
  icon: {
    color: blue[800],
  },
  selected: {},
  ellipsis: {
    '&:hover': {
      backgroundColor: 'white',
    },
  },
});

const PaginationContainer = ({currentPage, totalPageCount, isFriend, term}) => {
  const
    step = 5,
    history = useHistory(),
    classes = useStyles(),
    [page, setPage] = useState(currentPage),
    hideNextButton = (page === totalPageCount || totalPageCount === 0),
    hidePrevButton = (page === 1 || totalPageCount === 0),
    showLastButton = (page <= totalPageCount - step && totalPageCount !== 0),
    showFirstButton = (page >= 1 + step && totalPageCount !== 0);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const renderPaginationItem = (item) => {
    if (item.type === 'first') {
      item.onClick = event => {
        onChange(event, page - 5);
      };
    } else if (item.type === 'last') {
      item.onClick = event => {
        onChange(event, page + 5);
      };
    }

    return (
      <PaginationItem {...item} classes={{
        root: classes.root,
        selected: classes.selected,
        ellipsis: classes.ellipsis,
        icon: classes.icon,
      }}/>
    );
  };

  const onChange = (event, page) => {
    if (page < 0) {
      page = 1;
    } else if (page > totalPageCount) {
      page = totalPageCount;
    }
    history.push(`/${isFriend ? 'friends' : 'users'}/${page}${term ? `?term=${term}` : ''}`);
  };

  return (
    <div className={classes.paginationWrapper}>
      <Pagination count={totalPageCount} page={page}
                  renderItem={renderPaginationItem} onChange={onChange}
                  shape={'rounded'} siblingCount={3}
                  boundaryCount={2} variant={'outlined'}
                  showFirstButton={showFirstButton} showLastButton={showLastButton}
                  hideNextButton={hideNextButton} hidePrevButton={hidePrevButton}
      />
    </div>
  );
};

export default memo(PaginationContainer);