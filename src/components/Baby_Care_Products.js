import baby_care_products from "../images/baby_care_products.png";
import React from "react";
import "../styles/baby_care.css";
import { FormControl, Form, Button } from "react-bootstrap";

const Baby_Care_Products = () => {
  var data = [
    {
      product_id: "1201",
      name: "Pampers Magic Naker",
      type: "Baby Diapers",
      price: "20 Rs.",
      description:
        "Pampers Active Baby Diapers is designed for the babies who weigh 9-14 kg comfort and makes your baby skin dry and locks the wetness for a minimum duration of 12 hours. It has 3 absorbing channels to prevent the wetting",
    },
    {
      product_id: "1202",
      name: "Pigeon Baby Wipes",
      type: "Wipes",
      price: "120 Rs.",
      description:
        "Pigeon Baby Wipes are used to clean while changing the baby's diapers. It is strong and soft with a refreshing scent. These wipes are a mother's and baby's solution to problems such as dry skin, diaper rash, and sensitive skin, especially on baby's bottom.",
    },
    {
      product_id: "1203",
      name: "Himalaya Baby Powder",
      type: "Skin nourishing powder",
      price: "120 Rs.",
      description:
        "Himalaya Baby Powder is good for the babies. It is safe and effective as it has all the natural herbal actives. It helps in managing the body odour caused due to excess sweat. It helps in nourishing, gives protection, moisturizes the skin. It also helps in keeping the baby dry all day and also has astringent and anti-persistent properties.",
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
              <Button style={{ margin: "14px" }}>Buy Now</Button>
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

export default Baby_Care_Products;
