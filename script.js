var a = 1;

function show_hide(){
    if (a==1){
        document.getElementById("delete-movie").style.display="inline";
        document.getElementById("overlay").style.display="inline";
        return a=0;
    }

    else{
        document.getElementById("delete-movie").style.display="none";
        document.getElementById("overlay").style.display="none";
        return a=1;
    }
}