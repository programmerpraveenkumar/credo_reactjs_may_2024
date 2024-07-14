import {useState} from 'react';

export default function Home(){
    let firstname = "afwfdf";
    let mobileNo = "8498464";
   
    //state variable by using hook
    const[name,setName] = useState('this is state variable');
    const[email,setEmail] = useState('this is another state variable');
    const printMessage=()=>{
        setName('new value updated..');
        firstname = "swefdsf";
        console.log("this is method click..");
    }

    const[userList,setUserList] =  useState([]);

    const[cityList,setList] =  useState([
        {name:"city1"},{name:"city2"},{name:"city3"},
        {name:"city4"},{name:"city5"},{name:"city6"},
        {name:"city7"}
    ])
    const getApi=async ()=>{
        let res = await fetch("https://reqres.in/api/users",{method:"GET"});
        let json  = await res.json();
        console.log(json);
        setUserList(json['data']);
    }

    const postApi=async ()=>{
        let data = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        let res = await fetch("https://reqres.in/api/register",
            {method:"POST",body:JSON.stringify(data),headers:{'content-type':"application/json"}}
        );
        let json  = await res.json();
        console.log(json);        
    }

    return(
        <>
        {
            cityList.map((ele,index)=>{
                    return (
                        <h1 key={index}>{ele.name}</h1>
                    )
            })
        }
        ---------------
        {
            userList.map((ele,index)=>{
                    return (
                        <div key={index}>

                            <img src={ele.avatar}/>
                        <h1 >{ele.first_name}{ele.last_name}</h1>
                        </div>
                    )
            })
        }
        ---------------
        <h1>{name}</h1>
        <h1>{firstname}</h1>
        <h2>Name is {firstname} and his Mobile no is {mobileNo}</h2>
        <h1>this is home component</h1>
        <button onClick={()=>{printMessage()}} >Click me</button>
        <button onClick={()=>{getApi()}} >Click getApi</button>
        <button onClick={()=>{postApi()}} >Click PosttApi</button>
        </>
    )
}