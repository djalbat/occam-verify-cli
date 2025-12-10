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
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/step/unify"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
var _equantional = /*#__PURE__*/ _interop_require_default(require("../unifier/equantional"));
var _context = require("../utilities/context");
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
var _default = (0, _ontology.define)((_Step = /*#__PURE__*/ function() {
    function Step(context, node, string, statement, reference, satisfiesAssertion) {
        _class_call_check(this, Step);
        this.context = context;
        this.node = node;
        this.string = string;
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
                var propertyAssertion = (0, _context.propertyAssertionFromStatement)(this.statement, context);
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
                var temporaryContext = _temporary.default.fromContext(context);
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
                var statementA = statement, statementB = this.statement, statementANode = statementA.getNode(), statementBNode = statementB.getNode(), statementsEquates = _equantional.default.equateStatements(statementANode, statementBNode, context);
                statementEquates = statementsEquates; ///
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
                    var step = this, substitutions = _substitutions.default.fromNothing(), stepUnifies = axiom.unifyStep(step, substitutions, context);
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
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementString = statement.getString(), string = statementString, node = null, reference = null, temporaryContext = null, satisfiesAssertion = null;
                context = temporaryContext; ///
                var step = new Step(context, node, string, statement, reference, satisfiesAssertion);
                return step;
            }
        },
        {
            key: "fromStepOrSubproofNode",
            value: function fromStepOrSubproofNode(stepOrSubproofNode, context) {
                var step = null;
                var stepNode = stepOrSubproofNode.isStepNode();
                if (stepNode) {
                    var Statement = _ontology.default.Statement, Reference = _ontology.default.Reference, SatisfiesAssertion = _ontology.default.SatisfiesAssertion, stepNode1 = stepOrSubproofNode, node = stepNode1, string = context.nodeAsString(node), statement = Statement.fromStepNode(stepNode1, context), reference = Reference.fromStepNode(stepNode1, context), satisfiesAssertion = SatisfiesAssertion.fromStepNode(stepNode1, context), temporaryContext = null;
                    context = temporaryContext; ///
                    step = new Step(context, node, string, statement, reference, satisfiesAssertion);
                }
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRlbXBvcmFyeUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvdGVtcG9yYXJ5XCI7XG5pbXBvcnQgZXF1YXRpb25hbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvZXF1YW50aW9uYWxcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0ZXAge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGlzU3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IHByb3BlcnR5QXNzZXJ0aW9uLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21Db250ZXh0KGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0aGlzLmlzU3RhdGVkKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICAgICAgc2F0aXNmaWVkID0gdGhpcy5pc1NhdGlzZmllZCgpO1xuXG4gICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9IGVsc2UgaWYgKHF1YWxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNhdGlzZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXM7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgdW5pZmllcyA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHVuaWZpZXMgPSB1bmlmeU1peGluKHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgZXF1YXRlV2l0aFN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50RXF1YXRlcztcblxuICAgIGNvbnN0IHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRCID0gdGhpcy5zdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRBTm9kZSA9IHN0YXRlbWVudEEuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudEJOb2RlID0gc3RhdGVtZW50Qi5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50c0VxdWF0ZXMgPSBlcXVhdGlvbmFsVW5pZmllci5lcXVhdGVTdGF0ZW1lbnRzKHN0YXRlbWVudEFOb2RlLCBzdGF0ZW1lbnRCTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRFcXVhdGVzID0gc3RhdGVtZW50c0VxdWF0ZXM7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRFcXVhdGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RlcFVuaWZpZXMgPSBheGlvbS51bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29tcGFyZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG51bGwsXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBub2RlLCBzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgICBpZiAoc3RlcE5vZGUpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50LCBSZWZlcmVuY2UsIFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgICAgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbilcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RlcCIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJpc1N0ZXAiLCJzdGVwIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Db250ZXh0Iiwic3RlcFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VmVyaWZpZXMiLCJyZWZlcmVuY2VWZXJpZmllcyIsInNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzIiwiZGVidWciLCJ1bmlmeSIsInVuaWZpZXMiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwiZXF1YXRlV2l0aFN0YXRlbWVudCIsInN0YXRlbWVudEVxdWF0ZXMiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFOb2RlIiwic3RhdGVtZW50Qk5vZGUiLCJzdGF0ZW1lbnRzRXF1YXRlcyIsImVxdWF0aW9uYWxVbmlmaWVyIiwiZXF1YXRlU3RhdGVtZW50cyIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJmcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiU3RhdGVtZW50Iiwib250b2xvZ3kiLCJSZWZlcmVuY2UiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJub2RlQXNTdHJpbmciLCJmcm9tU3RlcE5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFX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