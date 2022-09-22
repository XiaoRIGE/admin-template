import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

export default function usePerfectScrollbar() {
  let ps
  const resize = () => {
    // eslint-disable-next-line no-unused-expressions
    ps && ps.update()
  }
  return {
    // eslint-disable-next-line consistent-return
    install(el) {
      if (el) {
        ps = new PerfectScrollbar(el, {
          wheelSpeed: 2,
          wheelPropagation: true,
          suppressScrollY: true,
        })
        window.addEventListener('resize', resize, false)
        return ps
      }
    },
    uninstall() {
      window.removeEventListener('resize', resize, false)
      // eslint-disable-next-line no-unused-expressions
      ps && ps.destroy()
    },
  }
}
