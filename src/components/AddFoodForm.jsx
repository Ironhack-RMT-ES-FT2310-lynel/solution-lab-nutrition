import { useState } from "react"
import { Divider, Input, Button } from "antd";


function AddFoodForm({foods, setFoods}) {

  const [ formValues, setFormValues ] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0
  })

  const handleInputChange = (event) => {
    console.log(event.target.name)
    const clone = JSON.parse(JSON.stringify(formValues))
    clone[ event.target.name ] = event.target.value
    setFormValues(clone)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("agregando")
    // setFoods( [formValues, ...foods ] )
    // cualquier funcion que actualiza el estado tiene dos formas de invocarlas
    // 1. la invocamos y le pasamos el valor del nuevo estado
    // 2. la invocamos y le pasamos un callback, que tiene acceso al estado original
    setFoods( (valorActualDelEstado) => {
      // el primer argumento es el valor actual del estado

      // debo retornar lo que quiero que sea el nuevo valor del estado
      return [ formValues, ...valorActualDelEstado ]

    } )
  }
  
  return (
    <form>

      <Divider>Add Food Entry</Divider>
      
      <label htmlFor="name">Name:</label>
      <Input type="text" name="name" value={formValues.name} onChange={handleInputChange}/>

      <label htmlFor="image">Image:</label>
      <Input type="text" name="image" value={formValues.image} onChange={handleInputChange}/>

      <label htmlFor="calories">Calories:</label>
      <Input type="number" name="calories" value={formValues.calories} onChange={handleInputChange}/>

      <label htmlFor="servings">Servings:</label>
      <Input type="number" name="servings" value={formValues.servings} onChange={handleInputChange}/>

      <Button onClick={handleSubmit}>Create</Button>

    </form>
  )
}

export default AddFoodForm






