import React from 'react';
// import CelebRow from './CelebRow';

function generateCelebRows(CelebArr, removeContact){
  return CelebArr.map((eachCeleb)=> {
    return (
      <tr key = {eachCeleb.name}>
        <td><img className="celeb-picture" src={eachCeleb.pictureUrl} alt={"Picture of " + eachCeleb.name} /></td>
        <td>{eachCeleb.name}</td>
        <td>{eachCeleb.popularity}</td>
        <td><button data-contact-name = {eachCeleb.name} onClick = {removeContact}>Remove Contact</button></td>
      </tr> 
    )
  })
}

function Table(props) {
  return (
    <table id = "contact-table">
      <thead>
        {/* <tr>
          <th>IronContacts</th>
        </tr> */}
        <tr>
          <th>Picture</th><th>Name</th><th>Popularity</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {generateCelebRows(props.contacts, props.removeContact)}
      </tbody>
    </table>
  )
}

export default Table;