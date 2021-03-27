import React, {useState} from "react"
import {TextField, Button} from "@material-ui/core"
import "../css/certification.css"
import { Typography, Grid } from "@material-ui/core";


const Certification= ()=>{

  const [inputList, setInputList] = useState([{ first: "", second: "", third: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  
  // handle click event of the Add button
  const handleAddClick = () => {
      setInputList([...inputList, { first: "", second: "", third: "" }]);
    };
   


    return(
        <Grid container justify="center" className="certificationcontainer">
            <Typography className="heading">Additional Qualification / Certification</Typography>   
                {inputList.map((x, i) => {
    return(        
            <Grid item justify="center" alignItem="center" alignContent="stretch" className="certificationbody" container>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField style={{width:'95%'}} className="txtinput" variant="outlined" required label="Course / Training" name="first" value={x.first} onChange={e => handleInputChange(e, i)}></TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField style={{width:'95%'}} className="txtinput" variant="outlined" required label="Name of Institution" name="second" value={x.second} onChange={e => handleInputChange(e, i)}></TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField style={{width:'95%'}} className="txtinput" variant="outlined" required label="Year" name="third" value={x.third} onChange={e => handleInputChange(e, i)}></TextField>
                  </Grid>
                  <Grid item justify="center"className="btn" container> 
                    {inputList.length - 1 === i &&
                    <Button variant="outlined" color="default" className="add"  onClick={handleAddClick}>ADD </Button>}
                    {inputList.length !== 1 &&
                    <Button variant="outlined" color="default" className="remove" onClick={() => handleRemoveClick(i)}>REMOVE </Button>}
                    </Grid>
                </Grid> 
                  );
                })} 
        </Grid>

    )
}

export default Certification