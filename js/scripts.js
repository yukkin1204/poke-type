
let myNoeffect=-10;
let myAnswer=new Array(1,2);
let myEffect=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let myMessage=["？", "こうかなし", "いまひとつ", "ばつぐん", "ふつう"];
let myType=new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18);
myType[0]="";
myType[1]="ノーマル";
myType[2]="ほのお";
myType[3]="みず";
myType[4]="でんき";
myType[5]="くさ";
myType[6]="こおり";
myType[7]="かくとう";
myType[8]="どく";
myType[9]="じめん";
myType[10]="ひこう";
myType[11]="エスパー";
myType[12]="むし";
myType[13]="いわ";
myType[14]="ゴースト";
myType[15]="ドラゴン";
myType[16]="あく";
myType[17]="はがね";
myType[18]="フェアリー";

window.onload=initializepage()

function initializepage(){
    myAnswer[1]=Math.floor(Math.random()*18+1);
    myAnswer[2]=Math.floor(Math.random()*19);
    if(myAnswer[1]===myAnswer[2]){
        myAnswer[2]=0;
    }else if(myAnswer[1]>myAnswer[2]){
        let tmp=myAnswer[1];
        myAnswer[1]=myAnswer[2];
        myAnswer[2]=tmp;
    }
    if(myAnswer[1]==1||myAnswer[2]==1){
        myEffect[7]+=1;
        myEffect[14]+=myNoeffect;
    }
    if(myAnswer[1]==2||myAnswer[2]==2){
        myEffect[2]-=1;
        myEffect[3]+=1;
        myEffect[5]+=-1;
        myEffect[6]+=-1;
        myEffect[9]+=1;
        myEffect[12]+=-1;
        myEffect[13]+=1;
        myEffect[17]+=-1;
        myEffect[18]+=-1;
    }
    if(myAnswer[1]==3||myAnswer[2]==3){
        myEffect[2]+=-1;
        myEffect[3]+=-1;
        myEffect[4]+=1;
        myEffect[5]+=1;
        myEffect[6]+=-1;
        myEffect[17]+=-1;
    }
    if(myAnswer[1]==4||myAnswer[2]==4){
        myEffect[4]+=-1;
        myEffect[9]+=1;
        myEffect[10]+=-1;
        myEffect[17]+=-1;
    }
    if(myAnswer[1]==5||myAnswer[2]==5){
        myEffect[2]+=1;
        myEffect[3]+=-1;
        myEffect[4]+=-1;
        myEffect[5]+=-1;
        myEffect[6]+=1;
        myEffect[8]+=1;
        myEffect[9]+=-1;
        myEffect[10]+=1;
        myEffect[12]+=1;
    }
    if(myAnswer[1]==6||myAnswer[2]==6){
        myEffect[2]+=1;
        myEffect[6]+=-1;
        myEffect[7]+=1;
        myEffect[13]+=1;
        myEffect[17]+=1;
    }
    if(myAnswer[1]==7||myAnswer[2]==7){
        myEffect[10]+=1;
        myEffect[11]+=1;
        myEffect[12]+=-1;
        myEffect[13]+=-1;
        myEffect[16]+=-1;
        myEffect[18]+=1;
    }
    if(myAnswer[1]==8||myAnswer[2]==8){
        myEffect[5]+=-1;
        myEffect[7]+=-1;
        myEffect[8]+=-1;
        myEffect[9]+=1;
        myEffect[11]+=1;
        myEffect[12]+=-1;
        myEffect[18]+=-1;
    }
    if(myAnswer[1]==9||myAnswer[2]==9){
        myEffect[3]+=1;
        myEffect[4]+=myNoeffect;
        myEffect[5]+=1;
        myEffect[6]+=1;
        myEffect[8]+=-1;
        myEffect[13]+=-1;
    }
    if(myAnswer[1]==10||myAnswer[2]==10){
        myEffect[4]+=1;
        myEffect[5]+=-1;
        myEffect[6]+=1;
        myEffect[7]+=-1;
        myEffect[9]+=myNoeffect;
        myEffect[12]+=-1;
        myEffect[13]+=1;
    }
    if(myAnswer[1]==11||myAnswer[2]==11){
        myEffect[7]+=-1;
        myEffect[11]+=-1;
        myEffect[12]+=1;
        myEffect[14]+=1;
        myEffect[16]+=1;
    }
    if(myAnswer[1]==12||myAnswer[2]==12){
        myEffect[2]+=1;
        myEffect[5]+=-1;
        myEffect[7]+=-1;
        myEffect[9]+=-1;
        myEffect[10]+=1;
        myEffect[13]+=1;
    }
    if(myAnswer[1]==13||myAnswer[2]==13){
        myEffect[1]+=-1;
        myEffect[2]+=-1;
        myEffect[3]+=1;
        myEffect[5]+=1;
        myEffect[7]+=1;
        myEffect[8]+=-1;
        myEffect[9]+=1;
        myEffect[10]+=-1;
        myEffect[17]+=1;
    }
    if(myAnswer[1]==14||myAnswer[2]==14){
        myEffect[1]+=myNoeffect;
        myEffect[7]+=myNoeffect;
        myEffect[8]+=-1;
        myEffect[12]+=-1;
        myEffect[14]+=1;
        myEffect[16]+=1;
    }
    if(myAnswer[1]==15||myAnswer[2]==15){
        myEffect[2]+=-1;
        myEffect[3]+=-1;
        myEffect[4]+=-1;
        myEffect[5]+=-1;
        myEffect[6]+=1;
        myEffect[15]+=1;
        myEffect[18]+=1;
    }
    if(myAnswer[1]==16||myAnswer[2]==16){
        myEffect[7]+=1;
        myEffect[11]+=myNoeffect;
        myEffect[12]+=1;
        myEffect[14]+=-1;
        myEffect[16]+=-1;
        myEffect[18]+=1;
    }
    if(myAnswer[1]==17||myAnswer[2]==17){
        myEffect[1]+=-1;
        myEffect[2]+=1;
        myEffect[5]+=-1;
        myEffect[6]+=-1;
        myEffect[7]+=1;
        myEffect[8]+=myNoeffect;
        myEffect[9]+=1;
        myEffect[10]+=-1;
        myEffect[11]+=-1;
        myEffect[12]+=-1;
        myEffect[13]+=-1;
        myEffect[15]+=-1;
        myEffect[17]+=-1;
        myEffect[18]+=-1;
    }
    if(myAnswer[1]==18||myAnswer[2]==18){
        myEffect[7]+=-1;
        myEffect[8]+=1;
        myEffect[12]+=-1;
        myEffect[15]+=myNoeffect;
        myEffect[16]+=-1;
        myEffect[17]+=1;
    }
    document.getElementById("normal-msg").textContent=myMessage[0];
    document.getElementById("fire-msg").textContent=myMessage[0];
    document.getElementById("water-msg").textContent=myMessage[0];
    document.getElementById("electric-msg").textContent=myMessage[0];
    document.getElementById("grass-msg").textContent=myMessage[0];
    document.getElementById("ice-msg").textContent=myMessage[0];
    document.getElementById("fighting-msg").textContent=myMessage[0];
    document.getElementById("poison-msg").textContent=myMessage[0];
    document.getElementById("ground-msg").textContent=myMessage[0];
    document.getElementById("flying-msg").textContent=myMessage[0];
    document.getElementById("psychic-msg").textContent=myMessage[0];
    document.getElementById("bug-msg").textContent=myMessage[0];
    document.getElementById("rock-msg").textContent=myMessage[0];
    document.getElementById("ghost-msg").textContent=myMessage[0];
    document.getElementById("dragon-msg").textContent=myMessage[0];
    document.getElementById("dark-msg").textContent=myMessage[0];
    document.getElementById("steel-msg").textContent=myMessage[0];
    document.getElementById("fairy-msg").textContent=myMessage[0];
    document.getElementById("answer-msg").textContent="";
}

