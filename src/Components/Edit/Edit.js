import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Edit.css'

const Edit = () => {
    const [oldProduct, setOldProduct] = useState({
        name: "",
        price: ""
    })
    console.log(oldProduct)

    const {id} = useParams()

    const handleChange = (e) => {
        const newProductData = {...oldProduct}
        newProductData[e.target.name] = e.target.value;
        setOldProduct(newProductData)
    }

    const name = oldProduct?.name;
    const price = oldProduct?.price;

    const updateButton = (id) => {
        fetch(`https://aqueous-badlands-43926.herokuapp.com/editProduct/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, price})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return (
        <div className="container editProduct">
            <h2 className="text-center mt-5">Update Your Product Data</h2>
            <label> Name </label>
                <input className="form-control" name="name" type="text" placeholder="Change Your Product Name" onBlur={handleChange}/>

            <label> Price </label>
                <input className="form-control" name="price" type="number"  placeholder="Change Your Product Price" onBlur={handleChange}/>

            <button className="btn btn-warning w-100 mt-2" onClick={() => updateButton(id)}>Submit</button>
            
        </div>
    );
};

export default Edit;