let celvalue=document.getElementById("cel");
let fervalue=document.getElementById("fer");

celvalue.addEventListener('change',()=>{
    console.log(celvalue.value);
    let finalfervalue=celvalue.value;
    finalfervalue=((finalfervalue*(9/5))+32);
    console.log(finalfervalue);
    fervalue.value=finalfervalue;
})

fervalue.addEventListener('change',()=>{
    console.log(fervalue.value);
    let finalcelvalue=fervalue.value;
    finalcelvalue=((finalcelvalue-32)*(5/9));
    console.log(finalcelvalue);
    celvalue.value=finalcelvalue;
})
