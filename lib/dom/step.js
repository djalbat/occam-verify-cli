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
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var substitutions = _substitutions.default.fromNothing(), generalContext = context, specificContext = context; ///
                statementUnified = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    substitutions.removeTrivialSubstitutions();
                    var equivalences = context.getEquivalences(), substitutionsUnified = equivalences.unifySubstitutions(substitutions);
                    statementUnified = substitutionsUnified; ///
                }
                return statementUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0ZXAoKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBwcm9wZXJ0eUFzc2VydGlvbi5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0aGlzLnN0YXRlbWVudCwgdGhpcy5yZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSByZWZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVtb3ZlVHJpdmlhbFN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgY29uc3QgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gZXF1aXZhbGVuY2VzLnVuaWZ5U3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgaHRlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHdpdGggdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gc2F0aXNmaWVzQXNzZXJ0aW9uLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICAgICAgdW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIGh0ZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyB3aXRoIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZnlTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUuaXNTdGVwTm9kZSgpO1xuXG4gICAgaWYgKHN0ZXBOb2RlKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCwgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN0ZXAiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RlcCIsInN0ZXAiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJjb250ZXh0IiwidGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllZCIsInN0ZXBTdHJpbmciLCJ0cmFjZSIsInVuaWZ5TWl4aW5zIiwic29tZSIsInVuaWZ5TWl4aW4iLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInJlZmVyZW5jZVZlcmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJyZW1vdmVUcml2aWFsU3Vic3RpdHV0aW9ucyIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwidW5pZnlTdWJzdGl0dXRpb25zIiwidW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc01hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJmaWxlQ29udGV4dCIsInN0ZXBOb2RlIiwiaXNTdGVwTm9kZSIsIlN0YXRlbWVudCIsImRvbSIsIlJlZmVyZW5jZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tU3RlcE5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7NERB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