"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get bracketedCombinatorFromNothing () {
        return bracketedCombinatorFromNothing;
    },
    get bracketedConstructorFromNothing () {
        return bracketedConstructorFromNothing;
    }
});
var _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
var _fragment = require("../utilities/fragment");
var _constants = require("../constants");
var _metaTypeNames = require("../metaTypeNames");
var _instantiate = require("../process/instantiate");
var _element = require("../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bracketedCombinator = null, bracketedConstructor = null;
function bracketedCombinatorFromNothing() {
    if (bracketedCombinator === null) {
        var context = _nominal.default; ///
        bracketedCombinator = (0, _fragment.withinFragment)(function(context) {
            var bracketedCombinatorString = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")"), string = bracketedCombinatorString, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), bracketedCombinatorNode = combinatorNode, bracketedCombinator = (0, _element.combinatorFromCombinatorNode)(bracketedCombinatorNode, context);
            return bracketedCombinator;
        }, context);
    }
    return bracketedCombinator;
}
function bracketedConstructorFromNothing() {
    if (bracketedConstructor === null) {
        var context = _nominal.default; ///
        bracketedConstructor = (0, _fragment.withinFragment)(function(context) {
            var bracketedConstructorString = "(".concat(_constants.BASE_TYPE_SYMBOL, ")"), string = bracketedConstructorString, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), bracketedConstructorNode = constructorNode, bracketedConstructor = (0, _element.constructorFromConstructorNode)(bracketedConstructorNode, context);
            return bracketedConstructor;
        }, context);
    }
    return bracketedConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5zdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBub21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5cbmltcG9ydCB7IHdpdGhpbkZyYWdtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mcmFnbWVudFwiO1xuaW1wb3J0IHsgQkFTRV9UWVBFX1NZTUJPTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbWJpbmF0b3IsIGluc3RhbnRpYXRlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSwgY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmxldCBicmFja2V0ZWRDb21iaW5hdG9yID0gbnVsbCxcbiAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRDb21iaW5hdG9yRnJvbU5vdGhpbmcoKSB7XG4gIGlmIChicmFja2V0ZWRDb21iaW5hdG9yID09PSBudWxsKSB7XG4gICAgY29uc3QgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICAgIGJyYWNrZXRlZENvbWJpbmF0b3IgPSB3aXRoaW5GcmFnbWVudCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgYnJhY2tldGVkQ29tYmluYXRvclN0cmluZyA9IGAoJHtTVEFURU1FTlRfTUVUQV9UWVBFX05BTUV9KWAsXG4gICAgICAgICAgICBzdHJpbmcgPSBicmFja2V0ZWRDb21iaW5hdG9yU3RyaW5nLCAvLy9cbiAgICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gaW5zdGFudGlhdGVDb21iaW5hdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yTm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShicmFja2V0ZWRDb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRDb25zdHJ1Y3RvckZyb21Ob3RoaW5nKCkge1xuICBpZiAoYnJhY2tldGVkQ29uc3RydWN0b3IgPT09IG51bGwpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSB3aXRoaW5GcmFnbWVudCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcgPSBgKCR7QkFTRV9UWVBFX1NZTUJPTH0pYCxcbiAgICAgICAgICAgIHN0cmluZyA9IGJyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoYnJhY2tldGVkQ29uc3RydWN0b3JOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZENvbWJpbmF0b3JGcm9tTm90aGluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yRnJvbU5vdGhpbmciLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJjb250ZXh0Iiwibm9taW5hbENvbnRleHQiLCJ3aXRoaW5GcmFnbWVudCIsImJyYWNrZXRlZENvbWJpbmF0b3JTdHJpbmciLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJzdHJpbmciLCJjb21iaW5hdG9yTm9kZSIsImluc3RhbnRpYXRlQ29tYmluYXRvciIsImJyYWNrZXRlZENvbWJpbmF0b3JOb2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nIiwiQkFTRV9UWVBFX1NZTUJPTCIsImNvbnN0cnVjdG9yTm9kZSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWFnQkE7ZUFBQUE7O1FBa0JBQztlQUFBQTs7OzhEQTdCVzt3QkFFSTt5QkFDRTs2QkFDUTsyQkFDcUI7dUJBQ2U7Ozs7OztBQUU3RSxJQUFJQyxzQkFBc0IsTUFDdEJDLHVCQUF1QjtBQUVwQixTQUFTSDtJQUNkLElBQUlFLHdCQUF3QixNQUFNO1FBQ2hDLElBQU1FLFVBQVVDLGdCQUFjLEVBQUUsR0FBRztRQUVuQ0gsc0JBQXNCSSxJQUFBQSx3QkFBYyxFQUFDLFNBQUNGO1lBQ3BDLElBQU1HLDRCQUE0QixBQUFDLElBQTRCLE9BQXpCQyx1Q0FBd0IsRUFBQyxNQUN6REMsU0FBU0YsMkJBQ1RHLGlCQUFpQkMsSUFBQUEsa0NBQXFCLEVBQUNGLFFBQVFMLFVBQy9DUSwwQkFBMEJGLGdCQUMxQlIsc0JBQXNCVyxJQUFBQSxxQ0FBNEIsRUFBQ0QseUJBQXlCUjtZQUVsRixPQUFPRjtRQUNULEdBQUdFO0lBQ0w7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU0Q7SUFDZCxJQUFJRSx5QkFBeUIsTUFBTTtRQUNqQyxJQUFNQyxVQUFVQyxnQkFBYyxFQUFFLEdBQUc7UUFFbkNGLHVCQUF1QkcsSUFBQUEsd0JBQWMsRUFBQyxTQUFDRjtZQUNyQyxJQUFNVSw2QkFBNkIsQUFBQyxJQUFvQixPQUFqQkMsMkJBQWdCLEVBQUMsTUFDbEROLFNBQVNLLDRCQUNURSxrQkFBa0JDLElBQUFBLG1DQUFzQixFQUFDUixRQUFRTCxVQUNqRGMsMkJBQTJCRixpQkFDM0JiLHVCQUF1QmdCLElBQUFBLHVDQUE4QixFQUFDRCwwQkFBMEJkO1lBRXRGLE9BQU9EO1FBQ1QsR0FBR0M7SUFDTDtJQUVBLE9BQU9EO0FBQ1QifQ==