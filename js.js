
function calculate(){
    let tempval=document.getElementById('temp');
    let temptype=document.getElementById('tempdiff');
    let temptypeval = temptype.options[temptype.selectedIndex].value;

    let finalans=document.getElementById('res');

    console.log(tempval.value);
    console.log(temptypeval);
    
    function ftc(data){
        // °C = (°F − 32) x 5/9
        let ans=((data-32)*(5/9));
        return ans;
    }

    function ctf(data){
        // °F = (°C × 9/5) + 32
        let ans = ((data*(9/5))+32);
        return ans;
    }

    if(temptypeval=='celc'){
        
        finalans.innerHTML=ftc(tempval.value)
    }
    else if(temptypeval=='fer'){
        finalans.innerHTML=ctf(tempval.value)
    }
    else{
        finalans.innerHTML='select temp to convert to'
    }
}