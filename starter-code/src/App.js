import React, { Component } from 'react';
import './App.css';
import contacts from "./contacts.json"
import Table from './components/Table';

class App extends Component {
  state = {
    contacts: contacts.slice(0,5),
    alreadyPopulatedCelebs: [1, 2, 3, 4, 5],
    sortedByName : false,
    sortedByPopularity : false,
  }

  compareByName = (a, b) =>{
    if (a.name < b.name)
      return -1

    if (a.name > b.name)
      return 1

    if (a.name === b.name){
      return this.compareByPopularity(a, b)      
    }
  }

  compareByPopularity = (a, b) =>{
   if(a.popularity < b.popularity)
    return -1

   if(a.popularity > b.popularity)
    return 1

   if(a.popularity === b.popularity)
    return this.compareByName(a,b)
  }

  AddRandomContact = () =>{
    let randomIndex = Math.floor(Math.random()*contacts.length);

    while(this.state.alreadyPopulatedCelebs.includes(randomIndex)){
      randomIndex = Math.floor(Math.random() * contacts.length);
    }
    
    this.state.contacts.push(contacts[randomIndex])
    this.state.alreadyPopulatedCelebs.push(randomIndex)

    this.setState({
      contacts: this.state.contacts,
      alreadyPopulatedCelebs : this.state.alreadyPopulatedCelebs,
      sortedByName : false,
      sortedByPopularity : false,
    })
  }

  sortByName = () =>{
    if(this.state.sortedByName){
      this.setState({
        contacts: this.state.contacts.reverse()
      })
      return;
    }
    this.setState({
      contacts: this.state.contacts.sort(this.compareByName),
      sortedByName : true,
      sortedByPopularity: false,
    })
  }

  sortByPopularity = () =>{
    if (this.state.sortedByPopularity) {
      this.setState({
        contacts: this.state.contacts.reverse()
      })
      return;
    }
    this.setState({
      contacts: this.state.contacts.sort(this.compareByPopularity),
      sortedByName: false,
      sortedByPopularity: true,
    })
  }

  removeContact =  (e) =>{
    const contactName = e.target.dataset.contactName;
    for(let i = 0; i < this.state.contacts.length; i++){
      if (this.state.contacts[i].name === contactName){
        this.state.contacts.splice(i, 1);
      }
    }

    this.setState({
      contacts: this.state.contacts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div id = "button-wrapper">
          <button onClick = {this.AddRandomContact}>Add Random Contact</button>
          <button onClick = {this.sortByName}>Sort by name</button>
          <button onClick = {this.sortByPopularity}>Sort by popularity</button> 
        </div>
        <Table contacts = {this.state.contacts} removeContact = {this.removeContact}/>
      </div>
    );
  }
}

export default App;
