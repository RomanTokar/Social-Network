import React from "react";
import Edit from "./Edit";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileTC} from "../../../actions/profile-actions";

const EditContainer = () => {
    const profile = useSelector(state => state.auth.profileData);
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        return dispatch(updateProfileTC(formData))
    }

    return <Edit initialValues={profile} onSubmit={onSubmit}/>
}

export default EditContainer;