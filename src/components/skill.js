import React,{useState} from "react"
import {TextField, Button} from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import "../css/skills.css"
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }));
  
  
  const TechSkills=()=>{
    const classes = useStyles();

    const [inputList, setInputList] = useState([{ first: "", second: "" }]);
 
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
      setInputList([...inputList, { first: "", second: ""}]);
    };


    return(

         <Grid container justify="center" className="skillcontainer" >
            <Typography className="heading">Technical Skills</Typography>
            {inputList.map((x, i) => {
    return(
            <Grid item spacing={2} className="fieldbody"  justify="center" alignItems="center" direction="row" container>
                <Grid item  className="field">
                  <TextField label="Skills" variant="outlined" required className="txtinput" name="first" value={x.first} onChange={e => handleInputChange(e, i)} />
                </Grid>
                <Grid item alignContent="center" justify="center" alignItems="center" className={classes.root}>
                  <Rating className="rate" defaultValue={0} precision={.5} size="large" required name="second" value={x.second} onChange={e => handleInputChange(e, i)}/>
                </Grid>
                <Grid item justify="center" alignItems="center" className="btn" direction="row" container> 
                   <Grid item justify="center" alignItems="center">
                    {inputList.length - 1 === i &&
                    <Button variant="outlined" color="default" className="add"  onClick={handleAddClick}>ADD </Button>}</Grid>
                   <Grid item justify="center" alignItems="center">
                   {inputList.length !== 1 &&
                    <Button variant="outlined" color="default" className="remove" onClick={() => handleRemoveClick(i)}>REMOVE </Button>}
                    </Grid>
                </Grid> 
            </Grid>
            );  
          })} 
        </Grid>
    )
}   

export default TechSkills

