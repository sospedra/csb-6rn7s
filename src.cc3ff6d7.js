parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var n=new THREE.Scene;n.background=new THREE.Color(0);var i=new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,1,800);i.position.set(8,8,10);var e=new THREE.WebGLRenderer({antialias:!0});e.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(e.domElement);var o=new THREE.OrbitControls(i);o.rotateSpeed=.3,o.zoomSpeed=.9,o.minDistance=3,o.maxDistance=20,o.minPolarAngle=0,o.maxPolarAngle=Math.PI/2,o.enableDamping=!0,o.dampingFactor=.05;var t=new THREE.PointLight(16777164,20,200);t.position.set(4,30,-20),n.add(t);var r=new THREE.AmbientLight(0,20,100);r.position.set(30,-10,30),n.add(r);var a,d=new THREE.GLTFLoader;d.crossOrigin=!0,d.load("scene.gltf",function(e){var o=e.scene;o.position.set(-120,-2,-10),n.add(o),i.lookAt(o),a=o});var s=0,w=function(){if(s++,a&&a.rotation&&a.position){if(a.position.x<-12)return a.rotation.x+=.5,void(a.position.x+=1.3);if(s<400)return a.rotation.x+=.07,void(a.position.x+=.01);if(s<1e3)return a.rotation.x+=.5,void(a.position.x+=.9)}};function p(){requestAnimationFrame(p),w(),e.render(n,i),o.update()}p(),window.addEventListener("resize",function(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)},!1);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-6rn7s/src.cc3ff6d7.js.map