function showPassword(){
    let pwds = document.getElementById("pwds");
    let cpwds = document.getElementById("cpwds");
    if((pwds.type === "password" && cpwds.type === "password") && "password".length <8){
        

        pwds.type="text";
        cpwds.type="text";
    }
    else{
        pwds.type="password";
        cpwds.type="password";
    }
}