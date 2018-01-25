$(document).ready(function () {

    $(".weather").on('click',function () {

        $.ajax({
            type: "GET",
            url: "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139",
            datatype: 'json',

            success: function (response) {
                console.log(response )
                weather(response)
            }
        });

        //console.log($(this).parents('.list-btn'))
       //$(this).parents('.list-btn').next().removeClass('.hide')
        $('#temp-container').removeClass('hide')

    });
});