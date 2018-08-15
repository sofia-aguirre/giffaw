$(document).on("ready", function(){
    const myAPIKey = "?api_key=VP2TmTbL8GKWr7aihE5OoohCPJ4hLr3a";
    var filterTag = "cat";
    

    $.ajax({

        // What kind of request
        method: "GET",
    
        // The URL for the request
        url: `https://api.giphy.com/v1/gifs/search`,
    
        // The data to send aka query parameters
        data: $("form").serialize(),
    
        // Code to run if the request succeeds;
        // the response is passed to the function
        success: onSuccess,
    
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
        error: onError
    });
    
    function onSuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
        var url = response.data[i].images.original.url;
        console.log(url);
        $(".gif-gallery").append(`<img src=${url}>`);
        }
    }
    
    function onError(xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
    }
});
