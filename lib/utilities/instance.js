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
        bracketedCombinator = (0, _context.instantiate)((context)=>{
            const bracketedCombinatorString = `(${_metaTypeNames.STATEMENT_META_TYPE_NAME})`, string = bracketedCombinatorString, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), bracketedCombinatorNode = combinatorNode, bracketedCombinator = (0, _element.combinatorFromCombinatorNode)(bracketedCombinatorNode, context);
            return bracketedCombinator;
        }, context);
    }
    return bracketedCombinator;
}
function bracketedConstructorFromNothing() {
    if (bracketedConstructor === null) {
        const context = _nominal.default; ///
        bracketedConstructor = (0, _context.instantiate)((context)=>{
            const bracketedConstructorString = `(${_constants.BASE_TYPE_SYMBOL})`, string = bracketedConstructorString, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), bracketedConstructorNode = constructorNode, bracketedConstructor = (0, _element.constructorFromConstructorNode)(bracketedConstructorNode, context);
            return bracketedConstructor;
        }, context);
    }
    return bracketedConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5zdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBub21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5cbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBCQVNFX1RZUEVfU1lNQk9MIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29tYmluYXRvciwgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlLCBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxubGV0IGJyYWNrZXRlZENvbWJpbmF0b3IgPSBudWxsLFxuICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZENvbWJpbmF0b3JGcm9tTm90aGluZygpIHtcbiAgaWYgKGJyYWNrZXRlZENvbWJpbmF0b3IgPT09IG51bGwpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gICAgYnJhY2tldGVkQ29tYmluYXRvciA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBicmFja2V0ZWRDb21iaW5hdG9yU3RyaW5nID0gYCgke1NUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRX0pYCxcbiAgICAgICAgICAgIHN0cmluZyA9IGJyYWNrZXRlZENvbWJpbmF0b3JTdHJpbmcsIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvck5vZGUgPSBpbnN0YW50aWF0ZUNvbWJpbmF0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvck5vZGUsICAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGJyYWNrZXRlZENvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGJyYWNrZXRlZENvbWJpbmF0b3I7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZENvbnN0cnVjdG9yRnJvbU5vdGhpbmcoKSB7XG4gIGlmIChicmFja2V0ZWRDb25zdHJ1Y3RvciA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBicmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZyA9IGAoJHtCQVNFX1RZUEVfU1lNQk9MfSlgLFxuICAgICAgICAgICAgc3RyaW5nID0gYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29uc3RydWN0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsiYnJhY2tldGVkQ29tYmluYXRvckZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JGcm9tTm90aGluZyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImNvbnRleHQiLCJub21pbmFsQ29udGV4dCIsImluc3RhbnRpYXRlIiwiYnJhY2tldGVkQ29tYmluYXRvclN0cmluZyIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInN0cmluZyIsImNvbWJpbmF0b3JOb2RlIiwiaW5zdGFudGlhdGVDb21iaW5hdG9yIiwiYnJhY2tldGVkQ29tYmluYXRvck5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmciLCJCQVNFX1RZUEVfU1lNQk9MIiwiY29uc3RydWN0b3JOb2RlIiwiaW5zdGFudGlhdGVDb25zdHJ1Y3RvciIsImJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBYWdCQTtlQUFBQTs7UUFrQkFDO2VBQUFBOzs7Z0VBN0JXO3lCQUVDOzJCQUNLOytCQUNROzZCQUNxQjt5QkFDZTs7Ozs7O0FBRTdFLElBQUlDLHNCQUFzQixNQUN0QkMsdUJBQXVCO0FBRXBCLFNBQVNIO0lBQ2QsSUFBSUUsd0JBQXdCLE1BQU07UUFDaEMsTUFBTUUsVUFBVUMsZ0JBQWMsRUFBRSxHQUFHO1FBRW5DSCxzQkFBc0JJLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ0Y7WUFDakMsTUFBTUcsNEJBQTRCLENBQUMsQ0FBQyxFQUFFQyx1Q0FBd0IsQ0FBQyxDQUFDLENBQUMsRUFDM0RDLFNBQVNGLDJCQUNURyxpQkFBaUJDLElBQUFBLGtDQUFxQixFQUFDRixRQUFRTCxVQUMvQ1EsMEJBQTBCRixnQkFDMUJSLHNCQUFzQlcsSUFBQUEscUNBQTRCLEVBQUNELHlCQUF5QlI7WUFFbEYsT0FBT0Y7UUFDVCxHQUFHRTtJQUNMO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVNEO0lBQ2QsSUFBSUUseUJBQXlCLE1BQU07UUFDakMsTUFBTUMsVUFBVUMsZ0JBQWMsRUFBRSxHQUFHO1FBRW5DRix1QkFBdUJHLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ0Y7WUFDbEMsTUFBTVUsNkJBQTZCLENBQUMsQ0FBQyxFQUFFQywyQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFDcEROLFNBQVNLLDRCQUNURSxrQkFBa0JDLElBQUFBLG1DQUFzQixFQUFDUixRQUFRTCxVQUNqRGMsMkJBQTJCRixpQkFDM0JiLHVCQUF1QmdCLElBQUFBLHVDQUE4QixFQUFDRCwwQkFBMEJkO1lBRXRGLE9BQU9EO1FBQ1QsR0FBR0M7SUFDTDtJQUVBLE9BQU9EO0FBQ1QifQ==