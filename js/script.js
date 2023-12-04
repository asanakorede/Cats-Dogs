$(document).ready(function () {
    $("button#cats").click(function () {
        $("ul").prepend("<li>Hello!</li>");
        $('li').css('background-color', 'green');
        $("body").removeClass().toggle()
        $("body").addClass("cat-background").toggle();
    });

    // $("button#goodbye").click(function () {
    //     $("ul").prepend("<li>Goodbye!</li>");
    // });

    $("button#dogs").click(function () {
        $("ul").prepend("<li>Stop copying me!</li>");
        $("body").removeClass().toggle()
        $("body").addClass("dog-background").toggle();
    })
})