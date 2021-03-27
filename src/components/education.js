import React, {useState} from "react"
import {TextField, Button} from "@material-ui/core"
import "../css/education.css"
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";



const Education= ()=> {

  const [inputList, setInputList] = useState([{ first: "", second: "", third: "", forth: "", fifth:"" }]);
 
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
      setInputList([...inputList, { first: "", second: "", third: "", forth: "", fifth:"" }]);
    };

    return(
        <Grid container className="edu" direction="column">
            <Typography className="heading">Educational Field</Typography>
           {inputList.map((x, i) => {
            return(
              <Grid item  spacing={0} justify="center" alignItem="center" className="eduinput" container>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                 <TextField style={{width:'95%'}} className="txtinput" required variant="outlined" label="Year of Passing" name="first" value={x.first} onChange={e => handleInputChange(e, i)}></TextField>
              </Grid>  
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <TextField style={{width:'95%'}} className="txtinput" required variant="outlined" label="Year of Passing" name="second" value={x.second} onChange={e => handleInputChange(e, i)}></TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <TextField style={{width:'95%'}} className="txtinput" required variant="outlined" label="Grade / GPA" name="third" value={x.third} onChange={e => handleInputChange(e, i)}></TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <TextField style={{width:'95%'}} className="txtinput" required variant="outlined" label="Name of Institution" name="forth" value={x.forth}  onChange={e => handleInputChange(e, i)}></TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <TextField style={{width:'95%'}} className="txtinput" required variant="outlined" label="Major Subjects" name="fifth" value={x.fifth}  onChange={e => handleInputChange(e, i)}></TextField>
              </Grid>
              
              <Grid item className="btn" justify="center" alignItem="center"  container> 
               {inputList.length - 1 === i &&
                <Button variant="outlined" color="default" className="add" onClick={handleAddClick}>ADD </Button>}
               {inputList.length !== 1 &&
                <Button variant="outlined" color="default" className="remove" onClick={() => handleRemoveClick(i)}>REMOVE</Button>}
              </Grid> 
              </Grid>
               );  
              })}  
              </Grid>
              );
              }
          
         

export default Education