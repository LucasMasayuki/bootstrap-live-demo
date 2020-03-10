import $ from 'jquery'

import introductionSection from '../../templates/introduction_section.html'

export default class IntroductionSection {
    static render() {
        return $(introductionSection).html()
    }
}
