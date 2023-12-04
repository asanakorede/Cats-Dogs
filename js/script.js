$(document).ready(function () {
    $("button#cats").click(function () {
        $(".unstyled").prepend("<li>Meoww!</li>");
        $(".styled").prepend("<li>Roof Roof!</li>")
        $('li').addClass("coloured");
        $("body").removeClass().toggle()
        $("body").addClass("cat-background").toggle();
    });

    // $("button#goodbye").click(function () {
    //     $("ul").prepend("<li>Goodbye!</li>");
    // });

    $("button#dogs").click(function () {
        $(".unstyled").prepend("<li>Meoww!</li>");
        $(".styled").prepend("<li>Roof Roof!</li>")
        $("body").removeClass().toggle()
        $("body").addClass("dog-background").toggle();
        $('li').addClass("list");
    })
})