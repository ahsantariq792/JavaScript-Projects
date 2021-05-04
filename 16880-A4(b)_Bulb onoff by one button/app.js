var clicked =false


function toggle(){

    if(!clicked){
        clicked =true;
        document.getElementById('btn').innerHTML="Switch Off"
        var image = document.getElementById("bulb")
        image.src = "images/bulb-on.jpg"
    }
    else{
        clicked =false;
        document.getElementById('btn').innerHTML="Switch On"
        var image = document.getElementById("bulb")
        image.src = "images/bulb-off.jpg"
    }
    
}

