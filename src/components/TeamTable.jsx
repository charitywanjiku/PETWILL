import { useState, useEffect } from "react";

function TeamTable(){
    const [tableItems, setTableItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/user")
        .then(res => res.json())
        .then(tableItems => setTableItems(tableItems))
    },[])


    return(
        <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-r">Id</th>
            <th className="py-2 px-4 border-r">Name</th>
            <th className="py-2 px-4 border-r">Email</th>
            <th className="py-2 px-4 border-r">Contact no.</th>
            <th className="py-2 px-4 border-r">Address 1</th>
            <th className="py-2 px-4 border-r">Address 2</th>
            <th className="py-2 px-4">Position</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((tableItem) => (
            <tr key={tableItem.id} className="border-t">
              <td className="py-2 px-4 border-r">{tableItem.id}</td>
              <td className="py-2 px-4 border-r">{`${tableItem.firstName} ${tableItem.lastName}`}</td>
              <td className="py-2 px-4 border-r">{tableItem.email}</td>
              <td className="py-2 px-4 border-r">{tableItem.contact}</td>
              <td className="py-2 px-4 border-r">{tableItem.address1}</td>
              <td className="py-2 px-4 border-r">{tableItem.address2}</td>
              <td className="py-2 px-4">{tableItem.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default TeamTable;