import React, {Component} from 'react';
import Contact from './Contact';
import styles from './Contacts.module.css';

class Contacts extends Component{
    
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

export default Contacts;