$(document).ready(function(){
    $(".img1").on({
        mouseenter: function (e) {
            $(e.target).css({"transform":"scale(1.1)", "opacity":"0.5"});
        },
        mouseleave: function(e){
            $(e.target).css({"transform":"scale(1)", "opacity":"1"})
        },
    })
    $(".img2").on({
        mouseenter: function (e) {
            $(e.target).prev().css({"transform":"scale(1.1)", "opacity":"0.5"});
        },
        mouseleave: function(e){
            $(e.target).prev().css({"transform":"scale(1)", "opacity":"1"})
        },
        click:function(e){

        }
    })
});