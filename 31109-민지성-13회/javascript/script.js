jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    setInterval(function(){
    $(".imglen").animate({marginTop:-400},1500 ,function(){
        $(".imglen li:first").appendTo(".imglen")
        $(".imglen").css({marginTop:0})
    })
})

    $(".no li:first").click(function(){
        $(".popup").show()
    })
    $(".p_button").click(function(){
        $(".popup").hide()
    })

    $("#tab1").click(function(){
        $(".no").show()
        $(".gal").hide()
        $("#tab1").addClass("on").addClass("off")
        $("#tab2").removeClass("on").removeClass("off")
    })
    $("#tab2").click(function(){
        $(".gal").show()
        $(".no").hide()
        $("#tab1").removeClass("on").addClass("off")
        $("#tab2").addClass("on").removeClass("off")
    })
})