import"./modulepreload-polyfill-3cfb730f.js";/* empty css              */import{S as w,i as m,j as u,h,a as f,P as b,W as p}from"./three.module-fc006a31.js";import{O as F}from"./OrbitControls-f26f58ae.js";const n=document.querySelector("canvas.webgl"),e={width:window.innerWidth,height:window.innerHeight},s=new w,o=new m,c=50,l=new Float32Array(c*3*3);for(let r=0;r<c*3*3;r++)l[r]=(Math.random()-.5)*4;const g=new u(l,3);o.setAttribute("position",g);const E=new h({color:16724224,wireframe:!0}),k=new f(o,E);s.add(k);const t=new b(75,e.width/e.height);t.position.z=3;s.add(t);const a=new F(t,n);a.enableDamping=!0;window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.aspect=e.width/e.height,i.setSize(e.width,e.height),t.updateProjectionMatrix()});window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitFullscreenElement():n.requestFullscreen?n.requestFullscreen():n.webkitFullscreenElement&&n.webkitFullscreenElement()});const i=new p({canvas:n});i.setSize(e.width,e.height);i.render(s,t);i.setPixelRatio(Math.min(window.devicePixelRatio,2));const d=()=>{a.update(),i.render(s,t),window.requestAnimationFrame(d)};d();
//# sourceMappingURL=page5-33289e99.js.map
