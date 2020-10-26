import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxContainer = ({input, meta, ...props}) => {

    return <FormControlLabel
        control={<Checkbox color={"primary"}/>}
        {...props} {...input} checked={input.value}
    />
}

export default CheckboxContainer;