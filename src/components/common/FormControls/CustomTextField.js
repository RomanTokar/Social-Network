import {TextField} from "@material-ui/core";
import React, {useState} from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const CustomTextField = ({input, meta: {error, touched, active}, type, ...props}) => {

    const
        hasError = error && touched && !active,
        isTypePassword = (type === 'password'),
        [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <TextField
            type={isTypePassword ? showPassword ? 'text' : 'password' : type}
            size={"medium"} error={hasError}
            helperText={hasError && error} {...input} {...props}
            InputProps={isTypePassword
                ? {
                    endAdornment: <InputAdornment position="start">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                } : null}
        />
    )
}

export default CustomTextField;