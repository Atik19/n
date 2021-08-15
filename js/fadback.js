const userNames = document.querySelector("#names");
const userEmail = document.querySelector("#email");
const usermasseg = document.querySelector("#masseg");
const sendButton = document.querySelector("#sendbtn");
      sendButton.addEventListener("click",sent);

      function sent(){
         if(userNames.value == "" && userEmail.value == "" && usermasseg.value == ""){
            userNames.style.backgroundColor="red";
            userEmail.style.backgroundColor="red";
            usermasseg.style.backgroundColor="red";
            this.style.backgroundColor="red";
            this.style.color="black";
            alert("Enter the documen")
         }
         else if(userNames.value == ""){
            userNames.style.backgroundColor="red";
            alert("plase inter the Names")
         }
         else if(userEmail.value == ""){
            userEmail.style.backgroundColor="red";
            alert("plase inter the Names")

         }
         else if(usermasseg.value == ""){
            usermasseg.style.backgroundColor="red";
            alert("plase inter the text")

         }
         else{
            userNames.style.backgroundColor="#0000c4";
            userEmail.style.backgroundColor="#0000c4";
            usermasseg.style.backgroundColor="#0000c4";
            this.style.backgroundColor="yellow";
            this.style.color="black";
         }
      };