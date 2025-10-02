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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var _Conclusion;
var _default = (0, _dom.domAssigned)((_Conclusion = /*#__PURE__*/ function() {
    function Conclusion(node, string, statement) {
        _class_call_check(this, Conclusion);
        this.node = node;
        this.string = string;
        this.statement = statement;
    }
    _create_class(Conclusion, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var conclusionString = this.string; ///
                context.trace("Verifying the '".concat(conclusionString, "' conclusion..."), this.node);
                if (this.statement !== null) {
                    var stated = true, assignments = null, statementVerifies = this.statement.verify(assignments, stated, context);
                    verifies = statementVerifies; ///
                } else {
                    context.debug("Unable to verify the '".concat(conclusionString, "' conclusion because it is nonsense."), this.node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(conclusionString, "' conclusion."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var conclusion = this, statementString = statement.getString(), conclusionString = conclusion.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion..."), this.node);
                statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion."), this.node);
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
                var statement = (0, _json.statementFromJSON)(json, context), node = null, string = statement.getString(), conclusion = new Conclusion(node, string, statement);
                return conclusion;
            }
        },
        {
            key: "fromConclusionNode",
            value: function fromConclusionNode(conclusionNode, context) {
                var Statement = _dom.default.Statement, node = conclusionNode, string = context.nodeAsString(node), statement = Statement.fromConclusionNode(conclusionNode, context), conclusion = new Conclusion(node, string, statement);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}(), _define_property(_Conclusion, "name", "Conclusion"), _Conclusion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uY2x1c2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgIGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uY2x1c2lvbiB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHN0cmluZywgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBzdGF0ZW1lbnRWZXJpZmllczsgLy8vXG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmNsdXNpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24obm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gY29uY2x1c2lvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24obm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29uY2x1c2lvbiIsIm5vZGUiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiY29uY2x1c2lvblN0cmluZyIsInRyYWNlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWZXJpZmllcyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiY29uY2x1c2lvbiIsInN0YXRlbWVudFN0cmluZyIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Ob2RlIiwiU3RhdGVtZW50IiwiZG9tIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCO29CQUc0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWdCQSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNwQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFNBQVM7Z0NBREhIO1FBRTlCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNk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