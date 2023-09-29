import {React,useState} from 'react'

function Contact() {
  // const [name, setName] = useState()
  // const [lastname, setLastname] = useState()
  const [fullName,setFullname] = useState({
    fname:'',
    lname:'',
    email:'',
    phone:''
  });
  // const [lastnamenew, setLastnamenew] = useState()
  // const[email,setEmail]=useState()
  // const [newemail,setNewemail]=useState()
  // const [phone,setPhone] =useState()
  // const [newPhone,setNewphone] =useState()
  const inputEvent = (event) => {
    console.log(event)
   const {name, value}= event.target;
   setFullname((prev)=>{
    return{
      ...prev,
      [name]: value
    }
   });

   



  //  if(nm === 'fname')
  //  {
  //   setName(event.target.value)
  //  }
  //  else if(nm ==='lname')
  //  {
  //   setLastname(event.target.value)
  //  }
  //  else if(nm ==='email')
  //  {
  //   console.log(event.target.value)
  //   setEmail(event.target.value)
  //  }
  //  else if(nm==='phone'){
  //   console.log(event.target.value)
  //   setPhone(event.target.value)
  //  }
  };
  const [myName, setmyName]=useState({});
   
  
  const Clickevent =(event) =>{
    // event.preventDefault()
      //  setFullname(name)
      //  setLastnamenew(lastname)
      //  setNewemail(email)
      //  setNewphone(phone)
      setmyName(fullName);
       alert("Form Submitted")
  }
   
  return (
    // <form>
      <div className="App">
      
      <h1>Hello {myName.fname} {myName.lname}  </h1>
      <input 
      type = "text" placeholder ="Enter Your First Name" name ="fname" onChange = {inputEvent} >
 
      </input>
      <input 
      type = "text" placeholder ="Enter Your Last Name" name="lname" onChange = {inputEvent} ></input>
       <input 
      type = "text" placeholder ="Enter Your Email" name ="email"onChange = {inputEvent} >
 
      </input>
      <input 
      type = "text" placeholder ="Enter Your Phone" name ="phone"onChange = {inputEvent} >
 
      </input>
      <button onClick={Clickevent}>
       Click Me
      </button> 
     
     </div>
    // </form>
  );
}

export default Contact;
