player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
answer=0;
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;
function send(){
number1=document.getElementById("num1").value;
number2=document.getElementById("num2").value;
answer=Number(number1)*Number(number2);
question_number="<h4>"+number1+"X"+number2+"</h4>";
input_box="<br>answer: <input type='text' id='input_check'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button> ";
row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("num1").value="";
document.getElementById("num2").value="";
}
var question_turn="player1";
var answer_turn="player2";
function check(){
var get_answer=document.getElementById("input_check_box").value;
if(get_answer==answer){
if(answer_turn=="player1"){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
}
else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
}
}
if (question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="question turn-"+player2_name;
}else{
question_turn="player1";
document.getElementById("player_question").innerHTML="question turn-"+player1_name;
}
if (answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;
}else{
answer_turn="player1";
document.getElementById("player_answer").innerHTML="answer turn-"+player1_name;
}
document.getElementById("output").innerHTML="";
}
