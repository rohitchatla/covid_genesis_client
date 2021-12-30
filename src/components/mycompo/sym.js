import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import axios from '../../services/Axios';

// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LocalHospital from '@mui/icons-material/LocalHospital';

import { CsvToHtmlTable } from 'react-csv-to-table';

import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';

import axios from '../../services/Axios';

import { readRemoteFile } from 'react-papaparse';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import FadeIn from 'react-fade-in';
// const fileUpload = require('express-fileupload');

import Lottie from 'react-lottie';
import animationData from '../../lotties/89023-loading-circles.json';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85vw',
    margin: '2vw 0 4vw 3vw',
    padding: '1vw'
  },
  table: {
    border: '1px solid #D7D7D7',
    borderRadius: '10px',
    marginTop: '20px'
  },

  table2: {
    border: '0px solid #D7D7D7',
    borderRadius: '10px',
    marginTop: '0px',
    marginBottom: '0px'
  },

  root2: {
    width: '17vw',
    margin: '0vw 0 0.2vw 0vw',
    padding: '0vw',
    overflow: 'auto',
    marginRight: '0px'
    //marginRight: "0px",
    //marginTop: "-5px",
    //marginBottom: "-5px",
  },

  root4: {
    width: '17vw',
    margin: '1vw 0 1vw 1vw',
    padding: '0.1vw',
    overflow: 'auto'
    //marginRight: "100px",
    //marginTop: "-5px",
    //marginBottom: "-5px",
  },

  root3: {
    width: '15.5vw',
    margin: '1vw 0 1vw 1vw',
    padding: '0.1vw',
    overflow: 'hidden',
    overflowX: 'hidden',
    //maxWidth: "15.1vw",
    marginTop: '-19px',
    marginBottom: '-5px'
  },

  tableRowStyle: { height: '5px', padding: '0px' },
  tableRowStyle2: { height: '2px', padding: '0px' }
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

// components

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Covid-19 Genesis
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

