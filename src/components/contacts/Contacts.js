import React from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';
function Contacts(props) {
    return (
        <Consumer>
            {
                value => {
                    const { contacts } = value;
                    return (
                        <div>
                            {
                                contacts.map(contact => (
                                    <Contact key={contact.id} {...contact}/>
                                ))
                            }
                        </div>
                    )

                }
            }
        </Consumer>
    )

}


export default Contacts;
