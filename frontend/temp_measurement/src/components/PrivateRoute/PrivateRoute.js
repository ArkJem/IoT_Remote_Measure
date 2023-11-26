import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = (props) =>{
    const tokken = localStorage.getItem("token");
    return tokken ? props.children: <Navigate to ="/Login"/>;
};
export default PrivateRoute;