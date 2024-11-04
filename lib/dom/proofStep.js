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
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/proofStep/unify"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _assignments = require("../utilities/assignments");
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
var _ProofStep;
var _default = (0, _dom.domAssigned)((_ProofStep = /*#__PURE__*/ function() {
    function ProofStep(string, subproof, statement, reference) {
        _class_call_check(this, ProofStep);
        this.string = string;
        this.subproof = subproof;
        this.statement = statement;
        this.reference = reference;
    }
    _create_class(ProofStep, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getSubproof",
            value: function getSubproof() {
                return this.subproof;
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
            key: "unify",
            value: function unify(substitutions, context) {
                var _this = this;
                var unified;
                if (this.subproof !== null) {
                    unified = true; ///
                }
                if (this.statement !== null) {
                    var proofStepString = this.string; ///
                    context.trace("Unifying the '".concat(proofStepString, "' proof step..."));
                    unified = _unify.default.some(function(unifyMixin) {
                        var unified = unifyMixin(_this.statement, _this.reference, substitutions, context);
                        if (unified) {
                            return true;
                        }
                    });
                    if (unified) {
                        context.debug("...unified the '".concat(proofStepString, "' proof step."));
                    }
                }
                return unified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement..."));
                var specificContext = context, generalContext = context, substitutions = _substitutions.default.fromNothing();
                if (this.subproof !== null) {
                    statementUnified = this.subproof.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (this.statement !== null) {
                    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (statementUnified) {
                    var equivalences = context.getEquivalences(), substitutionsUnified = equivalences.unifySubstitutions(substitutions);
                    statementUnified = substitutionsUnified; ///
                }
                if (statementUnified) {
                    context.debug(",..unified the '".concat(statementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproofAssertion",
            value: function unifySubproofAssertion(subproofAssertion, context) {
                var subproofAssertionUnified = false;
                if (this.subproof !== null) {
                    subproofAssertionUnified = this.subproof.unifySubproofAssertion(subproofAssertion, context);
                }
                return subproofAssertionUnified;
            }
        },
        {
            key: "verifyAndUnify",
            value: function verifyAndUnify(substitutions, context) {
                var verifiedAndUnified = false;
                var assignments = [], verified = this.verify(substitutions, assignments, context);
                if (verified) {
                    var unified = this.unify(substitutions, context);
                    if (unified) {
                        var proofStep = this; ///
                        (0, _assignments.assignAssignments)(assignments, context);
                        context.addProofStep(proofStep);
                    }
                    verifiedAndUnified = unified; ///
                }
                return verifiedAndUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var verified = false;
                if (false) {
                ///
                } else if (this.subproof !== null) {
                    var subproofVerified = this.subproof.verify(substitutions, context);
                    verified = subproofVerified; ///
                } else if (this.statement !== null) {
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
                    var proofStepString = this.string;
                    context.debug("Cannot verify the '".concat(proofStepString, "' proof step because it is nonsense."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementString = statement.getString(), string = statementString, subproof = null, reference = null, proofStep = new ProofStep(string, subproof, statement, reference);
                return proofStep;
            }
        },
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var Subproof = _dom.default.Subproof, Statement = _dom.default.Statement, Reference = _dom.default.Reference, node = proofStepNode, string = fileContext.nodeAsString(node), subproof = Subproof.fromProofStepNode(proofStepNode, fileContext), statement = Statement.fromProofStepNode(proofStepNode, fileContext), reference = Reference.fromProofStepNode(proofStepNode, fileContext), proofStep = new ProofStep(string, subproof, statement, reference);
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}(), _define_property(_ProofStep, "name", "ProofStep"), _ProofStep));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Byb29mU3RlcC91bmlmeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdWJwcm9vZiwgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGlzUXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9ICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgaWYgKHRoaXMuc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHVuaWZpZWQgPSB0cnVlOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwLi4uYCk7XG5cbiAgICAgIHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdWJwcm9vZi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IGVxdWl2YWxlbmNlcy51bmlmeVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAsLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mQXNzZXJ0aW9uKHN1YnByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCA9IHRoaXMuc3VicHJvb2YudW5pZnlTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeUFuZFVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBbmRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdGhpcy51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gdGhpczsgLy8vXG5cbiAgICAgICAgYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVkQW5kVW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFuZFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlZlcmlmaWVkID0gdGhpcy5zdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gc3VicHJvb2ZWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICAgIHN0YXRlZCA9IHF1YWxpZmllZCwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gcmVmZXJlbmNlVmVyaWZpZWQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb29mU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnByb29mID0gbnVsbCxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3RyaW5nLCBzdWJwcm9vZiwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3VicHJvb2YsIFN0YXRlbWVudCwgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHByb29mU3RlcE5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IFN1YnByb29mLmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdHJpbmcsIHN1YnByb29mLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByb29mU3RlcCIsInN0cmluZyIsInN1YnByb29mIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0U3VicHJvb2YiLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsInVuaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ1bmlmaWVkIiwicHJvb2ZTdGVwU3RyaW5nIiwidHJhY2UiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwidW5pZnlTdWJzdGl0dXRpb25zIiwidW5pZnlTdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkIiwidmVyaWZ5QW5kVW5pZnkiLCJ2ZXJpZmllZEFuZFVuaWZpZWQiLCJhc3NpZ25tZW50cyIsInZlcmlmaWVkIiwidmVyaWZ5IiwicHJvb2ZTdGVwIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRQcm9vZlN0ZXAiLCJzdWJwcm9vZlZlcmlmaWVkIiwic3RhdGVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJyZWZlcmVuY2VWZXJpZmllZCIsImZyb21TdGF0ZW1lbnQiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcE5vZGUiLCJmaWxlQ29udGV4dCIsIlN1YnByb29mIiwiZG9tIiwiU3RhdGVtZW50IiwiUmVmZXJlbmNlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjs0REFDUTtvRUFDRTsyQkFHUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEMsV0FBZUEsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRG5C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