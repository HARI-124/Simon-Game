
var buttons = ["green","red","yellow","blue"];
var gamepattern = [];
var userPattern = [];
var started = false;
var level = 0;



$(document).keypress(function(){

    if(!started){
        $("#level-title").text("level "+level);
        nextSequence();
        started = true;
    }

});


$(".btn").on("click",function(event){
    var buttoncolor = $(this).attr("id");
    userPattern.push(buttoncolor);
    playSound(buttoncolor);
    animatePress(buttoncolor);
    checkAnswer(userPattern.length-1);
    });









function checkAnswer(currentLevel){
    // var sum = (currentLevel*(currentLevel+1))/2;
    
    // for(var i=0;i<gamepattern.length;i++){
    //         for(var j=sum-level;j<(userPattern.length-level+1);j++){
    //             if(userPattern[j]!=gamepattern[i]){
    //                 var answer = "wrong";
    //             }
    
    //         }
    //     }
    
    // if(answer=="wrong"){
    //     $(document).text("Game over press any key to restart");
    //     started = false;
    // }
    // else{
        
    //     setTimeout(function(){
    //         $("#level-title").text("level "+level);
    //         nextSequence();
    //     },1000);
        
        
    // }
    
    if(userPattern[currentLevel]===gamepattern[currentLevel]){
        
        console.log("sucess")
        if(userPattern.length===gamepattern.length){
            setTimeout(function(){
                $("#level-title").text("level "+level);
                nextSequence();
            },1000);
            
        }
        
    }
    
    else{
        // $(document).text("Game over press any key to restart");
        // started = false;
        console.log("wrong");
        
    }


}





function nextSequence(){
    var userPattern = [];
    level++;
    $("#level-title").text("Level " + level);
  
    var rand = Math.floor(Math.random()*4);
    var ranButton = buttons[rand];
    gamepattern.push(ranButton);
    $("#"+ranButton).fadeOut(100).fadeIn(100);
    playSound(ranButton);
    animatePress(ranButton);
}

function playSound(key){

    var audio = new Audio("sounds/"+key+".mp3");
    audio.play();

}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)

}



