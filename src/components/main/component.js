import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux';
import  moment  from 'moment';

import BorrowerFormComponent from './borrowerFormComponent';
import LenderFormComponent from './lenderFormComponent';

import Actions from '../../actions/main';

class MainComponent extends Component {
    state = {
        step: 1
    };

    handleSubmitBorrowerForm = () => {
        this.setState({step: 2});
    };

    handleSubmitLenderForm = () => {
        this.setState({step: 3});
        browserHistory.push('doc/de84ace63b18eb749b2ba97cf20fbec93d3ede1cddc0d57a5a8a01523475f453');
    };

    renderTemplateContainer = () => {
        const {borrowerForm, lenderForm} = this.props;
        const {step} = this.state;
        return (
            <div className="mainContainerColumn left">
                {borrowerForm ?
                < div className="templateContainer">
                    <div className="templateInnerContainer">
                        <div className="templateHeaderContainer">
                            <div className="templateHeaderContainerColumn left">
                                <div>
                                    <span className="templateHeaderTitle">Promissory note</span>
                                </div>
                                <div>(Lump-Sum Repayment)</div>
                            </div>
                            <div className="templateHeaderContainerColumn right">
                                <div>
                                    <span className={step ===1 ? 'templateVariable active': null}>
                                        {borrowerForm.values ? borrowerForm.values.currency || 'Currency' : 'Currency' }
                                    </span>
                                    <span className={step ===1 ? 'templateVariable active': null}>
                                        &nbsp;
                                        {borrowerForm.values ? borrowerForm.values.value || 'Value' : 'Value' }
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {moment(Date.now()).format('DD.MM.YYYY, h:mm')}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="templateStatementContainer">
                            <div>
                                For value received
                                <span className={step ===1 ? 'templateVariable active': null}>
                                    &nbsp;
                                    {borrowerForm.values ? borrowerForm.values.lastName || 'Borrower Last Name' : 'Borrower Last Name'}
                                </span>
                                <span className={step ===1 ? 'templateVariable active': null}>
                                    &nbsp;
                                    {borrowerForm.values ? borrowerForm.values.firstName || 'Borrower First Name' : 'Borrower First Name'}
                                </span>,&nbsp;
                                <span className={step ===1 ? 'templateVariable active': null}>
                                    {borrowerForm.values ? borrowerForm.values.borrowerId || 'Borrower ID' : 'Borrower ID'}
                                </span>
                            </div>
                            <div>
                                <span className="templateFieldLabel">Address</span>:&nbsp;
                                <span className={step ===1 ? 'templateVariable active': null}>
                                    {borrowerForm.values ? borrowerForm.values.address || "Borrower's Address" : "Borrower's Address"}
                                </span>
                            </div>
                            <div>
                                <span className="templateFieldLabel">Email</span>:&nbsp;
                                <span className={step ===1 ? 'templateVariable active': null}>
                                    {borrowerForm.values ? borrowerForm.values.email || "Borrower's Email" : "Borrower's Email"}
                                </span>
                            </div>
                            {lenderForm ?
                                <div>
                                    <div>
                                        {/*<!--<span class="templateFieldLabel">Bitcoin Wallet</span>:*/}
                                        {/*<span id="$Borrowers_Bitcoin_Address" class="templateVariable"></span><br/>-->*/}
                                        promises to pay
                                    </div>
                                    <div>
                                        <span className="templateVariable active">
                                            &nbsp;
                                            {lenderForm.values ? lenderForm.values.lastName || "Lender's Last Name" : "Lender's Last Name"}
                                        </span>
                                        <span className="templateVariable active">
                                            &nbsp;
                                            {lenderForm.values ? lenderForm.values.firstName || "Lender's First Name" : "Lender's First Name"}
                                        </span> ,&nbsp;
                                        <span className="templateVariable active">
                                            {lenderForm.values ? lenderForm.values.lenderId || "Lender ID" : "Lender ID"}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="templateFieldLabel">Address</span>:&nbsp;
                                        <span className="templateVariable active">
                                            {lenderForm.values ? lenderForm.values.address || "Lender's Address" : "Lender's Address"}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="templateFieldLabel">Email</span>:&nbsp;
                                        <span className="templateVariable active">
                                            {lenderForm.values ? lenderForm.values.email || "Lender's Email": "Lender's Email"}
                                        </span>
                                    </div>
                                </div> : null
                            }
                        </div>
                        <div>
                            The principal amount of
                            <span className={step ===1 ? 'templateVariable active': null}>
                                &nbsp;
                                {borrowerForm.values ? borrowerForm.values.currency || "Currency" : "Currency" }
                            </span>
                            <span className={step ===1 ? 'templateVariable active': null}>
                                &nbsp;
                                {borrowerForm.values ? borrowerForm.values.value || "Value" : "Value"}
                            </span>, with interest at the annual rate of
                            <span className={step ===1 ? 'templateVariable active': null}>&nbsp;
                                {borrowerForm.values ? borrowerForm.values.percents || "Percents": "Percents"}
                            </span> percent on any unpaid balance.
                        </div>
                        <div>
                            Payment on this note is due and payable to Lender in full on or before
                            <span className={step ===1 ? 'templateVariable active': null}>&nbsp;
                                {this.props.date ? moment(this.props.date).format('DD.MM.YYYY') : "Date Due" }
                            </span> .
                        </div>
                        <div>
                            This note may be prepaid in whole or in part at any time without penalty. If Lender prevails in a lawsuit to collect on this note,
                            Borrower agrees to pay Lender's attorney fees in an amount the court finds to be just and reasonable.
                        </div>
                        <div>
                            The term Borrower refers to one or more borrowers. If there is more than one borrower,
                            they agree to be jointly and severally liable. The term Lender refers to any person who
                            legally holds this note, including a buyer in due course.
                        </div>
                    </div>
                    <div className="bottomBar"></div>
                </div>: null
                }
            </div>
        )
    };


    render() {
        const {date, handleChangeDate} = this.props;
        return (
            <div className="mainContainer">
                {this.renderTemplateContainer()}
                <div className="mainContainerColumn right">
                    <div className="templateEditorContainer">
                        <div className="templateEditorTitle">
                            Template Editor
                            {this.state.step === 1 ?
                                <BorrowerFormComponent
                                    onSubmit={this.handleSubmitBorrowerForm}
                                    date={date}
                                    handleChangeDate={handleChangeDate}
                                /> :
                                this.state.step === 2 ?
                                    <LenderFormComponent
                                        onSubmit={this.handleSubmitLenderForm}
                                    /> :
                                    null
                            }
                        </div>
                    </div>
                </div>
                {/*<BorrowerModalComponent show={this.state.showBorrowerModal}/>*/}
            </div>
        );
    }
}

MainComponent.PropTypes = {
    borrowerForm: PropTypes.object,
    lenderForm: PropTypes.object,
    date: PropTypes.object,
    handleChangeDate: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    borrowerForm: state.form.borrowerForm,
    lenderForm: state.form.lenderForm,
    date: state.main.date
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);