import React, { useEffect, useState } from "react";
import { View } from "./View";

const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Practise = () => {
  const [books, setBooks] = useState(getDatafromLS());

  const [name, setName] = useState("");

  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    let book = {
      name,
    };
    setBooks([...books, book]);
    setName("");
  };

  const deleteBook = (name) => {
    const filteredBooks = books.filter((element, index) => {
      return element.name !== name;
    });
    setBooks(filteredBooks);
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div>
      <h1>Students Data</h1>
      <p>Maintain your students data here !!</p>
      <div>
        <div>
          <form autoComplete="off" onSubmit={handleAddBookSubmit}>
            <label>Name---</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <br />
            <button type="submit"> ADD </button>
          </form>
        </div>

        <div>
          {/* {books.length > 0 && ( */}
          <>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Naam</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook} />
                </tbody>
              </table>
            </div>
            <button onClick={() => setBooks([])}>Remove All</button>
          </>
          {/* )} */}
          {/* {books.length < 1 && <div>No books are added yet</div>} */}
        </div>
      </div>
    </div>
  );
};

export default Practise;
























// import React, { useEffect, useState } from "react";
// import { View } from "./View";

// const getDatafromLS = () => {
//   const data = localStorage.getItem("students");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

// const Practise = () => {
//   const [students, setStudents] = useState(getDatafromLS());

//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let student = {
//       name,
//     };
//     setStudents([...students, student]);
//     setName("");
//   };

//   const deleteStudent = (name) => {
//     const filteredBooks = students.filter((element, index) => {
//       return element.name !== name;
//     });
//     setStudents(filteredBooks);
//   };

//   useEffect(() => {
//     localStorage.setItem("students", JSON.stringify(students));
//   }, [students]);

//   return (
//     <div>
//       <h1>Students Data</h1>
//       <p>Maintain your students data here !!</p>
//       <div>
//         <div>
//           <form autoComplete="off" onSubmit={handleSubmit}>
//             <label>Name---</label>
//             <input
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               required
//             />
//             <br />
//             <button type="submit"> ADD </button>
//           </form>
//         </div>

//         <div>
//           {/* {books.length > 0 && ( */}
//           <>
//             <div>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Naam</th>
//                     <th>Delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <View students={students} deleteStudent={deleteStudent} />
//                 </tbody>
//               </table>
//             </div>
//             <button onClick={() => setStudents([])}>Remove All</button>
//           </>
//           {/* )} */}
//           {/* {books.length < 1 && <div>No books are added yet</div>} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Practise;
