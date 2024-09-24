import ManufacturerView from '@/views/ManufacturerView.vue'
import ManufacturerListView from '@/views/ManufacturerListView.vue'
import AddManufacturerView from '@/views/AddManufacturerView.vue'
import EditManufacturerView from '@/views/EditManufacturerView.vue'

export const manufacturerRoutes = [
  {
    path: '/manufacturer',
    name: 'manufacturer-list',
    component: ManufacturerListView
  },
  {
    path: '/manufacturer/:id',
    name: 'manufacturer',
    component: ManufacturerView
  },
  {
    path: '/manufacturer/add',
    name: 'add-manufacturer',
    component: AddManufacturerView
  },
  {
    path: '/manufacturer/:id/edit',
    name: 'edit-manufacturer',
    component: EditManufacturerView
  }
]