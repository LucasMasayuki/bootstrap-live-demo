import $ from 'jquery'

import header from '../../html/header.html'

export default class Header {
    static render() {
        return $(header).html()
    }
}
