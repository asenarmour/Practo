import React,{useState,useEffect}  from "react";
import baby_care_products from "../images/baby_care_products.png";
import { FormControl, Form, Button } from "react-bootstrap";
import axios from 'axios';


const MedicineOrders = () => {

  const [item,setItem]=useState([{id:0,name:'',price:'',type:'',description:''}])
  const user=localStorage.getItem("user")
  const patientId=JSON.parse(user).id

  useEffect(()=>{

    axios.get(`/get-order/${patientId}`).then(response=>{setItem(response.data)})
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
              <img src={baby_care_products} className="product-img" />
            </div>
            <div class="col-5">
              <h2>{p.name}</h2>
              <h5>{p.type}</h5>
              <h4>{p.price}</h4>
              <input
                type="number"
                defaultValue="1"
                min="0"
                style={{ width: "50px" }}
              />
              <label style={{ marginLeft: "4px" }}>Units</label>
            </div>
            <div class="col-4" style={{ padding: "10px 20px 20px 0px" }}>
              <h5>Description</h5>
              <p>{p.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>)
      :
      (<div>
      <h1>MedicineOrders</h1>
      <h2>Sorry!, You don't have any MedicineOrders.</h2>
    </div>)
    }
    </div>
  );
};

export default MedicineOrders;
