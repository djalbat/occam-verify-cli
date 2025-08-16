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
                var unified;
                var stepString = this.string; ///
                context.trace("Unifying the '".concat(stepString, "' step..."));
                unified = _unify.default.some(function(unifyMixin) {
                    var unified = unifyMixin(_this.statement, _this.reference, substitutions, context);
                    if (unified) {
                        return true;
                    }
                });
                if (unified) {
                    context.debug("...unified the '".concat(stepString, "' step."));
                }
                return unified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var verified = false;
                var stepString = this.string; ///
                context.trace("Verifying the '".concat(stepString, "' step..."));
                if (this.statement !== null) {
                    var qualified = this.isQualified(), stated = qualified, statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        if (this.reference === null) {
                            verified = true;
                        } else {
                            var referenceVerified = this.reference.verify(context);
                            verified = referenceVerified; ///
                        }
                    }
                } else {
                    context.debug("Cannot verify the '".concat(stepString, "' step because it is nonsense."));
                }
                if (verified) {
                    context.debug("...verified the '".concat(stepString, "' step."));
                }
                return verified;
            }
        },
        {
            key: "equateWithStatement",
            value: function equateWithStatement(statement, context) {
                var statementEquated;
                var statementA = statement, statementB = this.statement, statementANode = statementA.getNode(), statementBNode = statementB.getNode(), statementsEquated = _equantional.default.equateStatements(statementANode, statementBNode, context);
                statementEquated = statementsEquated; ///
                return statementEquated;
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
                    var step = this, substitutions = _substitutions.default.fromNothing(), statementUnified = axiom.unifyStep(step, substitutions, context);
                    if (statementUnified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IGVxdWF0aW9uYWxVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL2VxdWFudGlvbmFsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN0ZXAge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IHByb3BlcnR5QXNzZXJ0aW9uLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2g7XG4gIH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBpZiAodGhpcy5yZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHJlZmVyZW5jZVZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIGVxdWF0ZVdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEVxdWF0ZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QiA9IHRoaXMuc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QU5vZGUgPSBzdGF0ZW1lbnRBLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTm9kZSA9IHN0YXRlbWVudEIuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGVkID0gZXF1YXRpb25hbFVuaWZpZXIuZXF1YXRlU3RhdGVtZW50cyhzdGF0ZW1lbnRBTm9kZSwgc3RhdGVtZW50Qk5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50RXF1YXRlZCA9IHN0YXRlbWVudHNFcXVhdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YXRlZDtcbiAgfVxuXG4gIHVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmeVNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyBodGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgd2l0aCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzYXRpc2ZpZXNBc3NlcnRpb24ubWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICB1bmlmeVNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgaHRlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHdpdGggdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmeVNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgICBpZiAoc3RlcE5vZGUpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50LCBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgICAgIHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gc3RlcE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU3RlcCIsInN0cmluZyIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGVwIiwic3RlcCIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbnRleHQiLCJ0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVkIiwic3RlcFN0cmluZyIsInRyYWNlIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJ2ZXJpZmllZCIsInN0YXRlZCIsInN0YXRlbWVudFZlcmlmaWVkIiwicmVmZXJlbmNlVmVyaWZpZWQiLCJlcXVhdGVXaXRoU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YXRlZCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QU5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50Qk5vZGUiLCJzdGF0ZW1lbnRzRXF1YXRlZCIsImVxdWF0aW9uYWxVbmlmaWVyIiwiZXF1YXRlU3RhdGVtZW50cyIsInVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0ZXAiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwiZnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0Iiwic3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiU3RhdGVtZW50IiwiZG9tIiwiUmVmZXJlbmNlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21TdGVwTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjs0REFDUTtvRUFDRTtrRUFDSTt1QkFHaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdC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