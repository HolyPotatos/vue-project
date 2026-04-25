import { describe, it, expect } from "vitest";
import QuestionComponent from "../components/QuestionComponent.vue";
import { mount } from "@vue/test-utils";

describe("QuestionComponent", () => {
  it("render properly", () => {
    const wrapper = mount(QuestionComponent);
    expect(wrapper.find(".layout")).toBeDefined();
  });
  it("correct question view", async () => {
    const wrapper = mount(QuestionComponent, { props: { text: "Вопрос на миллион" } });
    expect(wrapper.text()).toContain("Вопрос на миллион");
  });
});
