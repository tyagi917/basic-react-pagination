import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import axios from "axios";

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state=
    {
      userId:"",
      data:[],
    }
    this.getdata=this.getdata.bind(this);

  }
  getdata(userid)
  {
    
    
  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`).then(json=>{
    //console.log(json.data);
    this.setState({
      data:json.data
    })
    
  })
      
  }
  click=(e)=>
  {
    const userid=e.target.value;
    console.log(userid);
  //  this.setState({
    //  userId:userid
    //})
    this.getdata(userid);
  }
  

  render()
  {
    console.log(this.state.userId);
    console.log(this.state.data);
    const res=this.state.data.map(data=>{
      return (
        <div>
        
        <li>{data.title}</li>
        <li>{data.body}</li>
        </div>
        
        )
    })
  return (
    <div className="App">
    <ul>
    {res}
    </ul>
      <button value="1" onClick={this.click}>1</button>
      <button value="2"onClick={this.click}>2</button>
      <button value="3" onClick={this.click}>3</button>
      <button value="4" onClick={this.click}>4</button>
      
    </div>
  );
}
}

export default App;
