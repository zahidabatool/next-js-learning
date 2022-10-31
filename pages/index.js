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
  const [inputFields , setInputField] = useState([
  {firstName: '', lastName: '', email: ''} 
])

const handleChangeInput = (index , event) => {
  // console.log(index , event.target.value)
  const values = [...inputFields];
  values[index][event.target.name] = event.target.value;
  setInputField(values);
}

const handleAddFields = () => {
  setInputField([...inputFields, {firstName: '', lastName: '' , email: ''}])

}
const handleRemoveFields = (index) => {
  const values = [...inputFields];
  values.splice(index, 1);
  setInputField(values);
}

  return (
    <>
    <div className={styles.container}>
      <Navbar />
      <h1 className="mt-20">Form handling</h1>
      <form className={classes.root}>
        {inputFields.map((inputField, index) => (
            <div key={index}>
              <TextField variant="outlined"  type="text" name = "firstName" label= "First Name"
                onChange={event => handleChangeInput(index, event)} value = {inputField.firstName}/> 
              <IconButton onClick = {() => handleRemoveFields(index)}>
                <RemoveIcon/>
              </IconButton>
              <IconButton onClick = {() => handleAddFields()}>
                <ControlPointIcon />
              </IconButton>
              <br></br>
              <TextField variant="outlined"  type="text" name = "firstName" label= "Last Name"
                onChange={event => handleChangeInput(index, event)} value = {inputField.lastName}/> 
              <IconButton onClick = {() => handleRemoveFields(index)}>
                <RemoveIcon/>
              </IconButton>
              <IconButton onClick = {() => handleAddFields()}>
                <ControlPointIcon />
              </IconButton>
              <br></br>
              <TextField variant="outlined"  type="text" name = "email" label= "Email"
                onChange={event => handleChangeInput(index, event)} value = {inputField.email}/> 
              <IconButton onClick = {() => handleRemoveFields(index)}>
                <RemoveIcon/>
              </IconButton>
              <IconButton onClick = {() => handleAddFields()}>
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
