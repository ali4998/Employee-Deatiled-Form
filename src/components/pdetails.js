import React from "react"
import {TextField, Typography} from "@material-ui/core"
import "../css/pdetails.css"
import { Grid } from "@material-ui/core"


const Pdetails= ()=>{

    return(
        <Grid container justify="center" maxWidth="lg" className="pdcontainer" alignItems="center" alignContent="center">
            <Typography variant="h5" className="heading">Personal Details</Typography>
            <Grid container  justify="center" alignItems="center" alignContent="center">
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}}  className="detailsinput" required id="outlined-basic" label="Full Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center" >
                    <TextField style={{width:'95%'}}  className="detailsinput" required id="outlined-basic" label="Father / Husband's Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Father/Husband's Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Date of Birth" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Place of Birth" variant="outlined" /> 
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Nationality" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Marital Status" variant="outlined" /> 
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="CNIC Number" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="No. of Dependents" variant="outlined" />  
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField  style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="E-mail Address" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Home Address" variant="outlined"/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="City Area / Location" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Blood Group" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                     <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Contact Details" variant="outlined"/></Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center" alignContent="center">
                    <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Phone / Cell No" variant="outlined"/>   
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={12}>
                    <TextField style={{width:'98.5%'}} className="detailsinput" required id="outlined-basic" label="Home Address" variant="outlined"/>
                </Grid>
            </Grid>
        </Grid>
    )
      }
  
export default Pdetails


     


// <Grid item>
// <TextField  className="detailsinput" id="outlined-basic" label="Full Name" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="Father / Husband's Name" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="Father/Husband's Name" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="Date of Birth" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="Place of Birth" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="Nationality" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="Marital Status" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="CNIC Number" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="No. of Dependents" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="E-mail Address" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="Home Address" variant="outlined"/>
// <TextField className="detailsinput" id="outlined-basic" label="City Area / Location" variant="outlined" />
// <TextField className="detailsinput" id="outlined-basic" label="Contact Details" variant="outlined"/>
// <TextField className="detailsinput" id="outlined-basic" label="Phone / Cell No" variant="outlined" />
// </Grid>