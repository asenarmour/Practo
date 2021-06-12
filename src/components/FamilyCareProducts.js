import baby_care_products from "../images/baby_care_products.png";
import React,{useState,useEffect}  from "react";
import "../styles/baby_care.css";
import { FormControl, Form, Button } from "react-bootstrap";
import axios from 'axios';

const FamilyCareProducts = () => {

  const [item,setItem]=useState([{id:'',name:'',type:'',price:'',description:''}])

  const buyMedicine=(e,p)=>{
    const MedicineId=p.id
    const user=localStorage.getItem("user")
    const patient=JSON.parse(user)
    const id=patient.id
    axios.get(`/add-order/${MedicineId}/${id}`).then(response=>{console.log("done")})
      .catch(err=>console.log(err));
      
  }

  useEffect(()=>{
    axios.get('/get-medicine-by-type/family-care').then(response=>{setItem(response.data)})
      .catch(err=>console.log(err));
  },[])


  return (
    <div>
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
              {/* <Button style={{ margin: "10px" }}>Buy Now</Button> */}
              <Button onClick={(e)=>buyMedicine(e,p)}>Add to Cart</Button>
            </div>
            <div class="col-4" style={{ padding: "10px 20px 20px 0px" }}>
              <h5>Description</h5>
              <p>{p.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FamilyCareProducts;
