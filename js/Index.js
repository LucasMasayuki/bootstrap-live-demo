import 'bootstrap'

import $ from 'jquery'
import Cover from './components/Cover'
import Navbar from './components/Navbar'
import InstalationSection from './components/InstalationSection'
import IntroductionSection from './components/IntroductionSection'
import ResponsiveSection from './components/ResponsiveSection'
import Cols from './components/Cols'
import WhyBootstrap from './components/WhyBootstrap'
import Components from './components/Components'

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
