import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/main';

class DocComponent extends Component {
        render() {
        return (
            <div className="mainContainer">
                <div className="mainContainerColumn left">
                    <div className="contractHeaderContainer">
                        <div className="contractHeaderTitleContainer ethereum">
                            <div className="contractHeaderTitle">
                                Contract Signed
                            </div>
                        </div>
                        <div className="contractHeaderItemsContainer">
                            <div className="contractHeaderItem">
                                <div className="contractHeaderItemTitle">
                                    Document Id
                                </div>
                                <div className="contractHeaderItemValueContainer">
                                    07407820677fb20e1c017dc8f32b696dce757138
                                </div>
                            </div>
                            <div className="contractHeaderItem">
                                <div className="contractHeaderItemTitle">
                                    Pdf hash
                                </div>
                                <div className="contractHeaderItemValueContainer">
                                    de84ace63b18eb749b2ba97cf20fbec93d3ede1cddc0d57a5a8a01523475f453
                                </div>
                            </div>
                            <div className="contractHeaderItem">
                                <div className="contractHeaderItemTitle">
                                    Transaction Id
                                </div>
                                <div className="contractHeaderItemValueContainer"></div>
                            </div>
                            <div className="contractHeaderItem">
                                <div className="contractHeaderItemTitle">
                                    Contract Address
                                </div>
                                <div className="contractHeaderItemValueContainer">
                                    0xd66446c10959da460dc06a4106695b38ec5be589
                                </div>
                            </div>
                        </div>
                        <div className="contractHeaderTitleContainer hellosign">
                            <div className="contractHeaderTitle">
                                Electronic Signature Contract
                            </div>
                        </div>
                        <div>
                            <span className="contractHeaderDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </div>
                    </div>
                    <div className="templateContainer">
                        <div className="templateInnerContainer">
                            <div className="templateHeaderContainer">
                                <div className="templateHeaderContainerColumn left">
                                    <div>
                                        <span className="templateHeaderTitle">Promissory note</span>
                                    </div>
                                    <div>
                                        (Lump-Sum Repayment)
                                    </div>
                                </div>
                                <div className="templateHeaderContainerColumn right">
                                    <div>
                                        <span className="">USD</span>
                                        <span className="">123</span>
                                    </div>
                                    <div>
                                        <span>03.01.2017 22:55</span>
                                    </div>
                                </div>
                            </div>
                            <div className="templateStatementContainer">
                                <div>
                                    For value received
                                    <span>123</span>
                                    <span>123</span>  ,
                                    <span>123</span>
                                </div>
                                <div>
                                    <span className="templateFieldLabel">Address</span>:
                                    <span>123</span>
                                </div>
                                <div>
                                    <span className="templateFieldLabel">Email</span>:
                                    <span>123@123222.ru</span>
                                </div>
                                <div>
                                    promises to pay
                                </div>
                                <div>
                                    <span>123</span>
                                    <span>123</span>  ,
                                    <span>123</span>
                                </div>
                                <div>
                                    <span className="templateFieldLabel">Address</span>:
                                    <span>123</span>
                                </div>
                                <div>
                                    <span className="templateFieldLabel">Email</span>:
                                    <span>123@12321.ru</span>
                                </div>
                            </div>
                            <div>
                                The principal amount of&nbsp;
                                <span>USD</span>&nbsp;
                                <span>123</span>&nbsp;
                                , with interest at the annual rate of&nbsp;
                                <span>12</span>&nbsp;
                                percent on any unpaid balance.
                            </div>
                            <div>
                                Payment on this note is due and payable to Lender in full on or before&nbsp;
                                <span>23.01.2017</span> .
                            </div>
                            <div>
                                This note may be prepaid in whole or in part at any time without penalty.&nbsp;
                                If Lender prevails in a lawsuit to collect on this note, Borrower agrees to pay Lender's&nbsp;
                                attorney fees in an amount the court finds to be just and reasonable.
                            </div>
                            <div>
                                The term Borrower refers to one or more borrowers. If there is more than one borrower,&nbsp;
                                they agree to be jointly and severally liable. The term Lender refers to any person who legally&nbsp;
                                holds this note, including a buyer in due course.
                            </div>
                        </div>
                        <div className="bottomBar"></div>
                    </div>
                </div>
                <div className="mainContainerColumn right">
                    <div className="historyContainer">
                        <div className="historyTitle">History</div>
                        <div className="historyOuterItem">
                            <div className="historyStepContainer inProgress">
                                <div className="historyLineContainer"></div>
                            </div>
                            <div className="historyItemContainer">
                                <div className="historyItem">
                                    <div className="historyItemDate"></div>
                                    <div className="historyItemTitle">
                                        Borrower signed
                                    </div>
                                    <div className="historyItemDescription">
                                        Information about the borrower is entered and signed. The borrower agree pays off the money borrowed,
                                        plus interest, in one single payment.
                                    </div>
                                </div>
                                <div className="historyItemBottomSpace"></div>
                            </div>
                        </div>
                        <div className="historyOuterItem">
                            <div className="historyStepContainer inProgress">
                                <div className="historyLineContainer"></div>
                            </div>
                            <div className="historyItemContainer">
                                <div className="historyItem">
                                    <div className="historyItemDate"></div>
                                    <div className="historyItemTitle">
                                        Lender signed
                                    </div>
                                    <div className="historyItemDescription">
                                        Information about the lender is entered and signed.
                                        The lender agree, that the borrower pays off the money borrowed, plus interest, in one single payment.
                                    </div>
                                </div>
                                <div className="historyItemBottomSpace"></div>
                            </div>
                        </div>
                        <div className="historyOuterItem">
                            <div className="historyStepContainer inProgress">
                                <div className="historyLineContainer"></div>
                            </div>
                            <div className="historyItemContainer">
                                <div className="historyItem">
                                    <div className="historyItemDate"></div>
                                    <div className="historyItemTitle">Contract signed</div>
                                    <div className="historyItemDescription">
                                        Your promissory note is complete! Smart contract  is initialized.
                                    </div>
                                </div>
                                <div className="historyItemBottomSpace"></div>
                            </div>
                        </div>
                        <div className="historyOuterItem">
                            <div className="historyStepContainer notStarted">
                                <div className="historyLineContainer"></div>
                            </div>
                            <div className="historyItemContainer">
                                <div className="historyItem">
                                    <div className="historyItemDate"></div>
                                    <div className="historyItemTitle">
                                        Note funded
                                    </div>
                                    <div className="historyItemDescription">
                                        The resources specified in the promissory note is transferred by the lender to the borrower.
                                    </div>
                                </div>
                                <div className="historyItemBottomSpace"></div>
                            </div>
                        </div>
                        <div className="historyOuterItem">
                            <div className="historyStepContainer notStarted">
                                <div className="historyLineContainer"></div>
                            </div>
                            <div className="historyItemContainer">
                                <div className="historyItem">
                                    <div className="historyItemDate"></div>
                                    <div className="historyItemTitle">
                                        Paid in full
                                    </div>
                                    <div className="historyItemDescription">
                                        The borrower pays off the money borrowed, plus interest, in one single payment.
                                    </div>
                                </div>
                                <div className="historyItemBottomSpace"></div>
                            </div>
                        </div>
                    </div>
                </div>
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