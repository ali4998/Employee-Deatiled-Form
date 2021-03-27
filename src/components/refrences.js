import React from "react"
import {TextField} from "@material-ui/core"
import "../css/refrences.css"
import { Grid } from "@material-ui/core"
import { Typography } from "@material-ui/core"


const Refrences= ()=>{

    return(
        <Grid container direction="column" className="reftable">
        <Typography className="heading">Refrences</Typography>
            <Grid item className="refinfo1" container>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Job-Title" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Contact Number" variant="outlined" />  
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField style={{width:'95%'}} className="detailsinput" required id="outlined-basic" label="Relationship to Applicant" variant="outlined"/>  
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={9}>
                <TextField style={{width:'98.5%'}} className="detailsinput orgd" required id="outlined-basic" label="Organization Details" variant="outlined" />   
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField style={{width:'95%'}} className="detailsinput" id="outlined-basic" label="Period of Acquaintance" variant="outlined" required />   
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Refrences