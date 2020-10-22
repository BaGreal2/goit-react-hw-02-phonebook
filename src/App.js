import React, {Component} from 'react';
import styles from './App.module.css';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      contacts: [
        {id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56'},
        {id: uuidv4(), name: 'Hermione Kline', number: '443-89-12'},
        {id: uuidv4(), name: 'Eden Clements', number: '645-17-79'},
        {id: uuidv4(), name: 'Annie Copeland', number: '227-91-26'},
      ],
      name: "",
      number: "",
      filter: [
        {id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56'},
        {id: uuidv4(), name: 'Hermione Kline', number: '443-89-12'},
        {id: uuidv4(), name: 'Eden Clements', number: '645-17-79'},
        {id: uuidv4(), name: 'Annie Copeland', number: '227-91-26'},
      ],
      test: true,
    };
  }
      componentDidUpdate(prevProps, prevState){
        if(this.state.name !== prevState.name){
          console.log(this.state)
          this.setState({
            name: document.getElementById('#form').children[1].value,
            number: document.getElementById('#form').children[3].value,
          })
          this.state.contacts.push({
            id: uuidv4(),
            name: this.state.name,
            number: this.state.number,
          })
          this.state.filter.push({
            id: uuidv4(),
            name: this.state.name,
            number: this.state.number,
          })
        }
      }
      checking(contacts, evt){for(let i = 0; i<contacts.length; i++){
        console.log(contacts[i])
        if(contacts[i].name === evt.target.children[1].value){
          return true;
        }
       }}
  render() {
    const { contacts } = this.state;
    return(
    <>
        <h1 className={styles.title}>Phonebook</h1>
      <div className={styles.phonebook}>
        <form className={styles.form} id="#form" onSubmit={evt=>{
          evt.preventDefault()
         if(!(this.checking(contacts, evt))){
          this.setState({
            name: evt.target.children[1].value,
            number: evt.target.children[3].value,
          })
        } else{
          alert(`${evt.target.children[1].value} is already in list`)
        }
        }}>
          <h3 className={styles.text}>Name</h3>
          <input type="text" required></input>
          <h3>Number</h3>
          <input type="text" required></input>
          <button className={styles.button} type="submit">Add Contact</button>
        </form>
      </div>

      <div className={styles.contacts}>
        <h1>Contacts</h1>
          <input type="text" onChange={evt=>{
            console.log(evt.target.value.toLowerCase())
            this.setState({
              contacts: this.state.filter.filter(contact=>contact.name.toLowerCase().includes(evt.target.value.toLowerCase()))
            })
          }}></input>
          <ul>
          {contacts.map(contact =>(
            <li className={styles.element} key={ contact.id } keyid={contact.id}>
              {contact.name}: {contact.number} <button className={styles.button} onClick={evt=>{
                contacts.splice(contacts.indexOf(contacts.find(contact=>contact.id===evt.target.closest('LI').getAttribute("keyid"))), 1)
                this.state.filter.splice(contacts.indexOf(contacts.find(contact=>contact.id===evt.target.closest('LI').getAttribute("keyid"))), 1)
                this.setState({
                  test: false,
                })
              }}>Delete</button>
            </li>
          ))}
          </ul>
      </div>
    </>        
    )
  };
}