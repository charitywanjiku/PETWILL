import React, { useState } from "react";


import Form from "./Form"
function Pages(){

    const[formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        address1: "",
        address2: ""
    })

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setFormData({
            ...formData,
            [name]: [value]
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        const newProfile = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            contact: contactNumber.value,
            address1: address1.value,
            address2: address2.value
        }
        console.log(newProfile)
    }

    return(
        <Form formData={formData} onChange={handleChange} onSubmit={handleSubmit}/>
    )
}

export default Pages;