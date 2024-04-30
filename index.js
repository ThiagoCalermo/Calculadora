    const displayAN=document.querySelector("#valor-anterior");
    const displayIN=document.querySelector("#invisible")
    const displayAC=document.querySelector("#valor-actual");
    const botones=document.querySelectorAll("button");
    var o=0;
    var p=0;
    botones.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            if(btn.id=== "="){
                displayAN.value=eval(displayIN.value);
                displayAC.value="";
                displayIN.value=displayAN.value;
                o=2;
            } else if(btn.id==="C"){
                displayAC.value="";
                displayAN.value="";
                displayIN.value="";
                o=0;
            }else if(btn.id=== "borrar"){
                displayAC.value=displayAC.value.slice(0,-1);
            }else if(btn.className==="punt"&&p==0) {
                displayIN.value+=btn.id;
                displayAC.value+=btn.id;
                p=1;
            }else if(btn.className==="operator" && o==0){
                displayAN.value=displayAC.value+btn.id;
                displayIN.value=displayAC.value+btn.id;
                displayAC.value="";
                o=1;
            }else if(btn.className==="operator" && o==1){
                displayIN.value=eval(displayIN.value)+btn.id;
                displayAN.value=displayIN.value;
                displayAC.value="";
                o=1;
            }else if(btn.className==="operator" && o==2){
                displayAN.value=displayAN.value+btn.id;
                displayIN.value=displayIN.value+btn.id;
                displayAC.value="";
                o=1;
            }else{
                displayIN.value+=btn.id;
                displayAC.value+=btn.id;
            } 
        })
    });