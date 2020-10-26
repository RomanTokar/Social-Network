import {useDispatch} from "react-redux";
import * as React from "react";
import {useEffect, useState} from "react";
import Status from "./Status";
import {updateStatusTC} from "../../../actions/profile-actions";
import PlainStatus from "./PlainStatus";

const StatusContainer = ({isFetching, status, isOwner}) => {
    const
        dispatch = useDispatch(),
        [open, setOpen] = useState(false),
        [loading, setLoading] = useState(false),
        [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const onSubmit = async ({status}) => {
        setLocalStatus(status)
        setLoading(true)
        await dispatch(updateStatusTC(status))
        setLoading(false)
        setOpen(false)
    };

    const handleClick = (event) => {
        setOpen(true);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return isOwner
        ? <Status initialValues={{status: localStatus}} open={open} loading={loading}
                  handleClick={handleClick} handleClickAway={handleClickAway}
                  isFetching={isFetching} status={status} onSubmit={onSubmit}
        />
        : <PlainStatus status={status} isFetching={isFetching}/>
}

export default StatusContainer;