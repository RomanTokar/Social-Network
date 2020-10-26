import {Field, reduxForm} from "redux-form";
import * as React from "react";
import {maxLengthCreator, minLengthCreator, required} from "../../../tools/validators/validators";
import CustomTextField from "../../common/FormControls/CustomTextField";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CheckboxContainer from "../../common/FormControls/CustomCheckbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const maxLength30 = maxLengthCreator(30);
const minLength8 = minLengthCreator(8);

const Login = ({handleSubmit, error, submitting, pristine}) => {
    const
        captcha = useSelector(state => state.auth.authData.captcha),
        [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(prevLoading => !prevLoading)
    }, [submitting])

    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                    <Field label={'Email'}
                           component={CustomTextField} name={'email'}
                           validate={[required]}
                    />
                </Grid>
                <Grid item>
                    <Field label={'Password'}
                           component={CustomTextField} name={'password'} type={'password'}
                           validate={[required, maxLength30, minLength8]}
                    />
                </Grid>
                <Grid item>
                    <Field component={CheckboxContainer} name={'rememberMe'} label={'Remember me'}/>
                </Grid>
                {captcha &&
                <Grid item container direction={"column"} spacing={1}>
                    <img src={captcha} alt="captcha"/>
                    <Field component={CustomTextField} label={'captcha'} name={'captcha'} validate={[required]}/>
                </Grid>
                }
                <Grid item container direction={"column"} spacing={1} alignItems={"center"}>
                    <Grid item>
                        {error && <div style={{color: 'red'}}>{error}</div>}
                    </Grid>
                    <Grid item>
                        {loading && <CircularProgress size={20} />}
                    </Grid>
                    <Grid item>
                        <div>
                            <Button type={"submit"} variant={"contained"} disabled={submitting || pristine} color={"primary"}>Login</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default reduxForm({form: 'login'})(Login);