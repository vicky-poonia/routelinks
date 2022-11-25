import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books, deleteBook }) => {

    return books.map(book=>(

        <tr key={book.name}>
            <td>{book.name}</td>
            <td onClick={()=>deleteBook(book.name)}>
                <Icon icon={trash}/>
            </td>
        </tr>

))
}





















// import React from "react";
// // import { Icon } from "react-icons-kit";
// // import { trash } from "react-icons-kit/feather/trash";

// export const View = ({ Students }) => {
//   return Students.map((student) => (
//     <tr key={student.name}>
//       {/* <td>{student.name}</td> */}
//       {/* <td onClick={() => deleteStudent(student.name)}> */}
//         {/* <Icon icon={trash} /> */}
//       {/* </td> */}
//     </tr>
//   ));
// };
