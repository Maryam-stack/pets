<template>
 <v-card
    class="mx-auto"
    max-width="400"
    max-height="1000"
    outlined
  >
  <v-row>
    <v-col
      v-for="n in 8"
      :key="n"
      class="d-flex child-flex"
      cols="6"
    >
      <v-img
       :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
       <v-btn
              icon
              color="green"
              @click="updateImage"
            >
              <v-icon>mdi-cached</v-icon>
            </v-btn>
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
            
          </v-row>
        </template>
      </v-img>
     
    </v-col>
    
  </v-row>
  
  </v-card>
</template>

<script>
  export default {
    data()
    {
      return{
         url:'https://dog.ceo/api/breeds/image/random',
         alt:'Another image'
      }
    },
    methods:{
      updateImage(){
        return this.url
      }
    }
    
  }
</script>