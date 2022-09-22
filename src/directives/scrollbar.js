import usePerfectScrollbar from '@/hooks/usePerfectScrollbar'

const { install, uninstall } = usePerfectScrollbar()
export default {
  inserted(el) {
    install(el)
  },

  unbind() {
    uninstall()
  },
}
