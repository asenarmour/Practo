import React, { useState, useEffect } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import axios from 'axios';
import docpic from '../images/docPic.jpg'
import Appnav from "./Appnav";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { useHistory } from 'react-router-dom';

const PediatricianProducts = () => {

    const history=useHistory();
    const [value, onChange] = useState(new Date());
    const [time, setTiming] = useState('10:00');

    const user=JSON.parse(localStorage.getItem("user"))

    const [item, setItem] = useState([{ id: '', name: '', speciality: '', qualifications: '', password: '' }])

    useEffect(() => {
        axios.get('/doctor/	pediatrician').then(response => { setItem(response.data) })
            .catch(err => console.log(err));
    }, [])

    const bookIt=(p,e)=>{
        e.preventDefault()
        const appoint={patientId:user.id,doctorId:p.id,date:value,time:time}
        axios.post('/add-appointment',appoint,{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response=>{console.log(response.data)})
            .catch(err=>console.log(err));
            history.push("/appointments");
    }

    return (
        <div>
        <Appnav/>
        {item.map((p) => (
            <div class="card">
                <div class="row">
                    <div class="col-3">
                        <img src={docpic} className="product-img" />
                    </div>
                    <div class="col-5">
                        <h2>{p.name}</h2>
                        <h5>{p.speciality}</h5>
                        <h4>{p.qualifications}</h4>
                        <DatePicker onChange={onChange}value={value}/>
                        <TimePicker onChange={setTiming} value={time}/>
                        <Button onClick={(e)=>bookIt(p,e)} style={{ margin: "10px" }}>Book Appointment</Button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}

export default PediatricianProducts
