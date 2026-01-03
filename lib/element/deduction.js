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
    function Deduction(context, string, statement) {
        _class_call_check(this, Deduction);
        this.context = context;
        this.string = string;
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
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), node1 = null, string = statement.getString(), temporaryContext = _temporary.default.fromTermsAndFrames(terms, frames, context);
                context = temporaryContext; ///
                var deduction = new Deduction(context, string, statement);
                return deduction;
            }
        },
        {
            key: "fromDeductionNode",
            value: function fromDeductionNode(deductionNode, context) {
                var Statement = _elements.default.Statement, node1 = deductionNode, string = context.nodeAsString(node1), statement = Statement.fromDeductionNode(deductionNode, context), temporaryContext = null;
                context = temporaryContext; ///
                var deduction = new Deduction(context, string, statement);
                return deduction;
            }
        }
    ]);
    return Deduction;
}(), _define_property(_Deduction, "name", "Deduction"), _Deduction));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IFRlbXBvcmFyeUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvdGVtcG9yYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgZnJhbWVzRnJvbUpTT04sIHN0YXRlbWVudEZyb21KU09OLCB0ZXJtc1RvVGVybXNKU09OLCBmcmFtZXNUb0ZyYW1lc0pTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVkdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBzdGF0ZW1lbnRWZXJpZmllczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuY29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmcgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyk7XG5cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAgLy8vXG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBmcmFtZXMsXG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWR1Y3Rpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZXMgPSBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbVRlcm1zQW5kRnJhbWVzKHRlcm1zLCBmcmFtZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbm9kZSA9IGRlZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWR1Y3Rpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwic3RhdGVtZW50Iiwibm9kZSIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Ob3RoaW5nIiwiZGVkdWN0aW9uU3RyaW5nIiwidHJhY2UiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVzIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZGVkdWN0aW9uIiwic3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInRvSlNPTiIsImZyYW1lcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0VGVybXMiLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21UZXJtc0FuZEZyYW1lcyIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsIlN0YXRlbWVudCIsImVsZW1lbnRzIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCO2dFQUNRO29CQUdvRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakksV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLFNBQVM7Z0NBRFpIO1FBRXhCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0UsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0YsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxTQUFTO1lBQ3ZCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9SLE9BQU87Z0JBQ1osSUFBSVMsV0FBVztnQkFFZixJQUFNQyxtQkFBbUJDLGtCQUFnQixDQUFDQyxXQUFXLENBQUNaO2dCQUV0REEsVUFBVVUsa0JBQWtCLEdBQUc7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