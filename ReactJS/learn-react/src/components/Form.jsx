import { useState } from "react"

const Form = () => {

    const products = [
        {
            id: 1,
            name: 'Dưa hấu',
            cost: 100
        },
        {
            id: 2,
            name: 'Xoai',
            cost: 200
        },
        {
            id: 3,
            name: 'Dau',
            cost: 300
        },
    ]

    const [id, setID] = useState();
    const [quantity, setQuantity] = useState(1)

    const handleInputChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleFormClick = (event, product, quantity) => {
        event.preventDefault()
        const productDetail = { ...product, quantity: quantity }
    }


    return (
        <div className="product-list">
            {products.map((product) => (
                <form action="" key={product.id}>
                    <label htmlFor="">{product.name}</label>
                    <div>
                        <label htmlFor="">Giá:</label>
                        <label htmlFor="">{product.cost}</label>
                    </div>
                    <div>
                        <label htmlFor="">Số lượng:</label>
                        <input type="text" name="quantity" id="" onChange={handleInputChange} />
                    </div>
                    <button onClick={handleFormClick(product, quantity)}> Submit</button>
                </form>
            ))
            }
        </div >
    )
}

export default Form