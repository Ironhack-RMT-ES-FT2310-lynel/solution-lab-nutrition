import React from "react";
import foodsJson from "../foods.json";

import FoodBox from "./FoodBox";
import { useState } from "react";
import AddFoodForm from "./AddFoodForm";

import { Row, Divider } from "antd";
import Search from "./Search";

function FoodList() {
  const [ foods, setFoods ] = useState(foodsJson);
  const [ query, setQuery ] = useState("")

  return (
    <div>
      <Divider>Food List</Divider>

      <AddFoodForm
        // foods={foods}
        setFoods={setFoods}
      />

      <Search query={query} setQuery={setQuery}/>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foods
        .filter((eachFood) => eachFood.name.includes(query))
        .map((eachFood, index) => {
          return (
            <FoodBox
              key={index}
              index={index}
              food={eachFood}
              setFoods={setFoods}
              foods={foods}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default FoodList;
