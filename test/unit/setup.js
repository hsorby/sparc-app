import Vue from 'vue'
import jestFetchMock from 'jest-fetch-mock'

Vue.config.productionTip = false

Vue.prototype.$message = () => {}

global.WebSocket = require('mock-socket').WebSocket
global.fetch = jestFetchMock
global.requestAnimationFrame = () => {}
global.SVGElement = Element

jest.setMock('node-fetch', jestFetchMock)