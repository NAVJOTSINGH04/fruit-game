var playing = false;
var score;
var trailsleft;
var step;
var action;
var fruits=['banana','cherries','grapes','green','guava','lemon','mango','orange','pineapple'];
$(function () {
    //click on start restart button
   $("#startreset").click(function () {
       if(playing == true){
       location.reload();
       }else{
           playing = true;
           score = 0;
           //show the score
           $("#scorevalue").html(score);
           //show trail box
           $("#trailsLeft").show();
              trailsleft = 3;
           //no. of trails
           addHearts();
           //change button to reset game 
           $("#startreset").html("reset game");
           // add fruits 
           startAction();
           //hide game over box
           $("#gameOver").hide();
           
       }
   } ); 
    $("#fruit1").mouseover(function(){
        score ++;
        $("#scorevalue").html(score);//update score value
        $("#slicesound")[0].play();//play sound
        clearInterval(action);//stop fruit
        $("#fruit1").hide("explode", 400);
        setTimeout(startAction, 400);
        
    });  

// no. of trails left 
function addHearts(){
    $("#trailsLeft").empty();
 for(i = 0;i<trailsleft;i++){
             $("#trailsLeft").append('<img id="heart" src="images/heart.png">');
            }
}
//add fruits
function startAction(){
    $("#fruit1").show();
   chooseFruit();//choose random fruit
    //random position for fruit
    $("#fruit1").css({'left':Math.round(595*Math.random()),'top':-10});
    //generate random one step
    step = 1+Math.round(5*Math.random());
    
    action= setInterval(function(){ //move by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step);
        
        // check if fruit is too low
       if( $("#fruit1").position().top > $("#question").height()){
           //check  if trails are left
           if(trailsleft > 1){
               $("#fruit1").show();
   chooseFruit();//choose random fruit
    //random position for fruit
    $("#fruit1").css({'left':Math.round(595*Math.random()),'top':-10});
    //generate random one step
    step = 1+Math.round(5*Math.random());
               //reduce trail by one 
               trailsleft --;
               
               addHearts();
           }else{
               //game over
               playing=false;
               //show game over
               $("#gameOver").show();
               $("#gameOver").html('<p>game over</p><p>your score is '+  score +'</p>')
               //change reset button 
               $("#startreset").html("start game");
               //hide trail box 
               $("#trailsLeft").hide();
               //stop drop fruit 
               stopAction();
           }
           
       }
    } , 5);
    
}
 function chooseFruit(){//function for random fruit
     $("#fruit1").attr('src' ,'images/'+fruits[Math.round(8*Math.random())] +'.png');
 }
//stop fruit drop fruit
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});