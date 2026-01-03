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
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/step/unify"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
var _equate = require("../process/equate");
var _statement = require("../utilities/statement");
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
var _Step;
var _default = (0, _elements.define)((_Step = /*#__PURE__*/ function() {
    function Step(context, string, node, statement, reference, satisfiesAssertion) {
        _class_call_check(this, Step);
        this.context = context;
        this.string = string;
        this.node = node;
        this.statement = statement;
        this.reference = reference;
        this.satisfiesAssertion = satisfiesAssertion;
    }
    _create_class(Step, [
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
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getSatisfiesAssertion",
            value: function getSatisfiesAssertion() {
                return this.satisfiesAssertion;
            }
        },
        {
            key: "isSatisfied",
            value: function isSatisfied() {
                var satisfied = this.satisfiesAssertion !== null;
                return satisfied;
            }
        },
        {
            key: "isQualified",
            value: function isQualified() {
                var qualified = this.reference !== null;
                return qualified;
            }
        },
        {
            key: "isStated",
            value: function isStated() {
                var qualified = this.isQualified(), stated = qualified; ///
                return stated;
            }
        },
        {
            key: "isStep",
            value: function isStep() {
                var step = true;
                return step;
            }
        },
        {
            key: "matchTermAndPropertyRelation",
            value: function matchTermAndPropertyRelation(term, propertyRelation, context) {
                var termAndPropertyRelationMatch = false;
                var propertyAssertion = (0, _statement.propertyAssertionFromStatement)(this.statement, context);
                if (propertyAssertion !== null) {
                    termAndPropertyRelationMatch = propertyAssertion.matchTermAndPropertyRelation(term, propertyRelation, context);
                }
                return termAndPropertyRelationMatch;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var verifies = false;
                var temporaryContext = _temporary.default.fromNothing(context);
                context = temporaryContext; ///
                var stepString = this.string; ///
                context.trace("Verifying the '".concat(stepString, "' step..."), this.node);
                if (this.statement !== null) {
                    var stated = this.isStated(), statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        var qualified = this.isQualified(), satisfied = this.isSatisfied();
                        if (false) {
                        ///
                        } else if (qualified) {
                            var referenceVerifies = this.reference.verify(context);
                            if (referenceVerifies) {
                                verifies = true;
                            }
                        } else if (satisfied) {
                            var stated1 = true, _$assignments = null, satisfiesAssertionVerifies = this.satisfiesAssertion.verify(_$assignments, stated1, context);
                            if (satisfiesAssertionVerifies) {
                                verifies = true;
                            }
                        } else {
                            verifies = true;
                        }
                    }
                } else {
                    context.debug("Cannot verify the '".concat(stepString, "' step because it is nonsense."), this.node);
                }
                if (verifies) {
                    this.context = context;
                    context.debug("...verified the '".concat(stepString, "' step."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unify",
            value: function unify(substitutions, context) {
                var _this = this;
                var unifies;
                context = this.context;
                var stepString = this.string; ///
                context.trace("Unifying the '".concat(stepString, "' step..."), this.node);
                unifies = _unify.default.some(function(unifyMixin) {
                    var unifies = unifyMixin(_this.statement, _this.reference, _this.satisfiesAssertion, substitutions, context);
                    if (unifies) {
                        return true;
                    }
                });
                if (unifies) {
                    context.debug("...unified the '".concat(stepString, "' step."), this.node);
                }
                return unifies;
            }
        },
        {
            key: "equateWithStatement",
            value: function equateWithStatement(statement, context) {
                var statementEquates;
                var leftStatement = statement, rightStatement = this.statement, leftStatementNode = leftStatement.getNode(), rightStatementNode = rightStatement.getNode(), statementsEquate = (0, _equate.equateStatements)(leftStatementNode, rightStatementNode, context);
                statementEquates = statementsEquate; ///
                return statementEquates;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var stepString = this.string, satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion..."), this.node);
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var Substitutions = _elements.default.Substitutions, step = this, substitutions = Substitutions.fromNothing(), stepUnifies = axiom.unifyStep(step, substitutions, context);
                    if (stepUnifies) {
                        var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                        if (substitutionsCompare) {
                            unifiesWithSatisfiesAssertion = true;
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion."), this.node);
                }
                return unifiesWithSatisfiesAssertion;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3N0ZXAvdW5pZnlcIjtcbmltcG9ydCBUZW1wb3JhcnlDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RlbXBvcmFyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVN0YXRlbWVudHMgfSBmcm9tIFwiLi4vcHJvY2Vzcy9lcXVhdGVcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBpc1N0ZXAoKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBwcm9wZXJ0eUFzc2VydGlvbi5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdGhpcy5pc1N0YXRlZCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgICAgIHNhdGlzZmllZCA9IHRoaXMuaXNTYXRpc2ZpZWQoKTtcblxuICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSBlbHNlIGlmIChxdWFsaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllcyA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzYXRpc2ZpZWQpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcyA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcykge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzO1xuXG4gICAgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIHVuaWZpZXMgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB1bmlmaWVzID0gdW5pZnlNaXhpbih0aGlzLnN0YXRlbWVudCwgdGhpcy5yZWZlcmVuY2UsIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllcztcbiAgfVxuXG4gIGVxdWF0ZVdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEVxdWF0ZXM7XG5cbiAgICBjb25zdCBsZWZ0U3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgcmlnaHRTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxlZnRTdGF0ZW1lbnROb2RlID0gbGVmdFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRTdGF0ZW1lbnROb2RlID0gcmlnaHRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGUgPSBlcXVhdGVTdGF0ZW1lbnRzKGxlZnRTdGF0ZW1lbnROb2RlLCByaWdodFN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50RXF1YXRlcyA9IHN0YXRlbWVudHNFcXVhdGU7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRFcXVhdGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICBzdGVwID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uIiwiaXNTYXRpc2ZpZWQiLCJzYXRpc2ZpZWQiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RhdGVkIiwic3RhdGVkIiwiaXNTdGVwIiwic3RlcCIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsInRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2giLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJhc3NpZ25tZW50cyIsInZlcmlmaWVzIiwidGVtcG9yYXJ5Q29udGV4dCIsIlRlbXBvcmFyeUNvbnRleHQiLCJmcm9tTm90aGluZyIsInN0ZXBTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFZlcmlmaWVzIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcyIsImRlYnVnIiwidW5pZnkiLCJ1bmlmaWVzIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImVxdWF0ZVdpdGhTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhdGVzIiwibGVmdFN0YXRlbWVudCIsInJpZ2h0U3RhdGVtZW50IiwibGVmdFN0YXRlbWVudE5vZGUiLCJyaWdodFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRzRXF1YXRlIiwiZXF1YXRlU3RhdGVtZW50cyIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJlbGVtZW50cyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dFQVJxQjs0REFDRztnRUFDSztzQkFHSTt5QkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0MsV0FBZUEsSUFBQUEsZ0JBQU0seUJBQUM7YUFBTUMsS0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQjtnQ0FEakROO1FBRXhCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sT0FBTztZQUNyQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sTUFBTTtZQUNw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