<template>
	<div class="container">
		<div class="container__login">
			<img src="@/assets/logo-signa.png" class="container__login__img" />
			<form class="container__login__form" @submit.prevent="submit">
				<input
					v-model="email"
					type="email"
					placeholder="Digite seu e-mail"
					class="container__login__form__input"
				/>
				<input
					v-model="senha"
					type="password"
					placeholder="Digite sua senha"
					class="container__login__form__input"
				/>
				<button type="submit" class="container__login__form__button">
					Enter
				</button>
			</form>

			<router-link to="/cadastro" class="container__login__cadastro"
				>Cadastre-se</router-link
			>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data() {
		return {
			email: '',
			senha: '',
		}
	},
	methods: {
		async submit() {
			const { data } = await axios.get('http://localhost:3000/usuarios', {
				params: {
					email: this.email,
					senha: this.senha,
				},
			})
			if (data.length > 0) {
				alert('logando..')
				this.$router.push('/')
			} else {
				alert('usuario ou senha incorreta')
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	width: 100%;
	height: 100%;
	background: #212121;
	justify-content: center;
	align-items: center;
	&__login {
		display: flex;
		flex-direction: column;
		width: 30%;
		height: 100%;
		margin: 0 auto;
		justify-content: center;
		flex-direction: column;
		&__img {
			width: 140px;
		}
		&__form {
			display: flex;
			flex-direction: column;
			&__input {
				outline: 0;
				border-radius: 5px;
				border: 0;
				padding: 10px;
				margin: 10px 0;
			}
			&__button {
				border: 0;
				padding: 15px;
				border-radius: 5px;
				background: #6202ee;
				color: white;
				font-weight: 500;
				font-size: 16px;
				cursor: pointer;
				transition: 800ms;
				&:hover {
					background: rgb(66, 0, 165);
					color: #000;
				}
			}
		}
		&__cadastro {
			border: 1px solid #ffffff;
			text-decoration: none;
			color: #fff;
			padding: 15px;
			border-radius: 5px;
			margin-top: 10px;
			text-align: center;
			font-size: 16px;
			&:hover {
				background: #fff;
				color: #000;
			}
		}
	}
}
</style>
