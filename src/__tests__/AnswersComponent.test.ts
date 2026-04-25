import { describe, it, expect } from "vitest";
import AnswersComponent from "../components/AnswersComponent.vue";
import AnswerComponent from "../components/AnswerComponent.vue";
import { mount } from "@vue/test-utils";

describe("AnswersComponent", () => {
  it("render properly", () => {
    const wrapper = mount(AnswersComponent);
    expect(wrapper.find(".layout")).toBeDefined();
  });
  it("correct answers view", () => {
    const wrapper = mount(AnswersComponent, {
      props: { answers: ["1", "2", "3", "4"], id: 1, choice: undefined, correct: 3 },
    });
    expect(wrapper.findAllComponents(AnswerComponent).length).toBe(4);
  });
  it("check answer click", async () => {
    const wrapper = mount(AnswersComponent, {
      props: { answers: ["1", "2", "3", "4"], id: 1, choice: undefined, correct: 3 },
    });
    await wrapper.findComponent(AnswerComponent).trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
  it("check correct answer view", async () => {
    const wrapper = mount(AnswersComponent, {
      props: { answers: ["1", "2", "3", "4"], id: 1, choice: 2, correct: 3 }, // 2, т.к. в choice нумерация с 0, а в correct нумерация с 1
    });
    expect(wrapper.findAll(".img--correct").length).toBe(1);
    expect(wrapper.findAll(".img--disabled").length).toBe(4);
    expect(wrapper.findAll(".img--wrong").length).toBe(0);
  });
  it("check wrong answer view", async () => {
    const wrapper = mount(AnswersComponent, {
      props: { answers: ["1", "2", "3", "4"], id: 1, choice: 1, correct: 3 },
    });
    expect(wrapper.findAll(".img--correct").length).toBe(1);
    expect(wrapper.findAll(".img--disabled").length).toBe(4);
    expect(wrapper.findAll(".img--wrong").length).toBe(1);
  });
});
