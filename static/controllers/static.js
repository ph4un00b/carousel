// import { createApp } from "https://unpkg.com/petite-vue?module";
import { createApp } from "../../petite-vue.js";

function CarouselController() {
  return {
    total_items: 0,
    current_item: 0,
    get current_index() {
      return Math.abs(this.current_item % this.total_items);
    },
    get webp() {
      return Modernizr?.webp
    },
  };
}

createApp({ CarouselController }).mount("#carousel");
