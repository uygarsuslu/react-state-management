import React, { useState } from "react";

const AddMovie = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setName(e.target.value)
    }

    const AddMovie = e => {
        e.preventDefault()
    }

    return (
        <form>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}