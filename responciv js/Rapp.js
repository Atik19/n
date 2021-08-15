const naBtn = document.querySelector("#naBtn");
const navBtn = document.querySelector("#nabBtn");
const navber = document.querySelector("#navber");


      naBtn.addEventListener("click",navOpen);
      function navOpen(){
        this.style.display="none";
        navber.style.opacity="1";
        navber.style.width="200px";
        navber.style.visibility="visible";
      }

      navBtn.addEventListener("click",navOut);
      function navOut(){
        naBtn.style.display="inline";
        navber.style.opacity="0";
        navber.style.width="0px";
        navber.style.visibility="collapse";
      }
      