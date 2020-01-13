<template>
	<v-container>
    <v-layout>
      <v-card class="mx-auto" height="300" width="500">
          <LoginIndex/>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script> 
import LoginIndex from './loginindex';

export default { 

	name: 'index',
	components : {
		LoginIndex
	}

}

</script>