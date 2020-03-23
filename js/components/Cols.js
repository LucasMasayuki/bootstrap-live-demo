import $ from 'jquery'
import Mustache from 'mustache'

import cols from '../../templates/cols.html'
import codeCol from '../../templates/code_col.html'

export default class Cols {
    static appendListenner() {
        $('.js-select-qty-cols').on({ change: (e) => this.onChangeQtyCols(e) })
    }

    static onChangeQtyCols(e) {
        const self = $(e.currentTarget)
        let numberOfCols = self.val()
        this.renderCols(numberOfCols)
    }

    static mapPairOfCols(numberCol) {
        let map = {
            1: { num_coluns: 12, col_class: 1 },
            2: { num_coluns: 6, col_class: 2 },
            3: { num_coluns: 4, col_class: 3 },
            4: { num_coluns: 3, col_class: 4 },
            5: { num_coluns: 2, col_class: 5, extra_class: 7 },
            6: { num_coluns: 2, col_class: 6 },
            7: { num_coluns: 2, col_class: 7, extra_class: 5 },
            8: { num_coluns: 2, col_class: 8, extra_class: 4 },
            9: { num_coluns: 2, col_class: 9, extra_class: 3 },
            10: { num_coluns: 2, col_class: 10, extra_class: 2 },
            11: { num_coluns: 2, col_class: 11, extra_class: 1 },
            12: { num_coluns: 1, col_class: 12 },
        }

        return map[numberCol]
    }

    static renderCols(numberOfCols) {
        let container = $('.js-cols-container')
        let codeColPre = $('.js-code-col')

        let data = {
            all_classes: [],
        }

        let mapped = this.mapPairOfCols(numberOfCols)

        for (let i = 0; i < mapped.num_coluns; i += 1) {
            data.all_classes.push(mapped)
        }

        if (mapped.extra_class) {
            data.all_classes.pop()
            data.single_class = mapped
        }

        let colTemplate = $(cols).html()
        let codeColTemplate = $(codeCol).html()

        let html = Mustache.render(colTemplate, data)
        container.html(html)

        html = Mustache.render(codeColTemplate, data)
        codeColPre.html(html)
    }
}
