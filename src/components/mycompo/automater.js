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
      newsBlog: []
    };
  }

  async componentDidMount() {}

  handleSubmit = async (event) => {
    event.preventDefault();
    // dataObj={}

    // await axios
    //   .post(`/`, dataObj) // axios returns a promise
    //   .then((response) => {
    //     console.log(response.data);
    //     alert(JSON.stringify(response.data));
    //   })
    //   .catch(({ response }) => {
    //     console.log(response);
    //   });
  };

  handleClick = () => {
    var API_KEY = '7187f744279e49a18a7482e906a71174';
    var searchTerm = 'covid19';
    fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&language=en&pageSize=100&apiKey=${API_KEY}`
    )
      .then((results) => results.json())
      .then(async (data) => {
        // const { name } = data.results[0];
        console.log(data);
        // this.setState({ newsBlog: data });
        await axios
          .post(`/sentiment_analyzer`, { textpayload: data.articles }) // axios returns a promise
          .then((response) => {
            console.log(response.data);
            alert(JSON.stringify(response.data));
          })
          .catch(({ response }) => {
            console.log(response);
          });
      });
  };

  handleClick2 = () => {
    var API_KEY = '7187f744279e49a18a7482e906a71174';
    var searchTerm = 'covid19';
    fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&language=en&pageSize=1000&sortBy=publishedAt&apiKey=${API_KEY}` //&from=2021-01-03&to=202-01-03
    )
      .then((results) => results.json())
      .then(async (data) => {
        // const { name } = data.results[0];
        console.log(data);
        // this.setState({ newsBlog: data });
        await axios
          .post(`/summarizer`, { textpayload: data.articles }) // axios returns a promise
          .then((response) => {
            console.log(response.data);
            alert(JSON.stringify(response.data));
          })
          .catch(({ response }) => {
            console.log(response);
          });
      });
  };

  /*
  1-> Model 1(sarima-multi) train
  2-> Model 2(sarima-multi-sscore) train
  3-> Model 1 predict
  4-> Model 2 predict
  */

  train_ts = (val) => {
    axios
      .post(`/train_ts`, { val }) // axios returns a promise
      .then((response) => {
        console.log(response.data);
        alert(JSON.stringify(response.data));
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  predict_ts = (val) => {
    axios
      .post(`/train_ts`, { val }) // axios returns a promise
      .then((response) => {
        console.log(response.data);
        alert(JSON.stringify(response.data));
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  render() {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => this.handleClick()}
            >
              News Fetch + Scrap Confirmed [Today's] ->(Sentiment Analysis on 'title')
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => this.handleClick2()}
            >
              News Fetch + Scrap Confirmed [Today's] ->(Summarize on 'content / description')
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => this.train_ts(1)}
            >
              Train Model 1
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => this.predict_ts(3)}
            >
              Predict Model 1
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => this.train_ts(2)}
            >
              Train Model 2
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => this.predict_ts(4)}
            >
              Predict Model 2
            </Button>
          </div>

          <div>{this.state.mainContent}</div>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default sym;
