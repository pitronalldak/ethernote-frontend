import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {};
    if (!values.lastName) {
        errors.lastName = 'Last name is required'
    }
    if (!values.firstName) {
        errors.firstName = 'First name is required'
    }
    if (!values.lenderId) {
        errors.lenderId = 'Lender ID is required'
    }
    if (!values.address) {
        errors.address = 'Address is required'
    }
    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="inputVarContainer undefined">
        <label className="inputVarLabel">{label}</label>
        <div>
            <input
                {...input}
                type={type}
                className="inputVar"
                placeholder={touched ? error : null}
            />
        </div>
    </div>
);

const LenderFormComponent = (props) => {
    return (
        <form className="templateEditorForm" onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field name="lastName" type="text" component={renderField} label="Last Name"/>
            <Field name="firstName" type="text" component={renderField} label="First Name"/>
            <Field name="lenderId" type="text" component={renderField} label="Lender ID"/>
            <Field name="address" type="text" component={renderField} label="Address"/>
            <Field name="email" type="text" component={renderField} label="Email"/>
            <div className="submitContainer">
                <button type="submit" className="submit">Accept</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'lenderForm',
    destroyOnUnmount: false,
    validate,
})(LenderFormComponent)