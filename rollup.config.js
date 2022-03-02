import es3 from "rollup-plugin-es3";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.ts",
  output: {
    file: "dist/cjs.js",
    format: "cjs",
  },
  plugins: [typescript(), es3(), terser()],
};
