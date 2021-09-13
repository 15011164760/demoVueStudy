<template>
  <div id="apper">demo</div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      modelPath: "static/models/beats_highpoly.fbx"
    };
  },
  methods: {
    init() {
      let self = this;
 
      let container = document.getElementById("apper");
      let mouse = new THREE.Vector2();
      self.camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.01,
        2000
      );
      self.camera.position.set(500, 110, 550);
      self.scene = new THREE.Scene();
      // ground
      var mesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(2000, 2000),
        new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
      );
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      self.scene.add(mesh);
 
      var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      self.scene.add(grid);
 
      self.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        precision: "highp"
      });
      self.renderer.setSize(container.clientWidth, container.clientHeight);
     self.renderer.setClearColor('#aaa',1.0);//修改3d动图的背景色
     container.appendChild(self.renderer.domElement)
 
      self.controls = new OrbitControls(self.camera, self.renderer.domElement);
      self.controls.target.set(0, 100, 0);
      self.controls.update();
      var light = new THREE.HemisphereLight(0xffffff, 0x444444);
    //   light.position.set(0, 200, 0);
    //  self. scene.add(light);
 
      light = new THREE.DirectionalLight(0xffffff);
    //   light.position.set(0, 0, 50);
      light.position.set(0, 50, 0);
      light.castShadow = true;
      light.shadow.camera.top = 180;
      light.shadow.camera.bottom = -100;
      light.shadow.camera.left = -120;
      light.shadow.camera.right = 120;
      self.scene.add(light);
      let fbxLoader = new FBXLoader();
      fbxLoader.load(self.modelPath, function(object) {
        self.scene.add(object);
      });
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
      this.renderer.clearDepth();
    }
  },
  mounted() {
      setTimeout(()=>{
        this.init();
        this.animate();
      },2000)
    
  }
};
</script>
<style>
#apper {
  height: 1000px;
  width: 1000px;
}
</style>