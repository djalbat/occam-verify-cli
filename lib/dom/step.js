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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var axiomUnconditional = axiom.isUnconditional();
                    if (axiomUnconditional) {
                        var step = this, fileContext = axiom.getFileContext(), localContext = _local.default.fromFileContext(fileContext), substitutions = _substitutions.default.fromNothing(), generalContext = localContext, specificContext = context, statementUnified = axiom.unifyStep(step, substitutions, generalContext, specificContext);
                        if (statementUnified) {
                            var substitutionsMatch = satisfiesAssertion.matchSubstitutions(substitutions, context);
                            if (substitutionsMatch) {
                                unifySatisfiesAssertion = true;
                            }
                        }
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGVwL3VuaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0ZXAoKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBwcm9wZXJ0eUFzc2VydGlvbi5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0aGlzLnN0YXRlbWVudCwgdGhpcy5yZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSByZWZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVtb3ZlVHJpdmlhbFN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgY29uc3QgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gZXF1aXZhbGVuY2VzLnVuaWZ5U3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21VbmNvbmRpdGlvbmFsID0gYXhpb20uaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICAgIGlmIChheGlvbVVuY29uZGl0aW9uYWwpIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZmlsZUNvbnRleHQgPSBheGlvbS5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gc2F0aXNmaWVzQXNzZXJ0aW9uLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICAgIHVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZnlTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUuaXNTdGVwTm9kZSgpO1xuXG4gICAgaWYgKHN0ZXBOb2RlKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCwgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN0ZXAiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RlcCIsInN0ZXAiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJjb250ZXh0IiwidGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllZCIsInN0ZXBTdHJpbmciLCJ0cmFjZSIsInVuaWZ5TWl4aW5zIiwic29tZSIsInVuaWZ5TWl4aW4iLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInJlZmVyZW5jZVZlcmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJyZW1vdmVUcml2aWFsU3Vic3RpdHV0aW9ucyIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwidW5pZnlTdWJzdGl0dXRpb25zIiwidW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21VbmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNNYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJmcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiU3RhdGVtZW50IiwiZG9tIiwiUmVmZXJlbmNlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21TdGVwTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjs0REFDUTs0REFDQztvRUFDQzt1QkFHcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1DLEtBQ25CQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEVEg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQWEsSUFBSSxDQUFDTCxTQUFTLEtBQUs7Z0JBRXRDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTztnQkFFYixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkMsSUFBSSxFQUFFQyxnQkFBZ0IsRUFBRUMsT0FBTztnQkFDMUQsSUFBSUMsK0JBQStCO2dCQUVuQyxJQUFNQyxvQkFBb0JDLElBQUFBLHVDQUE4QixFQUFDLElBQUksQ0FBQ2YsU0FBUyxFQUFFWTtnQkFFekUsSUFBSUUsc0JBQXNCLE1BQU07b0JBQzlCRCwr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