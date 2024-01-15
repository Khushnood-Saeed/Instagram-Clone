import React,{useState} from 'react'
import '../App.css'
import M from 'materialize-css'
import { useNavigate} from "react-router-dom";
const Signin = () => {
  const navigate=useNavigate()
  const [name,setName] = useState("")
  const [password,setPasword] = useState("")
  const [email,setEmail] = useState("")
  const [image,setImage] = useState("")
  const [url,setUrl] = useState(undefined)


  const uploadFields = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
        return
    }  
    fetch("/signin",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            password,
            email,
            pic:url
        })
    }).then(res=>res.json())
    .then(data=>{
      
       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
       }
       else{ 
        console.log("this is ",data)
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
          M.toast({html:"signed in",classes:"#43a047 green darken-1"})
         //  history.push('/signin')
         
         navigate('/')
       }
    }).catch(err=>{
        console.log(err)
    })
}

  return (
    <div className="mycard">
    <div className="card auth-card">
      <h2 className="brand-logo">Instagram</h2>
      <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='text' placeholder='password' value={password} onChange={(e)=>setPasword(e.target.value)}/>
      <button className="btn waves-effect waves-light #64b5f6 blue lighten-2 darken-1" type="submit" name="action" onClick={()=>uploadFields()}>Log in</button>
    </div>
    </div>
  )
}

export default Signin
