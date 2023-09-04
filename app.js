$("document").ready(() => {
    $(".bttn").each(function () {
        $(this).on('click', () => {
            const arr = ["rock", "paper", "scissors"];
            var z = Math.floor(Math.random() * arr.length);
            var y = arr[z];
            function calc(x, y) {
                if (x == y)
                    return "DRAW";
                else if ((x == "rock" && y == "scissors") || (x == "scissors" && y == "paper") || (x == "paper" && y == "rock"))
                    return "WON";
                else
                    return "LOST";
            }
            var x = $(this).val();
            var txt = calc(x, y);
            console.log(x, y);
            $(".bigimg").addClass("shake");
            setTimeout(() => {
                $(".bigimg").removeClass("shake");
                $("#firstimg").attr("src", "images/" + x + "img.png");
                $("#secondimg").attr("src", "images/" + y + "revimg.png");
                $("h1").text(txt);
                $(".sectionone").css("margin-top", "0.9%");
            }, 2000);
            setTimeout(() => {
                $("#firstimg").attr("src", "images/rockimg.png");
                $("#secondimg").attr("src", "images/rockrevimg.png");
                $("h1").text("");
                $(".sectionone").css("margin-top", "10%");
            }, 5000)
        });
    });
});


