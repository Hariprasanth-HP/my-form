import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser, updateuser } from "../../store/Adduser/action";
import EditUser from "./EditUser";
const Editpage = () => {
  const [filInput, setFilInput] = useState("");
  const [editUser, setEdituser] = useState(false);
  const testuser = useSelector((state) => state.AddUserReducer);
  const [user, setUser] = useState(testuser || []);
  console.log("test user", user);

  const dispatch = useDispatch();
  const handleInput = (e) => {
    setFilInput(e.target.value.toLowerCase());
  };
  const handleFilter = () => {
    const filtered = testuser.filter((user) => {
      return user.name.toLowerCase().includes(filInput);
      // console.log("user", user.user.name.toLowerCase().);
    });
    console.log("filtered", filtered);
    setUser(filtered);
  };
  const handleDelete = (name) => {
    const deleteitem = user.filter((del) => {
      console.log("del", del);
      return del.name !== name;
    });
    setUser(deleteitem);
    dispatch(updateuser(deleteitem));
  };
  return (
    <div>
      {editUser ? (
        <EditUser user={user} />
      ) : (
        <>
          iam edit User {"<Back"}
          <input onChange={handleInput} />
          <button onClick={handleFilter}>press to see the results</button>
          {user.map((use, index) => {
            return (
              <>
                <h3 key={index}>{use.name}</h3>
                <button onClick={() => handleDelete(use.name)}>delete</button>
                <button onClick={() => setEdituser(true)}>Edit</button>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Editpage;
