import {shallowEqual, useSelector} from "react-redux";

export const useShallowEqualSelector = selector => useSelector(selector, shallowEqual);