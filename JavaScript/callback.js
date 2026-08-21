function sum(a,b){
    return a+b;
}

function sumWithmsg(clbk,msg){
    const result=clbk(20,30);
    const finalResult="hi "+msg+" Your score is: "+result;
    console.log(finalResult);
}

sumWithmsg(sum,"Ms. Nandni");

function verify(a,b){
    return a=="Nandni" && b=="nandu";
}
function CanLogin(clbk,msg){
    const result=clbk("Nandni","nandu");
    if(result){
        console.log(msg+" You can login")
    }else{
        console.log(msg+" You can't login");
    }
}

CanLogin(verify,"Ms. Nandni");