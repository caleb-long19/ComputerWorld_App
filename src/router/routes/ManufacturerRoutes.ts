import ManufacturerView from '@/views/manufacturer/ManufacturerView.vue'
import ManufacturerListView from '@/views/manufacturer/ManufacturerListView.vue'
import CreateManufacturerView from '@/views/manufacturer/CreateManufacturerView.vue'
import UpdateManufacturerView from '@/views/manufacturer/UpdateManufacturerView.vue'

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
    path: '/manufacturer/create',
    name: 'create-manufacturer',
    component: CreateManufacturerView
  },
  {
    path: '/manufacturer/:id/update',
    name: 'update-manufacturer',
    component: UpdateManufacturerView
  }
]