<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12 my-3">
				<div class="my-img">
					<img src="/photos/sith.jpg" alt="" class="">
				</div>
				<section>
					<h3>&ltGreeting/&gt</h3>
					<p>Hello, I'm Sith, a fullstack web developer. I fix server, create new thing, solve problem and save life by
						using Google.
						My secret recipes is reading fast and understand thing well.
					</p>
				</section>
				<p>
					I'm a really dedicated person and I'm not giving up something so easily that make other people feeling
					hopeless.
					Usually, I carry the entire team with me. Believe me or not, I never rage quit in video gamign even my team
					left the game. I just keep it cool.
				</p>
				<p>
					The above principle also apply to me at my work place. I just keep my good attitude and having a high
					standard.
					When I leave my old company I make sure that I set everything up and document everything and teach the new
					guy.
					Don't left people and make them hate you.
				</p>
				<p>
					No Rage Quit. Responsibility Is My First Priority.
				</p>
				<p>
					Memorizing is mesmerizing of nothing. I tend to understand thing well and proceed to my copy & paste.
					Don't close the tab just yet!
				</p>
				<p>
					I normally test new technology and build some demo in it. People always ask me to demonstrate my project.
					I'm not that kind of person who like to keep thing in computer. It's kinda sad that most of my demo
					including
					the work with Photoshop, Illustrator and other things are not belong to the permanent trash can.
				</p>
				<p>
					This is why I'm building this portfolio to prove that I'm actually having something up.
				</p>
				<p>
					This server is running vultr with Plesk admin. (I still ssh to the server by default though, so this Plesk
					admin is kinda useless).
				</p>
				<p>
					I have experience working with Laravel framework and setting up server and .... wait! Like I said, I
					do anything that I unerstand from setting up webpack from scratch to setup a mail server solution in Centos,
					config mining machine and write API to generate autonomous report. That why my previous Boss want to put
					chain
					on me.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
  import Chart from 'chart.js'
  
  export default {
    name: 'profile',
    
  }
</script>

<style scoped>
	.main-profile {
		background-color: rgba(255, 255, 255, 0.2);
	}
	
	.my-img {
		border-radius: 50%;
		border: 3px solid white;
		width: 220px;
		height: 220px;
		overflow: hidden;
		margin-left: 50%;
		transform: translateX(-50%);
		/*background: url('../photos/sith.jpg');*/
	}
	
	.my-img img {
		width: 216px;
		height: 221px;
		object-fit: cover;
	}
	
	.main {
		background: linear-gradient(3deg, #ceffb6 0%, #00b5d2 100%);
		height: 100vh;
	}
</style>