<template>
  <div class="container mt-5 p-4 shadow-lg rounded bg-light">
    <h2 class="text-center mb-4">Reporte de Contratos</h2>
    <form class="d-flex flex-row justify-content-around align-items-center mb-4">
      <div class="form-group me-3">
        <label class="form-label">Fecha Desde</label>
        <input type="date" v-model="startDate" class="form-control" name="fechaDesde" placeholder="dd/mm/aaaa" required>
      </div>
      <div class="form-group me-3">
        <label class="form-label">Fecha Hasta</label>
        <input type="date" v-model="endDate" class="form-control" name="fechaHasta" placeholder="dd/mm/aaaa" required>
      </div>
      <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Aceptar</button>
    </form>

    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">Cliente</th>
            <th scope="col">Monto Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in resultados" :key="res[0]">
            <td>{{ res[0] }}</td>
            <td>{{ res[1] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import variables from '../variables';

export default {
  data() {
    return {
      resultados: [],
      startDate: '',
      endDate: ''
    };
  },
  methods: {
    submitForm() {
      axios.get(variables.API_URL + "Reporte/Resultado", {
        params: {
          fechaDesde: this.startDate,
          fechaHasta: this.endDate
        }
      })
      .then((response) => {
        this.resultados = response.data;
      });
    }
  }
};
</script>

<style scoped>
/* Estilos personalizados */
.container {
  background-color: #f8f9fa; /* Fondo claro */
}

form {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  height: 40px;
}

h2 {
  color: #343a40;
}
</style>
