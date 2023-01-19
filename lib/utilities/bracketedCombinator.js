"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBracketedCombinator", {
    enumerable: true,
    get: function() {
        return addBracketedCombinator;
    }
});
var _bracketed = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/bracketed"));
var _array = require("../utilities/array");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function addBracketedCombinator(combinators) {
    var bracketedCombinatorMissing;
    var combinatorsLength = combinators.length;
    if (combinatorsLength === 0) {
        bracketedCombinatorMissing = false;
    } else {
        var firstCombinator = (0, _array.first)(combinators), firstCombinatorBracketedCombinator = firstCombinator === _bracketed.default;
        bracketedCombinatorMissing = !firstCombinatorBracketedCombinator;
    }
    if (bracketedCombinatorMissing) {
        var combinator = _bracketed.default; ///
        combinators.unshift(combinator);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYnJhY2tldGVkQ29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQnJhY2tldGVkQ29tYmluYXRvcihjb21iaW5hdG9ycykge1xuICBsZXQgYnJhY2tldGVkQ29tYmluYXRvck1pc3Npbmc7XG5cbiAgY29uc3QgY29tYmluYXRvcnNMZW5ndGggPSBjb21iaW5hdG9ycy5sZW5ndGg7XG5cbiAgaWYgKGNvbWJpbmF0b3JzTGVuZ3RoID09PSAwKSB7XG4gICAgYnJhY2tldGVkQ29tYmluYXRvck1pc3NpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaXJzdENvbWJpbmF0b3IgPSBmaXJzdChjb21iaW5hdG9ycyksXG4gICAgICAgICAgZmlyc3RDb21iaW5hdG9yQnJhY2tldGVkQ29tYmluYXRvciA9IChmaXJzdENvbWJpbmF0b3IgPT09IGJyYWNrZXRlZENvbWJpbmF0b3IpO1xuXG4gICAgYnJhY2tldGVkQ29tYmluYXRvck1pc3NpbmcgPSAhZmlyc3RDb21iaW5hdG9yQnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxuXG4gIGlmIChicmFja2V0ZWRDb21iaW5hdG9yTWlzc2luZykge1xuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBicmFja2V0ZWRDb21iaW5hdG9yOyAvLy9cblxuICAgIGNvbWJpbmF0b3JzLnVuc2hpZnQoY29tYmluYXRvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhZGRCcmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yTWlzc2luZyIsImNvbWJpbmF0b3JzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDb21iaW5hdG9yIiwiZmlyc3QiLCJmaXJzdENvbWJpbmF0b3JCcmFja2V0ZWRDb21iaW5hdG9yIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7Ozs4REFKZ0I7cUJBRVY7Ozs7OztBQUVmLFNBQVNBLHVCQUF1QkMsV0FBVyxFQUFFO0lBQ2xELElBQUlDO0lBRUosSUFBTUMsb0JBQW9CRixZQUFZRyxNQUFNO0lBRTVDLElBQUlELHNCQUFzQixHQUFHO1FBQzNCRCw2QkFBNkIsS0FBSztJQUNwQyxPQUFPO1FBQ0wsSUFBTUcsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNMLGNBQ3hCTSxxQ0FBc0NGLG9CQUFvQkcsa0JBQW1CO1FBRW5GTiw2QkFBNkIsQ0FBQ0s7SUFDaEMsQ0FBQztJQUVELElBQUlMLDRCQUE0QjtRQUM5QixJQUFNTyxhQUFhRCxrQkFBbUIsRUFBRSxHQUFHO1FBRTNDUCxZQUFZUyxPQUFPLENBQUNEO0lBQ3RCLENBQUM7QUFDSCJ9