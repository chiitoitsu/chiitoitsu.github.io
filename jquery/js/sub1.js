$(document).ready(function() {

    // 전적을 승 패 무 순으로 저장함
    const status1 = [0, 0, 0];
    const status2 = [0, 0, 0];

    $("#btn1").click(function (){
        $("#player1").html("플레이어: 가위");
        $("#player1Img").attr("src", "../img/scissors.png");
        fight(0);
    });
    $("#btn2").click(function (){
        $("#player1").html("플레이어: 바위");
        $("#player1Img").attr("src", "../img/rock.png");
        fight(1);
    });
    $("#btn3").click(function (){
        $("#player1").html("플레이어: 보");
        $("#player1Img").attr("src", "../img/paper.png");
        fight(2);
    });

    function fight(player)
    {
        // 가위 0 바위 1 보 2
        let cpu = Math.floor(Math.random() * 3);
        
        if (cpu == 0)
        {
            $("#player2").html("컴퓨터: 가위");
            $("#player2Img").attr("src", "../img/scissors.png");
        }
        else if (cpu == 1)
        {
            $("#player2").html("컴퓨터: 바위");
            $("#player2Img").attr("src", "../img/rock.png");
        }
        else if (cpu == 2)
        {
            $("#player2").html("컴퓨터: 보");
            $("#player2Img").attr("src", "../img/paper.png");
        }
        // 승패 계산
        if (player == cpu)
        {
            $("#result").html("승부결과: 비김");
            status1[2]++;
            status2[2]++;
        }
        else if (player == 0 && cpu == 2 || player == 1 && cpu == 0 || player == 2 && cpu == 1)
        {
            $("#result").html("승부결과: 플레이어 승");
            status1[0]++;
            status2[1]++;
        }
        else
        {
            $("#result").html("승부결과: 컴퓨터 승");
            status1[1]++;
            status2[0]++;
        }
        // 전적 업데이트
        $("#player1Status").html("플레이어의 전적: " + status1[0] + "승 " + status1[1] + "패 " + status1[2] + "무");
        $("#player2Status").html("컴퓨터의 전적: " + status2[0] + "승 " + status2[1] + "패 " + status2[2] + "무");
    }

});