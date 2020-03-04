import 'bootstrap'
import $ from 'jquery'
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'

let body = $('.js-index-body')

body.append(Header.render())
