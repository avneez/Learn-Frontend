import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])

  const url = "http://localhost:3000"

  const fetchData = () => {
    axios.get(`${url}/api/products`)
      .then((response) => { setProducts(response.data.data); console.log('response', response) })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>My Products</h2>
      {!(products.length > 0) && <div>No Products  Yet...</div>}
      {
        products.length > 0 &&
        products.map((product, index) => {
          return (
            <div key={product.id} style={{ width: "100%", borderBottom: "solid" }}>
              <div>{`${index+1}. ${product.name} - ${product.price}`}</div>
              <div>{product.description}</div>
            </div>
          )
        })
      }
    </>
  )
}

export default App
