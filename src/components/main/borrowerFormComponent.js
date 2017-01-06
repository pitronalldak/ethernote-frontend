import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker';
import BorrowerModalComponent from './borrowerModalComponent';

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
            <input
                {...input}
                type={type}
                className="inputVar"
                placeholder={touched ? error : null}
            />
        </div>
    </div>
);

class BorrowerFormComponent extends Component {

    render() {
        return (
            <div>
                <form className="templateEditorForm" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <div className="inputVarContainer undefined">
                        <label className="inputVarLabel">Currency</label>
                        <div>
                            <Field name="currency" component="select" type="currency" className="inputVar">
                                <option defaultValue="" value=""></option>
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
                    <div className="inputVarContainer undefined">
                        <label className="inputVarLabel">Date Due</label>
                        <DatePicker
                            selected={this.props.date}
                            className="inputVar"
                            onChange={this.props.handleChangeDate}
                        />
                    </div>
                    <div className="submitContainer">
                        <button type="submit" className="submit">Create</button>
                    </div>
                </form>
                {/*<BorrowerModalComponent*/}
                    {/*show={this.state.showModal}*/}
                    {/*onHide={this.onHideModal}*/}
                {/*/>*/}
            </div>
        )
    }
};

export default reduxForm({
    form: 'borrowerForm',
    destroyOnUnmount: false,
    validate,
})(BorrowerFormComponent)