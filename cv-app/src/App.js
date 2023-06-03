import { Component } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Header from './components/Header';
import ResumeHeader from './components/ResumeHeader';

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      firstName:'Mariya ',
      lastName:'Zaveri',
      rtitle:'Sr. Software Engg',
      addr:'NearNariyal Bhavnagar',
      phone:'7405681573',
      email:'mariyazaveri15@gmail.com',
      bio:''
    }

    this.handleInput = this.handleInput.bind(this);
    
  }

  handleInput(e){
    const { name, value } = e.target;

    this.setState(
      {
        ...this.state,
        [name]: value,
      }
    )
  }

  render(){
  return (
    <div className='main'>
      <Header></Header>
      <div className='bg'>
        <div className='container'>
          <PersonalInfo 
            handleInput={this.handleInput}
          ></PersonalInfo>
        </div>
        <div className='container'>
          <ResumeHeader 
            data={this.state}
          >

          </ResumeHeader>
          
        </div>
      </div>
    </div>
  )
  }
}

export default App;
