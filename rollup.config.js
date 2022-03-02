import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/cjs.js",
    format: "cjs",
  },
  plugins: [
    typescript({
      target: "es5",
    }),
    nodeResolve(),
    commonjs(),
  ],
};
