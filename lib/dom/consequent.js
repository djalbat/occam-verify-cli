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
var _Consequent;
var _default = (0, _dom.domAssigned)((_Consequent = /*#__PURE__*/ function() {
    function Consequent(string, statement) {
        _class_call_check(this, Consequent);
        this.string = string;
        this.statement = statement;
    }
    _create_class(Consequent, [
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
                var consequent = this, statementString = statement.getString(), consequentString = consequent.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(consequentString, "' consequent..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(consequentString, "' consequent."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var consequentString = this.string; ///
                if (this.statement !== null) {
                    context.trace("Verifying the '".concat(consequentString, "' consequent..."));
                    var stated = true, assignments = null;
                    if (!verified) {
                        var statementVerified = this.statement.verify(assignments, stated, context);
                        verified = statementVerified; ///
                    }
                    if (!verified) {
                        var statementUnified = this.statement.unify(assignments, stated, context);
                        verified = statementUnified; ///
                    }
                    if (verified) {
                        context.debug("...verified the '".concat(consequentString, "' consequent."));
                    }
                } else {
                    context.debug("Unable to verify the '".concat(consequentString, "' consequent because it is nonsense."));
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
                var statement = (0, _json.statementFromJSON)(json, fileContext), string = statement.getString(), consequent = new Consequent(string, statement);
                return consequent;
            }
        },
        {
            key: "fromConsequentNode",
            value: function fromConsequentNode(consequentNode, fileContext) {
                var Statement = _dom.default.Statement, statement = Statement.fromConsequentNode(consequentNode, fileContext), statementString = statement.getString(), string = statementString, consequent = new Consequent(string, statement);
                return consequent;
            }
        }
    ]);
    return Consequent;
}(), _define_property(_Consequent, "name", "Consequent"), _Consequent));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc2VxdWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25zZXF1ZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHsgcmV0dXJuIHRoaXMuc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgY29uc2VxdWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc2VxdWVudFN0cmluZyA9IGNvbnNlcXVlbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50IGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnNlcXVlbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBuZXcgQ29uc2VxdWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IG5ldyBDb25zZXF1ZW50KHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb25zZXF1ZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbnNlcXVlbnQiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiY29uc2VxdWVudCIsInN0YXRlbWVudFN0cmluZyIsImNvbnNlcXVlbnRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInVuaWZ5IiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50Tm9kZSIsIlN0YXRlbWVudCIsImRvbSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjtvQkFHNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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