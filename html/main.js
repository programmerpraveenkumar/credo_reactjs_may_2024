function add(){
    //read the value from the input
    let input_1 = document.getElementById('input_1');
    let val = input_1.value;
    let input_2 = document.getElementById('input_2');
    let val2 = input_2.value;

    let res = parseInt(val)+parseInt(val2);

    let div_1 = document.getElementById('div_id');
    //will replace the content of the div
    div_1.innerHTML= "<h1>"+res+"</h1>";
    // console.log(div_1);
}
function sub(){
  let input_1 = document.getElementById('input_1');
    let val = input_1.value;
    
    let input_2 = document.getElementById('input_2');
    let val2 = input_2.value;

    let res = parseInt(val)-parseInt(val2);

    let div_1 = document.getElementById('div_id');
    //will replace the content of the div
    div_1.innerHTML= "<h1>"+res+"</h1>";
}
function mul(){
    //read the value from the input
    let input_1 = document.getElementById('input_1');
    let val = input_1.value;

    let div_1 = document.getElementById('div_id');
    //will replace the content of the div
    div_1.innerHTML= "<h1>"+val+"</h1>";
    
    // console.log(div_1);
}
function div(){
    //read the value from the input
    let input_1 = document.getElementById('input_1');
    let val = input_1.value;

    let div_1 = document.getElementById('div_id');
    //will replace the content of the div
    div_1.innerHTML= "<h1>"+val+"</h1>";
    
    // console.log(div_1);
}
function changeValue() {
    let input_1 = document.getElementById('sel');
    let val = input_1.value;
    if(val =='Add'){
        add();
    }else if(val == 'Sub'){
        sub();
    }
}

console.log("hi ths is nodejs");
// changeValue();