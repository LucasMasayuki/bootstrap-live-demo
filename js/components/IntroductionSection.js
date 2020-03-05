import $ from 'jquery'

import introductionSection from '../../html/introduction_section.html'

export default class IntroductionSection {
    static render() {
        return $(introductionSection).html()
    }
}
