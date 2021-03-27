import React, {useState} from "react"
import {Typography,TextField, Button} from "@material-ui/core"
import "../css/employment.css"
import { Grid } from "@material-ui/core"
// import {AddCircleOutline} from "@material-ui/icons"



const Employment= ()=>{  
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
    <Grid container alignItem="center" justify="center" className="container">
            <Typography className="heading">Employment Record</Typography>
        {inputList.map((x, i) => {
    return(
            <Grid item spacing={1} justify="center" alignItem="center" container>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField style={{width:'95%'}} className="employmenttxt" required label="NAME OF EMPLOYER" variant="outlined" name="first" value={x.first} onChange={e => handleInputChange(e, i)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField style={{width:'95%'}} className="employmenttxt" required label="EMPLOYMENT PERIOD" variant="outlined" name="second" value={x.second} onChange={e => handleInputChange(e, i)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField style={{width:'95%'}} className="employmenttxt" required label="JOB TITLE" variant="outlined" name="third" value={x.third} onChange={e => handleInputChange(e, i)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField style={{width:'95%'}} className="employmenttxt" required label="MONTHLY SALARY" variant="outlined" name="forth" value={x.forth}  onChange={e => handleInputChange(e, i)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField style={{width:'95%'}} className="employmenttxt" required label="REASON FOR LEAVING" variant="outlined" name="fifth" value={x.fifth} onChange={e => handleInputChange(e, i)}/> 
                </Grid>
                <Grid item justify="center" className="btn" container>
                    {inputList.length - 1 === i &&
                    <Button variant="outlined" color="primary" className="add" onClick={handleAddClick}>Add</Button>}
                    {inputList.length !== 1 &&
                    <Button variant="outlined" color="default" className="remove" onClick={() => handleRemoveClick(i)}>REMOVE</Button>}
                </Grid>
            </Grid>
        );  
    })}  
    </Grid>
);
}

export default Employment