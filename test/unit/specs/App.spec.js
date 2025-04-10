import { mount, createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from '@/App'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('Component', () => {
  let actions
  let store
  let router

  beforeEach(() => {
    actions = {
      checkAuth: jest.fn().mockReturnValue('lol')
    }
    store = new Vuex.Store({
      state: {
        auth: {
          isAuthenticated: false
        }
      },
      actions
    })
    router = new VueRouter()
  })

  // test('is a Vue instance', () => {
  //   const wrapper = mount(App)
  //   expect(wrapper.isVueInstance()).toBeTruthy()
  // })
  it('should dispatch action when created', () => {
    shallow(App, {
      localVue,
      store,
      router
    })
    expect(actions.checkAuth).toHaveBeenCalled()
  })
})
