/* right selaid stard*/
const rightSelide = document.querySelector("#right_selide");
const selideBtn = document.querySelector("#selaid_btn");
const clogeBbtn = document.querySelector("#cloge_btn");
      clogeBbtn.addEventListener("click",cloge_btn);
      selideBtn.addEventListener("click",selid_btn);

    // in btn
      function selid_btn(){
        this.style.display = "none";
        rightSelide.style.opacity = "1";
        rightSelide.style.width = "25%";
      };
    //   out btn
      function cloge_btn(){
        selideBtn.style.display = "block";
        rightSelide.style.opacity = "0";
        rightSelide.style.width = "0%";
      };

/* right selaid end*/

/* pos in all stard*/
const post = document.querySelector("#post");
const postBox = document.querySelector("#pos_in_box");
const postbtn = document.querySelector("#post_btn");
var s = 1;
var l = 1;
var c = 1;

      postbtn.addEventListener("click",function(e){
        e.preventDefault();
        if(post.value==""){
          post.style.backgroundColor="red";
        }
        else{
          const postText = document.createElement("p");
          const lickBTn = document.createElement("div");
          const commentBtn = document.createElement("div");
          const sharebtn = document.createElement("div");


          postText.innerHTML=post.value;
          postBox.appendChild(postText);
          post.style.backgroundColor="#f2e5e5";

          postText.appendChild(sharebtn);
          postText.appendChild(commentBtn);
          postText.appendChild(lickBTn);

          sharebtn.innerText="Share";
          commentBtn.innerText="Comment";
          lickBTn.innerText="Licke";

          const coundLike = document.createElement("u");
          postText.appendChild(coundLike);

          lickBTn.addEventListener("click",function(){
            this.innerText="Licke "+ l++;
            this.style.color="red";
            this.style.backgroundColor="yellow";
          })
          commentBtn.addEventListener("click",function(){
            this.innerText="Commen "+ c++;
            this.style.color="red";
            this.style.backgroundColor="yellow";
          })
          sharebtn.addEventListener("click",function(){
            this.innerText="Share "+ s++;
            this.style.color="red";
            this.style.backgroundColor="yellow";
          })
        };
      });


/* pos in all end*/

/*image in right selaid in strat*/
const imageBtn = document.querySelector("#userImage");
      imageBtn.addEventListener("click",imgBtn)
function imgBtn(){
  rightSelide.style.opacity = "1";
  rightSelide.style.width = "25%";
};
/*image in right selaid in end*/
