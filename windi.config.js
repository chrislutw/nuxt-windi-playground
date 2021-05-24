import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(orientation: portrait)" }
      }
    }
  },
  plugins: []
});
