const fullnames = document.querySelector("#Full_Names");
const userMobailNum = document.querySelector("#mobail_number");
const userBOthDay = document.querySelector("#date_of_both");
const userContry = document.querySelector("#contry");
const userNewPassword = document.querySelector("#new_password");
const userGPA = document.querySelector("#GPA");
const userImage = document.querySelector("#Your_Iamge");
const userSertoficet = document.querySelector("#sertoficet");
const sigInbtn = document.querySelector("#sigin_btn");

const outFutNomana = document.querySelector("#outFutNomana");

      sigInbtn.addEventListener("click",sigIn)

      function sigIn(e){
          e.preventDefault()
          if(fullnames.value=="" && userMobailNum.value=="" && userBOthDay.value=="" && userContry.innerHTML=="" && userNewPassword.value=="" && userGPA.value=="" && userSertoficet.value=="" && userImage.value==""){
            fullnames.style.backgroundColor="red";
            userMobailNum.style.backgroundColor="red";
            userBOthDay.style.backgroundColor="red";
            userContry.style.backgroundColor="red";
            userNewPassword.style.backgroundColor="red";
            userGPA.style.backgroundColor="red";
            userImage.style.backgroundColor="red";
            userSertoficet.style.backgroundColor="red";
            this.style.backgroundColor="red";
            alert("please Inter the docubent");
          }
          else if(fullnames.value==""){
            fullnames.style.backgroundColor="red";
            alert("please inter the names");
           }
          else if(userMobailNum.value==""){
            userMobailNum.style.backgroundColor="red";
            alert("please inter the mobail number");
          }
          else if(userBOthDay.value==""){
            userBOthDay.style.backgroundColor="red";
            alert("please inter the both day");
          }
          else if(userContry.innerHTML==""){
            userContry.style.backgroundColor="red";
            alert("please inter the contry names");
          }
          else if(userNewPassword.value==""){
            userNewPassword.style.backgroundColor="red";
            alert("please inter the password");
          }
          else if(userGPA.value==""){
            userGPA.style.backgroundColor="red";
            alert("please inter the GPA number");
          }
          else if(userImage.value==""){
            userImage.style.backgroundColor="red";
            alert("please inter the Image");
          }
          else if(userSertoficet.value==""){
            userSertoficet.style.backgroundColor="red";
            alert("please inter the Sertoficat");
          }
          else(
            window.open("home.html")
          )

      }