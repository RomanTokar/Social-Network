import {Typography} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";
import React from "react";

const PlainStatus = ({isFetching, status}) => {


    return (
        <Typography variant={"body1"}>
            {isFetching ? (status || 'Empty status') : <Skeleton/>}
        </Typography>
    )
}

export default PlainStatus;