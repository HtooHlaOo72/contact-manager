import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faPlus,faQuestion} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Header(props) {
    
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className='container'>
        <Link className='navbar-brand' to='/'>{props.branding}</Link>
        <nav className=''>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'><FontAwesomeIcon  icon={faHome}/> Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/contact/add'><FontAwesomeIcon  icon={faPlus}/> Add</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/about'><FontAwesomeIcon  icon={faQuestion}/> About</Link>
                </li>
            </ul>
        </nav>
      </div>
      
      
    </nav>
  );
}

export default Header;
