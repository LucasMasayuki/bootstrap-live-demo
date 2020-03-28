import $ from 'jquery'

import whyBootstrap from '../../templates/why-bootstrap.html'

export default class WhyBootstrap {
    static render() {
        return $(whyBootstrap).html()
    }
}
