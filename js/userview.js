function showAddress(degree) {
    var location = new google.maps.Geocoder();
    location.geocode({'latLng': degree}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                var opts = {
                    content: results[1].formatted_address,
                    position: degree
                };
                //console.log(opts.content)
                $('#location-msg').html(opts.content);

            }
        }
    });
}


function weather(data) {
    //console.log(data)
    var weather = data.weather;
    var tempdata = data.main;
    var wind = data.wind;
    var celsius = Math.round(tempdata.temp);
    var html = '';

    //console.log( tempdata.temp)
    $(".showtemp").html(celsius);
    $('.showdescription').html(weather[0].main);
    $('.showwind').html(wind.speed);
    $('.showdpressure').html(tempdata.pressure);
    $('.showhumidity').html(tempdata.humidity);
    html += "<img src = '" + weather[0].icon + "'>";
    $(".icon").html(html)

    $('.convert').click(function () {
        $(this).data('clicked', true);

        $x=$(this).find('span')

        if($x.hasClass('celsius')){
            var fahrenheit = Math.round((celsius * 9) / 5 + 32);
            console.log(fahrenheit)
            $(".showtemp").html(fahrenheit);
             $('.changeletter').html('F');
            $x.removeClass('celsius')
            $x.addClass('fahrenheit')
        }
        else{
            $('.showtemp').html(celsius);
            $('.changeletter').html('°C');
            $x.removeClass('fahrenheit');
            $x.addClass('celsius');
        }

    })


}


$(document).ready(function () {
    $(".btn-close1").on('click', function () {
        $('.texta-btn').removeClass('hide');
        $('#location-container').addClass('hide')
        $('.list-btn').removeClass('transform')
        $('#temp-container').addClass('hide')
    });


});

