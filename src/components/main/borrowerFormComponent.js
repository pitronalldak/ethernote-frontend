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
    if (!values.borrowerId) {
        errors.borrowerId = 'Borrower ID is required'
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
            <input {...input} type={type} className="inputVar"/>
        </div>
    </div>
);

const BorrowerFormComponent = (props) => {
    const { handleSubmit } = props;
    return (
        <form className="templateEditorForm" onSubmit={handleSubmit}>
            <div className="inputVarContainer undefined">
                <label className="inputVarLabel">Currency</label>
                <div>
                    <Field name="currency" component="select" type="currency" className="inputVar">
                        <option selected="" value=""></option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </Field>
                </div>
            </div>
            <Field name="value" type="number" component={renderField} label="Value"/>
            <Field name="lastName" type="text" component={renderField} label="Last Name"/>
            <Field name="firstName" type="text" component={renderField} label="First Name"/>
            <Field name="borrowerId" type="text" component={renderField} label="Borrower ID"/>
            <Field name="address" type="text" component={renderField} label="Address"/>
            <Field name="email" type="text" component={renderField} label="Email"/>
            <Field name="percents" type="number" component={renderField} label="Percents"/>
            <Field name="date" type="text" component={renderField} label="Date Due"/>
            <div className="submitContainer">
                <button type="submit" className="submit">Create</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'borrowerForm',
    validate,
})(BorrowerFormComponent)