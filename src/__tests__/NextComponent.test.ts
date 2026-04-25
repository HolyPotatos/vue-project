import { describe, it, expect } from "vitest";
import NextComponent from "../components/NextComponent.vue";
import { mount } from "@vue/test-utils";

describe("NextComponent", () => {
  it("render properly", () => {
    const wrapper = mount(NextComponent);
    expect(wrapper.find(".layout")).toBeDefined();
  });
  it("check click", async () => {
    const wrapper = mount(NextComponent);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
