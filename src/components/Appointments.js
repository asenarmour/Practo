import React,{useState,useEffect}  from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import docpic from '../images/docPic.jpg'
import axios from 'axios';
const Appointments = () => {

  const [item,setItem]=useState([{name:'',date:'',time:''}])
  const user=localStorage.getItem("user")
  const id=JSON.parse(user).id

  useEffect(()=>{

    axios.get(`/get-appointment/${id}`).then(response=>{setItem(response.data)})
      .catch(err=>console.log(err));
  },[])


  return (
    <div>
     {item.length>0?
       (<div>
       {item.map((p) => (
        <div class="card">
          <div class="row">
            <div class="col-3">
              <img src={docpic} className="product-img" />
            </div>
            <div class="col-5">
              <h2>{p.name}</h2>
              <h5>{p.date}</h5>
              <h4>{p.time}</h4>
            </div>

          </div>
        </div>
      ))}
    </div>)
      :
      (<div>
      <h1>Appointments</h1>
      <h2>Sorry!, You don't have any appointments.</h2>
    </div>)
    }
    </div>
  );
};

export default Appointments;
