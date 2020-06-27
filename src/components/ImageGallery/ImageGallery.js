import React from "react";
import { Carousel } from "primereact/carousel";
import bg1 from "../../assets/img/bg1.jpg";
import bg2 from "../../assets/img/bg2.jpg";
import bg3 from "../../assets/img/bg3.jpg";
import bg4 from "../../assets/img/bg4.jpg";
import bg5 from "../../assets/img/bg5.jpg";
import bg6 from "../../assets/img/bg6.jpg";
import bg7 from "../../assets/img/bg7.jpg";
class ImageCarousal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listImages: [bg1, bg2, bg3, bg4, bg5, bg6, bg7],
    };
  }

  render() {
    return <Carousel {...this.props} value={this.state.listImages}></Carousel>;
  }
}

export default ImageCarousal;
