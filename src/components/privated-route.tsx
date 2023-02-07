import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from '../services/auth-service';
import jwt_decode from "jwt-decode";
 
const PrivatedRoute = ({ children }:any) => {
  let token: string | null = localStorage.getItem("token");
  //let decoded = token && jwt_decode(token);
  //console.log(token);

  const navigate = useNavigate();
  const auth = AuthService.checkToken();
  return auth ? children : <Navigate to = "/login" />
}

export default PrivatedRoute