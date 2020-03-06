import $ from 'jquery'

import GroupBox from './GroupBox'
import cover from '../../html/cover.html'

export default class Cover {
    static render() {
        return $(cover).html()
    }

    static drawGroupName() {
        let groupBox = $('.js-group-names')
        groupBox.html(GroupBox.render())
    }
}
