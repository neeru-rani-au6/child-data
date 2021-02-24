import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import Header from "./header";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { getDistrict, postDistrict } from "../redux/action/address";
import { IconButton } from "@material-ui/core";

class District extends Component {
  state = {
    districtList: null,
    state: "",
    district: "",
  };
  async componentDidMount() {
    await this.props.getDistrict();
    this.setState({
      districtList: this.props.states.district,
    });
  }

  handleChange = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };
  handleSubmit = async (e) => {
    await this.props.postDistrict(this.state);
    this.setState({
      stateList: this.props.states.district,
      state: "",
      district: "",
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Grid container justify="flex-start" alignItems="center">
          <Grid item>
            <Card className="root">
              <CardContent>
                <TextField
                  id="standard-basic"
                  label="Enter state Name"
                  type="state"
                  value={this.state.state}
                  onChange={(e) => this.handleChange("state", e.target.value)}
                />
              </CardContent>
              <CardContent>
                <TextField
                  id="standard-basic"
                  label="Enter district Name"
                  type="district"
                  value={this.state.district}
                  onChange={(e) =>
                    this.handleChange("district", e.target.value)
                  }
                />
              </CardContent>
              <CardActions>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Add District
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {this.state.districtList &&
            this.state.districtList.map((item) => (
              <Grid item key={item._id}>
                <Card className="root">
                  <CardContent>
                    <Typography>{item.state}</Typography>
                    <Typography>{item.district}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton className="arrowIcon">
                      <TrendingFlatIcon
                        style={{ width: "100px", height: "50px" }}
                      />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: state.addressReducer,
  };
};

export default connect(mapStateToProps, { getDistrict, postDistrict })(
  District
);
