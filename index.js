let btn = $('.btn').click(gameStart);
let name1 ;
function gameStart(){
    name1= $('#name').val();
    $('.target').css("display","none");
    $('.initial').show();
    // //IIFE
(async () => {
    await initial();
    for (var i in messages) {
        await start(messages[i]);
    }
    await stop();
})();
}

let element = $(`<span></span`).text("|");
element.addClass("blink");
let messages = [
    "Initializing hack program...",
    "Hacking",
    "Yayy!! Found it...",
    "Connecting to device...",
    "Done",
    "Connecting to facebook...",
    "200 OK...",
    "Password matched...",
    "Done",
    "Connecting to instagram...",
    "200 OK...",
    "Password matched...",
    "Done",
    "Connecting to G-Pay...",
    "Password matched...",
    "Hacking successfull...",
    "Bye...."
]

let initial = async ()=>{
        return new Promise((resolve,reject)=>{
            let i = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (i >= 100) {
                    clearInterval(id);
                    $('.initial').remove();
                    $('.container').show();
                    resolve(true);
                }
                else {
                    i++;
                    document.querySelector('.line').style.width =i + '%';
                    // $('.line').css("width", i);
                }
            }
        })
}


function blink() {
        $(".msg").append(element);
        let cursor = true;
        setInterval(() => {
            if (cursor) {
                $(".blink").css("opacity", 0);
                cursor = false;
            }
            else {
                $(".blink").css("opacity", 1);
                cursor = true;
            }
        }, 300)
}



let hack = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 500)
    })
}

let start = async (message) => {
    await hack();
    element.remove();
    if(message == "Hacking"){
    document.querySelector('.msg').innerHTML += "C: >" + message + ` ${name1}...<br><br>`;
    blink();
    }
    else{
        document.querySelector('.msg').innerHTML += "C: >" + message +"<br><br>";
        blink();
    }
}

let stop = async ()=>{
    $('.container').css("display", "none");
    let ele = document.createElement('h1');
    ele.innerHTML="Bye..."
    $('body').append(ele);
}

async function hello (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('done1');
              },2000)
    })
}
async function hello2 (){
   setTimeout(()=>{
  console.log ('done2');
    },1000)
}

async function calling(){
    let response = await hello();
    console.log(response);
    await hello2();
};
calling();
// Typewriter Effect 
//             let message = "Initializing hack program...";
//             let i = 0;
//             function typewriter() {
//                 element.remove();
//                 let size = message.length;
//                 if (i < size) {
//                     document.querySelector('.msg').innerHTML += message.charAt(i);
//                     i++;
//                     setTimeout(typewriter, 50);
//                 }
//             }
//             typewriter();

