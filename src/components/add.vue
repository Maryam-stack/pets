<template>
    <div >
            <v-card
        class="mx-auto"
        max-width="400"
        outlined
    > 
    <v-container>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
           <v-text-field
            v-model="pet.name"
            :rules="validationRules"
            label="Name"
            required
            ></v-text-field>
            <v-text-field
            v-model="pet.age"
            :rules="validationRules"
            label="Age"
            required
            ></v-text-field>
            <v-text-field
            v-model="pet.breed"
            :rules="validationRules"
            label="Breed"
            required
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            outlined
            rounded
            @click= "submit"
            >
             Save
            </v-btn>

            <v-btn
            outlined
             rounded
            @click="reset"
            >
             Cancel
            </v-btn>

        </v-form>
        </v-container>
    </v-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
        data(){
            return{
                pet:{ 
                    name:'',
                    age:'',
                    breed:'',
                },
      validationRules: [
        v => !!v || 'This is a required field',
      ],
            }
        },
        methods:{
            validate () {
                this.$refs.form.validate();
        
                },
             reset () {
                this.$refs.form.reset()
                },
            submit(){
                axios({
                    method:'post',
                    url:'http://localhost:3400/petsList',
                    data: this.pet
                })
                .then( () => {
                      this.$toast.success('The pet has been added',{
                        position:'bottom',
                        duration:false
                      });
                })
                .catch( error => {
                   this.$toast.error(error,{
                        position:'bottom',
                        duration:false
                      });
                })
                .finally(()=>{
                    this.$refs.form.reset() 
                })


            }
        }
}
</script>

