window.onload=()=>{
    var myIndex = 0;
    var changeWallpaper = 0;
    
    carousel();
    function carousel() {
        var i;
        var j;
        var x = document.getElementsByClassName("image-khoangkhac");
        var y = document.getElementsByClassName("img-wallpaper");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        for (j = 0; j < y.length; j++) {
            y[j].style.display = "none";  
        }
        myIndex++;
        changeWallpaper++;
        if (myIndex > x.length) {myIndex = 1}    
        if (changeWallpaper > y.length) {changeWallpaper = 1}    
        x[myIndex-1].style.display = "block";  
        y[changeWallpaper-1].style.display = "block";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
    
}