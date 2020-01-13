<template>
	<v-form>
    <v-container>
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <v-text-field
            label="First Name"
          ></v-text-field>
        </v-col>
     </v-row>
     <v-row>
        <v-col>
          <v-text-field
            label="Last Name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
      <v-col>
        <v-btn small color="primary">Login</v-btn>
      </v-col>
      <v-col>
        <v-btn small color="primary"><router-link to="/signup">SignUp</router-link></v-btn>
      </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

export default {
	name: 'loginindex',
	components : {
		
	}
}
</script>