import $ from 'jquery'

import instalationSection from '../../templates/instalation_section.html'
import '../../sass/components/instalation_section.sass'

export default class InstalationSection {
    static render() {
        return $(instalationSection).html()
    }
}
