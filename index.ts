import { DependencyProvider } from "./dependencyProvider";

const d = new DependencyProvider();
var on = false;
setInterval(function () {
  on = !on;
  d.setValue(2, on);
  //   digitalWrite(2, on);
}, 5000);
