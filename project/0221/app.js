$(function () {
    $("#btn").click(function () {
        var name = $("#name").val();
        $("#result").text("Hello " + name);
    });
});
