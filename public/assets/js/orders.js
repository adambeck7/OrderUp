$(function () {
    $(".deliver-order").on("click", function (event) {
        var id = $(this).data("id");
        var changeOrder = $(this).data("neworder_ready");

        var newOrderState = {
            order_ready: changeOrder
        };

        $.ajax("/api/orders/" + id, {
            type: "PUT",
            data: newOrderState
        }).then(
            function () {
                console.log("changed order to", changeOrder);
                location.reload();
            }
        );
    });


    $(".change-order").on("click", function (event) {
        var id = $(this).data("id");
        var newReady = false;

        var newOrderState = {
            order_ready: false
        };

        $.ajax("/api/orders/" + id, {
            type: "PUT",
            data: newOrderState
        }).then(
            function () {
                console.log("changed order to", newReady);
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newOrder = {
            order_name: $("#order").val().trim(),
            order_ready: 0
        };
        console.log(newOrder);
        $.ajax("/api/orders", {
            type: "POST",
            data: newOrder
        }).then(
            function () {
                console.log("created new order");
                location.reload();
            }
        );
    });

    $(".delete-order").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/orders/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted order", id);
                location.reload();
            }
        );
    });
});