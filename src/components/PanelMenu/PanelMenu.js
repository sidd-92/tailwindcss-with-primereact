import React, { Component } from "react";
import { PanelMenu } from "primereact/panelmenu";

class SideBarMenu extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          label: "Dashboard",
          icon: "dashboard",
        },
        {
          label: "New Instant Meeting",
          icon: "newInstantMeeting",
        },
        {
          label: "Join Meeting",
          icon: "joinMeeting",
        },
        {
          label: "Setup a Meeting",
          icon: "scheduleAMeeting",
        },
        {
          label: "New Recurring Meeting",
          icon: "newRecurringMeeting",
        },
        {
          label: "My Profile",
          icon: "myProfile",
        },
        {
          label: "Logout",
          icon: "logout",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <PanelMenu model={this.state.items} style={{ width: "300px" }} />
      </React.Fragment>
    );
  }
}

export default SideBarMenu;
