/* *****Created by Ledio Deda*****
      *****Extra credit to Kirk Schafer***** */
$(function() {
//declaring vars
    var a = 0;
    var b = 0;
    var i = 0;
    var y = 0;
    var color = ["blue", "green", "red", "yellow", "darkblue", "lime", "cyan", "magenta", "pink", "orange"];
    var cindex = 0;
    var colorl = color.length;    
//getting canvas
    var c = document.getElementById("can");
    var bosht=document.getElementById("bosht");
    var ca = c.getContext("2d");
    var bo = bosht.getContext("2d");
    bo.fillStyle="black";
    bo.font="bold 10px Times";
//making scales in Oy UNITY=10
    for(; a<1000; a+=20) {
        bo.fillText((250-a)/10, 150, a+5);
        bo.fillRect(168, a-1, 5, 2);
        }
//lining Oy
    for(; y<1000; y++) {
        bo.fillRect(169, y, 3, 3);
    }
//making scales in Ox UNITY=10
    for(; b<=340; b+=20) {
        bo.fillText((b-170)/10, b-3, 265);
        bo.fillRect(b-1, 249, 2, 5);
    }
//lining Ox
    for(; i<=340; i++) {
        bo.fillRect(i, 250, 3, 3);
    }
//click build button
    $("#build").click(function(){
    var getFunc = $("#func").val();
//drawing points of graphic of function
    ca.fillStyle = color[cindex];
    for(var x=-340; x<=340; x+=0.001) {
        ca.fillRect(x*10+170, -eval(getFunc)*10+250, 0.7, 0.7);
    }
    cindex++;
        if(cindex>=colorl) {
            cindex = 0;
        }
    });
//Clear the graph of function
    $("#clear").click(function(){
    var cleFunc = $("#func").val();
        for(var x=-340; x<=340; x+=0.001) {
        ca.clearRect(x*10+170-0.5, -eval(cleFunc)*10+250-0.5, 2, 2);
    }
    });
//Clear all canvas
    $("#empty").click(function(){
        ca.clearRect(0, 0, 340, 500);
    });
//Clear the function written button
    $("#clearWrite").click(function(){
        $("#func").val("");
    });
//FIND the value
    $("#find").click(function(){
        var getFunc = $("#func").val();
        var x = parseFloat($("#getx").val());
        var showy = eval(getFunc);
        $("#gety").html(showy);
        ca.fillStyle = "deepSkyBlue";
        ca.fillRect(x*10+170-3, -showy*10+250-3, 6, 6);
    }); 
    var pos = parseInt($("#can").css("top"));
    var boh = $("#bosht").css("top",pos-508.5+"px");
});
//to examine the input formula 
    window.onerror = function(){
        alert("Error! Please check the formula again and make sure it is correct!"); 
        return true;
    }
