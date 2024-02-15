import { useState, useEffect} from 'react';

function ContactInformation(){
    const [contactItems, setContactItems] = useState([])

    useEffect(() => {
        (fetch("http://localhost:3000/user"))
        .then(res => res.json())
        .then(contactItems => setContactItems(contactItems))
    }, [])
    return(
<table className="min-w-full border divide-y divide-gray-200">
  <thead className="bg-gray-100">
    <tr>
      <th className="py-3 px-6 text-left">Id</th>
      <th className="py-3 px-6 text-left">Name</th>
      <th className="py-3 px-6 text-left">Email</th>
      <th className="py-3 px-6 text-left">Contact No.</th>
      <th className="py-3 px-6 text-left">Address 1</th>
      <th className="py-3 px-6 text-left">Address 2</th>
      <th className="py-3 px-6 text-left">ZIP/Postal Code</th>
    </tr>
  </thead>
  <tbody>
    {contactItems.map((contactItem) => {
        return(
      <tr key={contactItem.id}>
        <td className="py-2 px-6">{contactItem.id}</td>
        <td className="py-2 px-6">{contactItem.firstName} {contactItem.lastName}</td>
        <td className="py-2 px-6">{contactItem.email}</td>
        <td className="py-2 px-6">{contactItem.contact}</td>
        <td className="py-2 px-6">{contactItem.address1}</td>
        <td className="py-2 px-6">{contactItem.address2}</td>
        <td className="py-2 px-6">{contactItem.postalCode}</td>
      </tr>
    )})}
  </tbody>
</table>

    )
}

export default ContactInformation;