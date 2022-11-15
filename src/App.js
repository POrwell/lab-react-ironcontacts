import './App.css';
import contactsJSON from "./contacts.json";
import React, { useState } from "react";
const reducedContacts = contactsJSON.slice(0, 5)


function App() {
  const [contacts, setContacts] = useState(reducedContacts)
  const randomContact = () => {
  let randomIndex = Math.floor(Math.random() * ((contactsJSON.length - 1) - 5) + 5)
  let randomContact = contactsJSON[randomIndex]
  setContacts([randomContact,...contacts])
  console.log(contactsJSON)
  contactsJSON.splice(randomIndex, 1)
  console.log(contactsJSON)
  }
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
  <td><img style={{height: "200px"}} src={celeb.pictureUrl}/></td>
  <td>{celeb.name}</td>
  <td>{celeb.popularity}</td>
  {(celeb.wonOscar === true) && <td>🏆</td>}
  {(celeb.wonEmmy === true) && <td>🏆</td>}
</tr>
  )}
  </tbody>
</table>
<button onClick={randomContact}>Add Random Contact</button>
    </div>
  );
}

export default App;
