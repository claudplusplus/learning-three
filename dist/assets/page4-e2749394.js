import{S as m,B as w,h,a as u,P as p,W as E}from"./three.module-dd24798c.js";/* empty css              */import{O as F}from"./OrbitControls-7ea46ee2.js";import{G as g}from"./lil-gui.esm-1e0f7d72.js";import{g as f}from"./index-7d9a9c74.js";const t=document.querySelector("canvas.webgl"),e={width:window.innerWidth,height:window.innerHeight},a=new m,o=new g,r={color:65535,spin:()=>{f.to(i.rotation,{duration:1,y:i.rotation.y+Math.PI*2})}},b=new w(1,1,1),c=new h({color:r.color}),i=new u(b,c);a.add(i);o.add(i.position,"y").min(-3).max(3).step(.01).name("ELEVATE");o.add(i,"visible").name("VISIBLE");o.add(c,"wireframe").name("WIREFRAME");o.addColor(r,"color").onChange(()=>{c.color.set(r.color)});o.add(r,"spin").name("SPIN");const n=new p(75,e.width/e.height);n.position.z=3;a.add(n);const l=new F(n,t);l.enableDamping=!0;window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,n.aspect=e.width/e.height,s.setSize(e.width,e.height),n.updateProjectionMatrix()});window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitFullscreenElement():t.requestFullscreen?t.requestFullscreen():t.webkitFullscreenElement&&t.webkitFullscreenElement()});const s=new E({canvas:t});s.setSize(e.width,e.height);s.render(a,n);s.setPixelRatio(Math.min(window.devicePixelRatio,2));const d=()=>{l.update(),s.render(a,n),window.requestAnimationFrame(d)};d();
//# sourceMappingURL=page4-e2749394.js.map