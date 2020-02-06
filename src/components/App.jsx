import React from 'react';

import '../styles/style.css'


class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
          data:{
           
          },
          errors:{

          },
          
        }
 }

    handleSubmit=(e)=>{
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["fname"] = "";
            fields["lname"] = "";
            fields["mail"] = "";
            fields["password"] = "";
            fields["date"] = "";
            fields["phone"] = "";
            this.setState({data:fields});
            alert("Form submitted");
        }    
      
    }


    validateForm() {

        let fields = this.state.data;
        let errors = {};
        let formIsValid = true;
     
  
        if (typeof fields["fname"] !== "undefined" || typeof fields["lname"] !== "undefined") {
          if (!fields["fname"].match(/^[a-zA-Z ]*$/) || !fields["lname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["fname"] = "*Please enter alphabet characters only.";
            errors["lname"] = "*Please enter alphabet characters only.";
          }
        }

  
        if (typeof fields["mail"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["mail"])) {
            formIsValid = false;
            errors["mail"] = "*Please enter valid email-ID.";
          }
        }

  
        if (typeof fields["phone"] !== "undefined") {
          if (!fields["phone"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["phone"] = "*Please enter valid mobile no.";
          }
        }

  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
      }
 

    handleChange=(e)=>{
        e.preventDefault();
        const inputValue = e.target.value;
        const name = e.target.name;
        const value = {
            ...this.state.data,
            [name] : inputValue,
        }
        this.setState({
                data:value,
        })
    }

    radioButtonHandle(e){
        const radioValue = e.target.value;
        const radioName = e.target.name;

        const rad = {
            ...this.state.data,
            [radioName] : radioValue,
        }
        this.setState({
                data:rad,
        })
    }

    render(){
        return(
            <>
           <form className="form" onSubmit={this.handleSubmit}>
                
                <label>
                    First Name:
                </label>
                <input type="text" name="fname" value={this.state.data.fname}  onChange={this.handleChange} required />
                <div className="errorMsg">{this.state.errors.fname}</div>
                <label>
                    Last Name:
                    
                </label>
                <input type="text" name="lname" value={this.state.data.lname} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.lname}</div>
                <label>
                    Email:
                  
                </label>
                <input type="email" name="mail" value={this.state.data.mail} onChange={this.handleChange} required />
                <div className="errorMsg">{this.state.errors.mail}</div>
                <label>
                    Password:
                   
                </label>
                <input type="password" name="password" value={this.state.data.password} onChange={this.handleChange} required />
                <div className="errorMsg">{this.state.errors.password}</div>
                <label>
                    DOB:
                  
                </label>
                <input type="date" name="dob" value={this.state.data.date} onChange={this.handleChange} />
                <label>
                    Gender:
                  
                </label>
                <div>
                <input type="radio" name="gender" value="male" id="male" onChange={this.handleChange}/> 
                    <label htmlFor="male" value="male" className="male">  male </label>
                </div>
                <div>
                <input type="radio" name="gender" value="female" id="female" onChange={this.handleChange}/>
                    <label htmlFor="female" value="female" className="female">  female </label>
                </div>
                <div>
                <input type="radio" name="gender" value="other" id="other" onChange={this.handleChange}/>  
                    <label htmlFor="other" value="other" className="other">  other </label>
               </div>
                <label>
                    Phone:
                   
                </label>
                <input type="number" name="phone" value={this.state.data.phone} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.phone}</div>
                <input className="btn" type="submit" value="Submit" />
            </form>
         
         </>
        )
    }
}

export default App;