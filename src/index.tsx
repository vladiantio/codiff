/* @refresh reload */
import { render } from 'solid-js/web'

import './utils/init-monaco'
import './index.css'
import App from './App'

const root = document.getElementById('root')

document.getElementById('loading')!.remove();
render(() => <App />, root!)
