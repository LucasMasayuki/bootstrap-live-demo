import $ from 'jquery'

import navbar from '../../templates/navbar.html'
import '../../sass/components/navbar.sass'

export default class Navbar {
    static render() {
        return $(navbar).html()
    }
}
