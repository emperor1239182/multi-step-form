import { Navigator } from "./navigator"
export const Login = ()=>{
    return(

    <>
   <form className="personalInfo">
        <span className="heading">Personal info</span> 
        <span className="additionalText">Please provide your name, email address, and phone number</span> <br/>
        <label for="name" style={{fontSize: '10px', fontWeight: 'bold', color:'hsl(213, 96%, 18%)'}}>Name</label> 
        <input type="text" placeholder="e.g. Stephen King" name="name"></input> 
        <label for="email" style={{fontSize: '10px', fontWeight: 'bold', color:'hsl(213, 96%, 18%)'}}>Email Address</label> 
        <input type="email" placeholder="e.g. stephenking@gmail.com" name="email"></input> 
        <label for="number" style={{fontSize: '10px', fontWeight: 'bold', color:'hsl(213, 96%, 18%)'}} >Phone Number</label> 
        <input type="text" placeholder="e.g. 123456789" name="number"></input> <br/> <br/> <br/>
        
    </form>
    </>
    )
}