import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronRight, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faSun } from '@fortawesome/free-regular-svg-icons'

library.add(faChevronRight, faPlus, faTrash, faXmark, faCircle, faSun);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
