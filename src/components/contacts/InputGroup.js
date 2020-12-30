import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
function InputGroup(
    {
        label, name, type, placeholder, onChange, value ,error
    }
) {
    return (
        
        <div className='form-group'>
            <label htmlFor='name'>{label}</label>
            <input type={type} 
                className={classnames("form-control form-control-lg",{'is-invalid':error})} 
                name={name}
                placeholder={placeholder} 
                onChange={onChange}
                error={error} 
                value={value} />
                {
            (error)&&<div className='invalid-feedback'>{error}</div>
        }
        </div>
        
        
    )
}
InputGroup.defaultProps={
    type:'text'
}
InputGroup.prototype={
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    error:PropTypes.string,
    onChange:PropTypes.func.isRequired,
}
export default InputGroup;
