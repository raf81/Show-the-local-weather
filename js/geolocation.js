$(document).ready(function () {

    $(".start").on('click', function(){
        if (navigator.geolocation) {
            //console.log(navigator.geolocation)
            var userId = navigator.geolocation.getCurrentPosition(success, error);
            //console.log(userId)
        } else {
            console.log('not supported in your browser');
        }

        //console.log($(this).parents('.list-btn'))
        //$(this).parent().addClass('hide')
        $('.texta-btn').addClass('hide');
        $(this).parents('.list-btn').addClass('transform')
        $(this).parents('.list-btn').next().removeClass('hide');

    });


    function success(position) {
        var degreePos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //console.log(degreePos);

        var myOptions = {
            zoom: 15,
            center: degreePos,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var marker = new google.maps.Marker({
            position: degreePos,
            map: map,
            title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
        });

        showAddress(degreePos);
    }




    function error() {
        console.log(arguments);
    }



});