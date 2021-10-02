var keys = {}
$.getJSON("./translation_key.json", function(json) {
    keys = json;
});

$(".btn-go").click(function(){
    let string = $(".input").val();
    let new_string = "" 
    for (const c in string) {
        if (keys[string[c]]) {
            new_string += keys[string[c]]
        }
        else {
            new_string += "_"
        }
    }

    console.log(new_string);
    $(".output").text(new_string);
});