$(document).ready(function () {

    $(window).scroll(function () {

        var distance = $(window).scrollTop();
        //console.log(distance);

        if (distance > 300) {
            $("#control").removeClass("big").addClass("small");
        }
        else {
            $("#control").removeClass("small").addClass("big");
        };

    });

});