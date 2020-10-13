var sec = document.querySelector(".section"),
   btn = document.querySelector("button"),
   X = document.querySelector(".x"),
   bg = document.querySelector(".box"); 


btn.addEventListener("click", appear); 

function appear(){
			sec.style.display="block";
			bg.style.filter="blur(5px)";
		}

X.addEventListener("click", cross)

function cross()
{
  sec.style.display="none";
  bg.style.filter="blur(0px)";

}

		