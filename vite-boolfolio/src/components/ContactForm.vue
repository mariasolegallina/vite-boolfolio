<script>
import axios from 'axios'
export default {
    name: 'ContactForm',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
            },
            submitSuccess: null
        }
    },
    methods: {
        sendContactRequest() {
            // Azioni da eseguire per inviare la richiesta di contatto
            axios.post('http://127.0.0.1:8000/api/new-contact', this.formData)
                .then(res => {
                    console.log('Risposta API:', res)
                    this.submitSuccess = true; // Imposta submitSuccess a true dopo l'invio con successo
                })
                .catch(error => {
                    console.error('Errore durante l\'invio della richiesta:', error);
                    this.submitSuccess = false; // Assicura che submitSuccess sia false in caso di errore
                });
        }
    }
}
</script>

<template>
    <div class=" container py-5">
        <!-- Form -->
        <form @submit.prevent="sendContactRequest()">
            <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input type="text" class="form-control" id="name" name="name" v-model="formData.name" required>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Indirizzo email</label>
                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" v-model="formData.email" required>
                <div id="emailHelp" class="form-text">Non condivideremo la tua mail con terzi.</div>
            </div>

            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Inserisci il tuo messaggio" id="message" name="message" style="height: 200px" v-model="formData.message"></textarea>
                <label for="message">Messaggio</label>
            </div>

            <button type="submit" class="btn btn-primary">Invia</button>
             <!-- provvisorio per visionare messaggio dopol'invio dei dati, da correggere! -->
            <span v-if="submitSuccess !== null" class="text-success ms-5">Messaggio inviato con successo!</span>
            
        </form>
        
       


        <div class="container  text-end p-0">
             <!-- Messaggio di successo -->
             <div class="container p-0 m-0">
                <router-link v-if="submitSuccess !== null" :to="{ name: 'projects' }" class="btn btn-primary m-0">Torna alla homepage</router-link>
             </div>

        </div>

       
    </div>
</template>

<style lang="scss">
</style>
