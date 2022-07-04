player1_name = localStorage.getItem("p1_name");
player2_name = localStorage.getItem("p2_name");

q_turn = "player1";
a_turn = "player2";

player1_score = 0;
player2_score = 0;

document.getElementById("p1_name").innerHTML = player1_name + " : ";
document.getElementById("p2_name").innerHTML = player2_name + " : ";

document.getElementById("p1_score").innerHTML = player1_score;
document.getElementById("p2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("The lowercase word is " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    r1 = word.replace(charAt1, "_");
    r2 = r1.replace(charAt2, "_");
    r3 = r2.replace(charAt3, "_");
    console.log(r3);

    q1 = "<h4 id= 'word_display'> Q: " + r3 + "</h4>";
    i1 = "<br> Answer: <input type = 'text' id = 'input_check_box'>";
    c1 = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row = q1 + i1 + c1;
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = ""
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer: " + answer);

    if(answer==word) {
        if(a_turn=="player1") {
            player1_score=player1_score + 1;
            document.getElementById("p1_score").innerHTML=player1_score;
        }
        else {
            player2_score=player2_score + 1;
            document.getElementById("p2_score").innerHTML=player2_score;
        }
    }
    if(a_turn=="player1") {
        a_turn = "player2";
        document.getElementById("player_answer").innerHTML="Answer Turn: " + player2_name;
    }
    else {
        a_turn = "player1";
        document.getElementById("player_answer").innerHTML="Answer Turn: " + player1_name;
    }
    if(q_turn=="player1") {
        q_turn = "player2";
        document.getElementById("player_question").innerHTML="Question Turn: " + player2_name;
    }
    else {
        q_turn = "player1";
        document.getElementById("player_question").innerHTML="Question Turn: " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}