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
        context = {
            nodeAsString: function() {
                return string;
            }
        };
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
        context = {
            nodeAsString: function() {
                return string;
            }
        };
        bracketedConstructor = (0, _element.constructorFromConstructorNode)(bracketedConstructorNode, context);
    }
    return bracketedConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5zdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBub21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5cbmltcG9ydCB7IEJBU0VfVFlQRV9TWU1CT0wgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb21iaW5hdG9yLCBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUsIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5sZXQgYnJhY2tldGVkQ29tYmluYXRvciA9IG51bGwsXG4gICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkQ29tYmluYXRvckZyb21Ob3RoaW5nKCkge1xuICBpZiAoYnJhY2tldGVkQ29tYmluYXRvciA9PT0gbnVsbCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3Qgc3RyaW5nID0gYCgke1NUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRX0pYDtcblxuICAgIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvck5vZGU7ICAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICBub2RlQXNTdHJpbmc6ICgpID0+IHN0cmluZ1xuICAgIH07XG5cbiAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShicmFja2V0ZWRDb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZENvbnN0cnVjdG9yRnJvbU5vdGhpbmcoKSB7XG4gIGlmIChicmFja2V0ZWRDb25zdHJ1Y3RvciA9PT0gbnVsbCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3Qgc3RyaW5nID0gYCgke0JBU0VfVFlQRV9TWU1CT0x9KWA7XG5cbiAgICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JOb2RlID0gaW5zdGFudGlhdGVDb25zdHJ1Y3RvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yTm9kZTsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIG5vZGVBc1N0cmluZzogKCkgPT4gc3RyaW5nXG4gICAgfTtcblxuICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsiYnJhY2tldGVkQ29tYmluYXRvckZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JGcm9tTm90aGluZyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImNvbnRleHQiLCJzdHJpbmciLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJub21pbmFsQ29udGV4dCIsImNvbWJpbmF0b3JOb2RlIiwiaW5zdGFudGlhdGVDb21iaW5hdG9yIiwiYnJhY2tldGVkQ29tYmluYXRvck5vZGUiLCJub2RlQXNTdHJpbmciLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiQkFTRV9UWVBFX1NZTUJPTCIsImNvbnN0cnVjdG9yTm9kZSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVlnQkE7ZUFBQUE7O1FBcUJBQztlQUFBQTs7OzhEQS9CVzt5QkFFTTs2QkFDUTsyQkFDcUI7dUJBQ2U7Ozs7OztBQUU3RSxJQUFJQyxzQkFBc0IsTUFDdEJDLHVCQUF1QjtBQUVwQixTQUFTSDtJQUNkLElBQUlFLHdCQUF3QixNQUFNO1FBQ2hDLElBQUlFO1FBRUosSUFBTUMsU0FBUyxBQUFDLElBQTRCLE9BQXpCQyx1Q0FBd0IsRUFBQztRQUU1Q0YsVUFBVUcsZ0JBQWMsRUFBRSxHQUFHO1FBRTdCLElBQU1DLGlCQUFpQkMsSUFBQUEsa0NBQXFCLEVBQUNKLFFBQVFELFVBQy9DTSwwQkFBMEJGLGdCQUFpQixHQUFHO1FBRXBESixVQUFVO1lBQ1JPLGNBQWM7dUJBQU1OOztRQUN0QjtRQUVBSCxzQkFBc0JVLElBQUFBLHFDQUE0QixFQUFDRix5QkFBeUJOO0lBQzlFO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVNEO0lBQ2QsSUFBSUUseUJBQXlCLE1BQU07UUFDakMsSUFBSUM7UUFFSixJQUFNQyxTQUFTLEFBQUMsSUFBb0IsT0FBakJRLDJCQUFnQixFQUFDO1FBRXBDVCxVQUFVRyxnQkFBYyxFQUFFLEdBQUc7UUFFN0IsSUFBTU8sa0JBQWtCQyxJQUFBQSxtQ0FBc0IsRUFBQ1YsUUFBUUQsVUFDakRZLDJCQUEyQkYsaUJBQWtCLEdBQUc7UUFFdERWLFVBQVU7WUFDUk8sY0FBYzt1QkFBTU47O1FBQ3RCO1FBRUFGLHVCQUF1QmMsSUFBQUEsdUNBQThCLEVBQUNELDBCQUEwQlo7SUFDbEY7SUFFQSxPQUFPRDtBQUNUIn0=