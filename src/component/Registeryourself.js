import React, { useState, useEffect } from "react";
// import { View } from "./View";

const getData = () => {
  const data = localStorage.getItem('students');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

const Registeryourself = () => {

  const [students, setStudents] = useState(getData());

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollnumber, setRollnumber] = useState('');
  
  const handleAddSubmit = (e) => {
    e.preventDefault();
    let student = {
      name,
      email,
      rollnumber
    }
    setStudents([...students, student]);
    setName('');
    setEmail('');
    setRollnumber('');
  }
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students])

  // const deleteStudent = (rollnumber) => {
  //   const filteredStudents = students.filter((element, index) => {
  //     return element.rollnumber !== rollnumber
  //   })
  //   setStudents(filteredStudents);
  // }

  return (
    <div className="Stly">
    <div>
      <h1>Registeryourself</h1>
      <form autoComplete="off" onSubmit={handleAddSubmit}>
        <label>Name--</label> <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
        <br />
        <label>Email---</label> <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} required />
        <br />
        <label>Roll No-</label> <input type="text" onChange={(e) => setRollnumber(e.target.value)} value={rollnumber} required />
        <br />
        <button type="submit" > ADD </button>
      </form>
    </div>

    <div>
          {students.length > 0 &&
            <>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Rollnumber</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <View books={students} deleteBook={deleteStudent} /> */}
                  </tbody>
                </table>
              </div>
              {/* <button onClick={() => setStudents([])}>Remove All</button> */}
            </>
          }
          {students.length < 1 && <div>No Student added yet</div>}
        </div>
    </div>
  )
}
export default Registeryourself;
