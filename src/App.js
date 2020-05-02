import React from "react";
import logo from "./logo.svg";
import MenuNav from "./components/MenuNav/MenuNav.js";
import CardComponent from "./components/CardComponent/CardComponent";
import getAllCars from "./services/CarService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }
  componentDidMount() {
    let cars = getAllCars();
    this.setState({ cars });
  }
  render() {
    return (
      <div class="w-full bg-green-100">
        <MenuNav />
        <div className="w-full max-w-screen-md mx-auto py-5">
          <CardComponent />
        </div>
        <DataTable
          responsive={true}
          className="w-full max-w-screen-md mx-auto py-5"
          value={this.state.cars}
        >
          <Column
            field="car"
            header="Car ID"
            body={(rowData) => (
              <p className="text-2xl xl:text-base">{rowData.car}</p>
            )}
          />
          <Column field="car_make" header="Car Make" />
          <Column field="car_owner" header="Owner" />
          <Column field="car_color" header="Color" />
        </DataTable>
      </div>
    );
  }
}

export default App;
