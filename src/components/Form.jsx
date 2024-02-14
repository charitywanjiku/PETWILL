import { useState } from "react";

function Form(){

  const[formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address1: "",
    address2: "",
    position: ""
})

function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    setFormData({
        ...formData,
        [name]: [value]
    })
}

// function addUser(newProfile){
//   const updatedProfile = [...formData, newProfile]
//   setFormData(updatedProfile)
// }

function handleSubmit(event){
    event.preventDefault()
    const profile = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        contact: contactNumber.value,
        address1: address1.value,
        address2: address2.value,
        position: position.value
    }
    console.log(profile)

    fetch("http://127.0.0.1:3000/user", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile)
    }).then(res => res.json())
    .then(data => console.log(data))
}

    return(
        <form onSubmit={handleSubmit}>
  <div className="space-y-12">


    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-bold leading-30 text-gray-900">Profile Form</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Create a new user profile.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div className="mt-2">
            <input type="text" value={formData.firstName} name="firstName" id="firstName" onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div className="mt-2">
            <input type="text" name="lastName" value={formData.lastName} id="lastName" onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Address 1</label>
          <div className="mt-2">
            <input type="text" name="address1" value={formData.address1} id="address1" onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Address 2</label>
          <div className="mt-2">
            <input type="text" name="address2" value={formData.address2} id="address2" onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">Position</label>
          <div className="mt-2">
            <input type="text" name="position" value={formData.position} id="position" onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
          <div className="mt-2">
            <input type="tel" name="contactNumber" id="contactNumber" value={formData.contactNumber} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>


  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create User Profile</button>
  </div>
</form>
    )
}

export default Form;