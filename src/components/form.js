import {useState} from 'react';
import {Select,InputLabel,TextField,CssBaseline,Button,Avatar,Typography,makeStyles,Container,MenuItem} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Axios from 'axios';

export default function Form() {
  const [taskname, setTask] = useState("");
  const [taskList, setTaskList] = useState("");  
  const classes = useStyles();
  const addTask =()=>{
      Axios.post('http://localhost:5000/task/add',{
          taskname: taskname, 
          taskList: taskList
         }).then((response)=>{
              console.log("Task response "+response);
          })
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
         <Avatar className={classes.avatar}> <AssignmentIcon /></Avatar>
         <Typography component="h1" variant="h5"> ToDo App </Typography>
        <form className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" required fullWidth id="taskname" autoFocus autoComplete="taskname"
            label="Enter Task" value={taskname} name="taskname" onChange={(e)=>{setTask(e.target.value)}} />
          <InputLabel id="taskL">Task List</InputLabel>
          <Select value={taskList} variant="outlined" margin="normal" required fullWidth labelId="taskL" id="taskList" autoFocus autoComplete="taskList"
            label="Select Task" name="taskList" onChange={(e)=>{setTaskList(e.target.value)}}>
            <MenuItem value='Pay your internet'>Pay your internet</MenuItem>
            <MenuItem value='Get Grocery'>Get Grocery</MenuItem>
            <MenuItem value='Do your laundery'>Do your laundery</MenuItem>
          </Select>
          <Button type="submit" onClick={addTask} fullWidth variant="contained" color="primary" className={classes.submit}>Add</Button>
        </form>
      </div>
    </Container>
  ); 
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8), display: 'flex', flexDirection: 'column', alignItems: 'center',
     },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));