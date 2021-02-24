import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Header from "./header";
import { connect } from "react-redux";
import { oneChildData } from "../redux/action/child";

class View extends Component {
  async componentDidMount() {
    await this.props.oneChildData(this.props.match.params.id);
    console.log(this.props.child.currentChild);
  }

  getAvatar = () => {
    if (this.props.child.currentChild?.photoURL) {
      return (
        <Avatar
          style={{ width: "200px", height: "200px" }}
          src={this.props.child.currentChild.photoURL}
        />
      );
    } else {
      return (
        <Avatar style={{ width: "200px", height: "200px" }}>
          {this.props.child.currentChild?.name[0]}{" "}
        </Avatar>
      );
    }
  };
  render() {
    return (
      <div>
        <Header />
        <Card style={{ maxWidth: "50%", margin: "0 auto", marginTop: "30px" }}>
          {this.getAvatar()}
          <CardContent style={{ display: "flex" }}>
            <h3 style={{ marginRight: "10px" }}>
              Name:{this.props.child.currentChild?.name} ,
            </h3>
            <h3 style={{ marginRight: "10px" }}>
              Sex = {this.props.child.currentChild?.sex} ,
            </h3>
            <h3 style={{ marginRight: "10px" }}>
              Father Name = {this.props.child.currentChild?.fatherName} ,
            </h3>
            <h3 style={{ marginRight: "10px" }}>
              Mother Name = {this.props.child.currentChild?.motherName} ,
            </h3>
            <h3 style={{ marginRight: "10px" }}>
              State = {this.props.child.currentChild?.state} ,
            </h3>
            <h3 style={{ marginRight: "10px" }}>
              District = {this.props.child.currentChild?.district} ,
            </h3>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    child: state.childReducer,
  };
};

export default connect(mapStateToProps, { oneChildData })(View);
