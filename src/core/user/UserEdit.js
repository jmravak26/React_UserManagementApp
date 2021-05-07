import React from 'react'
import { Field, Form } from 'react-final-form'
import PropTypes from 'prop-types'

export default function UserEdit(props){
    
    return <>
        <Form
            onSubmit={props.onSave}
            validate={values => {
                const errors = {}
                if(!values.first_name) errors.first_name = 'Ne smije biti prazno'
                if(!values.last_name) errors.last_name = 'Ne smije biti prazno'
                return errors
            }}
            render={({ handleSubmit, errors }) => (
                <form onSubmit={handleSubmit}>
                    <h1>Add user</h1>
                    <Field name="first_name" component="input" placeholder={`First Name ${errors.first_name && `(${errors.first_name})`}`} />
                    <Field name="last_name" component="input" placeholder={`Last Name ${errors.last_name && `(${errors.last_name})`}`}/>
                    <br/>
                    <Field name="email" component="input" placeholder="Email" />
                    <Field name="avatar" component="input" placeholder="Avatar URL" />
                   
                    <br/>
                    <div>
                        <button className='button' onClick={props.onCancel} >Cancel</button>
                        <button className='button' type="submit">Submit</button>
                    </div>
                </form>
            )}
        />
    </>
}

UserEdit.propTypes = {
    onCancel: PropTypes.func
}