import 'bootstrap'

import '@fortawesome/fontawesome-free/css/all.min.css'

import $ from 'jquery'
import Cover from './components/Cover'
import Navbar from './components/Navbar'
import InstalationSection from './components/InstalationSection'
import IntroductionSection from './components/IntroductionSection'
import ResponsiveSection from './components/ResponsiveSection'
import Cols from './components/Cols'
import WhyBootstrap from './components/WhyBootstrap'
import Components from './components/Components'
import Form from './components/Form'
import Finish from './components/Finish'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../sass/index.sass'
import '../sass/shared/code.sass'

let body = $('.js-index-body')

body.append(Navbar.render())
body.append(Cover.render())

Cover.drawGroupName()

body.append(IntroductionSection.render())
body.append(WhyBootstrap.render())
body.append(InstalationSection.render())
body.append(ResponsiveSection.render())

Cols.appendListenner()
Cols.renderCols(12)

body.append(Components.render())
body.append(Form.render())

Form.applyMasks()
Form.applyListenners()

body.append(Finish.render())

import $ from 'jquery'

import whyBootstrap from '../../templates/why-bootstrap.html'

export default class WhyBootstrap {
    static render() {
        return $(whyBootstrap).html()
    }
}

import $ from 'jquery'

import responsiveSection from '../../templates/responsive-section.html'
import '../../sass/components/responsive-section.sass'

export default class ResponsiveSection {
    static render() {
        return $(responsiveSection).html()
    }
}

import $ from 'jquery'

import introductionSection from '../../templates/introduction_section.html'

export default class IntroductionSection {
    static render() {
        return $(introductionSection).html()
    }
}

import $ from 'jquery'

import navbar from '../../templates/navbar.html'
import '../../sass/components/navbar.sass'

export default class Navbar {
    static render() {
        return $(navbar).html()
    }
}

import $ from 'jquery'

import instalationSection from '../../templates/instalation_section.html'
import '../../sass/components/instalation_section.sass'

export default class InstalationSection {
    static render() {
        return $(instalationSection).html()
    }
}

import 'jquery-mask-plugin'
import $ from 'jquery'

import form from '../../templates/form.html'

export default class Form {
    static render() {
        return $(form).html()
    }

    static applyMasks() {
        $('#validationServer05').mask('00000-000')
    }

    static applyListenners() {
        $('.js-form').on({ submit: (e) => this.onlyDoValidation(e) })
    }

    static onlyDoValidation(e) {
        let valid = e.target.checkValidity()
        if (valid) {
            $('#form-code').modal('show')
        }

        return false
    }
}

import $ from 'jquery'

import finish from '../../templates/finish.html'

export default class Finish {
    static render() {
        return $(finish).html()
    }
}

import $ from 'jquery'

import GroupBox from './GroupBox'
import cover from '../../templates/cover.html'
import '../../sass/components/cover.sass'

export default class Cover {
    static render() {
        return $(cover).html()
    }

    static drawGroupName() {
        let groupBox = $('.js-group-names')
        groupBox.html(GroupBox.render())
    }
}

import $ from 'jquery'

import components from '../../templates/components.html'
import '../../sass/components/components.sass'

export default class Components {
    static render() {
        return $(components).html()
    }
}

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