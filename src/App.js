import './App.css';
import contacts from "./contacts.json";
import React, { useState } from "react";
const reducedContacts = contacts.slice(0, 5)

function App() {
  console.log(reducedContacts)
 const [contacts, setContacts] = useState(reducedContacts)
  return (
    
    <div className="App">
      <h1>IronContacts</h1>
<table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar</th>
      <th>Won Emmy</th>
    </tr>
  </thead>
  <tbody>
  {contacts.map((celeb) => 
  <tr key={celeb.id}>
  <td><img src={celeb.pictureUrl}/></td>
  <td>{celeb.name}</td>
  <td>{celeb.popularity}</td>
  {(celeb.wonOscar === true) && <td>🏆</td>}
  {(celeb.wonEmmy === true) && <td>🏆</td>}
</tr>
  )}
  </tbody>
</table>
    </div>
  );
}

export default App;
