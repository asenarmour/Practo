import baby_care_products from "../images/baby_care_products.png";
import React from "react";
import "../styles/baby_care.css";
import { FormControl, Form, Button } from "react-bootstrap";

const PersonalCareProducts = () => {
  var data = [
    {
      product_id: "1501",
      name: "Elastoderm Cream 50g",
      type: "Skin Care",
      price: "440 Rs.",
      description:
        "Elastoderm Cream is used to reduce size, colour, and depth of stretch marks and prevent stretch marks before, during and after pregnancy.",
    },
    {
      product_id: "1502",
      name: "Maybelline New York Colossal Kajal Black 0.35g",
      type: "Makeup product",
      price: "130 Rs.",
      description:
        "Maybelline New York Colossal Kajal Black 0.35 g got black fix formula with aloe vera that gives a deep black color to the eyes. It adds a new definition for eyes. It is convenient and easy to apply. Gives your eyes a charming look with a smudge free and waterproof formula.",
    },
    {
      product_id: "1503",
      name: "Apollo Life Hand Sanitizer 250 ml",
      type: "Hygiene product",
      price: "250 Rs.",
      description:
        "The Apollo Life Hand Sanitizer is a liquid generally used to maintain hygiene and to decrease infectious agents on hands. It is an alcohol-based type formulation which is generally more effective at killing microorganisms and is better tolerated than soap and water.",
    },
    {
      product_id: "1504",
      name: "Lifebuoy Lemon Fresh Hand Sanitizer",
      type: "Hygiene product",
      price: "150 Rs.",
      description:
        "The Lifebuoy Lemon Fresh Hand Sanitizer is a liquid generally used to maintain hygiene and to decrease infectious agents on hands. It is an alcohol-based type formulation which is generally more effective at killing microorganisms and is better tolerated than soap and water.",
    },
  ];

  return (
    <div>
      {data.map((e) => (
        <div class="card">
          <div class="row">
            <div class="col-3">
              <img src={baby_care_products} className="product-img" />
            </div>
            <div class="col-5">
              <h2>{e.name}</h2>
              <h5>{e.type}</h5>
              <h4>{e.price}</h4>
              <input
                type="number"
                defaultValue="1"
                min="0"
                style={{ width: "50px" }}
              />
              <label style={{ marginLeft: "4px" }}>Units</label>
              <Button style={{ margin: "10px" }}>Buy Now</Button>
              <Button>Add to Cart</Button>
            </div>
            <div class="col-4" style={{ padding: "10px 20px 20px 0px" }}>
              <h5>Description</h5>
              <p>{e.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalCareProducts;
