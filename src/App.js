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
  contactsJSON.splice(randomIndex, 1)
  }

const sortByName = () => {
  let copyContacts = contacts.map((contact) => {
    return contact
  })

  let sortedContacts = copyContacts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
setContacts(sortedContacts)
}

const sortByPopularity = () => {
  let copyContacts = contacts.map((contact) => {
    return contact
  })

  let sortedContacts = copyContacts.sort((a, b) => a.popularity - b.popularity)
setContacts(sortedContacts) 
}

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
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
  <td><img style={{height: "100px"}} src={celeb.pictureUrl}/></td>
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
