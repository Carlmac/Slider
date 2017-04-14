# Slider
快速生成一个 Slider 组件

### 在线预览(Demo)
[live demo](https://carlmac.github.io/Slider/Slider.html)

### 依赖(dependencies)
- jQuery 1.12+

### 兼容性(compatability)
- IE 9+

### 用法(Usage)

#### HTML

give the slider component an id, here is `slider-demo`
````
<div class="slider" id="slider-demo">
  <div class="slide-viewer">
    <ul class="slide-group">
      <li class="slide">
        <a href="#"><img src="img/img1.jpg" alt="img1"></a>
      </li>
      <li class="slide">
        <a href="#"><img src="img/img2.jpg" alt="img2"></a>
      </li>
      <li class="slide">
        <a href="#"><img src="img/img3.jpg" alt="img3"></a>
      </li>
      <li class="slide">
        <a href="#"><img src="img/img4.jpg" alt="img4"></a>
      </li>
    </ul>
  </div>
  <div class="slide-btn slide-btn-prev">&lt;</div>
  <div class="slide-btn slide-btn-next">&gt;</div>
  <div class="slide-bullets"></div>
</div>
````

#### CSS

insert CSS file in the head
````
<link rel="stylesheet" href="css/Slider.css">
````

#### Javascript

Insert Javascript file
````
<script src="js/Slider.js"></script>
````

And then initialize the slider using it's id
````
Slider.init('#slider-demo');
````
