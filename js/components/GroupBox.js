import $ from 'jquery'
import Mustache from 'mustache'

import groupBox from '../../html/group_box.html'

export default class GroupBox {
    static render() {
        let template = $(groupBox).html()
        return Mustache.render(template, { group: this.getGroup() })
    }

    static getGroup() {
        return [
            {
                usp_number: 10258970,
                name: 'Lucas Masayuki Tamaribuchi',
            },
            {
                usp_number: 10258970,
                name: 'Lucas Masayuki Tamaribuchi',
            },
            {
                usp_number: 10258970,
                name: 'Lucas Masayuki Tamaribuchi',
            },
            {
                usp_number: 10258970,
                name: 'Lucas Masayuki Tamaribuchi',
            },
        ]
    }
}
