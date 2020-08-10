import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider.js";

export default () => useContext(AuthContext);
