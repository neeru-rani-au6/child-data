import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { logout } from "../redux/action/user";
import { withRouter } from "react-router-dom";

class Header extends Component {
  logoutUser = async () => {
    await this.props.logout();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="grow">
        <AppBar position="static">
          <Toolbar>
            <Typography className="title" variant="h6" noWrap>
              Logo
            </Typography>
            <div className="grow" />
            <div>
              <Button color="inherit" href="/#/home">
                Home
              </Button>
              <Button
                color="inherit"
                className="sectionDesktop"
                href="/#/state"
              >
                State
              </Button>
              <Button
                color="inherit"
                className="sectionDesktop"
                href="/#/district"
              >
                District
              </Button>
              <Button
                color="inherit"
                className="sectionDesktop"
                href="/#/child"
              >
                Child
              </Button>
            </div>
            <div className="sectionMobile">
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
                onClick={this.logoutUser}
              >
                <ExitToAppIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, { logout })(withRouter(Header));
