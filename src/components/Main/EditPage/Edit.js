import React, {useEffect, useState} from 'react';
import {Field, reduxForm} from 'redux-form';
import CustomTextField from '../../common/FormControls/CustomTextField';
import Grid from '@material-ui/core/Grid';
import CheckboxContainer from '../../common/FormControls/CustomCheckbox';
import {Button} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const Edit = ({handleSubmit, submitting, error}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(prevLoading => !prevLoading);
  }, [submitting]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item lg={3} md={3} sm={3}>{}</Grid>
        <Grid container item direction={'column'} spacing={3} lg={6} md={6} sm={6}>
          <Grid item>
            <Field component={CustomTextField} variant={'outlined'} name={'fullName'}
                   label={'FullName'}
                   fullWidth/>
          </Grid>
          <Grid item>
            <Field component={CustomTextField} variant={'outlined'} name={'aboutMe'} multiline
                   label={'About me'} fullWidth/>
          </Grid>
          <Grid item>
            <Field component={CustomTextField} variant={'outlined'}
                   name={'lookingForAJobDescription'}
                   fullWidth
                   multiline label={'LookingForAJobDescription'}/>
          </Grid>
          <Grid item container direction={'column'} spacing={2} alignItems={'center'}>
            <Grid item>
              <Field component={CheckboxContainer} name={'lookingForAJob'}
                     label={'LookingForAJob'}/>
            </Grid>
            <Grid item>
              {error && <div style={{color: 'red'}}>{error}</div>}
            </Grid>
            <Grid item>
              {loading && <CircularProgress size={20}/>}
            </Grid>
            <Grid item>
              <Button type={'submit'} variant={'contained'} color={'primary'}
                      disabled={submitting}>Save</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} md={3} sm={3}>{}</Grid>
      </Grid>
    </form>
  );
};

export default reduxForm({form: 'edit'})(Edit);