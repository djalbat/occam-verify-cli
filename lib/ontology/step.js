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
            key: "unify",
            value: function unify(substitutions, context) {
                var _this = this;
                var unifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRlbXBvcmFyeUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvdGVtcG9yYXJ5XCI7XG5pbXBvcnQgZXF1YXRpb25hbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvZXF1YW50aW9uYWxcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0ZXAge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGlzU3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IHByb3BlcnR5QXNzZXJ0aW9uLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2g7XG4gIH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICB1bmlmaWVzID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3QgdW5pZmllcyA9IHVuaWZ5TWl4aW4odGhpcy5zdGF0ZW1lbnQsIHRoaXMucmVmZXJlbmNlLCB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21Db250ZXh0KGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0aGlzLmlzU3RhdGVkKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICAgICAgc2F0aXNmaWVkID0gdGhpcy5pc1NhdGlzZmllZCgpO1xuXG4gICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9IGVsc2UgaWYgKHF1YWxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNhdGlzZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBlcXVhdGVXaXRoU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRFcXVhdGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QSA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEIgPSB0aGlzLnN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEFOb2RlID0gc3RhdGVtZW50QS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Qk5vZGUgPSBzdGF0ZW1lbnRCLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzRXF1YXRlcyA9IGVxdWF0aW9uYWxVbmlmaWVyLmVxdWF0ZVN0YXRlbWVudHMoc3RhdGVtZW50QU5vZGUsIHN0YXRlbWVudEJOb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudEVxdWF0ZXMgPSBzdGF0ZW1lbnRzRXF1YXRlczsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEVxdWF0ZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICAgIGlmIChzdGVwTm9kZSkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQsIFJlZmVyZW5jZSwgU2F0aXNmaWVzQXNzZXJ0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gc3RlcE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgICBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbiIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0YXRlZCIsInN0YXRlZCIsImlzU3RlcCIsInN0ZXAiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVzIiwic3RlcFN0cmluZyIsInRyYWNlIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJ2ZXJpZmllcyIsInRlbXBvcmFyeUNvbnRleHQiLCJUZW1wb3JhcnlDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllcyIsInJlZmVyZW5jZVZlcmlmaWVzIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMiLCJlcXVhdGVXaXRoU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YXRlcyIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QU5vZGUiLCJzdGF0ZW1lbnRCTm9kZSIsInN0YXRlbWVudHNFcXVhdGVzIiwiZXF1YXRpb25hbFVuaWZpZXIiLCJlcXVhdGVTdGF0ZW1lbnRzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0ZXAiLCJzdWJzdGl0dXRpb25zQ29tcGFyZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJTdGF0ZW1lbnQiLCJvbnRvbG9neSIsIlJlZmVyZW5jZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIm5vZGVBc1N0cmluZyIsImZyb21TdGVwTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dFQVRxQjs0REFDRztvRUFDRTtn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