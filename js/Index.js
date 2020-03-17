import 'bootstrap'

import $ from 'jquery'
import Cover from './components/Cover'
import Navbar from './components/Navbar'
import InstalationSection from './components/InstalationSection'
import IntroductionSection from './components/IntroductionSection'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../sass/index.sass'

let body = $('.js-index-body')

body.append(Navbar.render())
body.append(Cover.render())

Cover.drawGroupName()

body.append(IntroductionSection.render())
body.append(InstalationSection.render())