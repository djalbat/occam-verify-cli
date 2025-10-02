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
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/step/unify"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
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
var _default = (0, _dom.domAssigned)((_Step = /*#__PURE__*/ function() {
    function Step(node, string, statement, reference, satisfiesAssertion) {
        _class_call_check(this, Step);
        this.node = node;
        this.string = string;
        this.statement = statement;
        this.reference = reference;
        this.satisfiesAssertion = satisfiesAssertion;
    }
    _create_class(Step, [
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
                var statementString = statement.getString(), string = statementString, node = null, reference = null, satisfiesAssertion = null, step = new Step(node, string, statement, reference, satisfiesAssertion);
                return step;
            }
        },
        {
            key: "fromStepOrSubproofNode",
            value: function fromStepOrSubproofNode(stepOrSubproofNode, context) {
                var step = null;
                var stepNode = stepOrSubproofNode.isStepNode();
                if (stepNode) {
                    var Statement = _dom.default.Statement, Reference = _dom.default.Reference, SatisfiesAssertion = _dom.default.SatisfiesAssertion, stepNode1 = stepOrSubproofNode, node = stepNode1, string = context.nodeAsString(node), statement = Statement.fromStepNode(stepNode1, context), reference = Reference.fromStepNode(stepNode1, context), satisfiesAssertion = SatisfiesAssertion.fromStepNode(stepNode1, context);
                    step = new Step(node, string, statement, reference, satisfiesAssertion);
                }
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IGVxdWF0aW9uYWxVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL2VxdWFudGlvbmFsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN0ZXAge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBpc1N0ZXAoKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBwcm9wZXJ0eUFzc2VydGlvbi5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgdW5pZmllcyA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHVuaWZpZXMgPSB1bmlmeU1peGluKHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRoaXMuaXNTdGF0ZWQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgICBzYXRpc2ZpZWQgPSB0aGlzLmlzU2F0aXNmaWVkKCk7XG5cbiAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0gZWxzZSBpZiAocXVhbGlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2F0aXNmaWVkKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYENhbm5vdCB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGVxdWF0ZVdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEVxdWF0ZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QiA9IHRoaXMuc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QU5vZGUgPSBzdGF0ZW1lbnRBLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTm9kZSA9IHN0YXRlbWVudEIuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGVzID0gZXF1YXRpb25hbFVuaWZpZXIuZXF1YXRlU3RhdGVtZW50cyhzdGF0ZW1lbnRBTm9kZSwgc3RhdGVtZW50Qk5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50RXF1YXRlcyA9IHN0YXRlbWVudHNFcXVhdGVzOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YXRlcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGwsXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKG5vZGUsIHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICAgIGlmIChzdGVwTm9kZSkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQsIFJlZmVyZW5jZSwgU2F0aXNmaWVzQXNzZXJ0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzdGVwID0gbmV3IFN0ZXAobm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdGVwIiwibm9kZSIsInN0cmluZyIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJpc1N0ZXAiLCJzdGVwIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29udGV4dCIsInRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2giLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5Iiwic3Vic3RpdHV0aW9ucyIsInVuaWZpZXMiLCJzdGVwU3RyaW5nIiwidHJhY2UiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInZlcmlmaWVzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJyZWZlcmVuY2VWZXJpZmllcyIsInNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzIiwiZXF1YXRlV2l0aFN0YXRlbWVudCIsInN0YXRlbWVudEVxdWF0ZXMiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFOb2RlIiwic3RhdGVtZW50Qk5vZGUiLCJzdGF0ZW1lbnRzRXF1YXRlcyIsImVxdWF0aW9uYWxVbmlmaWVyIiwiZXF1YXRlU3RhdGVtZW50cyIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJmcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiU3RhdGVtZW50IiwiZG9tIiwiUmVmZXJlbmNlIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwibm9kZUFzU3RyaW5nIiwiZnJvbVN0ZXBOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCOzREQUNRO29FQUNFO2tFQUNJO3VCQUdpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0MsV0FBZUEsSUFBQUEsZ0JBQVcseUJBQUM7YUFBTUMsS0FDbkJDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCO2dDQURuQ0w7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTs7OztZQUc1QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxTQUFTO1lBQ3ZCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFB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