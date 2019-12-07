$(document).ready(function (){

    $("#iframe").animate({width: "1000px", height: "600px"});
    $("#iframe").animate({borderRadius: "20px"});
    
    for (let i = 1; i <= 9; i++)
    {
        $("#a" + i).css({marginLeft: "-=300px"});
        $("#a" + i).animate({marginLeft: "+=300px"}, 500 + (100 * i));
    }
});