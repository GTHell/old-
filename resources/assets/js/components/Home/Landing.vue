<template>
	<div>
		<header class="landing">
				<div class="title py-3">
					<div class="container">
				  <h3><strong>Oudamsith Samin</strong></h3>
				  <h2>WEB DEVELOPER</h2>
					</div>
				</div>
				<div class="content">
          <div class="main-box"></div>
				</div>
		</header>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";

export default {
  name: "landing",
  mounted() {
    var $box = document.getElementsByClassName("main-box");
    TweenLite.to($box, 0.4, {
      top: "100%",
      y: "-100%",
      ease: Bounce.easeOut,
      delay: 2
    });
    TweenLite.to($box, 0.7, {
      x: "+=200px",
      y: "-100%",
      ease: Back.easeInOut,
      delay: 3
    });
    TweenLite.to($box, 0.8, {
      x: "-=200px",
      y: "-100%",
      ease: Back.easeInOut,
      delay: 4.2
    });
    TweenLite.to($box, 2.5, {
      top: "50%",
      y: "-50%",
      ease: Power0.easeNone,
      delay: 5
    });
    TweenLite.to($box, 2.5, {
      x: "+=400px",
      ease: Elastic.easeInOut,
      delay: 7.7
    });
    TweenLite.to($box, 2.5, {
      x: "-=300px",
      rotation: -720,
      ease: Elastic.easeInOut,
      delay: 9.4
    });
    TweenLite.to($box, 2.5, {
      width: '100%',
      height: '100%',
      y: 0,
      x: 0,
      opacity: 0.7,
      ease: Elastic.easeInOut,
      delay: 10.4
    });
  }
};
</script>

<style scoped lang='scss'>
.landing {
  position: relative;
  margin: auto;
  display: block;
  z-index: 1;
  .title {
    background: linear-gradient(
        rgba(15%, 15%, 17%, 0.85),
        rgba(15%, 15%, 17%, 0.95)
      ),
      url("https://images.pexels.com/photos/70232/pexels-photo-70232.jpeg?h=350&auto=compress");
    color: white;
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    background: #f56c6c;
    height: 70vh;
  }

  .main-box {
    position: absolute;
    height: 100px;
    width: 100px;
    background: teal;
    z-index: 2;
  }
}
</style>