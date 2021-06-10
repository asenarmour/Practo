import baby_care_products from "../images/baby_care_products.png";
import React from "react";
import "../styles/baby_care.css";
import { FormControl, Form, Button } from "react-bootstrap";

const Fitness_and_Wellness_Products = () => {
  var data = [
    {
      product_id: "1301",
      name: "B-Protin Powder Chocolate 200g",
      type: "Health Supplement",
      price: "520 Rs.",
      description:
        "B-Protin Powder is a good health drink enriched with a mixture of time released proteins, casein, whey and soy. These give the proper and continuous supply of amino acids for the production of enzymes, maintaining tissues and formation of haemoglobin",
    },
    {
      product_id: "1302",
      name: "Endura Mass Vanilla Powder 500g ",
      type: "Health Supplement",
      price: "430 Rs.",
      description:
        "Endura Mass is formulated for individuals who desire to gain weight. It is 100% vegetarian with superior quality proteins, vitamins, minerals, and complex carbohydrates.",
    },
    {
      product_id: "1303",
      name: "Apollo Pharmacy Slimchoice Shake Strawberry Flavour Powder ",
      type: "Health Supplement",
      price: "350 Rs.",
      description:
        "Apollo Pharmacy Slimchoice Shake Strawberry Flavour Powder is an ideal protein-rich nutrition for weight control and gaining muscle mass.",
    },
    {
      product_id: "1304",
      name: "Unlimited Nutrition Nature's Best Isopure Zero Carb- 7.5 Lbs",
      type: "Health Supplement",
      price: "750 Rs.",
      description:
        "Unlimited Nutrition Nature’s Best Isopure Zero Carb is the pure 100% Whey Protein Isolate powder that helps in balancing the protein supplement for the body enriched with glutamine, vitamins, and minerals.",
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

export default Fitness_and_Wellness_Products;
