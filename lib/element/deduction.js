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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
var _default = (0, _elements.define)((_Deduction = /*#__PURE__*/ function() {
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
                var temporaryContext = _temporary.default.fromNothing(context);
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
                var frames, terms;
                frames = this.context.getFrames();
                terms = this.context.getTerms();
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), framesJSON = (0, _json.framesToFramesJSON)(frames), termsJSON = (0, _json.termsToTermsJSON)(terms);
                frames = framesJSON; ///
                terms = termsJSON; ///
                var statement = statementJSON, json = {
                    statement: statement,
                    frames: frames,
                    terms: terms
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), node = null, string = statement.getString(), temporaryContext = _temporary.default.fromTermsAndFrames(terms, frames, context);
                context = temporaryContext; ///
                var deduction = new Deduction(context, node, string, statement);
                return deduction;
            }
        },
        {
            key: "fromDeductionNode",
            value: function fromDeductionNode(deductionNode, context) {
                var Statement = _elements.default.Statement, node = deductionNode, string = context.nodeAsString(node), statement = Statement.fromDeductionNode(deductionNode, context), temporaryContext = null;
                context = temporaryContext; ///
                var deduction = new Deduction(context, node, string, statement);
                return deduction;
            }
        }
    ]);
    return Deduction;
}(), _define_property(_Deduction, "name", "Deduction"), _Deduction));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IFRlbXBvcmFyeUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvdGVtcG9yYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgZnJhbWVzRnJvbUpTT04sIHN0YXRlbWVudEZyb21KU09OLCB0ZXJtc1RvVGVybXNKU09OLCBmcmFtZXNUb0ZyYW1lc0pTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVkdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gc3RhdGVtZW50VmVyaWZpZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmNvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgZGVkdWN0aW9uVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGZyYW1lcyxcbiAgICAgICAgdGVybXM7XG5cbiAgICBmcmFtZXMgPSB0aGlzLmNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICB0ZXJtcyA9IHRoaXMuY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpO1xuXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgIC8vL1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21UZXJtc0FuZEZyYW1lcyh0ZXJtcywgZnJhbWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSBkZWR1Y3Rpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVkdWN0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwidGVtcG9yYXJ5Q29udGV4dCIsIlRlbXBvcmFyeUNvbnRleHQiLCJmcm9tTm90aGluZyIsImRlZHVjdGlvblN0cmluZyIsInRyYWNlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWZXJpZmllcyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VW5pZmllcyIsImRlZHVjdGlvbiIsInN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJ0b0pTT04iLCJmcmFtZXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImdldFRlcm1zIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybXNGcm9tSlNPTiIsImZyYW1lc0Zyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJmcm9tVGVybXNBbmRGcmFtZXMiLCJmcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJTdGF0ZW1lbnQiLCJlbGVtZW50cyIsIm5vZGVBc1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5xQjtnRUFDUTtvQkFHb0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpJLFdBQWVBLElBQUFBLGdCQUFNLDhCQUFDO2FBQU1DLFVBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFNBQVM7Z0NBRGxCSjtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSixJQUFJO2dCQUNWLE9BQU8sSUFBSSxDQUFDQSxJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9SLE9BQU87Z0JBQ1osSUFBSVMsV0FBVztnQkFFZixJQUFNQyxtQkFBbUJDLGtCQUFnQixDQUFDQyxXQUFXLENBQUNaO2dCQUV0REEsVUFBVVUsa0JBQWtCLEdBQUc7Z0JBRS9CLElB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