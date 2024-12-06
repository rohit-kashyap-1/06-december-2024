import React, { useState } from "react";

export default function Form(props) {
    const [name,setName] = useState({value:'',error:''})
    const [email,setEmail] = useState({value:'',error:''})
    const [gender,setGender] = useState({value:'',error:''})
    

    const days = [];
    for (let i = 1; i <= 31; i++) { days.push(i) }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const years = []
    for (let i = 2006; i > 1995; i--) { years.push(i) }
    const cities = ['New Delhi','Banglore','Chennai']

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(name.value==''){
            setName({value:name.value,error:'Please fill this field'})
            return
        }
        
        if(name.value.length<3){
            setName({value:name.value,error:'Please enter atleast 3 characters'})
            return
        }else{
            setName({value:name.value,error:''})
        }

        if(email.value==''){
            setEmail({value:email.value,error:'Please fill this field'})
            return
        }else{
            setEmail({value:email.value,error:''})
        }
        var emailPattern = /\S+@\S+\.\S+/;

        if(!emailPattern.test(email.value)){
            setEmail({value:email.value,error:'Please enter a valid email'})
            return
        }else{
            setEmail({value:email.value,error:''})
        }

        if(gender.value!="Male" && gender.value!="Female"){
            setGender({value:gender.value,error:'Please select gender!'})
        }else{
            setGender({value:gender.value,error:''})
        }

        //

        const formData = {name:name.value,email:email.value,gender:gender.value}
        const data = JSON.stringify(formData)
        console.log(data)

    }

    return (
        <>
            <form className="mt-4" onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-3" style={{ width: 300 }} 
                placeholder="Name" 
                value={name.value} 
                onChange={(e)=>{setName({value:e.target.value,error:name.error})}} />

                <div className="mb-3 text-danger">{name.error}</div>
                <input type="text" className="form-control  mb-3" style={{ width: 300 }} placeholder="Email Address"
                value={email.value} 
                onChange={(e)=>{setEmail({value:e.target.value,error:email.error})}}
                />
                <div className="mb-3 text-danger">{email.error}</div>
                <label>
                    Gender: 
                    <label className="ms-1">
                        <input type="radio" name="gender" value={"Male"} onChange={(e)=>{ setGender({value:e.target.value,error:gender.error}) }} /> Male
                    </label>
                    <label className="ms-1">
                        <input type="radio" name="gender" value={"Female"} onChange={(e)=>{ setGender({value:e.target.value,error:gender.error}) }} /> Female
                    </label>
                </label>
                <div className="mb-3 text-danger">{gender.error}</div>
                <div className="mb-3 mt-3">
                    DOB: &nbsp;
                    <div className="row" style={{ width: 300 }}>
                        <div className="col-md-4">
                            <select className="form-control form-select">
                                <option value={""}>Day</option>
                                {days.map((item, index) => { return <option key={index} value={item}>{item}</option> })}
                            </select>
                        </div>
                        <div className="col-md-4 ps-0 pe-0">
                            <select className="form-control form-select">
                                <option value={""}>Month</option>
                                {months.map((item, index) => { return <option key={index} value={item}>{item}</option> })}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="form-control">
                                <option value={""}>Years</option>
                                {years.map((item, index) => { return <option key={index} value={item}>{item}</option> })}
                            </select>
                        </div>
                    </div>
                </div>
                <select className="form-control mb-3" style={{ width: 300 }}>
                    <option value={""}>City</option>
                    {cities.map((item, index) => { return <option key={index} value={item}>{item}</option> })}
                </select>
                <input type="text" className="form-control  mb-3" style={{ width: 300 }} placeholder="Pincode" />
                <button className="btn btn-success">Submit</button>
            </form>
        </>
    )
}

/* 
name
email
phone
gender
date of birth
address
city and pincode

*/