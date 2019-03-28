<template lang="html">
	<div class="main">
		<div class="section">
			<div class="user_name">
				<input v-model="username" placeholder="请输入用户名" maxlength="11"/>
			</div>
			<div class="user_password">
				<input v-model="password" placeholder="请输入密码" type="password" maxlength="20"/>
			</div>
			<div class="user_button">
				<button @click="userRegister">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				password:''
			}
		},methods:{
			userRegister: function (event){
				this.$http.post('/api/users/login',{username:this.username,password:this.password}).then((data)=>{
					if(data.body.status == 1){
						alert(data.body.message)
					}else{
						alert(data.body.message)
					}
				})
			}
		}
	}
</script>
<style lang="css">
	@import url("../assets/user_css/user.css");
</style>