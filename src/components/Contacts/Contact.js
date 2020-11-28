import React, {Component} from 'react';
import styles from './ContactList.module.css'
import PropTypes from 'prop-types';

class Contact extends Component{
    onHandleDelete = (e) => {
        e.preventDefault()
        console.log(e.target.parentNode.closest('li').getAttribute("id"))
        this.props.handleDeleteContact(e.target.parentNode.closest('li').getAttribute("id"))
    }
    render(){
    return(
        <li id={this.props.id} className={styles.listItem}>
            <p>{this.props.name}: {this.props.number}</p> <button onClick={this.onHandleDelete} className={styles.button}>Delete</button>
        </li>
    )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDeleteContact: PropTypes.func.isRequired,
}

export default Contact;