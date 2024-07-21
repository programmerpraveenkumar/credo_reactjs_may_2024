import React from "react";
//class component
class Home2 extends React.Component{
    inputRef = React.createRef();
    state={
        "name":"sewf",
        "mobile":"sdf",
        "userList":[]
    }
    updateState(){
        this.setState({"mobile":"464564645"});
    }
    getApi=async ()=>{
        let pageNo = this.inputRef.current.value;
        let res = await fetch("https://reqres.in/api/users?page="+pageNo,{method:"GET"});
        let json  = await res.json();
        console.log(json);
        this.setState({"userList":json['data']});
    }
    render(){
        return(
            <>
                <h1>this is class component {this.state.name}</h1>
                <h2>this is mobile {this.state.mobile}</h2>
                <input type="text" ref={this.inputRef} placeholder="Enter Message"/>
                <button onClick={()=>this.updateState()}>Click to updat</button>
                <button onClick={()=>this.getApi()}>Click to call api</button>
                {  this.state.userList.length == 0?<h1>No User found</h1>:null}
        {
            this.state.userList.map((ele,index)=>{
                    return (
                        <div key={index}>

                            <img src={ele.avatar}/>
                        <h1 >{ele.first_name}{ele.last_name}</h1>
                        </div>
                    )
            })
        }
            </>
        )
    }

}

export default Home2;