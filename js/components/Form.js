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
