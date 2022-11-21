import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default App;
