import React from 'react';
import { Consumer } from '../../context';
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import InputGroup from './InputGroup';
// import { faRss } from '@fortawesome/free-solid-svg-icons';
export default class EditContact extends React.Component{
    
    state={
        name: '',
        email: '',
        phone: '',
        errors: { name: '', email: '', phone: '' }
    }
    
    async componentDidMount(){
        const {id}=this.props.match.params;
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const {name,email,phone}=res.data;
        this.setState({name,email,phone})

    }

    onChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        if (this.state.name === '') {
            this.setState({
                ...this.state, errors: {
                    name: 'Name is required'
                }
            })
            return;
        } else if (this.state.email === '') {
            this.setState({
                ...this.state, errors: {
                    email: 'Email is required'
                }
            })
            return;
        } else if (this.state.phone === '') {
            this.setState({
                ...this.state, errors: {
                    phone: 'Phone is required'
                }
            })
            return;
        } else {
            const {id}=this.props.match.params;
            const res=await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,this.state);

            dispatch({
                type:'UPDATE_CONTACT',
                payload:res.data
            })
            this.setState({
                name: '',
                email: '',
                phone: '',
                errors: { name: '', email: '', phone: '' }
            });
            this.props.history.push('/');
        }
    }
    render(){
        const {name,email,phone,errors}=this.state;
        return (
            <Consumer>
                {
                    value => {
    
                        const { dispatch } = value;
                        return (
                            <div className='card'>
                                <div className='card-header'>Add Contact</div>
                                <div className='card-body'>
                                    <form onSubmit={(e) => { this.onSubmit(dispatch, e) }}>
                                        <InputGroup
                                            name='name'
                                            placeholder='Enter Name...'
                                            onChange={this.onChange}
                                            value={name}
                                            label="Name"
                                            error={errors.name}
                                        />
                                        <InputGroup
                                            name='email'
                                            placeholder='Enter Email...'
                                            onChange={this.onChange}
                                            value={email}
                                            label="Email"
                                            error={errors.email}
                                        />
                                        <InputGroup
                                            name='phone'
                                            
                                            placeholder='Enter Phone...'
                                            onChange={this.onChange}
                                            value={phone}
                                            label='Phone'
                                            error={errors.phone}
                                        />
                                        <input type='submit' className='btn btn-block btn-light' value='Update'></input>
                                    </form>
                                </div>
    
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
    

}
