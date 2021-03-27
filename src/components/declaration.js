import React from "react"
import "../css/declaration.css"
import { Typography, Grid, Checkbox } from "@material-ui/core"


const Declaration=()=>{

    return(
        <Grid container className="declaretable">
            <Typography className="declaration">Declaration</Typography>
            <Grid item className="declare" container>
                <Checkbox style={{}} color="default" value="checkedA"  inputProps={{ 'aria-label': 'Checkbox A' }} />   
                <Typography className="txt"> * I solemnly affirm that the information furnished in this application is true to the best of my knowledge and that I have not withheld anything which could affect my employment in this organization.<br/>
                * I also understand and agree that any false statement from my side shall render me liable for instant dismissal in the event of employment.</Typography>
            </Grid>
        </Grid>
    )
}

export default Declaration
