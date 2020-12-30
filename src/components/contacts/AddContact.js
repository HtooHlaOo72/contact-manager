import React, { useState } from 'react';
import { Consumer } from '../../context';
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import InputGroup from './InputGroup';
// import { faRss } from '@fortawesome/free-solid-svg-icons';
export default function AddContact(props) {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        errors: { name: '', email: '', phone: '' }
    });
    const { name, email, phone, errors } = contact;


    const onChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }
    const onSubmit = async (dispatch, e) => {
        e.preventDefault();
        if (name === '') {
            setContact({
                ...contact, errors: {
                    name: 'Name is required'
                }
            })
            return;
        } else if (email === '') {
            setContact({
                ...contact, errors: {
                    email: 'Email is required'
                }
            })
            return;
        } else if (phone === '') {
            setContact({
                ...contact, errors: {
                    phone: 'Phone is required'
                }
            })
            return;
        } else {
            const res=await axios.post(`https://jsonplaceholder.typicode.com/users`,{name,email,phone});
            
            dispatch(
                {
                    type: 'ADD_CONTACT',
                    payload:res.data
                }
            )
            
            setContact({
                name: '',
                email: '',
                phone: '',
                errors: { name: '', email: '', phone: '' }
            });
            props.history.push('/');
        }



    }
    return (
        <Consumer>
            {
                value => {

                    const { dispatch } = value;
                    return (
                        <div className='card'>
                            <div className='card-header'>Add Contact</div>
                            <div className='card-body'>
                                <form onSubmit={(e) => { onSubmit(dispatch, e) }}>
                                    <InputGroup
                                        name='name'
                                        placeholder='Enter Name...'
                                        onChange={onChange}
                                        value={name}
                                        label="Name"
                                        error={errors.name}
                                    />
                                    <InputGroup
                                        name='email'
                                        placeholder='Enter Email...'
                                        onChange={onChange}
                                        value={email}
                                        label="Email"
                                        error={errors.email}
                                    />
                                    <InputGroup
                                        name='phone'
                                        type='number'
                                        placeholder='Enter Phone...'
                                        onChange={onChange}
                                        value={phone}
                                        label='Phone'
                                        error={errors.phone}
                                    />
                                    <input type='submit' className='btn btn-block btn-light' value='Add'></input>
                                </form>
                            </div>

                        </div>
                    )
                }
            }
        </Consumer>
    )

}
