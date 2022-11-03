import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useState } from "react";
const Submitform = () => {
    const [inputfield, setInputfield] = useState([{firstName: ""}]);


    const handleChangeinput = (index, e) =>{
        const list =[...inputfield]
        list[index][e.target.name]= e.target.value;
        setInputfield(list);
    }
    const handleAddfield = (index) => {
        setInputfield([...inputfield.slice(0, index),
          { firstName: "",},...inputfield.slice(index),
        ]);
      };

    const handledelete =(index) =>{
        const value = [...inputfield];
        value.splice(index, 1);
        setInputfield(value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("inputfield", inputfield )
    }

    return (  
<form className="form-div" onSubmit={handleSubmit}>
    { 
    inputfield.map((items, index) =>{
       return  <div className="input-style" key={index}>
        <input 
        value={items.firstName}
        name = "firstName"
        placeholder="FirstName"
        onChange={(e) => handleChangeinput(index, e)}
        />
  
        <Button  onClick={()=> handledelete(index)}><DeleteIcon/></Button>
       <Button  onClick={() => handleAddfield(index + 1)}> <AddIcon/></Button>
       </div>
    })}
    <div className="text-center mt-4">
    <button  type="submit" onClick={handleSubmit}>Submit</button>
    </div>
   
</form>
    );
}
 
export default Submitform;