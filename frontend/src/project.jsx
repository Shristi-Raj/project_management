import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function project() {
  const [data, setData] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:8081/getProject')
    .then(res => {
      if(res.data.Status === "Success"){
        console.log((res.data.Result))
        setData(res.data.Result);
      }
      else{
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])

   
  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='px-5 py-3'>
      <div className="d-flex justify-content-center mt-2">
        <h3>Project List</h3>
      </div>
      <Link to='/create' className="btn btn-success">Add Projects</Link>
      <div className="mt-3">
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           {data.map((project, index) => {
              return <tr key={index}>
                <td>{project.name}</td>
                <td>{
                  <img src={`http://localhost:8081/images/`+project.image} alt="" className='project_image' />
                  }</td>
                <td>{project.email}</td>
                <td>{project.salary}</td>
                <td>{project.address}</td>
                <td>
                  <Link to={`/projectEdit/`+project.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                  <button onClick={e => handleDelete(project.id)} className='btn btn-sm btn-danger'>delete</button>
                </td>
              </tr>
           })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default project
