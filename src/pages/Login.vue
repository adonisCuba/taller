<template>
<q-layout>
  <q-header></q-header>
  <q-page padding class="bg-blue window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row bg-primary q-pa-sm">
        <h5 class="text-h5 text-white text-weight-bold q-my-md">Chuchi Taller</h5>
      </div>
      <div class="row">
        <q-form @submit="onSubmit">
          <q-card square bordered class="q-pa-sm shadow-1 width">
            <q-card-section>
                <q-input        
                  v-model="email"
                  label="Correo"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Por favor introduzca el usuario']"
                >
                <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input        
                  v-model="password"
                  :type="passwordFieldType"
                  label="Contraseña"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Por favor introduzca la contraseña']"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                  <template v-slot:append>
                    <q-icon :name="visibilityIcon" @click="switchVisibility" class="cursor-pointer" />
                  </template>
                </q-input>              
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn type="submit" unelevated color="primary" size="lg" class="full-width" label="Entrar" />
            </q-card-actions>
          </q-card>      
        </q-form>
      </div>
    </div>
    
  </q-page>
</q-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import authentication from '../api/auth'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')

    const visibilityIcon = ref('visibility')
    let visibility = false
    const passwordFieldType = ref('password')

    const switchVisibility = () => {
      visibility = !visibility
      passwordFieldType.value = visibility ? 'text' : 'password'
      visibilityIcon.value =  visibility ? 'visibility_off' : 'visibility'
    }

    const router = useRouter()

    const onSubmit = async () =>{
      await authentication.login(email.value, password.value)  
      await router.push({ name: 'Index'});    
    }

    return { email, password, visibilityIcon, passwordFieldType, switchVisibility, onSubmit}
  },
})
</script>
<style>
.width{
  min-width: 320px;
}
</style>
