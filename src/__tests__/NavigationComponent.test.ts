import { describe, it, expect } from "vitest"
import NavigationComponent from "../components/NavigationComponent.vue"
import {mount} from "@vue/test-utils"


describe('NavigationComponent', () => {
  it('render properly', () => {
    const wrapper = mount(NavigationComponent)
    expect(wrapper.find('.layout')).toBeDefined()
  })
  it('correct bar view', () =>{
    const wrapper = mount(NavigationComponent, {props:{current: 2, total: 15}})
    expect(wrapper.findAll('.segment').length).toBe(15)
    expect(wrapper.findAll('.active').length).toBe(2)
    expect(wrapper.findAll('.mrk').length).toBe(14)
  })
})
