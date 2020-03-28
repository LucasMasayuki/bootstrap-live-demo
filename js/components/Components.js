import $ from 'jquery'

import components from '../../templates/components.html'
import '../../sass/components/components.sass'

export default class Components {
    static render() {
        return $(components).html()
    }
}
