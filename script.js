let Name; 
 document.getElementById("Usersubmit").onclick= function(){
    Name= document.getElementById("Userinput").value; 
    console.log(Name)
 } 

 
         function toggleText(){
            const box= document.getElementById("box"); 
            box.classList.toggle("Open"); 
            if (box.classList.contains("Open")) {
               setTimeout(function() {
                  box.scrollIntoView({behavior:"smooth"})
               }, 300);
            }
         }