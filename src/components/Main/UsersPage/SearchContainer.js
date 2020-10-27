import React, {useEffect, useRef, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Grid} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const SearchContainer = ({term, isFetching, isFriend}) => {
  const searchInput = useRef();
  const history = useHistory()
  const [value, setValue] = useState(term);

  useEffect(() => {
    setValue(term);
  }, [term]);

  const onClick = () => {
    history.push(`/${isFriend ? 'friends' : 'users'}/1${searchInput.current.value ? `?term=${searchInput.current.value}`: ''}`)
  };

  const onEnter = (event) => {
    if (event.which === 13) {
      onClick();
    }
  };

  const onChange = () => {
    setValue(searchInput.current.value);
  };

  return (
    <>
      {isFetching &&
      <Grid container justify={'center'} alignItems={'center'} spacing={1} style={{margin: 20}}>
        <Grid item>
          <TextField variant={'outlined'} size={'small'} inputRef={searchInput} onChange={onChange}
                     onKeyDown={onEnter} value={value}/>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick}>
            <SearchIcon color={'primary'}/>
          </IconButton>
        </Grid>
      </Grid>
      }
    </>
  );
};

export default SearchContainer;