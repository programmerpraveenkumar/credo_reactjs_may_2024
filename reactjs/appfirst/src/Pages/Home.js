import {useRef, useState} from 'react';

export default function Home(){
    let firstname = "afwfdf";
    let mobileNo = "8498464";
    let inputRef = useRef();
    let input1Ref = useRef();
    let pageNoRef = useRef();
   
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
        let res = await fetch("https://reqres.in/api/users?page="+pageNoRef.current.value,{method:"GET"});
        let json  = await res.json();
        console.log(json);
        setUserList(json['data']);
    }

    const postApi=async ()=>{
        console.log(inputRef.current.value);
        console.log(input1Ref.current.value)
        let data = {
            "email": inputRef.current.value,
            "password": input1Ref.current.value
        }
        let res = await fetch("https://reqres.in/api/register",
            {method:"POST",body:JSON.stringify(data),
            headers:{'content-type':"application/json"}}
        );
        let json  = await res.json();
        console.log(json);        
    }
    const getValue=()=>{
        console.log(inputRef.current.value);
        console.log(input1Ref.current.value)
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
        {userList.length == 0?<h1>No User found</h1>:null}
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
        <select ref={pageNoRef} onChange={()=>getApi()}>
            <option value="1"> Page 1</option>
            <option value="2"> Page 2</option>
            <option value="3"> Page 3</option>
            <option value="4"> Page 4</option>

        </select>
        <h1>{name}</h1>
        <h1>{firstname}</h1>
        <input type="text" ref={input1Ref} placeholder='Enter Name'/>
        <input type="text" ref={inputRef} placeholder='Enter message'/>
        <button onClick={()=>{getValue()}} >Get Value</button>
        <h2>Name is {firstname} and his Mobile no is {mobileNo}</h2>
        <h1>this is home component</h1>
        <button onClick={()=>{printMessage()}} >Click me</button>
        <button onClick={()=>{getApi()}} >Click getApi</button>
        <button onClick={()=>{postApi()}} >Click PosttApi</button>
        </>
    )
}