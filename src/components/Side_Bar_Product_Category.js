import React from "react";
import "../styles/Side_Bar_Product_Category.css";
const Side_Bar_Product_Category = () => {
  return (
    <div className="side-bar-product table">
      <div className="row justify-content-end">
        <div className="col-12">
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action active disabled"
            >
              Categories
            </a>
            <a href="/baby-care" class="list-group-item list-group-item-action">
              Baby Care
            </a>
            <a
              href="/fitness-and-wellness"
              class="list-group-item list-group-item-action"
            >
              Fitness and Wellness
            </a>
            <a
              href="/family-care"
              class="list-group-item list-group-item-action"
            >
              Family Care
            </a>
            <a
              href="personal-care"
              class="list-group-item list-group-item-action"
            >
              Personal Care
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side_Bar_Product_Category;
