"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _unification = require("../utilities/unification");
var _json = require("../utilities/json");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _default = (0, _dom.domAssigned)(/*#__PURE__*/ function() {
    function Combinator(statement) {
        _class_call_check(this, Combinator);
        this.statement = statement;
    }
    _create_class(Combinator, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.statement.getString();
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var statementNode = this.statement.getNode();
                return statementNode;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, assignments, stated, context) {
                var statementUnifies;
                var combinator = this, statementString = statement.getString(), combinatorString = combinator.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(combinatorString, "' combinator..."));
                var statementUnifiesWithCombinator = (0, _unification.unifyStatementWithCombinator)(statement, combinator, assignments, stated, context);
                statementUnifies = statementUnifiesWithCombinator; ///
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(combinatorString, "' combinator."));
                }
                return statementUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var statement = (0, _json.statementFromJSON)(json, context), combinator = new Combinator(statement);
                return combinator;
            }
        },
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
                var Statement = _dom.default.Statement, statement = Statement.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinator = new Combinator(statement);
                return combinator;
            }
        }
    ]);
    return Combinator;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tYmluYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbWJpbmF0b3IsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbWJpbmF0b3IiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJ1bmlmeVN0YXRlbWVudCIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50U3RyaW5nIiwiY29tYmluYXRvclN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsImRlYnVnIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiU3RhdGVtZW50IiwiZG9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7MkJBRzZCO29CQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWVBLElBQUFBLGdCQUFXLGdCQUFDO2FBQU1DLFdBQ25CQyxTQUFTO2dDQURVRDtRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDRSxTQUFTO1lBQUk7OztZQUVqREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssT0FBTztnQkFFNUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlTixTQUFTLEVBQUVPLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNwRCxJQUFJQztnQkFFSixJQUFNQyxhQUFhLElBQUksRUFDakJDLGtCQUFrQlosVUFBVUUsU0FBUyxJQUNyQ1csbUJBQW1CRixXQUFXVCxTQUFTO2dCQUU3Q08sUUFBUUssS0FBSyxDQUFDLEFBQUMsaUJBQXdERCxPQUF4Q0QsaUJBQWdCLDBCQUF5QyxPQUFqQkMsa0JBQWlCO2dCQUV4RixJQUFNRSxpQ0FBaUNDLElBQUFBLHlDQUE0QixFQUFDaEIsV0FBV1csWUFBWUosYUFBYUMsUUFBUUM7Z0JBRWhIQyxtQkFBbUJLLGdDQUFnQyxHQUFHO2dCQUV0RCxJQUFJTCxrQkFBa0I7b0JBQ3BCRCxRQUFRUSxLQUFLLENBQUMsQUFBQyxtQkFBMERKLE9BQXhDRCxpQkFBZ0IsMEJBQXlDLE9BQWpCQyxrQkFBaUI7Z0JBQzVGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCQyxJQUFBQSw4QkFBd0IsRUFBQyxJQUFJLENBQUNwQixTQUFTLEdBQ3ZEQSxZQUFZbUIsZUFDWkUsT0FBTztvQkFDTHJCLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9xQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRVosT0FBTztnQkFDM0IsSUFBTVQsWUFBWXVCLElBQUFBLHVCQUFpQixFQUFDRixNQUFNWixVQUNwQ0UsYUFBYSxJQUFJWixXQUFXQztnQkFFbEMsT0FBT1c7WUFDVDs7O1lBRU9hLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVoQixPQUFPO2dCQUNyRSxJQUFNLEFBQUVpQixZQUFjQyxZQUFHLENBQWpCRCxXQUNGMUIsWUFBWTBCLFVBQVVGLDZCQUE2QixDQUFDQywyQkFBMkJoQixVQUMvRUUsYUFBYSxJQUFJWixXQUFXQztnQkFFbEMsT0FBT1c7WUFDVCJ9