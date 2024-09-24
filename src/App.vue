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
          <RouterLink :to="{ name: 'manufacturer-list'}" class="nav-link-new fs-6">
            <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>MANUFACTURERS</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'product-list'}" class="nav-link-new fs-6">
            <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href="#table"></use></svg>PRODUCTS</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'order-list'}" class="nav-link-new fs-6">
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
