import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {adminActions} from "../store/cfg/adminSlice";


const actions = {
    ...adminActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}