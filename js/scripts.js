myFlag=0;
myNoeffect=-10;
myAnswer=new Array(1,2);
myEffect=new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18);
myMessage=new Array(0,1,2,3,4);
myMessage[0]="？";
myMessage[1]="こうかなし";
myMessage[2]="いまひとつ";
myMessage[3]="ばつぐん";
myMessage[4]="ふつう";

initializepage(){
    myFlag=1;

    if(myAnswer[1]==myAnswer[2]){
        myAnswer[2]==0;
    }else if()
}
document.getElementById("retry-btn").addEventListener("click",initializepage());
document.getElementById("answer-btn").addEventListener("click",function(){
myFlag=0;
});

document.getElementById("XXX-btn").addEventListener("click",function(){
if(myFlag==1){
if(myEffect[YYY]<-3){
document.querySelector("hint-message").textContent=myMessage[1];
}else if(myEffect[YYY]<0){
document.querySelector("hint-message").textContent=myMessage[2];
}else if(myEffect[YYY]>0){
document.querySelector("hint-message").textContent=myMessage[3];
}else if(myEffect[YYY]==0){
document.querySelector("hint-message").textContent=myMessage[4];
}
}
});


