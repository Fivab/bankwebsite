function login(){
    window.location.replace("login.html");
}

function mainpage(){
    if(input_password==input_password_confirm){
        window.location.replace("nameofsecondpage");
    }
    else{
        document.getElementById("error").innerHTML='Entered password is not same';
    }


    if(input_mail==""){
        document.getElementById("empty_htmlm").innerHTML='Required';
    }
    else{
        window.location.replace("mainpage.html");
    }
    if(input_name==""){
        document.getElementById("empty_htmln").innerHTML='Required';
    }
    else{
        window.location.replace("mainpage.html");
    }
    if(input_password==""){
        document.getElementById("empty_htmlp").innerHTML='Required';
    }
    else{
        window.location.replace("mainpage.html");
    }
    if(input_password_confirm==""){
        document.getElementById("empty_htmlpc").innerHTML='Required';
    }
    else{
        window.location.replace("mainpage.html");
    }
}