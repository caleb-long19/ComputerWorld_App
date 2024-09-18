<script setup>
defineProps({
  manufacturer: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    class="card-link"
    :to="{ name: 'manufacturer_details', params: { id: manufacturer.manufacturer_id } }">
      <div class="card">
        <h3 class="medium-text-size">Manufacturer ID: {{ manufacturer.manufacturer_id }}</h3>
        <p class="small-text-size">Manufacturer: {{ manufacturer.manufacturer_name }}</p>
      </div>
  </RouterLink>
</template>

<style scoped>
.card {
  width: 200px;
  margin-bottom: 25px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  padding: 2px 16px;
  border-radius: 5px; /* 5px rounded corners */
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.4s;
  transform: scale(1.1);
}
.card-link {
  color: #2c3e50;
  text-decoration: none;
}
.medium-text-size{
  font-family: sans-serif;
  font-size: 12pt;
}
.small-text-size{
  font-family: sans-serif;
  font-size: 10pt;
}
</style>
