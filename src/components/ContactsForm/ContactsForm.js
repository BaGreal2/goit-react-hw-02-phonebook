import React, {Component} from 'react';
import styles from './ContactsForm.module.css';

class ContactsForm extends Component{
    state={
        name: "",
        number: "",
    }
    onChangeName = (e) => {
        e.preventDefault()
        this.setState({
            name: e.target.value,
          })
    }
    onChangeNumber = (e) => {
        e.preventDefault()
        this.setState({
            number: e.target.value,
          })
    }
    onPushContact = (e) => {
        e.preventDefault()
        console.log(e.target)
        this.props.handlePushContact(this.state.name, this.state.number)
    }
    render(){
        const name=this.props.name
        const number=this.props.number
        return(
            <div className={styles.container}>
                <form onSubmit={this.onPushContact}>
                    <h3 className={styles.title}>Name</h3>
                    <input name="name" type="text" value={name} onChange={this.onChangeName}></input>
                    <h3 className={styles.title}>Number</h3>
                    <input name="number" type="text" value={number} onChange={this.onChangeNumber}></input><br></br>
                    <button className={styles.button} type="submit">Add contact</button>
                </form>
            </div>        
            )
    }
}

export default ContactsForm;