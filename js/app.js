    // header section menuber
    // menu btn
    var menu_btn = document.querySelectorAll("#menu_btn");

    menu_btn[0].addEventListener("click",menu);
    menu_btn[1].addEventListener("click",menu);
    menu_btn[2].addEventListener("click",menu);
    menu_btn[3].addEventListener("click",menu);
    menu_btn[4].addEventListener("click",menu);

    function menu(){alert("plase log in");};

    // log in form
   
        var logIn_btn = document.querySelector("#logIn_btn");
        logIn_btn.addEventListener("click",logIn);

        function logIn(e){
            e.preventDefault();
            const gmail_names = document.querySelector("#names");
            const passeord =document.querySelector("#passeord");

            if(gmail_names.value=="a" && passeord.value=="a"){
                window.open("home.html");
            }

            else if(gmail_names.value=="" && passeord.value==""){
                alert("Pleas inter the input");
                gmail_names.style.backgroundColor="rgba(255, 0, 0, 0.397)";
                passeord.style.backgroundColor="rgba(255, 0, 0, 0.397)";
            }

            else if(gmail_names.value==""){
                alert("Pleas inter the gmail or names");
                gmail_names.style.backgroundColor="rgba(255, 0, 0, 0.397)";
            }
            else if(passeord.value==""){
                alert("Pleas inter the  passeord");
                passeord.style.backgroundColor="rgba(255, 0, 0, 0.397)";
            }

            else{
                alert("sorry plase currect input");
                gmail_names.style.backgroundColor="rgba(255, 0, 0, 0.397);";
                passeord.style.backgroundColor="rgba(255, 0, 0, 0.397)";
            }
        }

        // sig in page

        