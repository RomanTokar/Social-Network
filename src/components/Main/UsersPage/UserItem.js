import {useHistory} from 'react-router-dom';
import defaultAvatar from '../../../assets/images/user.png';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  card: {
    minWidth: '90%',
    padding: '5%',
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  content: {
    height: '2em',
  },
});

const UserItem = ({ children: user, isFetching }) => {
  const history = useHistory();
  const classes = useStyles();
  let { photos, name, id } = user;

  const onClick = (event) => {
    if (isFetching) {
      history.push(`/profile/${id}`);
    }
  };

  return (
    <Grid item lg={4} md={4} sm={4} xs={4}>
      <Card className={classes.card}>
        <CardActionArea onClick={onClick}>
          {isFetching
            ? <CardMedia
              className={classes.media}
              image={photos.large ? photos.large : defaultAvatar}
              title={id}
            />
            : <Skeleton animation="pulse" variant="rect" className={classes.media}/>
          }
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="body1" component="h5">
              {isFetching
                ? name.length > 20 ? `${name.replace(/\\s/g, '').slice(0, 20)}...` : name
                : <Skeleton/>}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default UserItem;