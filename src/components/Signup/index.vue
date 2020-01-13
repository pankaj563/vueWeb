<template>
  <v-container>
      <v-layout>
        <v-card class="mx-auto" height="300" width="500">
          <v-form>
            <v-container>
              <v-spacer></v-spacer>
              <v-row>
                <v-col>
                  <v-text-field
                    label="First Name"
                    placeholder="First Name"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Last Name"
                    placeholder="Last Name"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn small color="primary">SignUp</v-btn>
                </v-col>
                <v-col>
                  <v-btn small color="primary"><router-link to="/">Login</router-link></v-btn>
                </v-col>
              </v-row>   
            </v-container>
          </v-form>
        </v-card>
      </v-layout>
  </v-container>
</template>

<script>

export default {
	name: 'signup',
	components : {
		
	}
}
</script>