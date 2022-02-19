import React, { Component } from 'react'

import axios from 'axios';

export default class Form extends Component {

state={
    name:'',
    lastname:'',
    email:'',
    message:'',
    sent:false
}
 
//handle inputs
handleName=(e) => {
    this.setState({
        name:e.target.value
    })
}

handleLastname=(e) => {
    this.setState({
        lastname:e.target.value
    })
}

handleEmail=(e) => {
    this.setState({
        email:e.target.value
    })
}

handleMessage=(e) => {
    this.setState({
        message:e.target.value
    })
}

// end of handle inputs

formSubmit=(e)=>{
    e.preventDefault();

    let data = {
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
    }

    axios.post('/api/form', data)
    .then(res=>{
        this.setState({
            sent:true,
        },this.resetForm())
    }).catch(()=>{
        console.log('massage not sent')
    })

}

//for reseting initial data
resetForm=()=>{
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:''
    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },3000)
}


 
    render(){
      return(
          <div className='container'>
              <form onSubmit={this.formSubmit}>
                {/* single Item */}
                <div className='singleItem'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' 
                    name='name' 
                    className='name' 
                    placeholder='your Name...'
                    value={this.state.name}
                    onChange={this.handleName}
                    />
                </div>
                {/* end of single Item */}

                {/* single Item */}
                <div className='singleItem'>
                    <label htmlFor='name'>Lastname</label>
                    <input type='text' name='lastname' 
                    className='lastname' 
                    placeholder='your Lastname...' 
                    value={this.state.lastname}
                    onChange={this.handleLastname}/>
                </div>
                {/* end of single Item */}

                {/* single Item */}
                <div className='singleItem'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' 
                    className='email' placeholder='your Email...'
                    value={this.state.email}
                    onChange={this.handleEmail}
                    />
                </div>
                {/* end of single Item */}

                {/* single Item */}
                <div className='textArea'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='' cols='30' rows='5' placeholder='your message'
                    value={this.state.message}
                    onChange={this.handleMessage }
                    />
                </div>
                {/* end of single Item */}
                <div className={this.state.sent ? 'msg msgAppear':'msg'}>Message has been sent</div>
                <div className='btn'>
                    <button type='submit'>Submit</button>
                </div>
              </form>
          </div>
      )
  }
}
