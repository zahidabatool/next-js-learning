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


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: 10
    },
  },
  button: {
    margin: 10
  }
}))

export default function Home() {
  const classes = useStyles()
  const [inputFields , setInputField] = useState([{name: ''}]);
const handleChangeInput = (index , event) => {
  // console.log(index , event.target.value)
  const values = [...inputFields];
  values[index][event.target.name] = event.target.value;
  setInputField(values);
}

// Add New field
const handleAddFields = (index) => {
  const newFormValues = [...inputFields];
  newFormValues.splice((0, index), {name: ''} , newFormValues.slice(index));
  setInputField(newFormValues);
}

// Remove field
const handleRemoveFields = (index) => {
  const values = [...inputFields];
  values.splice(index, 1);
  setInputField(values);
}

// Submit Form
function handleSubmit(event){
  event.preventDefault();
  console.log("Submit Your Form successfully", inputFields)
}
  return (
    <>
    <div className={styles.container}>
      <Navbar />
      <h1 className="mt-20">Form handling</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
            <div key={index}>
              <TextField  type="text" variant="outlined"
                onChange={event => handleChangeInput(index, event)}/> 
              {/* <TextField variant="outlined"  type="text" name = "lastName" label= "Last Name"
                onChange={event => handleChangeInput(index, event)} value = {inputField.lastName}/>  */}
              {/* <TextField variant="outlined"  type="text" name = "email" label= "Email"
                onChange={event => handleChangeInput(index, event)} value = {inputField.email}/>  */}
              <IconButton onClick = {() => handleRemoveFields(index)}>
                <RemoveIcon/>
              </IconButton>
              <IconButton onClick = {() => handleAddFields(index + 1)}>
                <ControlPointIcon />
              </IconButton>
            </div>
          ))
        }
        <Button className={classes.button} variant="contained" color ="primary" type ="submit"> Send</Button>
      </form>
      <Footer/>
    </div>
    </>
  )
}
