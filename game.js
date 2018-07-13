$(document).ready(function(){
        var start_time = new Date();
        var score = 0;
        var score_disp = $("#score");
        var hi_score_disp = $("#hi-score"); 
        setInterval(function(){
            $("#gameboard").append($('<img src="images/transparent-Img.png" id="transparent-img"/>'))
            $('#transparent-img').animate({"left":"-10px"},2500,"linear",function(){
                $(this).remove();
            })   
        },3000);
        $(document).keypress(function(e){
            if(e.key === " "){
                const trex= $('#trex');
                trex.animate({'top':'-200px'},500);
                trex.animate({'top':'40px'},500);
            }
        })
        var updateHighScore = function(){
            if(Number(hi_score_disp.text()) < score){
                hi_score_disp.text(score);
            }
        }
        var reset =  function(){
            score_disp.text("00");
            score = 0;
            start_time = new Date();
        }
        setInterval(function(){
            var trex_pos = $("#trex").position();
            var obstacle_pos = $("#transparent-img").position()
            if((trex_pos.left+60 >= obstacle_pos.left && trex_pos.left+60 <= obstacle_pos.left+50) &&(trex_pos.top >= obstacle_pos.top ) ){
                updateHighScore();
                reset();  
                alert("You Loose");
            }
        },100);

        setInterval(function(){
            console.log(score_disp.val());
            var current_time = new Date();
            score = Math.floor((current_time-start_time)/1000)
            score_disp.text(score)     
        },700);
        
});