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
                usp_number: 10314875,
                name: 'Leonardo Coelho Negri',
            },
            {
                usp_number: 9360951,
                name: 'Lucas Borelli Amarali',
            },
            {
                usp_number: 10403280,
                name: 'Lucas Gabriel Arantes Moreira',
            },
            {
                usp_number: 10258970,
                name: 'Lucas Masayuki Tamaribuchi',
            },
        ]
    }
}
