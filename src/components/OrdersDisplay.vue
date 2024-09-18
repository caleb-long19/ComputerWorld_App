<script setup>
defineProps({
  order: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'order_details', params: { id: order.order_id } }">
    <div class="event-card">
      <h2>{{ order.order_id }}</h2>
      <p>{{ order.order_ref }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>