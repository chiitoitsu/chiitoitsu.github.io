$(document).ready(function() {

    // div1 ~ div9 스타일 지정
    const MAX = 9;
    for (let i = 1; i <= MAX; i++)
    {
        $("#div" + i).css({
            "display": "none",
            "margin-top": "20px",
            "border": "1px solid black",
            "width": "400px"
        });
    }

    $("#btn1").click(function (){
        $("#index").slideToggle();
        for (let i = 1; i <= MAX; i++)
            $("#div" + i).slideUp();
    });

    for (let i = 1; i <= MAX; i++)
    {
        $("#li" + i).click(function (){
            $("#index").slideToggle();
            $("#div" + i).slideToggle();
        });
    }
    
});