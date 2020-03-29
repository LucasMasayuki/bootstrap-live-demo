import $ from 'jquery'

import finish from '../../templates/finish.html'

export default class Finish {
    static render() {
        return $(finish).html()
    }
}
