function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(49.984835,36.2586784,12.25),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
