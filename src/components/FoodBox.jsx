import { Card, Col, Button } from "antd";

function FoodBox(props) {

  const { id, name, calories, image, servings } = props.food
  const { foods, setFoods, index } = props

  const handleDelete = () => {
    console.log("borrando", id)

    // const filterFoods = foods.filter((eachFood) => {
    //   // if (eachFood.id === id) {
    //   //   return false
    //   // } else {
    //   //   return true
    //   // }
    //   return eachFood.id !== id
    // })
    // setFoods(filterFoods)

    const clone = JSON.parse(JSON.stringify(foods))
    clone.splice(index, 1)

    setFoods(clone)

  }

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>


      <img src={image} alt={name} height={60}/>

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <Button type="primary" onClick={ handleDelete }>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
