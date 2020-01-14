<template>
		<v-container class="grey lighten-5">
			<v-row no-gutters>
				<v-col sm="6" md="3">
					<v-card class="pa-2" outlined tile>
							<LeftLayout/>
					</v-card>
				</v-col>
				<v-col md="6">
					<v-card class="pa-2" outlined tile>
						<ContentIndexLayout/>
					</v-card>
				</v-col>
				<v-col md="3">
					<v-card class="pa-2" outlined tile>
						<RightLayout/>
					</v-card>
				</v-col>
				</v-row>
		</v-container>
</template>

<script>

import LeftLayout from './leftlayout';
import RightLayout from './rightlayout';
import ContentIndexLayout from './index';
export default {
	components : {
		LeftLayout,
		ContentIndexLayout,
		RightLayout,
	}	
}
</script>