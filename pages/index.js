// import Head from 'next/head'
// import Link from "next/link"; 
import Navbar from "../comp/navbar";
import Footer from "../comp/Footer"
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import RemoveIcon from '@mui/icons-material/Remove';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


export default function Home() {
  const [formValues, setFormValues] = useState([{ name: "" }]);
  const [formCount, setFormCount] = useState(0);


  let handleChange = (index, e) => {
    let newFormValues = [...formValues];
    newFormValues[index][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = (index) => {
    let newFormValues = [...formValues];
    newFormValues.splice(index + 1, 0, { name: "" });
    setFormValues(newFormValues);
    setFormCount(formValues.length);
  };

  let removeFormFields = (index) => {
    let newFormValues = [...formValues];
    newFormValues.splice(index, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    console.log( formValues )
    event.preventDefault();
    // alert(JSON.stringify(formValues));
  };

  return (
   <>
    <Navbar />
    <form onSubmit={handleSubmit}>
      {formValues.map((element, index) => (
        <div className="form-inline" key={index}>
          <label>Name</label>
          <TextField
            type="text"
            name="name"
            value={element.name || ""}
            onChange={(e) => handleChange(index, e)}
          />
          {index ? (
            <>
              <button
                className="button add"
                type="button"
                onClick={() => addFormFields(index)}
              >
                Add
              </button>
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            </>
          ) : null}
        </div>
      ))}
      <div className="button-section">
        {formCount < 1 ? (
          <button
            className="button add"
            type="button"
            onClick={() => addFormFields()}
          >
            Add
          </button>
        ) : (
          ""
        )}
        <button className="button submit" type="submit">
          Submit
        </button>
      </div>
    </form>
   </>
  );
};
