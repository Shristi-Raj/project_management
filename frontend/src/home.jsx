import React, { useEffect , useState } from 'react'
import axios from 'axios';

function home() {
  const [projectCount, setProjectCount] = useState()
  const [employeeCount, setEmployeeCount] = useState()
  const [salary, setSalary] = useState()
  useEffect(() => {
    axios.get('http://localhost:8081/projectCount')
    .then(res => {
        setProjectCount(res.data[0].project)
      }).catch(err => console.log(err));

      axios.get('http://localhost:8081/employeeCount')
      .then(res => {
          setEmployeeCount(res.data[0].project)
        }).catch(err => console.log(err));

        axios.get('http://localhost:8081/salary')
      .then(res => {
        setSalary(res.data[0].sumOfSalary)
        }).catch(err => console.log(err));

  }, [])
  return (
    <div>
    <div className='p-3 d-flex justify-content-around mt-3'>
      <div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className="text-center pb-1">
          <h4>Project</h4>
        </div>
        <hr />
        <div className="">
          <h5>Total: {employeeCount }</h5>
        </div>
      </div>
      <div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className="text-center pb-1">
          <h4>Employee</h4>
        </div>
        <hr />
        <div className="">
          <h5>Total: {employeeCount }</h5>
        </div>
      </div>
      <div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className="text-center pb-1">
          <h4>Salary</h4>
        </div>
        <hr />
        <div className="">
          <h5>Total: {salary }</h5>
        </div>
      </div>
      </div>

      {/*List Of Admins */}
      <div className='mt-4 px-5 pt-3'>
        <h3>List Of Projects</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project</td>
              <td>Project</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default home
