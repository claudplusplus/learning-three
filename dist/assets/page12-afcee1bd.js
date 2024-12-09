import{S as G,m as L,i as R,W as _,z as j,x as q,y as O,P as W,n as b,j as v,e as I,d as B,a as H,q as D,b as U}from"./three.module-dd24798c.js";/* empty css              */import{O as X}from"./OrbitControls-7ea46ee2.js";import{G as Y}from"./lil-gui.esm-1e0f7d72.js";var Z=`uniform float uSize;\r
uniform float uTime;\r
attribute vec3 aRandomness;\r
varying vec3 vColor;

void main() {\r
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float angle = atan(modelPosition.x, modelPosition.z);\r
    float distanceToCenter = length(modelPosition.xz);\r
    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;\r
    angle += angleOffset;

    modelPosition.x = cos(angle) * distanceToCenter;\r
    modelPosition.z = sin(angle) * distanceToCenter;

    modelPosition.xyz += aRandomness;

    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;\r
    gl_PointSize = uSize * (1.0 / -viewPosition.z);\r
    vColor = color;\r
}`,J=`varying vec3 vColor;

void main() {\r
    float strength = distance(gl_PointCoord, vec2(0.5));\r
    strength = 1.0 - strength;\r
    strength = pow(strength, 10.0);

    vec3 color = mix(vec3(0.0), vColor, strength);\r
    gl_FragColor = vec4(color, 1.0);\r
}`;const c=document.querySelector("canvas.webgl"),o=new G,s=new Y,n={width:window.innerWidth,height:window.innerHeight},e={};e.count=4500;e.size=.02;e.radius=3.8;e.branches=3;e.randomness=.25;e.randomnessPow=1;e.insideColor="#c91870";e.outsideColor="#1b3984";const K=new L("#555555",.5);o.add(K);let l=null,u=null;const w=new R,p=new Float32Array(e.count*3),x=new Float32Array(e.count*1),m=new _({canvas:c}),C=new j({depthWrite:!1,blending:q,vertexColors:!0,vertexShader:Z,fragmentShader:J,uniforms:{uSize:{value:30*m.getPixelRatio()},uTime:{value:0}}}),f=new O(w,C),t=()=>{f!==null&&(w.dispose(),C.dispose(),o.remove(f)),l&&(l.geometry.dispose(),l.material.dispose(),o.remove(l));const r=new Float32Array(e.count*3),z=new b(e.insideColor),y=new b(e.outsideColor);w.setAttribute("position",new v(r,3)),w.setAttribute("color",new v(p,3)),w.setAttribute("aScale",new v(x,1));for(let h=0;h<e.count;h++){const a=h*3,d=Math.random()*e.radius,P=h%e.branches/e.branches*Math.PI*2,E=Math.pow(Math.random(),e.randomnessPow)*(Math.random()<.5?1:-1)*e.randomness*d,T=Math.pow(Math.random(),e.randomnessPow)*(Math.random()<.5?1:-1)*e.randomness*d,k=Math.pow(Math.random(),e.randomnessPow)*(Math.random()<.5?1:-1)*e.randomness*d;r[a]=Math.cos(P)*d+E,r[a+1]=T,r[a+2]=Math.sin(P)*d+k;const g=z.clone();g.lerp(y,d/e.radius),p[a]=g.r,p[a+1]=g.g,p[a+2]=g.b,x[h]=Math.random()}o.add(f);const S=new I(.05,64,64),A=new B({color:e.insideColor,emissive:e.insideColor,emissiveIntensity:.8,roughness:.5,metalness:.3});l=new H(S,A),o.add(l),u?u.color.set(e.insideColor):(u=new D(e.insideColor,1,50),u.position.set(0,0,0),o.add(u))};t();s.add(e,"count").min(100).max(1e6).step(100).onFinishChange(t);s.add(e,"size").min(.001).max(.1).step(.001).onFinishChange(t);s.add(e,"radius").min(.01).max(20).step(.01).onFinishChange(t);s.add(e,"branches").min(2).max(20).step(1).onFinishChange(t);s.add(e,"randomness").min(0).max(2).step(.001).onFinishChange(t);s.add(e,"randomnessPow").min(1).max(10).step(.001).onFinishChange(t);s.addColor(e,"insideColor").onFinishChange(t);s.addColor(e,"outsideColor").onFinishChange(t);const i=new W(75,n.width/n.height);i.position.y=3.5;i.position.z=4;o.add(i);const M=new X(i,c);M.enableDamping=!0;window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,i.aspect=n.width/n.height,m.setSize(n.width,n.height),i.updateProjectionMatrix()});window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitFullscreenElement():c.requestFullscreen?c.requestFullscreen():c.webkitFullscreenElement&&c.webkitFullscreenElement()});m.setSize(n.width,n.height);m.setPixelRatio(Math.min(window.devicePixelRatio,2));m.render(o,i);const N=new U,F=()=>{const r=N.getElapsedTime();C.uniforms.uTime.value=r,M.update(),m.render(o,i),window.requestAnimationFrame(F)};F();
//# sourceMappingURL=page12-afcee1bd.js.map
