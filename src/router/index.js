import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../views/Layout.vue'
import ThemeGold from '../views/Layout/Theme-gold.vue'
import ThemeWood from '../views/Layout/Theme-wood.vue'
import ThemeWater from '../views/Layout/Theme-water.vue'
import ThemeFire from '../views/Layout/Theme-fire.vue'
import ThemeTerra from '../views/Layout/Theme-terra.vue'
import Nature from '../views/Knowledge/Nature.vue'
import Urban from '../views/Knowledge/Urban.vue'
import UHI from '../views/Knowledge/UHI.vue'
import Platform from '../views/Platform.vue'
import No1 from '../views/Platform/No1.vue'
import No2 from '../views/Platform/No2.vue'
import No3 from '../views/Platform/No3.vue'
import No4 from '../views/Platform/No4.vue'
import No5 from '../views/Platform/No5.vue'
import Traffic from '../views/Traffic.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/layout/theme-gold',
      name: 'theme-gold',
      component: ThemeGold
    },
    {
      path: '/layout/theme-wood',
      name: 'theme-wood',
      component: ThemeWood
    },
    {
      path: '/layout/theme-water',
      name: 'theme-water',
      component: ThemeWater
    },
    {
      path: '/layout/theme-fire',
      name: 'theme-fire',
      component: ThemeFire
    },
    {
      path: '/layout/theme-terra',
      name: 'theme-terra',
      component: ThemeTerra
    },
    {
      path: '/knowledge/nature',
      name: 'nature',
      component: Nature
    },
    {
      path: '/knowledge/urban',
      name: 'urban',
      component: Urban
    },
    {
      path: '/knowledge/UHI',
      name: 'UHI',
      component: UHI
    },
    {
      path: '/platform',
      name: 'platform',
      component: Platform
    },
    {
      path: '/platform/no1',
      name: 'no1',
      component: No1
    },
    {
      path: '/platform/no2',
      name: 'no2',
      component: No2
    },
    {
      path: '/platform/no3',
      name: 'no3',
      component: No3
    },
    {
      path: '/platform/no4',
      name: 'no4',
      component: No4
    },
    {
      path: '/platform/no5',
      name: 'no5',
      component: No5
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: Traffic
    },
    {
      path: '/:domain(.*)*',
      name: 'NotFound',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
