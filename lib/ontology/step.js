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
                    var Substitutions = _ontology.default.Substitutions, step = this, substitutions = Substitutions.fromNothing(), stepUnifies = axiom.unifyStep(step, substitutions, context);
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
                var statementString = statement.getString(), string = statementString, node = null, reference = null, satisfiesAssertion = null, step = new Step(context, node, string, statement, reference, satisfiesAssertion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgVGVtcG9yYXJ5Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90ZW1wb3JhcnlcIjtcbmltcG9ydCBlcXVhdGlvbmFsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9lcXVhbnRpb25hbFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBpc1NhdGlzZmllZCgpIHtcbiAgICBjb25zdCBzYXRpc2ZpZWQgPSAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllZDtcbiAgfVxuXG4gIGlzUXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9ICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgIHN0YXRlZCA9IHF1YWxpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgaXNTdGVwKCkge1xuICAgIGNvbnN0IHN0ZXAgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cblxuICBtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoID0gcHJvcGVydHlBc3NlcnRpb24ubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRoaXMuaXNTdGF0ZWQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgICBzYXRpc2ZpZWQgPSB0aGlzLmlzU2F0aXNmaWVkKCk7XG5cbiAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0gZWxzZSBpZiAocXVhbGlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2F0aXNmaWVkKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYENhbm5vdCB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcztcblxuICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICB1bmlmaWVzID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3QgdW5pZmllcyA9IHVuaWZ5TWl4aW4odGhpcy5zdGF0ZW1lbnQsIHRoaXMucmVmZXJlbmNlLCB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICBlcXVhdGVXaXRoU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRFcXVhdGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QSA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEIgPSB0aGlzLnN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEFOb2RlID0gc3RhdGVtZW50QS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Qk5vZGUgPSBzdGF0ZW1lbnRCLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzRXF1YXRlcyA9IGVxdWF0aW9uYWxVbmlmaWVyLmVxdWF0ZVN0YXRlbWVudHMoc3RhdGVtZW50QU5vZGUsIHN0YXRlbWVudEJOb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudEVxdWF0ZXMgPSBzdGF0ZW1lbnRzRXF1YXRlczsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEVxdWF0ZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RlcFVuaWZpZXMgPSBheGlvbS51bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29tcGFyZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbCxcbiAgICAgICAgICBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUuaXNTdGVwTm9kZSgpO1xuXG4gICAgaWYgKHN0ZXBOb2RlKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCwgUmVmZXJlbmNlLCBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBTYXRpc2ZpZXNBc3NlcnRpb24uZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICAgIHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBub2RlLCBzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uIiwiaXNTYXRpc2ZpZWQiLCJzYXRpc2ZpZWQiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RhdGVkIiwic3RhdGVkIiwiaXNTdGVwIiwic3RlcCIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsInRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2giLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJhc3NpZ25tZW50cyIsInZlcmlmaWVzIiwidGVtcG9yYXJ5Q29udGV4dCIsIlRlbXBvcmFyeUNvbnRleHQiLCJmcm9tTm90aGluZyIsInN0ZXBTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFZlcmlmaWVzIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcyIsImRlYnVnIiwidW5pZnkiLCJ1bmlmaWVzIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImVxdWF0ZVdpdGhTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhdGVzIiwic3RhdGVtZW50QSIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBTm9kZSIsInN0YXRlbWVudEJOb2RlIiwic3RhdGVtZW50c0VxdWF0ZXMiLCJlcXVhdGlvbmFsVW5pZmllciIsImVxdWF0ZVN0YXRlbWVudHMiLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJTdWJzdGl0dXRpb25zIiwib250b2xvZ3kiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwiZnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBOb2RlIiwiaXNTdGVwTm9kZSIsIlN0YXRlbWVudCIsIlJlZmVyZW5jZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIm5vZGVBc1N0cmluZyIsImZyb21TdGVwTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dFQVJxQjs0REFDRztnRUFDSztrRUFDQzt1QkFHaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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