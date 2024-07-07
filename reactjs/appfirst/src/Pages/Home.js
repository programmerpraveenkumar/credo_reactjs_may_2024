import Header from "./Header";

export default function Home(){
    let firstname = "afwfdf";
    let mobileNo = "8498464";
    let animals=['lion','tiger','elephant'];
    let animalDetails=[
        {name:"lion",forest:'africa',count:1000},
        {name:"tiger",forest:'bengal',count:4000},
        {name:"elephant",forest:'kerala',count:500}
    ];
    return(
        <>
        <Header/>
        
        <h1>{firstname}</h1>
        <h2>Name is {firstname} and his Mobile no is {mobileNo}</h2>
        <h1>this is home component</h1>
        {
            animals.map((ele,index)=>{
                return <>
                    <h1>{ele}</h1>
                </>
            })
        }
         {
            animalDetails.map((ele,index)=>{
                return <>
                    <h1>Name is {ele.name}.Forest is {ele.forest}.Count is {ele.count}</h1>.
                </>
            })
        }
        </>
    )
}