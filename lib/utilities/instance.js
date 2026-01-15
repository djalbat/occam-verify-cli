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
var _constants = require("../constants");
var _context = require("../utilities/context");
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
        var context;
        var string = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")");
        context = _nominal.default; ///
        var combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), bracketedCombinatorNode = combinatorNode; ///
        context = (0, _context.contextFromString)(string);
        bracketedCombinator = (0, _element.combinatorFromCombinatorNode)(bracketedCombinatorNode, context);
    }
    return bracketedCombinator;
}
function bracketedConstructorFromNothing() {
    if (bracketedConstructor === null) {
        var context;
        var string = "(".concat(_constants.BASE_TYPE_SYMBOL, ")");
        context = _nominal.default; ///
        var constructorNode = (0, _instantiate.instantiateConstructor)(string, context), bracketedConstructorNode = constructorNode; ///
        context = (0, _context.contextFromString)(string);
        bracketedConstructor = (0, _element.constructorFromConstructorNode)(bracketedConstructorNode, context);
    }
    return bracketedConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5zdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBub21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5cbmltcG9ydCB7IEJBU0VfVFlQRV9TWU1CT0wgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZXh0RnJvbVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29tYmluYXRvciwgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlLCBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxubGV0IGJyYWNrZXRlZENvbWJpbmF0b3IgPSBudWxsLFxuICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZENvbWJpbmF0b3JGcm9tTm90aGluZygpIHtcbiAgaWYgKGJyYWNrZXRlZENvbWJpbmF0b3IgPT09IG51bGwpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IHN0cmluZyA9IGAoJHtTVEFURU1FTlRfTUVUQV9UWVBFX05BTUV9KWA7XG5cbiAgICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29tYmluYXRvck5vZGUgPSBpbnN0YW50aWF0ZUNvbWJpbmF0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yTm9kZSA9IGNvbWJpbmF0b3JOb2RlOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEZyb21TdHJpbmcoc3RyaW5nKTtcblxuICAgIGJyYWNrZXRlZENvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGJyYWNrZXRlZENvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkQ29uc3RydWN0b3JGcm9tTm90aGluZygpIHtcbiAgaWYgKGJyYWNrZXRlZENvbnN0cnVjdG9yID09PSBudWxsKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBgKCR7QkFTRV9UWVBFX1NZTUJPTH0pYDtcblxuICAgIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JOb2RlOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEZyb21TdHJpbmcoc3RyaW5nKTtcblxuICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsiYnJhY2tldGVkQ29tYmluYXRvckZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JGcm9tTm90aGluZyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImNvbnRleHQiLCJzdHJpbmciLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJub21pbmFsQ29udGV4dCIsImNvbWJpbmF0b3JOb2RlIiwiaW5zdGFudGlhdGVDb21iaW5hdG9yIiwiYnJhY2tldGVkQ29tYmluYXRvck5vZGUiLCJjb250ZXh0RnJvbVN0cmluZyIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUiLCJCQVNFX1RZUEVfU1lNQk9MIiwiY29uc3RydWN0b3JOb2RlIiwiaW5zdGFudGlhdGVDb25zdHJ1Y3RvciIsImJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBYWdCQTtlQUFBQTs7UUFtQkFDO2VBQUFBOzs7OERBOUJXO3lCQUVNO3VCQUNDOzZCQUNPOzJCQUNxQjt1QkFDZTs7Ozs7O0FBRTdFLElBQUlDLHNCQUFzQixNQUN0QkMsdUJBQXVCO0FBRXBCLFNBQVNIO0lBQ2QsSUFBSUUsd0JBQXdCLE1BQU07UUFDaEMsSUFBSUU7UUFFSixJQUFNQyxTQUFTLEFBQUMsSUFBNEIsT0FBekJDLHVDQUF3QixFQUFDO1FBRTVDRixVQUFVRyxnQkFBYyxFQUFFLEdBQUc7UUFFN0IsSUFBTUMsaUJBQWlCQyxJQUFBQSxrQ0FBcUIsRUFBQ0osUUFBUUQsVUFDL0NNLDBCQUEwQkYsZ0JBQWlCLEdBQUc7UUFFcERKLFVBQVVPLElBQUFBLDBCQUFpQixFQUFDTjtRQUU1Qkgsc0JBQXNCVSxJQUFBQSxxQ0FBNEIsRUFBQ0YseUJBQXlCTjtJQUM5RTtJQUVBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTRDtJQUNkLElBQUlFLHlCQUF5QixNQUFNO1FBQ2pDLElBQUlDO1FBRUosSUFBTUMsU0FBUyxBQUFDLElBQW9CLE9BQWpCUSwyQkFBZ0IsRUFBQztRQUVwQ1QsVUFBVUcsZ0JBQWMsRUFBRSxHQUFHO1FBRTdCLElBQU1PLGtCQUFrQkMsSUFBQUEsbUNBQXNCLEVBQUNWLFFBQVFELFVBQ2pEWSwyQkFBMkJGLGlCQUFrQixHQUFHO1FBRXREVixVQUFVTyxJQUFBQSwwQkFBaUIsRUFBQ047UUFFNUJGLHVCQUF1QmMsSUFBQUEsdUNBQThCLEVBQUNELDBCQUEwQlo7SUFDbEY7SUFFQSxPQUFPRDtBQUNUIn0=