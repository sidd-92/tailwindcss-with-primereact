import { AutoComplete, Autocompletep } from "primereact/autocomplete";
import { InputText } from "primereact/inputtext";
import React from "react";
import ReactDom from "react-dom";
import { Button } from "primereact/button";
import DomHandler from "primereact/components/utils/DomHandler";
import error from "../../assets/img/error.svg";

class AutocompleteDropdown extends AutoComplete {
  constructor(props) {
    super(props);
    this.renderSimpleAutoComplete = this.renderSimpleAutoComplete.bind(this);
    this.ref = this.ref.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
    this.customOnBlur = this.customOnBlur.bind(this);
    this.customOnFocus = this.customOnFocus.bind(this);
    this.showPanel = this.showPanel.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      isFocussed: false,
      ddIconClassName: "pi pi-fw pi-chevron-down",
      ddFontColor: {
        color: "#e2e8f0",
      },
    };
  }

  ref(_this5, el) {
    return (_this5.inputEl = ReactDom.findDOMNode(el));
  }

  ref2(_this, el) {
    return (_this.ddBtn = ReactDom.findDOMNode(el));
  }

  showPanel() {
    var _this3 = this;

    if (this.focus) {
      this.alignPanel();

      if (
        this.panel &&
        this.panel.element &&
        !this.panel.element.offsetParent
      ) {
        this.panel.element.style.zIndex = String(DomHandler.generateZIndex());
        this.panel.element.style.display = "block";
        //this.panel.element.style.maxHeight = "8rem";
        setTimeout(function () {
          if (_this3.panel && _this3.panel.element) {
            DomHandler.addClass(
              _this3.panel.element,
              "p-input-overlay-visible"
            );

            DomHandler.removeClass(
              _this3.panel.element,
              "p-input-overlay-hidden"
            );
          }
        }, 1);
        this.alignPanel();
        this.bindDocumentClickListener();
      }
    }
  }

  renderDropdown() {
    var _this = this;

    return (
      <React.Fragment>
        <Button
          ref={(el) => this.ref2(_this, el)}
          type={"button"}
          icon={this.state.ddIconClassName}
          className={
            "p-autocomplete-dropdown -mx-8 my-3 w-8 text-base font-extrabold align-middle"
          }
          disabled={this.props.disabled}
          onClick={this.onButtonClick}
          style={this.state.ddFontColor}
        ></Button>

        {this.props.validation ? (
          <div className="flex flex-row align-middle mt-1 text-xs h-3 text-left text-red-txt">
            <div className="pr-1">
              <img className="w-4" src={error} alt="error" />
            </div>
            <div>{this.props.validation}</div>
          </div>
        ) : (
            ""
          )}
      </React.Fragment>
    );
  }

  selectItem(event, option) {
    if (this.props.multiple) {
      this.inputEl.value = "";

      if (!this.isSelected(option)) {
        var newValue = this.props.value
          ? [].concat(this._toConsumableArray(this.props.value), [option])
          : [option];
        this.updateModel(event, newValue);
      }
    } else {
      this.updateInputField(option);
      this.updateModel(event, option);
    }

    if (this.props.onSelect) {
      this.props.onSelect({
        originalEvent: event,
        value: option,
      });
    }

    //this.inputEl.focus();
  }

  customOnFocus(event) {
    this.setState({
      isFocussed: true,
      ddIconClassName: "pi pi-fw pi-chevron-up",
      ddFontColor: {
        color: "#a0aec0",
      },
    });
    this.onInputFocus(event);
    //this.ddBtn.click();
    this.onDropdownClick(event);
  }

  customOnBlur(event) {
    this.setState({
      isFocussed: false,
      ddIconClassName: "pi pi-fw pi-chevron-down",
      ddFontColor: {
        color: "#e2e8f0",
      },
    });
    this.onInputBlur(event);
  }

  onButtonClick(event) {
    this.onDropdownClick(event);
  }

  renderSimpleAutoComplete() {
    var _this5 = this;

    var inputClassDD = this.props.dropdown ? " p-autocomplete-dd-input " : " ";
    var ddClassname = this.props.className ? this.props.className : " ";
    var imageClassName = this.props.image
      ? " customImageAutoCompletePadding "
      : " ";
    var inputClassName =
      " p-inputtext p-component p-autocomplete-input " +
      " " +
      ddClassname +
      " " +
      " w-full transition duration-150 ease-out focus:border-primary text-left text-gray-600 " +
      " text-sm sm:text-field border-gray-300 border-2 placeholder-primary  rounded-md rounded-r-md " +
      "  " +
      inputClassDD +
      imageClassName;
    var customStyle = {paddingLeft: "0.5rem"};
    if(this.props.customStyle){
      customStyle = {...customStyle, ...this.props.customStyle};
    }

    return (
      <React.Fragment>
        {this.props.image ? (
          <div className="flex w-6 text-sm z-10">
            <img
              className="h-auto w-6 self-center"
              style={{ position: "absolute", top: "15px", left: "9px" }}
              src={this.props.image}
              alt="logo"
            />
          </div>
        ) : (
            ""
          )}
        <InputText
          ref={(el) => this.ref(_this5, el)}
          id={this.props.inputId}
          type={this.props.type}
          name={this.props.name}
          defaultValue={this.formatValue(this.props.value)}
          role={"searchbox"}
          aria-autocomplete={"list"}
          aria-controls={this.listId}
          aria-labelledby={this.props.ariaLabelledBy}
          className={inputClassName}
          style={customStyle }
          autoComplete={"off"}
          readOnly={this.props.readonly}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          size={this.props.size}
          maxLength={this.props.maxlength}
          tabIndex={this.props.tabindex}
          onBlur={this.customOnBlur}
          onFocus={this.customOnFocus}
          onChange={this.onInputChange}
          onMouseDown={this.props.onMouseDown}
          onKeyUp={this.props.onKeyUp}
          onKeyDown={this.onInputKeyDown}
          onKeyPress={this.props.onKeyPress}
          onContextMenu={this.props.onContextMenu}
          onClick={this.onInputClick}
          onDoubleClick={this.props.onDblClick}
        ></InputText>
      </React.Fragment>
    );
  }
}

export default AutocompleteDropdown;
