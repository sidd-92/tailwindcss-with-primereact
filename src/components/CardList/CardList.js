import { DataView } from 'primereact/dataview';
import React, { Component } from 'react';
import pulldownhover from '../../assets/img/pull down hover.svg';
import pulldown from '../../assets/img/pull down.svg';
import BalanceCardPopup from "../BalanceCardPopup";


class CardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemID: ""
    }
    this.itemTemplate = this.itemTemplate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    if (this.state.itemID) {
      document.removeEventListener('click', this.handleClick, false);
      this.setState({
        itemID: ""
      })
    } else {
      document.addEventListener('click', this.handleClick, false);
      this.setState({
        itemID: e
      })
    }
  }

  itemTemplate(item, layout) {
    if (!item) {
      return;
    }
    if (layout === 'grid') {
      return (
        <div className="relative w-full sm:w-auto">
          <div className={item.status && item.status === "disabled" ? " w-full md:w-xs lg:w-68 xl:w-xs  " +
            " h-48 shadow-xl rounded-xl m-auto mb-4 sm:m-4 lg:m-2 xl:m-4 bg-gray-300 px-5 py-6 hover:shadow-2xl"
            : " w-full md:w-xs lg:w-68 xl:w-xs h-48 shadow-xl rounded-xl m-auto mb-4 sm:m-4 lg:m-2 xl:m-4 px-5 py-6 hover:shadow-2xl"}>
            <div class="flex flex-row h-10 w-full mb-1">
              <div className="flex w-1/2 items-center ">
                <div className="w-6 block inline-block mx-1">
                  <img src={item.icon} alt={item.name} className="w-auto cursor-pointer" />
                </div>
                <div className="lg:inline-block mx-1 text-xl text-header">
                  {item.name}
                </div>
              </div>
              <div className="flex w-1/2 items-center justify-end">
                <div className="w-5 block inline-block mx-1">
                  <img src={this.state.itemID === item.id ? pulldownhover : pulldown} alt="pulldown"
                    className="w-auto cursor-pointer"
                    onClick={(e) => this.handleClick(item.id)} />
                </div>
              </div>
            </div>
            <div class="flex flex-row h-10 w-full">
              <div className="flex flex-grow items-center">
                <div className="text-sm lg:inline-block mx-1 text-sm ">
                  Total
                </div>
              </div>
              <div className="flex flex-grow justify-end">
                <div className="text-sm self-center block mx-1 text-base sm:text-lg text-header">
                  {item.total}.<span className="text-xs text-primary">{item.totalDecimal}</span> <span className="text-xs">PHP</span>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full leading-5">
              <div className="flex flex-grow items-center">
                <div className="text-sm lg:inline-block mx-1 text-sm ">
                  Available
                </div>
              </div>
              <div className="flex flex-grow justify-end">
                <div className="text-sm block mx-1 text-sm text-header">
                  {item.available}.<span className="text-xs text-primary">{item.availableDecimal}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full leading-5">
              <div className="flex flex-grow items-center">
                <div className="text-sm lg:inline-block mx-1 text-sm ">
                  In order
                </div>
              </div>
              <div className="flex flex-grow justify-end">
                <div className="text-sm block mx-1 text-sm text-header">
                  {item.inOrder}
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full leading-5">
              <div className="flex flex-grow items-center">
                <div className="text-sm lg:inline-block mx-1 text-sm ">
                  Lock
                </div>
              </div>
              <div className="flex flex-grow justify-end ">
                <div className="text-sm block mx-1 text-sm text-header">
                  {item.lock}
                </div>
              </div>
            </div>
          </div>
          <BalanceCardPopup showCard={this.state.itemID === item.id} />
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="w-full pb-2 sm:pt-2">
          <DataView value={this.props.items} layout={this.props.layout} itemTemplate={this.itemTemplate}></DataView>
        </div>
      </React.Fragment>
    );
  }
}

export default CardList;