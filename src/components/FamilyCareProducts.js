import baby_care_products from "../images/baby_care_products.png";
import React from "react";
import "../styles/baby_care.css";
import { FormControl, Form, Button } from "react-bootstrap";

const FamilyCareProducts = () => {
  var data = [
    {
      product_id: "1401",
      name: "Apollo Life Unisex Adult Diapers",
      type: "Senior Care",
      price: "100 Rs.",
      description:
        "Apollo Life Adult Diapers (XL) helps in solving the problem of incontinence - the inability to exercise control over the bladder and the bowel. Ideal for patients suffering from diabetes, urology patients, bedridden and disabled patients",
    },
    {
      product_id: "1402",
      name: "Pro-Pl Chocolate Powder Tin 200g",
      type: "Mother Care",
      price: "330 Rs.",
      description:
        "Pro-Pl powder is a blend of vitamins, minerals and essential nutrients required for promoting a baby's health through mother's lactation. Pro-Pl powder is one of the nutritional supplement where pregnant and lactating women would be lacking nutrition. This helps in providing DHA, GLA and other essential vitamins and minerals. It helps in preventing hypertension, preterm delivery, delayed growth of the baby, preaclampsia.",
    },
    {
      product_id: "1403",
      name: "Pro-Pl Chocolate Powder Jar 500g",
      type: "Mother Care",
      price: "250 Rs.",
      description:
        "Pro-Pl powder is a blend of vitamins, minerals and essential nutrients required for promoting a baby's health through mother's lactating.",
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

export default FamilyCareProducts;
