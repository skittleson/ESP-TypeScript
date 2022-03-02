import { DependencyProvider } from "./dependencyProvider";

const dependencyProvider = new DependencyProvider();
var on = false;
setInterval(function () {
  on = !on;
  dependencyProvider.setValue(2, on);
}, 5000);
