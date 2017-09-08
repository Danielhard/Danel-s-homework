var oUsername=document.querySelector("input[type=text]");
var oPassword=document.querySelector("input[type=password]");
var oSubmit=document.querySelector("input[type=submit]");
var oSpan=document.querySelector("#user-error");
var oError=document.querySelector("#pwd-error");
oPassword.onblur=function(){
    var reg=/^\w{6,18}$/;
    if(reg.test(oPassword)){
        oError.style.display="none";
    }else{
        oError.className=" error";
        oError.style.display="block";
    }
}

oSubmit.onclick = function(){
    myajax.post('http://h6.duchengjiu.top/shop/api_user.php',
        {
            status: 'register',
            username: oUsername.value,
            password: oPassword.value
        }, function(err, responseText){
            var json = JSON.parse(responseText);
            console.log(json);
        });
}

oUsername.onblur=function () {
    myajax.post('http://h6.duchengjiu.top/shop/api_user.php',
        {status: 'check', username: oUsername.value},
        function(error, responseText) {
            var json = JSON.parse(responseText);
            oSpan.innerText = json.message;
            oSpan.style.display = 'block'
            if (json.code === 0) {
                oSpan.className = "right";
            } else {
                oSpan.className = "error";
            }
        });
}
