import React from 'react'

export default function FormGroup({labelText, inputType, placeholder, values, 
                                    onInput,
                                    onKeyUp,
                                    onChange,
                                    className,
                                    readOnly=false,
                                    reference}) {

  return (
            <div className='form-group'>
                <label> {labelText}</label>
                <input type={inputType} 
                        placeholder={placeholder} 
                        values={values}
                        onIput={onInput}
                        onKeyUp ={onKeyUp}
                        onChange ={onChange}
                        className={className}
                        readOnly={readOnly}
                        ref={reference}/>
            </div>
  )
}