document.getElementById("retry-btn").addEventListener("click",initializepage);

document.getElementById("answer-btn").addEventListener("click",function(){
    document.getElementById("answer-msg").textContent="正解は　"+myType[myAnswer[1]]+"　"+myType[myAnswer[2]];
});

document.getElementById("normal-btn").addEventListener("click",function(){
    if(myEffect[1]<-3){
        document.getElementById("normal-msg").textContent=myMessage[1];
    }else if(myEffect[1]<0){
        document.getElementById("normal-msg").textContent=myMessage[2];
    }else if(myEffect[1]>0){
        document.getElementById("normal-msg").textContent=myMessage[3];
    }else if(myEffect[1]==0){
        document.getElementById("normal-msg").textContent=myMessage[4];
    }
});
document.getElementById("fire-btn").addEventListener("click",function(){
    if(myEffect[2]<-3){
        document.getElementById("fire-msg").textContent=myMessage[1];
    }else if(myEffect[2]<0){
        document.getElementById("fire-msg").textContent=myMessage[2];
    }else if(myEffect[2]>0){
        document.getElementById("fire-msg").textContent=myMessage[3];
    }else if(myEffect[2]==0){
        document.getElementById("fire-msg").textContent=myMessage[4];
    }
});
document.getElementById("water-btn").addEventListener("click",function(){
    if(myEffect[3]<-3){
        document.getElementById("water-msg").textContent=myMessage[1];
    }else if(myEffect[3]<0){
        document.getElementById("water-msg").textContent=myMessage[2];
    }else if(myEffect[3]>0){
        document.getElementById("water-msg").textContent=myMessage[3];
    }else if(myEffect[3]==0){
        document.getElementById("water-msg").textContent=myMessage[4];
    }
});
document.getElementById("electric-btn").addEventListener("click",function(){
    if(myEffect[4]<-3){
        document.getElementById("electric-msg").textContent=myMessage[1];
    }else if(myEffect[4]<0){
        document.getElementById("electric-msg").textContent=myMessage[2];
    }else if(myEffect[4]>0){
        document.getElementById("electric-msg").textContent=myMessage[3];
    }else if(myEffect[4]==0){
        document.getElementById("electric-msg").textContent=myMessage[4];
    }
});
document.getElementById("grass-btn").addEventListener("click",function(){
    if(myEffect[5]<-3){
        document.getElementById("grass-msg").textContent=myMessage[1];
    }else if(myEffect[5]<0){
        document.getElementById("grass-msg").textContent=myMessage[2];
    }else if(myEffect[5]>0){
        document.getElementById("grass-msg").textContent=myMessage[3];
    }else if(myEffect[5]==0){
        document.getElementById("grass-msg").textContent=myMessage[4];
    }
});
document.getElementById("ice-btn").addEventListener("click",function(){
    if(myEffect[6]<-3){
        document.getElementById("ice-msg").textContent=myMessage[1];
    }else if(myEffect[6]<0){
        document.getElementById("ice-msg").textContent=myMessage[2];
    }else if(myEffect[6]>0){
        document.getElementById("ice-msg").textContent=myMessage[3];
    }else if(myEffect[6]==0){
        document.getElementById("ice-msg").textContent=myMessage[4];
    }
});
document.getElementById("fighting-btn").addEventListener("click",function(){
    if(myEffect[7]<-3){
        document.getElementById("fighting-msg").textContent=myMessage[1];
    }else if(myEffect[7]<0){
        document.getElementById("fighting-msg").textContent=myMessage[2];
    }else if(myEffect[7]>0){
        document.getElementById("fighting-msg").textContent=myMessage[3];
    }else if(myEffect[7]==0){
        document.getElementById("fighting-msg").textContent=myMessage[4];
    }
});
document.getElementById("poison-btn").addEventListener("click",function(){
    if(myEffect[8]<-3){
        document.getElementById("poison-msg").textContent=myMessage[1];
    }else if(myEffect[8]<0){
        document.getElementById("poison-msg").textContent=myMessage[2];
    }else if(myEffect[8]>0){
        document.getElementById("poison-msg").textContent=myMessage[3];
    }else if(myEffect[8]==0){
        document.getElementById("poison-msg").textContent=myMessage[4];
    }
});
document.getElementById("ground-btn").addEventListener("click",function(){
    if(myEffect[9]<-3){
        document.getElementById("ground-msg").textContent=myMessage[1];
    }else if(myEffect[9]<0){
        document.getElementById("ground-msg").textContent=myMessage[2];
    }else if(myEffect[9]>0){
        document.getElementById("ground-msg").textContent=myMessage[3];
    }else if(myEffect[9]==0){
        document.getElementById("ground-msg").textContent=myMessage[4];
    }
});
document.getElementById("flying-btn").addEventListener("click",function(){
    if(myEffect[10]<-3){
        document.getElementById("flying-msg").textContent=myMessage[1];
    }else if(myEffect[10]<0){
        document.getElementById("flying-msg").textContent=myMessage[2];
    }else if(myEffect[10]>0){
        document.getElementById("flying-msg").textContent=myMessage[3];
    }else if(myEffect[10]==0){
        document.getElementById("flying-msg").textContent=myMessage[4];
    }
});
document.getElementById("psychic-btn").addEventListener("click",function(){
    if(myEffect[11]<-3){
        document.getElementById("psychic-msg").textContent=myMessage[1];
    }else if(myEffect[11]<0){
        document.getElementById("psychic-msg").textContent=myMessage[2];
    }else if(myEffect[11]>0){
        document.getElementById("psychic-msg").textContent=myMessage[3];
    }else if(myEffect[11]==0){
        document.getElementById("psychic-msg").textContent=myMessage[4];
    }
});
document.getElementById("bug-btn").addEventListener("click",function(){
    if(myEffect[12]<-3){
        document.getElementById("bug-msg").textContent=myMessage[1];
    }else if(myEffect[12]<0){
        document.getElementById("bug-msg").textContent=myMessage[2];
    }else if(myEffect[12]>0){
        document.getElementById("bug-msg").textContent=myMessage[3];
    }else if(myEffect[12]==0){
        document.getElementById("bug-msg").textContent=myMessage[4];
    }
});
document.getElementById("rock-btn").addEventListener("click",function(){
    if(myEffect[13]<-3){
        document.getElementById("rock-msg").textContent=myMessage[1];
    }else if(myEffect[13]<0){
        document.getElementById("rock-msg").textContent=myMessage[2];
    }else if(myEffect[13]>0){
        document.getElementById("rock-msg").textContent=myMessage[3];
    }else if(myEffect[13]==0){
        document.getElementById("rock-msg").textContent=myMessage[4];
    }
});
document.getElementById("ghost-btn").addEventListener("click",function(){
    if(myEffect[14]<-3){
        document.getElementById("ghost-msg").textContent=myMessage[1];
    }else if(myEffect[14]<0){
        document.getElementById("ghost-msg").textContent=myMessage[2];
    }else if(myEffect[14]>0){
        document.getElementById("ghost-msg").textContent=myMessage[3];
    }else if(myEffect[14]==0){
        document.getElementById("ghost-msg").textContent=myMessage[4];
    }
});
document.getElementById("dragon-btn").addEventListener("click",function(){
    if(myEffect[15]<-3){
        document.getElementById("dragon-msg").textContent=myMessage[1];
    }else if(myEffect[15]<0){
        document.getElementById("dragon-msg").textContent=myMessage[2];
    }else if(myEffect[15]>0){
        document.getElementById("dragon-msg").textContent=myMessage[3];
    }else if(myEffect[15]==0){
        document.getElementById("dragon-msg").textContent=myMessage[4];
    }
});
document.getElementById("dark-btn").addEventListener("click",function(){
    if(myEffect[16]<-3){
        document.getElementById("dark-msg").textContent=myMessage[1];
    }else if(myEffect[16]<0){
        document.getElementById("dark-msg").textContent=myMessage[2];
    }else if(myEffect[16]>0){
        document.getElementById("dark-msg").textContent=myMessage[3];
    }else if(myEffect[16]==0){
        document.getElementById("dark-msg").textContent=myMessage[4];
    }
});
document.getElementById("steel-btn").addEventListener("click",function(){
    if(myEffect[17]<-3){
        document.getElementById("steel-msg").textContent=myMessage[1];
    }else if(myEffect[17]<0){
        document.getElementById("steel-msg").textContent=myMessage[2];
    }else if(myEffect[17]>0){
        document.getElementById("steel-msg").textContent=myMessage[3];
    }else if(myEffect[17]==0){
        document.getElementById("steel-msg").textContent=myMessage[4];
    }
});
document.getElementById("fairy-btn").addEventListener("click",function(){
    if(myEffect[18]<-3){
        document.getElementById("fairy-msg").textContent=myMessage[1];
    }else if(myEffect[18]<0){
        document.getElementById("fairy-msg").textContent=myMessage[2];
    }else if(myEffect[18]>0){
        document.getElementById("fairy-msg").textContent=myMessage[3];
    }else if(myEffect[18]==0){
        document.getElementById("fairy-msg").textContent=myMessage[4];
    }
});