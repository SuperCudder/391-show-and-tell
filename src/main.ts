import { mount } from 'ripple'
import { App } from './App.ripple'

const target = document.getElementById('app')
if (target) {
  mount(App, { target })
}
