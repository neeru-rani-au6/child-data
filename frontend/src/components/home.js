import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Header from "./header";
import { connect } from "react-redux";
import { getChildData } from "../redux/action/child";

class Home extends Component {
  async componentDidMount() {
    await this.props.getChildData();
  }
  render() {
    return (
      <div>
        <Header />
        <Paper variant="outlined" style={{ margin: "15px", padding: "10px" }}>
          <span style={{ fontSize: "30px" }}>
            Name: {this.props.child?.child[0]?.name}{" "}
          </span>
        </Paper>
        <img
          alt="child-development-5-6-yearsnarrow"
          width="100%"
          height="500px"
          src="https://raisingchildren.net.au/__data/assets/image/0019/48043/child-development-5-6-yearsnarrow.jpg"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    child: state.childReducer,
  };
};

export default connect(mapStateToProps, { getChildData })(Home);
