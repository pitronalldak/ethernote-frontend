import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import BorrowerFormComponent from './borrowerFormComponent';
import BorrowerModalComponent from './borrowerModalComponent';
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
                                    <span className={step ===1 ? 'templateVariable': null}>
                                        {borrowerForm.values ? borrowerForm.values.currency || undefined : undefined }
                                    </span>
                                    <span className={step ===1 ? 'templateVariable': null}>
                                        {borrowerForm.values ? borrowerForm.values.value || undefined: undefined}
                                    </span>
                                </div>
                                <div>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="templateStatementContainer">
                            <div>
                                For value received
                                <span className={step ===1 ? 'templateVariable': null}>
                                    {borrowerForm.values ? borrowerForm.values.lastName || undefined: undefined}
                                </span>
                                <span className={step ===1 ? 'templateVariable': null}>
                                    {borrowerForm.values ? borrowerForm.values.firstName || undefined: undefined}
                                </span>  ,
                                <span className={step ===1 ? 'templateVariable': null}>
                                    {borrowerForm.values ? borrowerForm.values.borrowerId || undefined: undefined}
                                </span>
                            </div>
                            <div>
                                <span className="templateFieldLabel">Address</span>:
                                <span className={step ===1 ? 'templateVariable': null}>
                                    {borrowerForm.values ? borrowerForm.values.address || undefined: undefined}
                                </span>
                            </div>
                            <div>
                                <span className="templateFieldLabel">Email</span>:
                                <span className={step ===1 ? 'templateVariable': null}>
                                    {borrowerForm.values ? borrowerForm.values.email || undefined: undefined}
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
                                        <span className="templateVariable">
                                            {lenderForm.values ? lenderForm.values.lastName || undefined: undefined}
                                        </span>
                                        <span className="templateVariable">
                                            {lenderForm.values ? lenderForm.values.firstName || undefined: undefined}
                                        </span>  ,
                                        <span className="templateVariable">
                                            {lenderForm.values ? lenderForm.values.lenderId || undefined: undefined}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="templateFieldLabel">Address</span>:
                                        <span className="templateVariable">
                                            {lenderForm.values ? lenderForm.values.address || undefined: undefined}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="templateFieldLabel">Email</span>:
                                        <span className="templateVariable">
                                            {lenderForm.values ? lenderForm.values.email || undefined: undefined}
                                        </span>
                                    </div>
                                </div> : null
                            }
                        </div>
                        {/*<!--<span class="templateFieldLabel">Email</span>:*/}
                        {/*<span id="$Lenders_Email" class="templateVariable"></span><br/>*/}
                        {/*<span class="templateFieldLabel">Bitcoin Wallet</span>:*/}
                        {/*<span id="$Lenders_Bitcoin_Address" class="templateVariable"></span>-->*/}
                        <div>
                            The principal amount of
                            <span className="templateVariable">
                                {borrowerForm.values ? borrowerForm.values.currency || undefined : undefined }
                            </span>
                            <span className="templateVariable">
                                {borrowerForm.values ? borrowerForm.values.value || undefined: undefined}
                            </span> , with interest at the annual rate of
                            <span className="templateVariable">
                                {borrowerForm.values ? borrowerForm.values.percents || undefined: undefined}
                            </span> percent on any unpaid balance.
                        </div>
                        <div>
                            Payment on this note is due and payable to Lender in full on or before
                            <span className="templateVariable"></span> .
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
                <BorrowerModalComponent show={this.state.showBorrowerModal}/>
            </div>
        );
    }
}

MainComponent.PropTypes = {
    borrowerForm: PropTypes.object,
    lenderForm: PropTypes.object
};

const mapStateToProps = (state) => ({
    borrowerForm: state.form.borrowerForm,
    lenderForm: state.form.lenderForm
});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps)(MainComponent);