<template>
  <v-container>
    <v-layout text-center wrap v-for="item in jsonData" :key="item.id">
      <v-card class="mx-auto" height="400" width="500" v-if="counter == item.id">
        <v-card-text>
          <h4 class="display-1 font-weight-bold mb-3">
            {{ item.question }}
          </h4>
        </v-card-text>
        <v-layout text-center wrap>
          <v-flex xs12 v-for="op in item.options.values" :key="op.id">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
            <v-checkbox
                 v-model="selectme"
                  :label="op"
                 color="red darken-3"
                  :value="op"
                  hide-details class="ml-12"
                >
              </v-checkbox>
            </v-form>
          </v-flex>
          <v-flex xs12 py-12>
            <v-btn class="ma-2" text icon color="blue lighten-2" v-if="thumb1">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>

            <v-btn class="ma-2" text icon color="red lighten-2" v-if="thumb2">
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn>
              <v-btn color="primary" @click="calculate(item.answer)">Answer</v-btn>
          </v-flex>
          <v-flex xs12 text-center>
            <h6>{{ counter }} of {{ jsonData.length }}</h6>
          </v-flex>
        </v-layout>
      </v-card>
    </v-layout>
    <v-layout v-if="scard" text-center wrap>
      <v-card class="mx-auto">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px">
            <v-card-title >Score Card</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div><strong>Congragulations! </strong> You have achived</div>
            <div><b>{{this.total}} </b> Out of <b>{{ this.jsonData.length }} </b> Points</div>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>

          <v-btn icon>
            <social-sharing url="https://vuejs.org/"
                      title="The Quiz from Pankaj Maurya"
                      description="Rahul has scored"
                      quote="Rahul has scored ."
                      hashtags="Quizbypankajmaurya"
                      twitter-user="Pankaj Maurya"
                      inline-template>
            <div>
      
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
  </div>
</social-sharing>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import json from "../data.json";
import axios from 'axios';
export default {
  name: 'HelloWorld',

  data: () => ({
    jsonData: json,
    counter: 1,
    wrongattempt: 0,
    total: 0,
    valid: true,
    selectme: '',
    thumb1: false,
    thumb2: false,
    step:0,
    scard:false,
    quescard:true
    
  }),
  methods: {
    calculate: function(ans) {
      //alert(this.selectme);
      if(this.selectme != ans){
        //alert(this.step);
        if(this.thumb1 == false){
          this.wrongattempt += 1;
          //alert(this.wrongattempt);
        }
        this.thumb1 = false;
        this.thumb2 = true;
      }else{
        //alert("2");
        this.thumb1 = true;
        this.thumb2 = false;
      }

      this.step += 1;
      if(this.step == 2){
        //alert(this.step+"pp");
        //alert("hi");
        this.counter += 1;
        this.thumb1 = false;
        this.thumb2 = false;
        this.step = 0
      }
      //alert(this.wrongattempt);
      //alert(this.counter);
      if(this.counter == 7){
        //alert(Math.abs(this.wrongattempt));
        this.total = this.jsonData.length - Math.abs(this.wrongattempt)/2;
        //alert(this.total);
        this.scard=true;
        this.quescard=false;
      }
      //alert(this.selectme);
    }
  },
  computed: {

  },
  mounted () {
    axios
      .get('http://localhost:8000/getuser')
      .then(response => (this.info = response))
  }
};
</script>
