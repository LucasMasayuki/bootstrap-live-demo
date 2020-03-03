import $ from 'jquery'
import Mustache from 'mustache'

import header from '../../html/header.html'

export default class Header {
    static render() {
        console.log(header)
        return Mustache.render(header)
    }
}
