import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Header from "./header";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { postChildData, getChildData } from "../redux/action/child";

class Child extends Component {
  constructor() {
    super();
    this.state = {
      childList: null,
      open: false,
      showBackdrop: false,
      name: "",
      sex: "",
      fatherName: "",
      motherName: "",
      state: "",
      district: "",
      photoURL: "",
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
      name: "",
      sex: "",
      fatherName: "",
      motherName: "",
      state: "",
      district: "",
      photoURL: "",
    });
  };
  handleChange = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  handleSubmit = async (e) => {
    this.setState({
      showBackdrop: true,
    });
    await this.props.postChildData(this.state);
    this.setState({
      open: false,
      childList: this.props.child.child,
      name: "",
      sex: "",
      fatherName: "",
      motherName: "",
      state: "",
      district: "",
      photoURL: "",
      showBackdrop: false,
    });
  };

  async componentDidMount() {
    await this.props.getChildData();
    this.setState({
      childList: this.props.child.child,
    });
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Grid container justify="flex-end">
          <Grid item style={{ margin: "15px" }}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={this.handleClickOpen}
            >
              ADD CHILD
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <TableContainer component={Paper}>
            <Table aria-label="caption table" className="table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Sex</TableCell>
                  <TableCell align="right">Father's Name</TableCell>
                  <TableCell align="right">Mother's Name</TableCell>
                  <TableCell align="right">State</TableCell>
                  <TableCell align="right">District</TableCell>
                  <TableCell align="right">View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.childList &&
                  this.state.childList.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.sex}</TableCell>
                      <TableCell align="right">{row.fatherName}</TableCell>
                      <TableCell align="right">{row.motherName}</TableCell>
                      <TableCell align="right">{row.state}</TableCell>
                      <TableCell align="right">{row.district}</TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          onClick={() =>
                            this.props.history.push("/view/" + row._id)
                          }
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <div>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add Child</DialogTitle>
            <DialogContent dividers>
              <TextField
                autoFocus
                margin="dense"
                id="photoURL"
                label="Photo URL"
                type="photoURL"
                fullWidth
                value={this.state.photoURL}
                onChange={(e) => this.handleChange("photoURL", e.target.value)}
              />
              <TextField
                margin="dense"
                id="name"
                label="Name"
                type="name"
                fullWidth
                value={this.state.name}
                onChange={(e) => this.handleChange("name", e.target.value)}
              />
              <TextField
                margin="dense"
                id="sex"
                label="Sex"
                type="sex"
                fullWidth
                value={this.state.sex}
                onChange={(e) => this.handleChange("sex", e.target.value)}
              />
              <TextField
                margin="dense"
                id="fatherName"
                label="Father Name"
                type="fatherName"
                fullWidth
                value={this.state.fatherName}
                onChange={(e) =>
                  this.handleChange("fatherName", e.target.value)
                }
              />
              <TextField
                margin="dense"
                id="motherName"
                label="Mother Name"
                type="motherName"
                fullWidth
                value={this.state.motherName}
                onChange={(e) =>
                  this.handleChange("motherName", e.target.value)
                }
              />
              <TextField
                margin="dense"
                id="state"
                label="State"
                type="state"
                fullWidth
                value={this.state.state}
                onChange={(e) => this.handleChange("state", e.target.value)}
              />
              <TextField
                margin="dense"
                id="district"
                label="District"
                type="district"
                fullWidth
                value={this.state.district}
                onChange={(e) => this.handleChange("district", e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={this.handleSubmit}
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          <Backdrop className="backdrop" open={this.state.showBackdrop}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    child: state.childReducer,
  };
};

export default connect(mapStateToProps, { getChildData, postChildData })(Child);
