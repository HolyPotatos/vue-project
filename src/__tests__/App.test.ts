import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import App from "../App.vue";
import NavigationComponent from "../components/NavigationComponent.vue";
import QuestionComponent from "../components/QuestionComponent.vue";
import AnswersComponent from "../components/AnswersComponent.vue";
import AnswerComponent from "../components/AnswerComponent.vue";
import NextComponent from "../components/NextComponent.vue";
import ResultComponent from "../components/ResultComponent.vue";

describe("App.vue test", () => {
  it("render properly", () => {
    const wrapper = mount(App);
    expect(wrapper.find(".container")).toBeDefined();
  });
  it("correct component contains", () => {
    const wrapper = mount(App);
    expect(wrapper.findAllComponents(NavigationComponent).length).toBe(1);
    expect(wrapper.findAllComponents(QuestionComponent).length).toBe(1);
    expect(wrapper.findAllComponents(AnswersComponent).length).toBe(1);
    expect(wrapper.findAllComponents(AnswerComponent).length).toBe(4);
    expect(wrapper.findAllComponents(NextComponent).length).toBe(0);
    expect(wrapper.findAllComponents(ResultComponent).length).toBe(0);
  });
  it("check next component visible", async () => {
    const wrapper = mount(App);
    expect(wrapper.findAllComponents(NextComponent).length).toBe(0);
    await wrapper.findComponent(AnswerComponent).trigger("click");
    expect(wrapper.findAllComponents(NextComponent).length).toBe(1);
  });
  it("check next component click", async () => {
    const wrapper = mount(App);
    expect(wrapper.findAllComponents(NextComponent).length).toBe(0);
    await wrapper.findComponent(AnswerComponent).trigger("click");
    expect(wrapper.findAllComponents(NextComponent).length).toBe(1);
    await wrapper.findComponent(NextComponent).trigger("click");
    expect(wrapper.findAllComponents(NextComponent).length).toBe(0);
    expect(wrapper.findAllComponents(AnswerComponent).length).toBe(4);
  });
});
