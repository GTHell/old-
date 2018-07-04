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

				</div>
		</header>
  </div>
</template>

<script>

export default {
  name: "landing"
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
    background: #f56c6c;
    height: 70vh;
  }
}
</style>