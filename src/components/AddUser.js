import React, { useEffect, useState, useRef } from "react";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import AlertDialog from "./Alert";
import history from "./history";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../store/Adduser/action";
export const init = { name: "", email: "" };
const ParentCopy = () => {
  const teststate = useSelector((state) => state.AddUserReducer);
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);
  const [initial, setInitial] = useState(init);
  const [store, setStore] = useState([]);
  const unblock = useRef(() => {});
  const changed = useRef(false);
  const nextpage = useRef();
  useEffect(() => {
    console.log("teststate", teststate);
  }, [teststate]);

  const FormObserver = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      console.log("changed.current", changed.current);

      if (
        Object.entries(initial).sort().toString() !==
        Object.entries(values).sort().toString()
      ) {
        changed.current = true;
      } else {
        changed.current = false;
      }
      return () => {};
    }, [values]);
  };
  const onBlock = ({ location, action }) => {
    nextpage.current = location.pathname;
    console.log("On block", location, action);
    if (changed.current) {
      setShowDialog(true);
      return false;
    } else {
      unblock.current();
      history.push(nextpage.current);
    }
    return true;
  };
  useEffect(() => {
    unblock.current = history.block(onBlock);
    return () => {
      unblock.current();
    };
  }, []);

  const onMoveToNextClick = () => {
    setShowDialog(false);

    unblock.current();

    history.push(nextpage.current);
  };
  const onDiscardClick = () => {
    setShowDialog(false);
  };

  return (
    <div data-testid="ParentCopy">
      <h1>
        Basic{" "}
        <a
          href="https://github.com/jaredpalmer/formik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Formik
        </a>{" "}
        Demo
      </h1>
      <AlertDialog
        data-testid="AlertDialog"
        isOpen={showDialog}
        moveToNextRoute={onMoveToNextClick}
        onDiscardClick={onDiscardClick}
      />

      <Formik
        initialValues={initial}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
            dispatch(adduser(values));
          });
          alert(JSON.stringify(values, null, 2));
          // values = init;
          console.log("values", values);
          resetForm({ values: "" });

          console.log("hi the suBmit Button---->>>", values);
          changed.current = false;
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(3, "too Short")
            .max(10, "too long")
            .required("Required"),
          email: Yup.string().email().required("Required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit} data-testid="form">
              <FormObserver />

              <label htmlFor="name" style={{ display: "block" }}>
                Name
              </label>
              <input
                id="name"
                data-testid="name-input"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.name && touched.name && (
                <div className="input-feedback" data-testid="input-feedback">
                  {errors.name}
                </div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <input
                data-testid="email-input"
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="email-feedback" data-testid="email-feedback">
                  {errors.email}
                </div>
              )}
              <button type="submit" data-testid="submit">
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
      <input
        onChange={(e) => {
          dispatch(adduser(e.target.value));
        }}
      />
    </div>
  );
};

export default ParentCopy;
