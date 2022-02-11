<template>
<div>
        <v-card
        class="mx-auto"
        max-width="344"
        outlined
        
        v-for="(pet) in pets"
        :key="pet.id"
        >
        <v-list-item three-line>
        <v-list-item-content>
        <div class="text-overline mb-4">
          Name:{{ pet.name }}
        </div>
        <div class="text-overline mb-4">
          Age:{{pet.age}}
        </div>
        <div class="text-overline mb-4">
         Breed:{{pet.breed}}
        </div>
      </v-list-item-content>
       </v-list-item>
        <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        @click="updatePet(pet.id)"
      >
        Edit
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="removePet(pet.id)"
      >
        Delete
      </v-btn>
    </v-card-actions>
        </v-card>
        </div>
</template>
<script>
    import axios from 'axios';
    
    export default {
      //props: ['pet'],
        data(){
            return {
                pets:[]
            }
        },
        methods:{
            loadPets(){
                axios.get('http://localhost:3400/petsList')
                .then( response => {
                    this.pets = response.data
                })
                .catch( error => {
                    console.log( error )
                })
            },
            removePet(id){ axios.delete(`http://localhost:3400/petsList/${id}`)
             .then(response => {
                console.log(response.data) ;
             })
             .catch(function (error) {
                console.log(error.response)
             })
             .finally(()=>{
                    location.reload(); 
                })

            },
            getPet(id) {
          axios.get(`http://localhost:3400/petsList/${id}`)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        })
            },
            updatePet(id){
      axios.put(`http://localhost:3400/petsList/${id}` )
        .then(response => {
          //this.pet.name= 'updated'
          //response.data= this.pet.name
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        }).finally(()=>{
                    location.reload(); 
                })        
        }
        },
        mounted(){
          this.loadPets()
        }
    }
</script>