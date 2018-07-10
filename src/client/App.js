import React, { Component } from 'react';
import './app.css';
import  GoogleLogout  from 'react-google-login';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import {CommandBarBasicExample} from './components/commandBar.js'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
//    fetch('/api/getUsername')
//      .then(res => res.json())
//      .then(user => this.setState({ username: user.username }));
  }


   
   
  responseGoogle = (response) => {
    console.log(response.w3);
    this.setState({username:response.w3.ig,paa:response.w3.Paa});

  }
  responseGoo = (response) => {
   alert('nok');
    console.log(response);
  }
  render() {

    if(this.state.username){
      return(
        <div>
          <div>
              <Pivot>
          <PivotItem
            headerText="My items"
            headerButtonProps={{
              'data-order': 1,
              'data-title': 'My items',
              'background-color':'white'
            }}
          >
         < CommandBarBasicExample/>
            <Label>Pivot #1</Label>
          </PivotItem>
          <PivotItem linkText="Recent">
          {this.state.username ? (
          <h1>Hello {this.state.username}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
     )}
          </PivotItem>
          <PivotItem linkText="Shared with me">
            <Label>Pivot #3</Label>
          </PivotItem>
        </Pivot> 
     </div>
     <div className='footer'>
        <Persona
            imageUrl= {this.state.paa}
            imageInitials= 'AL'
            text= {this.state.username}
          size={PersonaSize.size40}
          presence={PersonaPresence.online}
/>  
     </div>
     </div>
     );

    }else{
    return (
      <div className='login'>
      <GoogleLogin  
      clientId="966039870056-b8ub7bkkhj13mjsuqe2j7dek1li6n791.apps.googleusercontent.com"
      buttonText="Login" 
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoo}
     
    />
      
      </div>
    );
  }
  }
   
}
