const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));let e=null;
//# sourceMappingURL=01-color-switcher.9aa1ae5f.js.map
