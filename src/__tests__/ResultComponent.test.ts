import { describe, it, expect } from "vitest"
import ResultComponent from "../components/ResultComponent.vue"
import {mount} from "@vue/test-utils"


describe('ResultComponent', () => {
  it('render properly', () => {
    const wrapper = mount(ResultComponent)
    expect(wrapper.find('.layout')).toBeDefined()
  })
  it('correct result view', async () =>{
    const wrapper = mount(ResultComponent, {props:{correct: 13, total: 15}})
    expect(wrapper.text()).toContain('Вы прошли тест на 13/15')
  })
})
