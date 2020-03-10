import $ from 'jquery'
import Mustache from 'mustache'

import groupBox from '../../templates/group_box.html'
import '../../sass/components/group_box.sass'

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
