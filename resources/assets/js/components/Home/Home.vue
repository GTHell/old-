<template>
	<div>
		<landing-item></landing-item>
	</div>
</template>

<script>
import Chart from "chart.js";
import MyLanguage from "./Language.vue";
import MySkill from "./Skill.vue";
import LandingItem from './Landing'

export default {
  name: "profile",
  components: {
    "my-language": MyLanguage,
		"my-skill": MySkill,
		LandingItem
  }
};
</script>

<style scoped lang='scss'>
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
  padding-top: auto;
  overflow: hidden;
}
</style>