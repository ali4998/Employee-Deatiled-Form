import React from "react"
import { TextField} from "@material-ui/core"
import "../css/emergency.css"
import { Container } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"

const Emergency= ()=>{
    return(
        <Container className="emercontainer">
            <Typography variant="h5"className="heading">Emergency Contact (Next of Kin)</Typography>
                <Grid container spacing={0} alignContent="center" justify="center" className="pinfo">
                    <Grid item justify="center" alignContent="center" xs={12} sm={12} md={6} lg={3}>
                        <TextField style={{width:'95%'}} required className="detailsinput" id="outlined-basic" label="Name" variant="outlined" />
                    </Grid>
                    <Grid item justify="center" alignContent="center" xs={12} sm={12} md={6} lg={3}>
                        <TextField style={{width:'95%'}} required className="detailsinput" id="outlined-basic" label="Relation" variant="outlined" />
                    </Grid>
                    <Grid item justify="center" alignContent="center" xs={12} sm={12} md={6} lg={3}>
                        <TextField style={{width:'95%'}} required className="detailsinput" id="outlined-basic" label="Occupation" variant="outlined" />
                    </Grid>
                    <Grid item justify="center" alignContent="center" xs={12} sm={12} md={6} lg={3}>
                        <TextField style={{width:'95%'}} required className="detailsinput" id="outlined-basic" label="Contact Number" variant="outlined" />
                    </Grid> 
                </Grid>
        </Container>
    )
}

export default Emergency