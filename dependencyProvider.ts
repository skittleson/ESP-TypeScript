export class DependencyProvider {
  setValue(pin: Number, value: boolean) {
    digitalWrite(pin, value);
  }
}
