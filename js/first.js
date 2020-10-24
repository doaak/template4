

$(document).ready(function()
{
    //spinner

    $(".spinner").fadeOut(1000,function()
     {
        $(".loading").fadeOut(1000,function()
        {
            $("body").css("overflow",'auto');

            $(".loading").remove(); 
        });
    });


    $(function(){
        $(".carousel,.carousel-item img").height($(window).height());
        $(window).resize(function(){

            $(".carousel,.carousel-item img").height($(window).height());
        });

    });


     
   $(window).scroll(function(){

        let windowScroll= $(window).scrollTop();  
        let aboutOffset = $("#about").offset().top; 

        if(windowScroll > aboutOffset-50){
            
            $("#main-nav").css("backgroundColor","rgba(0,0,0,0.6)");
            $('#btnUp').fadeIn(500);
        }
        else
        {
            $("#main-nav").css("backgroundColor","transparent");
            $('#btnUp').fadeOut(500);
        }

   });
   
    $('#btnUp').click(function(){
        $('body,html').animate({scrollTop:"0"},2000)
    });

    $('a').click(function(){
        let aHref= $(this).attr("href");
     
       let sectionOffset= $(aHref).offset.top;
     
       $("body,html").animate({scrollTop:sectionOffset},2000)
     
         
    });

});

let firstName= document.getElementById("firstName");
let lastName= document.getElementById("lastName");
let email= document.getElementById("email");
var firstNameAlert = document.getElementById("firstNameAlert");
var lastAlert = document.getElementById("lastNameAlert");
var emailAlert = document.getElementById("emailAlert");


function validateFirstName(){

    var regex =/^[A-Z][a-z]{2,8}$/;

    if(regex.test(firstName.value) == true){

        firstName.classList.add("is-valid");
        firstName.classList.remove("is-invalid");
        firstNameAlert.classList.replace("d-block","d-none")

    }else{
        firstName.classList.add("is-invalid");
        firstName.classList.remove("is-valid");
        firstNameAlert.classList.replace("d-none","d-block");

    }
}
  firstName.addEventListener("blur",function(){
    validateFirstName();
})


function validateLastName(){

    var regex =/^[1-9][0-9]{3}|10000$/;

    if(regex.test(lastName.value) == true){

        lastName.classList.add("is-valid");
        lastName.classList.remove("is-invalid");
        lastNameAlert.classList.replace("d-block","d-none")

    }else
    {
        lastName.classList.add("is-invalid");
        lastName.classList.remove("is-valid");
        lastNameAlert.classList.replace("d-none","d-block");

    }
}
  lastName.addEventListener("blur",function(){
    validateLastName();
});

function validateemail()
{

    let regex=/^[a-zA-Z0-9]{5,60}@[a-z]{3,10}.([a-z]{2,10})$/
    if(regex.test(email.value) == true){

        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        emailAlert.classList.replace("d-block","d-none");

    }else{
        email.classList.add("is-invalid")
        email.classList.add("is-valid")
        emailAlert.classList.replace("d-none","d-block")
    }
}
    email.addEventListener("blur",function()
    {
        validateemail();
   })





