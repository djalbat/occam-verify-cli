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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _json = require("./utilities/json");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Consequent = /*#__PURE__*/ function() {
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
                    var stated = true, assignments = [], statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        verified = true;
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
                var Statement = _shim.default.Statement, statement = Statement.fromConsequentNode(consequentNode, fileContext), node = consequentNode, string = fileContext.nodeAsString(node), consequent = new Consequent(string, statement);
                return consequent;
            }
        }
    ]);
    return Consequent;
}();
Object.assign(_shim.default, {
    Consequent: Consequent
});
var _default = Consequent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jbGFzcyBDb25zZXF1ZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHsgcmV0dXJuIHRoaXMuc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgY29uc2VxdWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc2VxdWVudFN0cmluZyA9IGNvbnNlcXVlbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50IGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gbmV3IENvbnNlcXVlbnQoc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gY29uc2VxdWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IG5ldyBDb25zZXF1ZW50KHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb25zZXF1ZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBDb25zZXF1ZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VxdWVudDtcbiJdLCJuYW1lcyI6WyJDb25zZXF1ZW50Iiwic3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsImNvbnNlcXVlbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJjb25zZXF1ZW50U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21Db25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnROb2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1HQTs7O2VBQUE7OzsyREFqR2lCO29CQUUyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1FDLE1BQU0sRUFBRUMsU0FBUztnQ0FEekJGO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIZkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFB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