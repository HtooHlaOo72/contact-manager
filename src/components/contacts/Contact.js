import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown ,faTimes ,faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {Consumer} from '../../context';




function Contact(props) {
  const [showInfo, setShowInfo] = useState(false);
  const onShowClick = (e) => {
    setShowInfo(!showInfo);
    console.log(showInfo);
  }
  const onDeleteClick=async (id,dispatch)=>{
    try{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch(
      {
        type:'DELETE_CONTACT',
        payload:id
      }
    );
  }catch(e){
    dispatch(
      {
        type:'DELETE_CONTACT',
        payload:id
      }
    );
  }
    
    
    
  }
  return (
    <Consumer>
    {value=>{
      const {dispatch}=value;
      return (
      <div className="card card-body mb-3">
      <h4 className='card-title'>{props.name} <FontAwesomeIcon onClick={onShowClick} icon={faSortDown} style={{cursor:'pointer'}}/>
      <FontAwesomeIcon onClick={()=>onDeleteClick(props.id,dispatch)} icon={faTimes} style={{cursor:'pointer',float:'right',color:'red'}}/>
      <Link to={`/contact/edit/${props.id}`}>
        <FontAwesomeIcon 
        
        icon={faPencilAlt} 
        style={{cursor:'pointer',float:'right',marginRight:'15px',color:'yellow'}}/>
      </Link>
      </h4>
      {
        (showInfo) &&
        <ul className=" list-group">
          <li className="list-group-item">{`Email-${props.email}`}</li>
          <li className="list-group-item">{`Phone-${props.phone}`}</li>
        </ul>
      }

    </div>
    )
    }}
    
    </Consumer>
  );
}
Contact.prototype = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default Contact;
