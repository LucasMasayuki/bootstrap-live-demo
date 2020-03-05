import $ from 'jquery'

import navbar from '../../html/navbar.html'

export default class NavBar {
    static render() {
        return $(navbar).html()
    }
}
