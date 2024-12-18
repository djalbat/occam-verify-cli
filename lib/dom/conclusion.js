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
    function Conclusion(string, statement) {
        _class_call_check(this, Conclusion);
        this.string = string;
        this.statement = statement;
    }
    _create_class(Conclusion, [
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                return this.statement.matchStatementNode(statementNode);
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var conclusion = this, statementString = statement.getString(), conclusionString = conclusion.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var conclusionString = this.string; ///
                context.trace("Verifying the '".concat(conclusionString, "' conclusion..."));
                if (this.statement !== null) {
                    var stated = true, assignments = null, statementVerified = this.statement.verify(assignments, stated, context);
                    verified = statementVerified; ///
                } else {
                    context.debug("Unable to verify the '".concat(conclusionString, "' conclusion because it is nonsense."));
                }
                if (verified) {
                    context.debug("...verified the '".concat(conclusionString, "' conclusion."));
                }
                return verified;
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
            value: function fromJSON(json, fileContext) {
                var statement = (0, _json.statementFromJSON)(json, fileContext), string = statement.getString(), conclusion = new Conclusion(string, statement);
                return conclusion;
            }
        },
        {
            key: "fromConclusionNode",
            value: function fromConclusionNode(conclusionNode, fileContext) {
                var Statement = _dom.default.Statement, node = conclusionNode, string = fileContext.nodeAsString(node), statement = Statement.fromConclusionNode(conclusionNode, fileContext), conclusion = new Conclusion(string, statement);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}(), _define_property(_Conclusion, "name", "Conclusion"), _Conclusion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uY2x1c2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgIGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uY2x1c2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLnN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGNvbmNsdXNpb24gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSBjb25jbHVzaW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25jbHVzaW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24oc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24oc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29uY2x1c2lvbiIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJjb25jbHVzaW9uIiwic3RhdGVtZW50U3RyaW5nIiwiY29uY2x1c2lvblN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uTm9kZSIsIlN0YXRlbWVudCIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7b0JBRzRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUQsV0FBZ0JBLElBQUFBLGdCQUFXLCtCQUFDO2FBQU1DLFdBQ3BCQyxNQUFNLEVBQUVDLFNBQVM7Z0NBREdGO1FBRTlCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJB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