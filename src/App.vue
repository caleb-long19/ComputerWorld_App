<script>

</script>

<template>
  <div class="main-layout d-flex">
    <!-- Sidebar -->
    <div class="sidebar d-flex flex-column flex-shrink-0 p-3 bg-yellow shadow-lg rounded">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark custom-font-bold text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-5 custom-text-colour">COMPUTER WORLD</span>
      </a>
      <hr class="dotted custom-text-colour">
      <ul class="nav nav-pills flex-column mb-auto custom-font-regular">
        <li class="nav-item">
          <RouterLink :to="{ name: 'home'}" class="nav-link-new fs-6">
            <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href="#home"></use></svg>HOME</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'manufacturer_list'}" class="nav-link-new fs-6">
            <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>MANUFACTURERS</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'product_list'}" class="nav-link-new fs-6">
            <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href="#table"></use></svg>PRODUCTS</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'order_list'}" class="nav-link-new fs-6">
            <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href="#grid"></use></svg>ORDERS</RouterLink>
        </li>
        <hr class="custom-text-colour">
      </ul>
      <hr class="dotted custom-text-colour">
    </div>

    <!-- Content beside Sidebar -->
    <div class="content-area d-flex flex-column flex-grow-1">
      <!-- Content Area -->
      <div class="content flex-grow-1 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Main layout with sidebar and content side by side */
.main-layout {
  display: flex;
  max-height: 100vh;
}

/* Sidebar full height */
.sidebar {
  width: 350px;
  background-color: #f8f9fa;
  height: 100vh; /* Full viewport height */
}

/* Content and Footer Area (takes remaining space beside sidebar) */
.content-area {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/* Main content should grow to take available space */
.content {
  flex-grow: 1;
  overflow: auto;
  padding: 20px;
}
.bg-yellow {
  background-color: #FFDB58;
}
.custom-font-regular {
  font-family: lemonMilk, sans-serif;
}
.custom-font-bold {
  font-family: lemonMilk_bold, sans-serif;
}
.custom-text-colour {
  color: #f8f9fa;
}
hr.dotted {
  border-top: 5px dotted #999;
}
@font-face {
  font-family: lemonMilk;
  src: url("src/assets/fonts/LEMONMILK-Regular.otf");
}
@font-face {
  font-family: lemonMilk_bold;
  src: url("src/assets/fonts/LEMONMILK-bold.otf");
}
.nav-link-new {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  color: white;
  text-decoration: none;
  background: none;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
body {
  background-color: #f8f9fa;
}
</style>
