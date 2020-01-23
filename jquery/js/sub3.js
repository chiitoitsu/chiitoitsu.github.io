$(document).ready(function() {

    // 공백
    $(".temp").html("　");
    $(".temp").css({
        backgroundColor : "white",
        color : "white",
        cursor: "default"
    });

    // 안전구역
    $(".safe").html("　");
    $(".safe").css({
        backgroundColor : "#0f0",
        color : "#0f0",
        cursor: "default"
    });
    $(".safe").hover(function ()
    {
        $(this).css({
            backgroundColor : "yellow",
            color : "yellow"
        });
    });
    $(".safe").mouseout(function ()
    {
        $(this).css({
            backgroundColor : "#0f0",
            color : "#0f0"
        });
    });

    // 벽
    $(".wall").html("　");
    $(".wall").css({
        backgroundColor : "black",
        color : "black",
        cursor: "default"
    });
    $(".wall").hover(function ()
    {
        $(this).css({
            backgroundColor : "red",
            color : "red"
        });

        $("#warn").html("벽에 닿았음");
    });
    $(".wall").mouseout(function ()
    {
        $(this).css({
            backgroundColor : "black",
            color : "black"
        });
        $("#warn").html("벽에 닿지 않았음");
    });
});