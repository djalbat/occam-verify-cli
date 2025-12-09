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
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var deduction = this, statementString = statement.getString(), deductionString = deduction.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction..."));
                statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9kZWR1Y3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBUZW1wb3JhcnlDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RlbXBvcmFyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZShub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21Db250ZXh0KGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllcyA9IHN0YXRlbWVudFZlcmlmaWVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgZGVkdWN0aW9uVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21UZXJtcyh0ZXJtcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkRlZHVjdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInRlbXBvcmFyeUNvbnRleHQiLCJUZW1wb3JhcnlDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJkZWR1Y3Rpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsImRlZHVjdGlvbiIsInN0YXRlbWVudFN0cmluZyIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uU3RyaW5nIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zIiwidGVybXNGcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwiZnJvbVRlcm1zIiwiZnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiU3RhdGVtZW50Iiwib250b2xvZ3kiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7Z0VBQ1E7b0JBRzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzRSxXQUFlQSxJQUFBQSxnQkFBTSw4QkFBQzthQUFNQyxVQUNkQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTO2dDQURsQko7UUFFeEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUosSUFBSTtnQkFDVixP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