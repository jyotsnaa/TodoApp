import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, Button} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const URL = 'http://localhost:5000/task';

const NestedList = () => {
    const [tasks, setTask] = useState([])
    useEffect(() => {getData() }, [])

    const getData = async () => {
        const response = await axios.get(URL +"/gettask")
        setTask(response.data)
    }

    const removeData = (id) => {
        axios.delete(URL+'/delete',{ 
            id: id
          }).then((response)=>{
              console.log("Task response "+response);
              const del = tasks.filter(task => id !== task.id)
              setTask(del)
          });
    }

    const classes = useStyles();
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell >Task Name</StyledTableCell>
              <StyledTableCell align="right">Task List</StyledTableCell>
              <StyledTableCell align="right">Delete Task</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {tasks.map((row) => (
            <StyledTableRow key={row.taskname}>
              <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell>{row.taskname}</StyledTableCell>
              <StyledTableCell align="right">
                  {row.taskList}
                </StyledTableCell>
              <StyledTableCell align="right">
                  <Button variant="contained" onClick={() => removeData(row.id)} color="primary">Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    );
}


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: { fontSize: 14 },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {  minWidth: 700 },
  });

export default NestedList
