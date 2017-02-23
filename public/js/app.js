$(document).ready(function() {

    var uneatenBurgers = $("#uneatenBurgers");
    var eatenBurgers = $("#eatenBurgers");

    function getBurgers() {
        $.get("/api/burgers", function(data) {
            eatenBurgers.empty();

            for(var i=0; i < data.length; i++){
                if (data[i].devoured == false){
                    var currentBurger = $("<div>");
                    currentBurger.text(data[i].burger_name + "  -------> ");

                    var devourButton = $("<button class='devour'>Devour!</button>");
                    devourButton.attr("data-id",data[i].id);

                    currentBurger.append(devourButton);
                    uneatenBurgers.append(currentBurger);
                } else {
                    var currentBurger = $("<div>");
                    currentBurger.text(data[i].burger_name);
                    eatenBurgers.append(currentBurger);
                }
            }
        });
    }

    $(document).on("click", ".devour", function(){
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + $(this).data("id")
        })
        .done(function() {
            window.location.href = "/";
        });
    });

    getBurgers();
});