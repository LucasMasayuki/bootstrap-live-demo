import 'bootstrap'

import $ from 'jquery'
import Cover from './components/Cover'
import NavBar from './components/NavBar'
import IntroductionSection from './components/IntroductionSection'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/index.css'

let body = $('.js-index-body')

body.append(NavBar.render())
body.append(Cover.render())

Cover.drawGroupName()

body.append(IntroductionSection.render())
