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
    get bracketedCombinatorStatementFromNothing () {
        return bracketedCombinatorStatementFromNothing;
    },
    get bracketedConstructorTermFromNothing () {
        return bracketedConstructorTermFromNothing;
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
var bracketedConstructorTerm = null, bracketedCombinatorStatement = null;
function bracketedConstructorTermFromNothing() {
    if (bracketedConstructorTerm === null) {
        var context;
        var string = "(".concat(_constants.BASE_TYPE_SYMBOL, ")");
        context = _nominal.default; ///
        var node = (0, _instantiate.instantiateTerm)(string, context), bracketedConstructorTermNode = node; ///
        context = {
            nodeAsString: function() {
                return string;
            }
        };
        bracketedConstructorTerm = (0, _element.termFromTermNode)(bracketedConstructorTermNode, context);
    }
    return bracketedConstructorTerm;
}
function bracketedCombinatorStatementFromNothing() {
    if (bracketedCombinatorStatement === null) {
        var context;
        var string = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")");
        context = _nominal.default; ///
        var node = (0, _instantiate.instantiateStatement)(string, context), bracketedCombinatorStatementNode = node; ///
        context = {
            nodeAsString: function() {
                return string;
            }
        };
        bracketedCombinatorStatement = (0, _element.statementFromStatementNode)(bracketedCombinatorStatementNode, context);
    }
    return bracketedCombinatorStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5zdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBub21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5cbmltcG9ydCB7IEJBU0VfVFlQRV9TWU1CT0wgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtLCBpbnN0YW50aWF0ZVN0YXRlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5sZXQgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtID0gbnVsbCxcbiAgICBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50ID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybUZyb21Ob3RoaW5nKCkge1xuICBpZiAoYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtID09PSBudWxsKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBgKCR7QkFTRV9UWVBFX1NZTUJPTH0pYDtcblxuICAgIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBub2RlID0gaW5zdGFudGlhdGVUZXJtKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICBub2RlQXNTdHJpbmc6ICgpID0+IHN0cmluZ1xuICAgIH07XG5cbiAgICBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRGcm9tTm90aGluZygpIHtcbiAgaWYgKGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnQgPT09IG51bGwpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IHN0cmluZyA9IGAoJHtTVEFURU1FTlRfTUVUQV9UWVBFX05BTUV9KWA7XG5cbiAgICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgbm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgbm9kZUFzU3RyaW5nOiAoKSA9PiBzdHJpbmdcbiAgICB9O1xuXG4gICAgYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRGcm9tTm90aGluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybUZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtIiwiYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJCQVNFX1RZUEVfU1lNQk9MIiwibm9taW5hbENvbnRleHQiLCJub2RlIiwiaW5zdGFudGlhdGVUZXJtIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSIsIm5vZGVBc1N0cmluZyIsInRlcm1Gcm9tVGVybU5vZGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudCIsImJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlDZ0JBO2VBQUFBOztRQXJCQUM7ZUFBQUE7Ozs4REFWVzt5QkFFTTs2QkFDUTsyQkFDYTt1QkFDTzs7Ozs7O0FBRTdELElBQUlDLDJCQUEyQixNQUMzQkMsK0JBQStCO0FBRTVCLFNBQVNGO0lBQ2QsSUFBSUMsNkJBQTZCLE1BQU07UUFDckMsSUFBSUU7UUFFSixJQUFNQyxTQUFTLEFBQUMsSUFBb0IsT0FBakJDLDJCQUFnQixFQUFDO1FBRXBDRixVQUFVRyxnQkFBYyxFQUFFLEdBQUc7UUFFN0IsSUFBTUMsT0FBT0MsSUFBQUEsNEJBQWUsRUFBQ0osUUFBUUQsVUFDL0JNLCtCQUErQkYsTUFBTyxHQUFHO1FBRS9DSixVQUFVO1lBQ1JPLGNBQWM7dUJBQU1OOztRQUN0QjtRQUVBSCwyQkFBMkJVLElBQUFBLHlCQUFnQixFQUFDRiw4QkFBOEJOO0lBQzVFO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVNGO0lBQ2QsSUFBSUcsaUNBQWlDLE1BQU07UUFDekMsSUFBSUM7UUFFSixJQUFNQyxTQUFTLEFBQUMsSUFBNEIsT0FBekJRLHVDQUF3QixFQUFDO1FBRTVDVCxVQUFVRyxnQkFBYyxFQUFFLEdBQUc7UUFFN0IsSUFBTUMsT0FBT00sSUFBQUEsaUNBQW9CLEVBQUNULFFBQVFELFVBQ3BDVyxtQ0FBbUNQLE1BQU8sR0FBRztRQUVuREosVUFBVTtZQUNSTyxjQUFjO3VCQUFNTjs7UUFDdEI7UUFFQUYsK0JBQStCYSxJQUFBQSxtQ0FBMEIsRUFBQ0Qsa0NBQWtDWDtJQUM5RjtJQUVBLE9BQU9EO0FBQ1QifQ==