let intro=document.querySelector(".intro"),logo=document.querySelector(".logo-header"),logoSpan=document.querySelectorAll(".logo");setTimeout((()=>{logoSpan.forEach(((e,o)=>{setTimeout((()=>{e.classList.add("active")}),400*(o+1))})),setTimeout((()=>{logoSpan.forEach(((e,o)=>{setTimeout((()=>{e.classList.remove("active"),e.classList.add("fade")}),50*(o+1))}))}),2e3),setTimeout((()=>{intro.style.top="-100vh"}),2e3)}));