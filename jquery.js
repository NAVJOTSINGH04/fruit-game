var playing = false;
var score;
var trailsleft;
$(function () {
    //click on start restart button
   $("#startreset").click(function () {
       if(playing == true){
       location.reload();
       }else{
           playing = true;
           score = 0;
           $("#scorevalue").html(score);
           $("#timeremaining").show();
              trailsleft = 3;
           addHearts();
           
       }
   } ); 
});
function addHearts(){
    
 for(i = 0;i<trailsleft;i++){
             $("#timeremaining").append(" x ");
            }
}