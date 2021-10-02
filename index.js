var keys = {}
$.getJSON("./translation_key.json", function(json) {
    keys = json;
});

$(".btn-go").click( function(){
    let outputPath = $(".output");
    let string = $(".input").val();
    let newString = "" ;
    for (const c in string) {
        if (keys[string[c]]) {
            newString += keys[string[c]];
        }
        else {
            newString += "_";
        }
    }

    outputPath.addClass("animation");

    outputPath.text(newString);

    outputPath.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("animation");
   });
});

$(".input").keyup(function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $(".btn-go").trigger("click");
    }
});

