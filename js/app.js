var mainimg=document.querySelector('.right .image img')
var images=['../img/glass/glass-item2.jpg','../img/glass/glass-item3.jpg','../img/glass/glass-item4.jpeg','../img/glass/glass-item5.png','../img/glass/glass-item6.jpg']
var num=0;

function next() {
    num++

    if (num>=images.length) {
        num=0;
        mainimg.src=images[num]
    }

    else{
        mainimg.src=images[num]
    }
}



function back(){
    num--
    if (num<0) {
        num=images.length-1
        mainimg.src=images[num]
    }
        else{
            mainimg.src=images[num]
        }
    }

