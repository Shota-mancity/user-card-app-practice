import {
  LoginUserContextType,
  LoginUserContext
} from "../providers/LoginUserProvider";
import React, { useContext } from "react";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
