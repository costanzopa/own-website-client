import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth.js";
import { getUsersActiveApi } from "../../../api/user.js";
import ListUsers from "../../../components/Admin/Users/ListUsers";

import "./Users.scss";

export default function Users() {
  const [usersActive, setUsersActive] = useState([]);
  const [usersInactive, setUsersInactive] = useState([]);
  const token = getAccessTokenApi();

  console.log(usersActive);
  console.log(usersInactive);

  useEffect(() => {
    getUsersActiveApi(token, true).then((response) => {
      setUsersActive(response.users);
    });
    getUsersActiveApi(token, false).then((response) => {
      setUsersInactive(response.users);
    });
  }, [token]);

  return (
    <div className="users">
      <div className="users">
        <ListUsers
          usersActive={usersActive}
          usersInactive={usersInactive}
        />
      </div>
    </div>
  );
}