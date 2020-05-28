import { Dialog } from "primereact/dialog";
import React, { Component } from "react";
import ButtonBox from "../ButtonBox/ButtonBox";

class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      includCloseButton: false,
      includeStandardHeader: false,
      includeStandardFooter: false,
      includeBottomButtons: false,
      cancelOnClick: null,
      confirmOnClick: null,
      headerText: null,
      standardFooterText: null,
      includeGoogleVerificationCode: false,
    };
    this.header = this.header.bind(this);
    this.footer = this.footer.bind(this);
  }

  header() {
    return (
      <div className="flex flex-col w-full">
        {this.props.includCloseButton ? (
          <div className="flex flex-row pt-6 pl-6 pr-6 justify-end">
            <i className="pi pi-times"></i>
          </div>
        ) : (
          ""
        )}
        {this.props.includeStandardHeader ? (
          <div className="flex flex-row pt-20 pl-6 pr-6 pb-4 ml-3 mr-3 border-b-2 border-primary text-lg text-center justify-center text-primary-medium">
            {this.props.headerText}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  footer() {
    return (
      <div className="flex flex-col w-full">
        {this.props.includeBottomButtons ? (
          <div className="flex flex-row w-full justify-center text-center pb-10 px-10 pt-0 h-auto">
            <div className="pl-2 ">
              <ButtonBox
                btnColor={this.props.btnColor}
                btnColorHover={this.props.btnColorHover}
                btnColorActive={this.props.btnColorActive}
                label={this.props.confirmBtnLabel || "Confirm"}
                buttonSize="small"
                onClick={(e) => this.props.onClickOfRightButton()}
              />
              {this.props.showSecondBtn ? (
                <div className="pt-4">
                  <ButtonBox
                    btnColor="bg-orange-400"
                    btnColorHover="bg-primary"
                    btnColorActive="bg-orange-700"
                    label={"Go To Nomikai Now"}
                    buttonSize="small"
                    onClick={(e) => this.props.onClickSecondButton()}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          ""
        )}
        {this.props.includeStandardFooter ? (
          <div
            className="flex flex-row pl-6 pr-6 pb-5 pt-5 ml-3 mr-3 border-t-2 border-primary
           text-lg text-center justify-center text-primary-medium cursor-pointer"
            onClick={(e) => this.props.onClickOfFooter()}
          >
            {this.props.standardFooterText}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Dialog
          {...this.props}
          header={this.header()}
          footer={this.footer()}
          leftButtonName="Text"
          RightButtonName="Text"
          standardFooterText="Text"
          closable={true}
        >
          {this.props.children}
        </Dialog>
      </React.Fragment>
    );
  }
}

export default DialogBox;
