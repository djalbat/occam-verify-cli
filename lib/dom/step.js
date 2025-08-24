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
    function Step(string, statement, reference) {
        _class_call_check(this, Step);
        this.string = string;
        this.statement = statement;
        this.reference = reference;
    }
    _create_class(Step, [
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
            key: "isQualified",
            value: function isQualified() {
                var qualified = this.reference !== null;
                return qualified;
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
                context.trace("Unifying the '".concat(stepString, "' step..."));
                unifies = _unify.default.some(function(unifyMixin) {
                    var unifies = unifyMixin(_this.statement, _this.reference, substitutions, context);
                    if (unifies) {
                        return true;
                    }
                });
                if (unifies) {
                    context.debug("...unified the '".concat(stepString, "' step."));
                }
                return unifies;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var verifies = false;
                var stepString = this.string; ///
                context.trace("Verifying the '".concat(stepString, "' step..."));
                if (this.statement !== null) {
                    var qualified = this.isQualified(), stated = qualified, statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        if (this.reference === null) {
                            verifies = true;
                        } else {
                            var referenceVerifies = this.reference.verify(context);
                            verifies = referenceVerifies; ///
                        }
                    }
                } else {
                    context.debug("Cannot verify the '".concat(stepString, "' step because it is nonsense."));
                }
                if (verifies) {
                    context.debug("...verified the '".concat(stepString, "' step."));
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
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var step = this, substitutions = _substitutions.default.fromNothing(), stepUnifies = axiom.unifyStep(step, substitutions, context);
                    if (stepUnifies) {
                        var substitutionsMatch = satisfiesAssertion.matchSubstitutions(substitutions, context);
                        if (substitutionsMatch) {
                            unifiesWithSatisfiesAssertion = true;
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return unifiesWithSatisfiesAssertion;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementString = statement.getString(), string = statementString, reference = null, step = new Step(string, statement, reference);
                return step;
            }
        },
        {
            key: "fromStepOrSubproofNode",
            value: function fromStepOrSubproofNode(stepOrSubproofNode, fileContext) {
                var step = null;
                var stepNode = stepOrSubproofNode.isStepNode();
                if (stepNode) {
                    var Statement = _dom.default.Statement, Reference = _dom.default.Reference, stepNode1 = stepOrSubproofNode, node = stepNode1, string = fileContext.nodeAsString(node), statement = Statement.fromStepNode(stepNode1, fileContext), reference = Reference.fromStepNode(stepNode1, fileContext);
                    step = new Step(string, statement, reference);
                }
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IGVxdWF0aW9uYWxVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL2VxdWFudGlvbmFsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN0ZXAge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IHByb3BlcnR5QXNzZXJ0aW9uLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2g7XG4gIH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgdW5pZmllcyA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHVuaWZpZXMgPSB1bmlmeU1peGluKHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBpZiAodGhpcy5yZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHJlZmVyZW5jZVZlcmlmaWVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGVxdWF0ZVdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEVxdWF0ZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QiA9IHRoaXMuc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QU5vZGUgPSBzdGF0ZW1lbnRBLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTm9kZSA9IHN0YXRlbWVudEIuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGVzID0gZXF1YXRpb25hbFVuaWZpZXIuZXF1YXRlU3RhdGVtZW50cyhzdGF0ZW1lbnRBTm9kZSwgc3RhdGVtZW50Qk5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50RXF1YXRlcyA9IHN0YXRlbWVudHNFcXVhdGVzOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YXRlcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNNYXRjaCA9IHNhdGlzZmllc0Fzc2VydGlvbi5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUuaXNTdGVwTm9kZSgpO1xuXG4gICAgaWYgKHN0ZXBOb2RlKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCwgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN0ZXAiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RlcCIsInN0ZXAiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJjb250ZXh0IiwidGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllcyIsInN0ZXBTdHJpbmciLCJ0cmFjZSIsInVuaWZ5TWl4aW5zIiwic29tZSIsInVuaWZ5TWl4aW4iLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWZXJpZmllcyIsInJlZmVyZW5jZVZlcmlmaWVzIiwiZXF1YXRlV2l0aFN0YXRlbWVudCIsInN0YXRlbWVudEVxdWF0ZXMiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFOb2RlIiwiZ2V0Tm9kZSIsInN0YXRlbWVudEJOb2RlIiwic3RhdGVtZW50c0VxdWF0ZXMiLCJlcXVhdGlvbmFsVW5pZmllciIsImVxdWF0ZVN0YXRlbWVudHMiLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNNYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJmcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwiZmlsZUNvbnRleHQiLCJzdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJTdGF0ZW1lbnQiLCJkb20iLCJSZWZlcmVuY2UiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVN0ZXBOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCOzREQUNRO29FQUNFO2tFQUNJO3VCQUdpQjs7Ozs7Ozs7Ozs7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