//find our image folder
var myimage = document.getElementById('myimage');
var x = 1;
var ext = '.jpg';
var folder = 'images/';

setInterval(function(){
    if(x==4){x = 0;}
    x++;
    myimage.src=folder+x+ext;

    if(x==1){
x++; //x increases by one and becomes 2
myimage.src = folder+x+ext; //equivalent to images/2.jpg

    }else if(x==2){

        x++;//x increases by 1 and becomes 3
        myimage.src=folder+x+ext;//equivalent to images/3.jpg

    }else if (x==3){

        x++;
        myimage.src=folder+x+ext;//x increases by 1 and become 4
    } else {
        x = 1;
        myimage.src=folder+x+ext;//equivalent to images/1.jpg
    }
    
}, 3000)



x++;



alert(x);

timing event
setTimeout(function(){alert("Halleluya"); },3000);

setInterval(function(){alert("Halleluya"); },3000);