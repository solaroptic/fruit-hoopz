import React from "react";

const AuthContext = React.createContext({
  user: "",
  auth: false,
});

export default AuthContext;
