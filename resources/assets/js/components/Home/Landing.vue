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
				<div class="main-box">
					<p>Hello world</p>
					<div class="inspector-box">
						<span><strong style="color: #AE81FF">div</strong><span style="color: #89BDFF">.main-box</span><span style="color: #E6E6E6"> | 323 x 323</span></span>
						<div class="arrow-down"></div>
					</div>
				</div>
				<div class="show-text">
					<div class="g-1">
						<span class="text">Hello,</span>
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
        .to($box, 1, {x: "15%", ease: Power0.ease}, 1.2)
        .to($box, 1.8, {
          top: "50%",
          y: "-50%",
          ease: Power0.ease
        }, 2, "feature")
        .staggerFrom($g1, 1, {autoAlpha: 0}, 0.2, "feature-=1.6")
        .staggerTo($g1, 1, {className: "+=superShadow", top: "-=10px", ease: Power1.ease}, 0.2, "feature-=1.6")
        .to($box, 2.5, {
          x: "+=100px",
          ease: Elastic.easeInOut
        }, "feature-2")
        .staggerTo($g1, 1, {
          autoAlpha: 0,
          className: "+=superShadow",
          top: "-=10px",
          ease: Power1.easeIn
        }, 0.2, "feature-2+=1")
        .to($box, 0.7, {
          width: "100%",
          height: "100%",
          y: 0,
          x: "0%",
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
			height: 82.7%;
			width: 100%;
			position: relative;
			background: #f56c6c;
			
			.main-box {
				position: absolute;
				height: 100px;
				width: 100px;
				background: teal;
				z-index: 2;
				
				.inspector-box {
					position: absolute;
					left: 1px;
					top: -35px;
					padding-top: 2px;
					border-style: solid;
					border-width: 0.5px;
					border-color: rgba(251, 251, 251, 0.59);
					border-radius: 2px;
					color: rgba(255, 255, 255, 0.89);
					background-color: #272822;
					text-align: center;
					font-size: 12px;
					width: 155px;
					height: 23px;
					box-shadow: 0px 0px 2px 0px black;
					
					.arrow-down {
						position: absolute;
						width: 0;
						height: 0;
						left: 8px;
						border-left: 10px solid transparent;
						border-right: 10px solid transparent;
						border-top: 10px solid #272822;
					}
				}
			}
			
			.g-1 {
				position: absolute;
				right: 40%;
				top: 40%;
				@media (min-width: 768px) {
					right: 60%;
					top: 30%;
				}
				@media (min-width: 320px) {
					right: 50%;
				}
				
				.text {
					@media (min-width: 320px) {
						font-size: 40px;
						&:nth-of-type(2) {
							top: 45px;
						}
					}
					@media (min-width: 768px) {
						font-size: 84px;
						&:nth-of-type(2) {
							top: 90px;
						}
					}
					position: absolute;;
					color: white;
					z-index: 3;
					font-weight: 700;
					
				}
			}
		}
	}
	
	.superShadow {
		text-shadow: 0 1px 0 hsl(174, 5%, 80%),
		0 2px 0 hsl(174, 5%, 75%),
		0 3px 0 hsl(174, 5%, 70%),
		0 4px 0 hsl(174, 5%, 66%),
		0 5px 0 hsl(174, 5%, 64%),
		0 6px 0 hsl(174, 5%, 62%),
		0 7px 0 hsl(174, 5%, 61%),
		0 8px 0 hsl(174, 5%, 60%),
		0 0 5px rgba(0, 0, 0, .05),
		0 1px 3px rgba(0, 0, 0, .2),
		0 3px 5px rgba(0, 0, 0, .2),
		0 5px 10px rgba(0, 0, 0, .2),
		0 10px 10px rgba(0, 0, 0, .2),
		0 20px 20px rgba(0, 0, 0, .3);
	}

</style>