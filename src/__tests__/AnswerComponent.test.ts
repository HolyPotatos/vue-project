import { describe, it, expect } from "vitest";
import AnswerComponent from "../components/AnswerComponent.vue";
import { mount } from "@vue/test-utils";

describe("AnswerComponent", () => {
  it("render properly", () => {
    const wrapper = mount(AnswerComponent);
    expect(wrapper.find(".layout")).toBeDefined();
  });
  it("correct class binding if correct", () => {
    const wrapper = mount(AnswerComponent, {
      props: { src: "test", id: 1, correct: true, disabled: true },
    });
    expect(wrapper.find(".img--correct")).toBeDefined();
    expect(wrapper.find(".img--disabled")).toBeDefined();
    expect(wrapper.find(".img--wrong").exists()).toBe(false);
  });
  it("correct class binding if wrong", () => {
    const wrapper = mount(AnswerComponent, {
      props: { src: "test", id: 1, correct: false, disabled: true },
    });
    expect(wrapper.find(".img--correct").exists()).toBe(false);
    expect(wrapper.find(".img--disabled")).toBeDefined();
    expect(wrapper.find(".img--wrong")).toBeDefined();
  });
  it("correct class binding if not choice", () => {
    const wrapper = mount(AnswerComponent, {
      props: { src: "test", id: 1, correct: undefined, disabled: false },
    });
    expect(wrapper.find(".img--correct").exists()).toBe(false);
    expect(wrapper.find(".img--disabled").exists()).toBe(false);
    expect(wrapper.find(".img--wrong").exists()).toBe(false);
  });
});
