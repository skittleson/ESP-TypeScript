import {} from "mocha";
import assert from "assert";

describe("#areaOfRectangle()", function () {
  it("should return the area of a rectangle", function () {
    function areaOfRectangle(width: number, height: number) {
      return width * height;
    }
    assert.equal(areaOfRectangle(3, 8), 24);
  });
});