class sym extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   work: []
      sampleData: '',
      columns: [],
      data: [],
      remoteURL: '',
      remoteCsvData: [],
      showBool: false,
      mainContent: 'ss',
      file: {},
      train_file_name: '',
      pred_file_name: '',
      trainBool: false,
      trainFileBool: false,
      predBool: false,
      predFileBool: false
    };
  }

  async componentDidMount() {
    const { sampleData } = this.state;
    // console.log("hi");
    // await axios
    //   .get(`/sym`) // axios returns a promise
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch(({ response }) => {
    //     console.log(response);
    //   });
    // this.setState({
    //   sampleData: `Model,mpg,cyl,disp,hp,drat,wt,qsec,vs,am,gear,carb Mazda RX4,21,6,160,110,3.9,2.62,16.46,0,1,4,4 Mazda RX4 Wag,21,6,160,110,3.9,2.875,17.02,0,1,4,4 Datsun 710,22.8,4,108,93,3.85,2.32,18.61,1,1,4,1 Hornet 4 Drive,21.4,6,258,110,3.08,3.215,19.44,1,0,3,1 Hornet Sportabout,18.7,8,360,175,3.15,3.44,17.02,0,0,3,2 Valiant,18.1,6,225,105,2.76,3.46,20.22,1,0,3,1 Duster 360,14.3,8,360,245,3.21,3.57,15.84,0,0,3,4 Merc 240D,24.4,4,146.7,62,3.69,3.19,20,1,0,4,2 Merc 230,22.8,4,140.8,95,3.92,3.15,22.9,1,0,4,2 Merc 280,19.2,6,167.6,123,3.92,3.44,18.3,1,0,4,4 Merc 280C,17.8,6,167.6,123,3.92,3.44,18.9,1,0,4,4 Merc 450SE,16.4,8,275.8,180,3.07,4.07,17.4,0,0,3,3 Merc 450SL,17.3,8,275.8,180,3.07,3.73,17.6,0,0,3,3 Merc 450SLC,15.2,8,275.8,180,3.07,3.78,18,0,0,3,3 Cadillac Fleetwood,10.4,8,472,205,2.93,5.25,17.98,0,0,3,4 Lincoln Continental,10.4,8,460,215,3,5.424,17.82,0,0,3,4 Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4 Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1`
    // });
  }

  // process CSV data
  processData = async (dataString) => {
    const { data, columns } = this.state;
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

    const list = [];
    for (let i = 1; i < dataStringLines.length; i += 1) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j += 1) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columnss = headers.map((c) => ({
      name: c,
      selector: c
    }));
    this.setState({ data: list });
    this.setState({ columns: columnss });
    // setData(list);
    // setColumns(columns);
  };

  // handle file upload
  handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      this.processData(data);
    };
    reader.readAsBinaryString(file);
  };

  reset = () => {
    const { trainBool, trainFileBool, predBool, predFileBool } = this.state;
    this.setState({ trainBool: false });
    this.setState({ trainFileBool: false });
    this.setState({ predBool: false });
    this.setState({ predFileBool: false });
  };

  handleSubmit = async (event) => {
    //, trainBool
    event.preventDefault();
    // console.log('ss');
    const data = new FormData(event.currentTarget);

    if (this.state.trainFileBool) {
      this.trainandPredictFile(data, true);
      return;
    } else if (this.state.predFileBool) {
      this.trainandPredictFile(data, false);
      return;
    }

    // eslint-disable-next-line no-console
    if (
      data.get('Breathing_Problem') === '' ||
      data.get('Fever') === '' ||
      data.get('Dry_Cough') === '' ||
      data.get('Sore_throat') === '' ||
      data.get('Hyper_Tension') === '' ||
      data.get('Abroad_travel') === '' ||
      data.get('Contact_with_COVID_Patient') === '' ||
      data.get('Attended_Large_Gathering') === '' ||
      data.get('Visited_Public_Exposed_Places') === '' ||
      data.get('Family_working_in_Public_Exposed_Places') === ''
    ) {
      alert('Fill up all details');
      // return;
    }
    console.log({
      Breathing_Problem: data.get('Breathing_Problem'),
      Fever: data.get('Fever'),

      Dry_Cough: data.get('Dry_Cough'),
      Sore_throat: data.get('Sore_throat'),
      Hyper_Tension: data.get('Hyper_Tension'),
      Abroad_travel: data.get('Abroad_travel'),
      Contact_with_COVID_Patient: data.get('Contact_with_COVID_Patient'),
      Attended_Large_Gathering: data.get('Attended_Large_Gathering'),
      Visited_Public_Exposed_Places: data.get('Visited_Public_Exposed_Places'),

      Family_working_in_Public_Exposed_Places: data.get('Family_working_in_Public_Exposed_Places')
    });
    let dataObj = {};
    // let trainBool = true;
    if (this.state.trainBool) {
      dataObj = {
        Breathing_Problem: data.get('Breathing_Problem'),
        Fever: data.get('Fever'),

        Dry_Cough: data.get('Dry_Cough'),
        Sore_throat: data.get('Sore_throat'),
        Hyper_Tension: data.get('Hyper_Tension'),
        Abroad_travel: data.get('Abroad_travel'),
        Contact_with_COVID_Patient: data.get('Contact_with_COVID_Patient'),
        Attended_Large_Gathering: data.get('Attended_Large_Gathering'),
        Visited_Public_Exposed_Places: data.get('Visited_Public_Exposed_Places'),

        Family_working_in_Public_Exposed_Places: data.get(
          'Family_working_in_Public_Exposed_Places'
        ),
        train_file_name: 'Covid Dataset.csv',
        trainBool: true,
        trainFileBool: false,
        predBool: false,
        predFileBool: false
      };
    } else {
      dataObj = {
        Breathing_Problem: data.get('Breathing_Problem'),
        Fever: data.get('Fever'),

        Dry_Cough: data.get('Dry_Cough'),
        Sore_throat: data.get('Sore_throat'),
        Hyper_Tension: data.get('Hyper_Tension'),
        Abroad_travel: data.get('Abroad_travel'),
        Contact_with_COVID_Patient: data.get('Contact_with_COVID_Patient'),
        Attended_Large_Gathering: data.get('Attended_Large_Gathering'),
        Visited_Public_Exposed_Places: data.get('Visited_Public_Exposed_Places'),

        Family_working_in_Public_Exposed_Places: data.get(
          'Family_working_in_Public_Exposed_Places'
        ),
        pred_file_name: 'Covid Dataset.csv',
        predBool: true,
        predFileBool: false,
        trainBool: false,
        trainFileBool: false
      };
    }

    await axios
      .post(`/sym`, dataObj) // axios returns a promise
      .then((response) => {
        console.log(response.data);
        this.reset();
        alert(JSON.stringify(response.data));
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  handleClick = () => {
    // const classes = useStyles();
    readRemoteFile(this.state.remoteURL, {
      //'http://example.com/file.csv'
      complete: (results) => {
        this.setState({ remoteCsvData: results.data });
        this.setState({ showBool: true });
        const len = results.data.length;
        const cols = Object.keys(results.data[0]);
        console.log('Results:', results);

        const table = (
          <Paper elevation={5} className={''}>
            <TableContainer className={''} style={''}>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow className={''}>
                    {cols.map((feature, i) => {
                      return (
                        <TableCell key={i} component="th" width="10%" size="small">
                          <Typography variant="caption">
                            <b> {feature} </b>
                          </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody className={''}>
                  {[...Array(len)].map((x, i) => {
                    return (
                      <TableRow key={i} className={''}>
                        {cols.map((feature, j) => {
                          return (
                            <TableCell
                              key={j}
                              //width="10%"
                              size="small"
                              variant="body"
                              style={{
                                height: '2px'
                              }}
                            >
                              <FadeIn variant="caption">
                                <Typography variant="caption">
                                  {results.data[i][feature]}
                                </Typography>
                              </FadeIn>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        );
        this.setState({ mainContent: table });
      }
    });
  };

  onSelectUploadFileHandler = (files) => {
    // const file = files[0];
    // const formData = new FormData();
    // formData.append('file', file);
    // console.log(file);

    // const config = {
    //   headers: {
    //     'Contetnt-Type': 'multipart/form-data'
    //   }
    // };

    // axios.post('/upload/files', formData).then((res) => {
    //   //Now do what you want with the response;
    //   console.log(res);
    // });
    var { file } = this.state;
    this.setState({ file: files[0] });
  };

  handleUploadClick = () => {
    // const file = files[0];
    var { file, train_file_name } = this.state;
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    axios.post('/upload/files', formData).then((res) => {
      //Now do what you want with the response;
      // console.log(res.data.name);
      console.log(res.data.filename);
      this.setState({ train_file_name: res.data.filename });
      // localStorage.setItem("train_file_name": res.data.filename );
    });
  };

  handleUploadPredictClick = () => {
    // const file = files[0];
    var { file, pred_file_name } = this.state;
    const formData = new FormData();
    formData.append('pred_file', file);
    console.log(file);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    axios.post('/upload/files/pred', formData).then((res) => {
      //Now do what you want with the response;
      // console.log(res.data.name);
      console.log(res.data.filename);
      this.setState({ pred_file_name: res.data.filename });
    });
  };

  trainandPredictFile = async (data, trainFileBool) => {
    var { train_file_name, pred_file_name } = this.state;
    console.log('trainandPredictFile');
    console.log(trainFileBool);
    // localStorage.getItem("train_file_name")
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (
      data.get('Breathing_Problem') === '' ||
      data.get('Fever') === '' ||
      data.get('Dry_Cough') === '' ||
      data.get('Sore_throat') === '' ||
      data.get('Hyper_Tension') === '' ||
      data.get('Abroad_travel') === '' ||
      data.get('Contact_with_COVID_Patient') === '' ||
      data.get('Attended_Large_Gathering') === '' ||
      data.get('Visited_Public_Exposed_Places') === '' ||
      data.get('Family_working_in_Public_Exposed_Places') === ''
    ) {
      alert('Fill up all details');
      return;
    }
    console.log({
      Breathing_Problem: data.get('Breathing_Problem'),
      Fever: data.get('Fever'),

      Dry_Cough: data.get('Dry_Cough'),
      Sore_throat: data.get('Sore_throat'),
      Hyper_Tension: data.get('Hyper_Tension'),
      Abroad_travel: data.get('Abroad_travel'),
      Contact_with_COVID_Patient: data.get('Contact_with_COVID_Patient'),
      Attended_Large_Gathering: data.get('Attended_Large_Gathering'),
      Visited_Public_Exposed_Places: data.get('Visited_Public_Exposed_Places'),

      Family_working_in_Public_Exposed_Places: data.get('Family_working_in_Public_Exposed_Places')
    });
    let dataObj = {};

    if (trainFileBool) {
      dataObj = {
        Breathing_Problem: data.get('Breathing_Problem'),
        Fever: data.get('Fever'),

        Dry_Cough: data.get('Dry_Cough'),
        Sore_throat: data.get('Sore_throat'),
        Hyper_Tension: data.get('Hyper_Tension'),
        Abroad_travel: data.get('Abroad_travel'),
        Contact_with_COVID_Patient: data.get('Contact_with_COVID_Patient'),
        Attended_Large_Gathering: data.get('Attended_Large_Gathering'),
        Visited_Public_Exposed_Places: data.get('Visited_Public_Exposed_Places'),

        Family_working_in_Public_Exposed_Places: data.get(
          'Family_working_in_Public_Exposed_Places'
        ),
        train_file_name: train_file_name,
        trainFileBool: true,
        trainBool: false,
        predBool: false,
        predFileBool: false
      };
    } else {
      dataObj = {
        Breathing_Problem: data.get('Breathing_Problem'),
        Fever: data.get('Fever'),

        Dry_Cough: data.get('Dry_Cough'),
        Sore_throat: data.get('Sore_throat'),
        Hyper_Tension: data.get('Hyper_Tension'),
        Abroad_travel: data.get('Abroad_travel'),
        Contact_with_COVID_Patient: data.get('Contact_with_COVID_Patient'),
        Attended_Large_Gathering: data.get('Attended_Large_Gathering'),
        Visited_Public_Exposed_Places: data.get('Visited_Public_Exposed_Places'),

        Family_working_in_Public_Exposed_Places: data.get(
          'Family_working_in_Public_Exposed_Places'
        ),
        pred_file_name: pred_file_name,
        predFileBool: true,
        predBool: false,
        trainBool: false,
        trainFileBool: false
      };
    }

    await axios
      .post(`/sym_files`, dataObj) // axios returns a promise
      .then((response) => {
        console.log(response.data);
        this.reset();
        alert(JSON.stringify(response.data));
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  render() {
    const theme = createTheme();
    const { trainBool, trainFileBool, predBool, predFileBool } = this.state;
    return (
      // <>
      //   <div>
      //     <h2>Hi</h2>
      //   </div>
      // </>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div>
              <Lottie options={defaultOptions} height={250} width={250} />
            </div>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LocalHospital />
            </Avatar>

            <Typography component="h1" variant="h5">
              Track for Covid-19
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={(e) => {
                this.handleSubmit(e, true);
              }}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Breathing_Problem"
                    name="Breathing_Problem"
                    required
                    fullWidth
                    id="Breathing_Problem"
                    label="Breathing_Problem"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Fever"
                    label="Fever"
                    name="Fever"
                    autoComplete="Fever"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Dry_Cough"
                    name="Dry_Cough"
                    required
                    fullWidth
                    id="Dry_Cough"
                    label="Dry_Cough"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Sore_throat"
                    label="Sore_throat"
                    name="Sore_throat"
                    autoComplete="Sore_throat"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Hyper_Tension"
                    name="Hyper_Tension"
                    required
                    fullWidth
                    id="Hyper_Tension"
                    label="Hyper_Tension"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Abroad_travel"
                    label="Abroad_travel"
                    name="Abroad_travel"
                    autoComplete="Abroad_travel"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Contact_with_COVID_Patient"
                    name="Contact_with_COVID_Patient"
                    required
                    fullWidth
                    id="Contact_with_COVID_Patient"
                    label="Contact_with_COVID_Patient"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Attended_Large_Gathering"
                    label="Attended_Large_Gathering"
                    name="Attended_Large_Gathering"
                    autoComplete="Attended_Large_Gathering"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Visited_Public_Exposed_Places"
                    label="Visited_Public_Exposed_Places"
                    name="Visited_Public_Exposed_Places"
                    autoComplete="Visited_Public_Exposed_Places"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Family_working_in_Public_Exposed_Places"
                    label="Family_working_in_Public_Exposed_Places"
                    type="Family_working_in_Public_Exposed_Places"
                    id="Family_working_in_Public_Exposed_Places"
                    autoComplete="Family_working_in_Public_Exposed_Places"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => {
                  // this.handleSubmit(e, true);
                  this.setState({ trainBool: true }); //!trainBool
                }}
              >
                Analysis/Predict[Train]
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => {
                  // this.handleSubmit(e, false);
                  this.setState({ predBool: true }); // !predBool
                }}
              >
                Predict
              </Button>
              <div>
                <h2>Train on Custom Model/Dataset</h2>
                <input
                  type="file"
                  id="inputGroupFile01"
                  onChange={(e) => this.onSelectUploadFileHandler(e.target.files)}
                />
                <button type="button" onClick={() => this.handleUploadClick()}>
                  Upload File
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    // this.train();
                    // this.trainandPredictFile(true  );
                    this.setState({ trainFileBool: true }); //!trainFileBool
                  }}
                >
                  Train
                </button>
                <br />
                <br />
                <h2>Predict on Custom Model/File</h2>
                <input
                  type="file"
                  id="inputGroupFile01"
                  onChange={(e) => this.onSelectUploadFileHandler(e.target.files)}
                />
                <button type="button" onClick={() => this.handleUploadPredictClick()}>
                  Upload File
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    // this.trainandPredictFile(false);
                    this.setState({ predFileBool: true }); //!predFileBool
                  }}
                >
                  Predict
                </button>
                <br />
                <br />
              </div>
              {/* <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
          {/* <CsvToHtmlTable
            data={sampleData}
            csvDelimiter=","
            tableClassName="table table-striped table-hover"
          /> */}

          <div>
            <h3>
              Read CSV file{' '}
              <a href="" target="_blank" rel="noopener noreferrer">
                *
              </a>
            </h3>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={(e) => {
                this.handleFileUpload(e);
              }}
            />
            <DataTable
              pagination
              highlightOnHover
              columns={this.state.columns}
              data={this.state.data} //{'https://people.sc.fsu.edu/~jburkardt/data/csv/mlb_teams_2012.csv'}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Type RemoteURL"
              value={this.state.remoteURL}
              onChange={(e) => {
                // console.log(e.target);
                this.setState({ remoteURL: e.target.value });
                console.log(this.state.remoteURL);
              }}
            ></input>
            {/* return */}
            <button onClick={() => this.handleClick()}>readRemoteFile</button>;
          </div>
          {/* <div>
            {(this.state.showBool || this.state.parsedCsvData) && (
              <table>
                {/* <thead>
                <tr>
                  <th>Kanji</th>
                  <th>Reading</th>
                  <th>English</th>
                </tr>
              </thead> 
                <tbody>
                  {this.state.parsedCsvData &&
                    this.state.parsedCsvData.map((parsedData, index) => (
                      <tr key={index}>
                        {parsedData.map((p, i) => {
                          return <td>{p}</td>;
                        })}
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div> */}

          <div>{this.state.mainContent}</div>

          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default sym;
