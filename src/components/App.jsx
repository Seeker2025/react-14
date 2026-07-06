import ToDoList from "./ToDoList/ToFoList";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";

import { Component } from "react";

class App extends Component{

   state ={
    isShowModal: false,
  }

  
  showModal =()=>{
    this.setState({ isShowModal: true})
  }

  closeModal =()=>{
    this.setState({ isShowModal: false})
  }

  render(){

  
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}
       {this.state.isShowModal &&
        <Modal closeModal={this.closeModal}>


        </Modal>}
      <Header showModal={this.showModal}/>
      <ToDoList/>
    </div>
  )
}
};



export default App;
