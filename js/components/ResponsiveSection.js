import $ from 'jquery'

import responsiveSection from '../../templates/responsive-section.html'
import '../../sass/components/responsive-section.sass'

export default class ResponsiveSection {
    static render() {
        return $(responsiveSection).html()
    }
}
