import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser, edituser, updateuser } from "../../store/Adduser/action";
import EditUser from "./EditUser";
const Editpage = () => {
  const [filInput, setFilInput] = useState("");
  const [editUser, setEdituser] = useState(false);
  const testuser = useSelector((state) => state.AddUserReducer);
  const [user, setUser] = useState(testuser || []);
  const [count, setCount] = useState(1);
  console.log("test user", testuser);

  const dispatch = useDispatch();
  const handleInput = (e) => {
    setFilInput(e.target.value.toLowerCase());
  };
  console.log("filInput", filInput);

  const handleFilter = () => {
    console.log("handleFilter user", user);
    if (user.users.length > 0) {
      const filtered = user.users.filter((user) => {
        return user.name.toLowerCase().includes(filInput);
        console.log("handleFilter filtered if", user);
      });

      console.log("filtered", filtered);
      setUser(filtered);
    }
  };
  console.log("user filteres----->>>", user);
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
      {user.edituser ? (
        ""
      ) : (
        <>
          <input onChange={handleInput} />
          <button onClick={handleFilter}>press to see the results</button>
        </>
      )}

      {user.users.map((use, index) => {
        console.log("use.edituser", use);
        return (
          <>
            {use.edituser ? (
              <EditUser user={use} index={index} />
            ) : (
              <>
                <p>{index + 1}</p>
                <h3 key={index}>{use.name}</h3>
                <h5>{use.email}</h5>
                <button onClick={() => handleDelete(use.name)}>delete</button>
                <button onClick={() => dispatch(edituser(use.name))}>
                  Edit
                </button>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Editpage;
