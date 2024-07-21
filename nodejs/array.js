var list = ["apple","elephant",'lion','happy','cat'];
var personDetailList = [
    {
        "name":"45645some name",
        "mobile":7857,
        "address":"some address"
    },
    {
        "name":"9789some name",
        "mobile":64646,
        "address":"some address"
    },
    {
        "name":"45 name",
        "mobile":3453434,
        "address":"some address"
    }
    , {
        "name":"1st person name",
        "mobile":6461232346,
        "address":"some address"
    } , {
        "name":"2person",
        "mobile":646127246,
        "address":"some address"
    }
    ];

// for(let i in list){
//     console.log(list[i].contains("a"))
// }
//ES6 filter

let result = list.filter(function(ele){ return ele.includes("a") });
console.log(result);

let filterList = personDetailList.filter((ele)=>{
     return ele['mobile'].toString().length == 10 
    });
console.log(filterList);

/*
code for filter the element which starts with 'a'
*/