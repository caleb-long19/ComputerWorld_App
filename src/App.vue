<script>
export default {
  data() {
    return {
      isSidebarVisible: true, // Sidebar visibility state (initially visible)
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
};
</script>

<template>
  <div class="main-layout">
    <!-- Sidebar -->
    <div :class="['sidebar', { 'sidebar-closed': !isSidebarVisible }]" class="d-flex flex-column p-3 bg-yellow shadow-lg">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark custom-font-bold text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-5 custom-text-colour lemon-font-bold" v-if="isSidebarVisible">COMPUTER WORLD</span>
      </a>
      <hr class="dotted custom-text-colour" v-if="isSidebarVisible">

      <!-- Sidebar Sticky Content -->
      <div class="sidebar-content">
        <ul class="nav nav-pills flex-column mb-auto custom-font-regular">
          <li class="nav-item">
            <RouterLink :to="{ name: 'home'}" class="nav-link-new fs-6">
              <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href=""></use></svg>
              <span v-if="isSidebarVisible">HOME</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'manufacturer-list'}" class="nav-link-new fs-6">
              <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href=""></use></svg>
              <span v-if="isSidebarVisible">MANUFACTURERS</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'product-list'}" class="nav-link-new fs-6">
              <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href=""></use></svg>
              <span v-if="isSidebarVisible">PRODUCTS</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'order-list'}" class="nav-link-new fs-6">
              <svg class="bi me-2 bg-light" width="16" height="16"><use xlink:href=""></use></svg>
              <span v-if="isSidebarVisible">ORDERS</span>
            </RouterLink>
          </li>
          <hr class="custom-text-colour" v-if="isSidebarVisible">
        </ul>
      </div>

      <!-- Sidebar Arrow Toggle -->
      <div class="sidebar-arrow" @click="toggleSidebar">
        <span v-if="isSidebarVisible">←</span>
        <span v-else>→</span>
      </div>
    </div>

    <!-- Content beside Sidebar -->
    <div :class="['content-area', { 'content-expanded': !isSidebarVisible }]">
      <div class="content flex-grow-1 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* General Layout Styles */
.main-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  transition: width 0.3s ease;
  z-index: 1000;
}

.sidebar-closed {
  width: 50px; /* Sidebar shrinks when closed but stays visible */
}

/* Sticky Sidebar Content */
.sidebar-content {
  position: sticky;
  top: 0; /* Sidebar content follows the user scroll */
}

/* Sidebar Arrow Box */
.sidebar-arrow {
  position: absolute;
  top: 10px;
  right: -20px;
  width: 30px;
  height: 30px;
  background-color: #ffcc00;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.sidebar-arrow span {
  pointer-events: none;
}

/* Content Area */
.content-area {
  margin-left: 250px;
  flex-grow: 1;
  transition: margin-left 0.3s ease;
}

.content-expanded {
  margin-left: 50px; /* Content shifts only slightly when sidebar is closed */
}

/* Media Query for Mobile Screens */
@media (max-width: 768px) {
  .sidebar {
    width: 225px;
  }

  .sidebar-closed {
    width: 50px;
  }

  .content-area {
    margin-left: 200px;
  }

  .content-expanded {
    margin-left: 50px;
  }
}
</style>
