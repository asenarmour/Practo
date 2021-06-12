import React, { useState, useEffect } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import axios from 'axios';
import docpic from '../images/docPic.jpg'
import Appnav from "./Appnav";

const PediatricianProducts = () => {

    const [item, setItem] = useState([{ id: '', name: '', speciality: '', qualifications: '', password: '' }])

    useEffect(() => {
        axios.get('/doctor/	pediatrician').then(response => { setItem(response.data) })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
        <Appnav/>
        {item.map((e) => (
            <div class="card">
                <div class="row">
                    <div class="col-3">
                        <img src={docpic} className="product-img" />
                    </div>
                    <div class="col-5">
                        <h2>{e.name}</h2>
                        <h5>{e.speciality}</h5>
                        <h4>{e.qualifications}</h4>
                        
                        <Button style={{ margin: "10px" }}>Book Appointment</Button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}

export default PediatricianProducts
