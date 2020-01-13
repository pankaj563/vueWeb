<template>
	<v-container class="grey lighten-5">
		<v-row class="mb-6" no-gutters>
			<v-col sm="3">
				sdsdsd
			</v-col>
			<v-col sm="9">
				sdsd
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	computed: {
      cols () {
        const { lg, sm } = this.$vuetify.breakpoint
        return lg ? [3, 9] : sm ? [9, 3] : [6, 6]
      },
    },
}
</script>