import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [projectId, setProjectId] = useState(null);

  const detailsInfo = {
    projectId,
    setProjectId,
  };

  return (
    <AuthContext.Provider value={detailsInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
