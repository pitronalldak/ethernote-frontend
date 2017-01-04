import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/main';

class DocComponent extends Component {
        render() {
        return (
            <div className="mainContainer">
                <div class="mainContainerColumn left">
                    <div class="contractHeaderContainer">
                        <div class="contractHeaderTitleContainer ethereum">
                            <div class="contractHeaderTitle">Contract Signed</div>
                        </div><div class="contractHeaderItemsContainer">
                        <div class="contractHeaderItem">
                            <div class="contractHeaderItemTitle">Document Id</div>
                            <!--div.contractHeaderItemDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.-->
                            <div class="contractHeaderItemValueContainer" id="contactHeaderDocumentId">07407820677fb20e1c017dc8f32b696dce757138</div></div><div class="contractHeaderItem"><div class="contractHeaderItemTitle">Pdf hash</div>
                        <!--div.contractHeaderItemDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.-->
                        <div class="contractHeaderItemValueContainer" id="contactHeaderPDFHash">de84ace63b18eb749b2ba97cf20fbec93d3ede1cddc0d57a5a8a01523475f453</div></div><div class="contractHeaderItem"><div class="contractHeaderItemTitle">Transaction Id</div>
                        <!--div.contractHeaderItemDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.-->
                        <div class="contractHeaderItemValueContainer" id="contactHeaderTransactionId"></div></div><div class="contractHeaderItem"><div class="contractHeaderItemTitle">Contract Address</div>
                        <!--div.contractHeaderItemDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.-->
                        <div class="contractHeaderItemValueContainer" id="contactHeaderContractAddress">0xd66446c10959da460dc06a4106695b38ec5be589</div></div></div>
                        <!--div.contractHeaderItem

                    <div class="contractHeaderTitleContainer hellosign">
                        <div class="contractHeaderTitle">Electronic Signature Contract</div>
                    </div>
                        <div>
                            <span class="contractHeaderDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                    </div>
                        <div class="templateContainer" id="templateContainer">
                    <div class="templateInnerContainer"><!--<table class="templateHeaderTable">
  <tr>
    <td><span class="templateHeaderTitle">Promissory note</span></td>
    <td><span id="$Currency" class="templateVariable"></span> <span id="$Value" class="templateVariable"></span></td>
  </tr>
  <tr>
    <td>(Lump-Sum Repayment)</td>
    <td><span class="curDateTimeSpan"></span></td>
  </tr>
</table>-->
                    <!--<div class="templateHeaderContainer">
                        <div class="templateHeaderContainerColumn left">
                            <div><span class="templateHeaderTitle">Promissory note</span></div>
                            <div>(Lump-Sum Repayment)</div>
                        </div>
                        <div class="templateHeaderContainerColumn right">
                            <div><span id="$Currency" class="templateVariable"></span> <span id="$Value" class="templateVariable"></span></div>
                            <div><span class="curDateTimeSpan"></span></div>
                        </div>
                    </div>-->
                    <div class="templateHeaderContainer">
                        <div class="templateHeaderContainerColumn" style="float: left;">
                            <div><span class="templateHeaderTitle">Promissory note</span></div>
                            <div>(Lump-Sum Repayment)</div>
                        </div>
                        <div class="templateHeaderContainerColumn right">
                            <div><span id="$Currency" class="">USD</span> <span id="$Currency_Value" class="">123</span></div>
                            <div><span id="$ContractDateTime">03.01.2017 22:55</span></div>
                        </div>
                    </div>
                    <div class="templateStatementContainer">
                        <div>
                            For value received
                            <span id="$Borrowers_Last_Name" class="">123</span>
                            <span id="$Borrowers_First_Name" class="">123</span>  ,
                            <span id="$Borrower_ID" class="">123</span>
                        </div>
                        <div>
                            <span class="templateFieldLabel">Address</span>:
                            <span id="$Borrowers_Address" class="">123</span>
                        </div>
                        <div>
                            <span class="templateFieldLabel">Email</span>:
                            <span id="$Borrowers_Email" class="">123@123222.ru</span>
                        </div>
                        <div>
                            <!--<span class="templateFieldLabel">Bitcoin Wallet</span>:
                            <span id="$Borrowers_Bitcoin_Address" class="templateVariable"></span><br/>-->
                            promises to pay
                        </div>
                        <div>
                            <span id="$Lenders_Last_Name" class="">123</span>
                            <span id="$Lenders_First_Name" class="">123</span>  ,
                            <span id="$Lender_ID" class="">123</span>
                        </div>
                        <div>
                            <span class="templateFieldLabel">Address</span>:
                            <span id="$Lenders_Address" class="">123</span>
                        </div>
                        <div>
                            <span class="templateFieldLabel">Email</span>:
                            <span id="$Lenders_Email" class="">123@12321.ru</span>
                        </div>
                    </div>
                    <!--<span class="templateFieldLabel">Email</span>:
                    <span id="$Lenders_Email" class="templateVariable"></span><br/>
                    <span class="templateFieldLabel">Bitcoin Wallet</span>:
                    <span id="$Lenders_Bitcoin_Address" class="templateVariable"></span>-->

                    <div>The principal amount of <span id="$Currency" class="">USD</span> <span id="$Currency_Value" class="">123</span> , with interest at the annual rate of <span id="$Percents" class="">12</span> percent on any unpaid balance.</div>
                    <div>Payment on this note is due and payable to Lender in full on or before <span id="$Date_Due" class="">23.01.2017</span> .</div>
                    <div>This note may be prepaid in whole or in part at any time without penalty. If Lender prevails in a lawsuit to collect on this note, Borrower agrees to pay Lender's attorney fees in an amount the court finds to be just and reasonable.</div>
                    <div>The term Borrower refers to one or more borrowers. If there is more than one borrower, they agree to be jointly and severally liable. The term Lender refers to any person who legally holds this note, including a buyer in due course.</div></div><div class="bottomBar"></div></div></div>
            </div>
        );
    }
}

DocComponent.PropTypes = {
    borrowerForm: PropTypes.object
};

const mapStateToProps = (state) => ({
    borrowerForm: state.form.borrowerForm,
});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps)(DocComponent);