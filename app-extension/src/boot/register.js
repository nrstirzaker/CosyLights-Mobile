import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-cosylights-mobile'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
