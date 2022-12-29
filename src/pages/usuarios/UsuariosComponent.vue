<template>
    <div class="content">
        <div class="navbar">
            <NavBarComponent />
        </div>
        <div class="tabela">

            <div class="conteudo">
                <h2 class="mb-2 ">Usuários</h2>
                <table class="table table-striped border">
                    <thead class="thead-light">
                        <tr>
                            <th class="text-center" scope="col">ID</th>
                            <th class="text-center" scope="col">Nome</th>
                            <th class="text-center" scope="col">Username</th>
                            <th class="text-center" scope="col">E-mail</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios" :key="usuario.id">
                            <td class="text-center">{{ usuario.id }}</td>
                            <td class="text-center">{{ usuario.name }}</td>
                            <td class="text-center">{{ usuario.username }}</td>
                            <td class="text-center">{{ usuario.email }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>


</template>

<script>
import NavBarComponent from '../navbar/NavBarComponent.vue';
const axios = require('axios');
export default {
    data() {
        return {
            usuarios: []
        }
    },
    mounted() {
        this.buscarUsuarios()
    },
    methods: {
        
        async buscarUsuarios() {
            const response = await axios.get('http://localhost:8000/api/usuarios')
            if (response.status == 200) {
                this.usuarios = response.data
            } else {
                console.log('error')
            }
        }
    },
    components: {
        NavBarComponent
    }
}
</script>

<style src="./style.css" scoped />