import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTask } from './Actions'
import { ListGroup, ListGroupItem, Card, CardHeader, Button, Input } from 'reactstrap';

const Home = (props) => {
  const [newTask, setNewTask] = useState("");
  const onChangeInput = (e) => {
    setNewTask(e.target.value)
  }

  useEffect(()=>{
    console.log("useEffect called...")
  })
  const addNewTask = () => {
    props.addTask(newTask);
  }

  return <React.Fragment>
    <Card style={{ margin: '20px' }}>
      <CardHeader>Your Task List</CardHeader>
      <ListGroup>
        {props.taskList.map((t, i) => <ListGroupItem key={i}>{t}</ListGroupItem>)}
      </ListGroup>
    </Card>
    <Input value={newTask} onChange={(e) => onChangeInput(e)} />
    <Button onClick={() => addNewTask()}>ADD NEW</Button>
  </React.Fragment>
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList
  }
}

const mapDispatchToProps = {
  addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);