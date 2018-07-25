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
				<div class="show-text">
					<div class="g-1">
						<span class="text">Hello</span>
						<span class="text">World</span>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
  import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
  
  export default {
    name: "landing",
    mounted() {
      var tl = new TimelineLite();
      
      var $box = document.getElementsByClassName("main-box");
      var $g1 = document.getElementsByClassName("text")
      
      tl.to($box, 1.1, {
          top: "100%",
          y: "-100%",
          ease: Bounce.easeOut
        }, 0.5)
        .to($box, 2, {
          top: "50%",
          y: "-50%",
          ease: Power0.easeNone
        }, 2, "feature")
        .staggerFrom($g1, 1, {scale: 1.5, autoAlpha: 0}, 0.2, "feature-=1.8")
        .to($box, 2.5, {
          x: "+=100px",
          ease: Elastic.easeInOut
        }, "feature-2")
        .staggerTo($g1, 1, {scale: 1.5, autoAlpha: 0}, 0.2, "feature-2+=1")
        .to($box, 0.7, {
          width: "100%",
          height: "100%",
          y: 0,
          x: 0,
          backgroundColor: "#1e90ff",
          ease: Elastic.easeNone
        })
    }
  };
</script>

<style scoped lang='scss'>
	.landing {
		margin: auto;
		display: block;
		z-index: 1;
		height: 90vh;
		.title {
			height: 20%;
			background: linear-gradient(
							rgba(15%, 15%, 17%, 0.85),
							rgba(15%, 15%, 17%, 0.95)
			),
			url("https://images.pexels.com/photos/70232/pexels-photo-70232.jpeg?h=350&auto=compress");
			color: white;
		}
		.content {
			height: 80%;
			width: 100%;
			position: relative;
			background: #f56c6c;
			
			.main-box {
				position: absolute;
				height: 100px;
				width: 100px;
				background: teal;
				z-index: 2;
			}
			
			.text {
				position: absolute;;
				font-size: 22px;
				color: white;
				z-index: 3;
			}
		}
	}
</style>