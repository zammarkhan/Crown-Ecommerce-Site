import React from 'react';
import '../form-input/form-input.scss';

const FormInput = ({onChange,label,...otherProps}) => (
    <div className = "group">
        <input className='form-input'onChange={onChange} {...otherProps}>
        </input>
        {
            label ?
           ( <label className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label`}>
               {label}

            </label>)
            :null
        }
       

    </div>
);

export default FormInput;