let darkMode;

if(localStorage.getItem("dark-mode")) {
    darkMode = localStorage.getItem("dark-mode");
} else {
    darkMode = "light"
}

localStorage.setItem("dark-mode", darkMode);


$(() => {
    if(localStorage.getItem("dark-mode") == "dark") {
        $("body").addClass("dark");
        $("#boton-dark-mode").hide();
        $("#boton-light-mode").show();
    } else {
        $("#boton-light-mode").hide();
    }

    $("#boton-dark-mode").click(() => {
        $("#boton-dark-mode").hide()
        $("#boton-light-mode").show();
        $("body").css({
                "background-color": "#17202A" ,
                "color": "#FDFEFE" 
        })
        //$("body").addClass("dark");
        localStorage.setItem("dark-mode", "dark")
    })

    $("#boton-light-mode").click(() => {
        $("#boton-light-mode").hide();
        $("#boton-dark-mode").show();
        $("body").css({
            "background-color": "#FDFEFE" ,
            "color": "#17202A" 
        })
        //$("body").removeClass("dark");
        localStorage.setItem("dark-mode", "light")
    })

    $("#b1").click(function() {
        $("#box").animate({
            height: "200px",
            width: "200px"
        }, {
            duration: 1000,
            easing: "linear",
            complete: () => {
                $(this).after("<p>200px de alto y ancho!</p>");
                $("#box").remove()
            }
        });
    });
})

$("#p1").fadeIn();

$("#p1").animate({
    "font-size": "40px",
    "padding": "30px",
    "color": "#7D3C98",
    "width": "170px"},
    "fast",
    function() {
        console.log("animacion terminada")
    }
).fadeOut(1000).delay(1000).fadeIn(1000)

$("#p2").fadeOut("slow", () => {
    $("#p2").fadeIn(500);
    
});
 