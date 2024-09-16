// JS vs JQuery

//document.getElelmentbyID("titile")
//$("#title")

//class
//

function clickMe(){
    $("#results").text("The button was clicked");
    $("p:first").hide();
    $("p:last").css('background-color','red');

}

function register(){
    //let testEntry = document.getElementById("testInput").value;
    //let results = document.getElementById("results");
    //results.innerHTML += `<li>${testEntry}<li>`

    //jQuery
    let testEntry = $("#testInput").val();
    $("#results").append(`<li>{textEntry}<li>`)
}


function init(){
    //let h1 = document.getElementById("title");
    //console.log(h1);
    //let h1jQuery = $("#title");
    //console.log(h1jQuery);

    //let p = document.getElementsByClassName("paragraph");
    //console.log(p);
    //let p2 = $(".paragraph");
    //console.log(p2)

    //let combined = $("p.paragraph#example");
    //console.log(combined);

    $("#btn1").on("click",clickMe);

    $("#btn1").on("mouseover", function(){
        $(this).addClass("btn");     
    })
    $("#btn1").on("mouseleave", function(){
        $(this).removeClass("btn");
    })
    $("#btnRegister").on("click",register);

    $("#op1").hide();
    $("#op2").hide();
    

    
    
}

window.onload = init;

