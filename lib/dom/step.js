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
            key: "unifySatisfiesAssertion",
            value: function unifySatisfiesAssertion(satisfiesAssertion, context) {
                var unifySatisfiesAssertion = false;
                var stepString = this.string, satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying hte '".concat(satisfiesAssertionString, "' with the '").concat(stepString, "' step..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var step = this, substitutions = _substitutions.default.fromNothing(), stepUnifies = axiom.unifyStep(step, substitutions, context);
                    if (stepUnifies) {
                        var substitutionsMatch = satisfiesAssertion.matchSubstitutions(substitutions, context);
                        if (substitutionsMatch) {
                            unifySatisfiesAssertion = true;
                        }
                    }
                }
                if (unifySatisfiesAssertion) {
                    context.debug("...unified hte '".concat(satisfiesAssertionString, "' with the '").concat(stepString, "' step."));
                }
                return unifySatisfiesAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IGVxdWF0aW9uYWxVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL2VxdWFudGlvbmFsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN0ZXAge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IHByb3BlcnR5QXNzZXJ0aW9uLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2g7XG4gIH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgdW5pZmllcyA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHVuaWZpZXMgPSB1bmlmeU1peGluKHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBpZiAodGhpcy5yZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHJlZmVyZW5jZVZlcmlmaWVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGVxdWF0ZVdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEVxdWF0ZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QiA9IHRoaXMuc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QU5vZGUgPSBzdGF0ZW1lbnRBLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTm9kZSA9IHN0YXRlbWVudEIuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGVzID0gZXF1YXRpb25hbFVuaWZpZXIuZXF1YXRlU3RhdGVtZW50cyhzdGF0ZW1lbnRBTm9kZSwgc3RhdGVtZW50Qk5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50RXF1YXRlcyA9IHN0YXRlbWVudHNFcXVhdGVzOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YXRlcztcbiAgfVxuXG4gIHVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmeVNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyBodGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgd2l0aCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNNYXRjaCA9IHNhdGlzZmllc0Fzc2VydGlvbi5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgICAgIHVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmeVNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCBodGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgd2l0aCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHN0ZXAgPSBuZXcgU3RlcChzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICAgIGlmIChzdGVwTm9kZSkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQsIFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHN0ZXAgPSBuZXcgU3RlcChzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdGVwIiwic3RyaW5nIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0ZXAiLCJzdGVwIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29udGV4dCIsInRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2giLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5Iiwic3Vic3RpdHV0aW9ucyIsInVuaWZpZXMiLCJzdGVwU3RyaW5nIiwidHJhY2UiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInZlcmlmaWVzIiwic3RhdGVkIiwic3RhdGVtZW50VmVyaWZpZXMiLCJyZWZlcmVuY2VWZXJpZmllcyIsImVxdWF0ZVdpdGhTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhdGVzIiwic3RhdGVtZW50QSIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBTm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRCTm9kZSIsInN0YXRlbWVudHNFcXVhdGVzIiwiZXF1YXRpb25hbFVuaWZpZXIiLCJlcXVhdGVTdGF0ZW1lbnRzIiwidW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0ZXAiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwiZnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0Iiwic3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiU3RhdGVtZW50IiwiZG9tIiwiUmVmZXJlbmNlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21TdGVwTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjs0REFDUTtvRUFDRTtrRUFDSTt1QkFHaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1D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