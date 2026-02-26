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
const _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
const _context = require("../utilities/context");
const _constants = require("../constants");
const _metaTypeNames = require("../metaTypeNames");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let bracketedCombinator = null, bracketedConstructor = null;
function bracketedCombinatorFromNothing() {
    if (bracketedCombinator === null) {
        const context = _nominal.default; ///
        bracketedCombinator = (0, _context.literally)((context)=>{
            const bracketedCombinatorString = `(${_metaTypeNames.STATEMENT_META_TYPE_NAME})`, string = bracketedCombinatorString, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), bracketedCombinatorNode = combinatorNode, bracketedCombinator = (0, _element.combinatorFromCombinatorNode)(bracketedCombinatorNode, context);
            return bracketedCombinator;
        }, context);
    }
    return bracketedCombinator;
}
function bracketedConstructorFromNothing() {
    if (bracketedConstructor === null) {
        const context = _nominal.default; ///
        bracketedConstructor = (0, _context.literally)((context)=>{
            const bracketedConstructorString = `(${_constants.BASE_TYPE_SYMBOL})`, string = bracketedConstructorString, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), bracketedConstructorNode = constructorNode, bracketedConstructor = (0, _element.constructorFromConstructorNode)(bracketedConstructorNode, context);
            return bracketedConstructor;
        }, context);
    }
    return bracketedConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5zdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBub21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5cbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgQkFTRV9UWVBFX1NZTUJPTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbWJpbmF0b3IsIGluc3RhbnRpYXRlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSwgY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmxldCBicmFja2V0ZWRDb21iaW5hdG9yID0gbnVsbCxcbiAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRDb21iaW5hdG9yRnJvbU5vdGhpbmcoKSB7XG4gIGlmIChicmFja2V0ZWRDb21iaW5hdG9yID09PSBudWxsKSB7XG4gICAgY29uc3QgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICAgIGJyYWNrZXRlZENvbWJpbmF0b3IgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGJyYWNrZXRlZENvbWJpbmF0b3JTdHJpbmcgPSBgKCR7U1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FfSlgLFxuICAgICAgICAgICAgc3RyaW5nID0gYnJhY2tldGVkQ29tYmluYXRvclN0cmluZywgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yTm9kZSwgIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoYnJhY2tldGVkQ29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkQ29uc3RydWN0b3JGcm9tTm90aGluZygpIHtcbiAgaWYgKGJyYWNrZXRlZENvbnN0cnVjdG9yID09PSBudWxsKSB7XG4gICAgY29uc3QgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBicmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZyA9IGAoJHtCQVNFX1RZUEVfU1lNQk9MfSlgLFxuICAgICAgICAgICAgc3RyaW5nID0gYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29uc3RydWN0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsiYnJhY2tldGVkQ29tYmluYXRvckZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JGcm9tTm90aGluZyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImNvbnRleHQiLCJub21pbmFsQ29udGV4dCIsImxpdGVyYWxseSIsImJyYWNrZXRlZENvbWJpbmF0b3JTdHJpbmciLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJzdHJpbmciLCJjb21iaW5hdG9yTm9kZSIsImluc3RhbnRpYXRlQ29tYmluYXRvciIsImJyYWNrZXRlZENvbWJpbmF0b3JOb2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nIiwiQkFTRV9UWVBFX1NZTUJPTCIsImNvbnN0cnVjdG9yTm9kZSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWFnQkE7ZUFBQUE7O1FBa0JBQztlQUFBQTs7O2dFQTdCVzt5QkFFRDsyQkFDTzsrQkFDUTs2QkFDcUI7eUJBQ2U7Ozs7OztBQUU3RSxJQUFJQyxzQkFBc0IsTUFDdEJDLHVCQUF1QjtBQUVwQixTQUFTSDtJQUNkLElBQUlFLHdCQUF3QixNQUFNO1FBQ2hDLE1BQU1FLFVBQVVDLGdCQUFjLEVBQUUsR0FBRztRQUVuQ0gsc0JBQXNCSSxJQUFBQSxrQkFBUyxFQUFDLENBQUNGO1lBQy9CLE1BQU1HLDRCQUE0QixDQUFDLENBQUMsRUFBRUMsdUNBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQzNEQyxTQUFTRiwyQkFDVEcsaUJBQWlCQyxJQUFBQSxrQ0FBcUIsRUFBQ0YsUUFBUUwsVUFDL0NRLDBCQUEwQkYsZ0JBQzFCUixzQkFBc0JXLElBQUFBLHFDQUE0QixFQUFDRCx5QkFBeUJSO1lBRWxGLE9BQU9GO1FBQ1QsR0FBR0U7SUFDTDtJQUVBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTRDtJQUNkLElBQUlFLHlCQUF5QixNQUFNO1FBQ2pDLE1BQU1DLFVBQVVDLGdCQUFjLEVBQUUsR0FBRztRQUVuQ0YsdUJBQXVCRyxJQUFBQSxrQkFBUyxFQUFDLENBQUNGO1lBQ2hDLE1BQU1VLDZCQUE2QixDQUFDLENBQUMsRUFBRUMsMkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQ3BETixTQUFTSyw0QkFDVEUsa0JBQWtCQyxJQUFBQSxtQ0FBc0IsRUFBQ1IsUUFBUUwsVUFDakRjLDJCQUEyQkYsaUJBQzNCYix1QkFBdUJnQixJQUFBQSx1Q0FBOEIsRUFBQ0QsMEJBQTBCZDtZQUV0RixPQUFPRDtRQUNULEdBQUdDO0lBQ0w7SUFFQSxPQUFPRDtBQUNUIn0=