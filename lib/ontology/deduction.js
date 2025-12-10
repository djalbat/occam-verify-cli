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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var _Deduction;
var _default = (0, _ontology.define)((_Deduction = /*#__PURE__*/ function() {
    function Deduction(context, node, string, statement) {
        _class_call_check(this, Deduction);
        this.context = context;
        this.node = node;
        this.string = string;
        this.statement = statement;
    }
    _create_class(Deduction, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode(node) {
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
                var temporaryContext = _temporary.default.fromContext(context);
                context = temporaryContext; ///
                var deductionString = this.string; ///
                context.trace("Verifying the '".concat(deductionString, "' deduction..."), this.node);
                if (this.statement !== null) {
                    var stated = true, assignments = null, statementVerifies = this.statement.verify(assignments, stated, context);
                    verifies = statementVerifies; ///
                } else {
                    context.debug("Unable to verify the '".concat(deductionString, "' deduction because it is nonsense."), this.node);
                }
                if (verifies) {
                    this.context = context;
                    context.debug("...verified the '".concat(deductionString, "' deduction."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var deduction = this, statementString = statement.getString(), deductionString = deduction.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction..."));
                var generalContext = this.context, specificContext = context; ///
                statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyDeduction",
            value: function unifyDeduction(deduction, substitutions, generalContext, specificContext) {
                var deductionUnifies;
                var context = specificContext, specificDeduction = deduction, generalDeductionString = this.string, specificDeductionString = specificDeduction.getString();
                context.trace("Unifying the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction..."), this.node);
                var statement = specificDeduction.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                deductionUnifies = statementUnifies; ///
                if (deductionUnifies) {
                    context.debug("...unified the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction."), this.node);
                }
                return deductionUnifies;
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
                var terms = (0, _json.termsFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), node = null, string = statement.getString(), temporaryContext = _temporary.default.fromTerms(terms, context);
                context = temporaryContext; ///
                var deduction = new Deduction(context, node, string, statement);
                return deduction;
            }
        },
        {
            key: "fromDeductionNode",
            value: function fromDeductionNode(deductionNode, context) {
                var Statement = _ontology.default.Statement, node = deductionNode, string = context.nodeAsString(node), statement = Statement.fromDeductionNode(deductionNode, context), temporaryContext = null;
                context = temporaryContext; ///
                var deduction = new Deduction(context, node, string, statement);
                return deduction;
            }
        }
    ]);
    return Deduction;
}(), _define_property(_Deduction, "name", "Deduction"), _Deduction));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9kZWR1Y3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBUZW1wb3JhcnlDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RlbXBvcmFyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZShub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21Db250ZXh0KGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllcyA9IHN0YXRlbWVudFZlcmlmaWVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvblN0cmluZyA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGRlZHVjdGlvblVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlZHVjdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tVGVybXModGVybXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgbm9kZSA9IGRlZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWR1Y3Rpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInN0YXRlbWVudCIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Db250ZXh0IiwiZGVkdWN0aW9uU3RyaW5nIiwidHJhY2UiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVzIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZGVkdWN0aW9uIiwic3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtcyIsInRlcm1zRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21UZXJtcyIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsIlN0YXRlbWVudCIsIm9udG9sb2d5Iiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCO2dFQUNRO29CQUc4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0UsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsU0FBUztnQ0FEbEJKO1FBRXhCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFP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