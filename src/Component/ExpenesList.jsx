import React from 'react'

function ExpenesList({expenes, onremove}) {
    if(expenes.length === 0){
        return(
        <>
        <div>
            <h1>No data Found</h1>
        </div>
        </>
        )
    }
    // const { catagory, tour, description, amount} = expenes;
    
  return (
    <>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Description</th>
        <th>Catagory</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {

      expenes.map((expenes) => (
        <tr key={expenes.id}>
        <th>{expenes.id}</th>
        <td>{expenes.catagory}</td>
        <td>{expenes.description}</td>
        <td>{expenes.amount}</td>
        <td><><button className='btn btn-active btn-neutral' onClick={() => onremove(expenes.id)}>Remove</button></></td>
      </tr>
      ))
      }
      
    </tbody>
  </table>
</div>
    </>
  )
}

export default ExpenesList