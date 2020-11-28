import React, {Component} from 'react';
import Contact from './Contact';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';


class ContactList extends Component{
    
    render(){
        const contacts = this.props.contacts.filter(contact=>contact.name.toLowerCase().includes(this.props.filter.toLowerCase()));
        return(
            <div>
                <ul className={styles.list}>        
                    {contacts.map(contact=>(
                        <Contact 
                        name={contact.name}
                        number={contact.number}
                        id={contact.id}
                        key={contact.id}
                        handleDeleteContact={this.props.handleDeleteContact}
                         />
                    ))}
                </ul>
            </div>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
    })).isRequired,
    handleDeleteContact: PropTypes.func.isRequired,
}
export default ContactList;