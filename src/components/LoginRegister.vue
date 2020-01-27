<template>
	<q-form @submit="submitForm">
		<q-input
			v-if="tab == 'register'"
			v-model="formData.name"
			class="q-mb-md"
			outlined
			label="Nome" />
		<q-input
			v-model="formData.email"
			class="q-mb-md"
			outlined
			type="email"
			label="Endereço Electronico" />
		<q-input
			v-model="formData.password"
			class="q-mb-md"
			outlined
			type="password"
			label="Palavra-Passe" />
		<div class="row">
			<q-space />
			<q-btn
				color="primary"
				type="submit"
				:label="tab" />
		</div>
	</q-form>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		props: ['tab'],
		data() {
			return {
				formData: {
					name: '',
					email: 'nhantumbo@jose.com',
					password: '123456'
				}
			}
		},
		methods: {
			...mapActions('store', ['registerUser', 'loginUser']),
			submitForm() {
				if (this.tab == 'login') {
					this.loginUser(this.formData)
				}
				else {
					this.registerUser(this.formData)
				}
			}
		}
	}
</script>
