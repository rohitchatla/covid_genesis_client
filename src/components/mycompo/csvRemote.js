import React, { useState, useEffect } from 'react';
import { parse } from 'papaparse';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FadeIn from 'react-fade-in';
import { readRemoteFile } from 'react-papaparse';

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

function CsvRemote(props) {
  const [mainContent, setMainContent] = useState('');
  //   const classes = useStyles();

  useEffect(() => {
    let heightStyles = { height: '550px', overflow: 'auto' };
    let tableBody2 = {};
    console.log('hello');
    parse(
      //Papa.parse
      //readRemoteFile
      'https://raw.githubusercontent.com/rohitchatla/Covid-Genesis/master/classfication/Covid%20Dataset.csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          //function
          const len = results.data.length;
          const cols = Object.keys(results.data[0]);
          console.log(results);
          const table = (
            <Paper elevation={5} className={''}>
              <TableContainer className={''} style={heightStyles}>
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
                    {/*tableBody2 */}
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
                                  <Typography variant="caption">{results.data[i][j]}</Typography>
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

          setMainContent(table);
        }
      }
    );
  }, [mainContent]);

  return <div> {mainContent} </div>;
}

export default CsvRemote;
