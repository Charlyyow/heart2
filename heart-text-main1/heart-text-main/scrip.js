const body = document.querySelector("body");

const btn = document.getElementById('btn');

const txtValue = document.getElementById('txt');

btn.addEventListener('click', function handleClick() {

     const textPass = 'Anh thích em lém á đồng ý  làm ny anh luông heng';
    // if (btn.txtValue.textContent.toLowerCase().includes(textPass.toLowerCase()))
    //     {
    //         txtValue.textContent = 'Anh thích em lém á đồng ý  làm ny anh luông heng';
            
    //     }
    // txtValue.textContent = 'Anh thích em lém á đồng ý  làm ny anh luông heng';

    const initialText = 'Ok luôn';

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        txtValue.textContent = 'Anh thích em lém á đồng ý  làm ny anh luông heng';
        btn.textContent = 'Ok luôn';
      } else {
        btn.textContent = initialText;
      }
    
  });

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}
setInterval(createHeart,100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)
let icon = document.querySelector('ion-icon');
icon.onclick = function(){
  icon.classList.toggle('active');
}
