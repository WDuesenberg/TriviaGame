var unanswered = 4;
var correct = 0;
var incorrect = 0;







$("#main").hide();
$("#result").hide();
$("#start").on("click", "button", function() {
    $("#start").hide();
    $("#main").show();
});
$("#main").on("click", "button", function(event) {
    event.preventDefault();
    $("#main").hide();
    $("#result").show();
    stop();
    $("#unanswered").html("unanswered: " + unanswered);
    $("#correct").html("correct: " + correct);
    $("#incorrect").html("incorrect: " + incorrect);

    $('input[name = "Q4"]:checked').val()
});

var timeLeft = $("#time-left");

function fiveSeconds() {
    timeLeft.html("<h2>About 15 seconds left!</h2>");
    console.log("15 seconds left");
}

function tenSeconds() {
    timeLeft.html("<h2>About 10 seconds left!</h2>");
    console.log("10 seconds left");
}

function fifteenSeconds() {
    timeLeft.html("<h2>About 5 seconds left!</h2>");
    console.log("5 seconds left");
}

function timeUp() {
    timeLeft.html("<h2>That's a Wrap!</h2>");
    console.log("done");
}

setTimeout(fiveSeconds, 5000);
setTimeout(tenSeconds, 10000);
setTimeout(fifteenSeconds, 15000);
setTimeout(timeUp, 20000);

//

var number = 20;

var intervalId;

$("#start").on("click", run);
$("#submit").on("click", stop);

function run() {
    stop();
    $("#show-time").html("<h2>" + number + "<h2>");
    console.log(number);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    console.log(number);
    $("#show-time").html("<h2>" + number + "<h2>");
    if (number === 0) {
        stop();
        alert("Time Up!");
        $("#main").hide();
        $("#result").show();
    }
}

function stop() {
    clearInterval(intervalId);
}
// run()