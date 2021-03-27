import React  from "react"
// import Bgvideo from "../src/video/Web-Tec.mp4"
// import ReactPlayer from 'react-player'
import logo from "../src/img/logo1.png"
import "./css/main.css"
import {Card,Button} from '@material-ui/core';
import Pdetails from "./components/pdetails.js"
import Emergency from "./components/emergency.js"
import Education from "./components/education.js"
import Certification from "./components/certification.js"
import Employment from "./components/employment"
import TechSkills from "./components/skill.js"
import Refrences from "./components/refrences.js"
import Declaration from "./components/declaration.js"
import { FormControl } from "@material-ui/core";

const Main= () =>{

    return(
        
        <Card className="parent">
            {/* <video className='videoTag'  autoPlay loop muted>
                <source src={Bgvideo} type='video/mp4'/>
            </video>
          */}
            <FormControl className="logo1">
                <img src={logo} className="logo" alt="logo"/>
            </FormControl>
            <FormControl className="mainbox">
                <Pdetails/>
                <Emergency/>
                <Education/>
                <Certification/>  
                <Employment/>
                <TechSkills/>       
                <Refrences/>  
                <Declaration/>
                <Button variant="outlined" className="submit" color="default">Submit</Button>
            </FormControl>
        </Card>



    )
}

export default Main