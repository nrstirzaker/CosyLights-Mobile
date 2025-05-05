import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'CosyLightsMobile',

  setup () {
    return () => h(QBadge, {
      class: 'CosyLightsMobile',
      label: 'CosyLightsMobile'
    })
  }
}
