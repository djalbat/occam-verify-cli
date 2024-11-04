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
                var specificContext = context, generalContext = context, substitutions = _substitutions.default.fromNothing();
                if (this.subproof !== null) {
                    var subproofUnified = statement.unifySubproof(this.subproof, substitutions, generalContext, specificContext);
                    statementUnified = subproofUnified; ///
                }
                if (this.statement !== null) {
                    statementUnified = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);
                }
                if (statementUnified) {
                    var equivalences = context.getEquivalences(), substitutionsUnified = equivalences.unifySubstitutions(substitutions);
                    statementUnified = substitutionsUnified; ///
                }
                return statementUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Byb29mU3RlcC91bmlmeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdWJwcm9vZiwgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGlzUXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9ICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgaWYgKHRoaXMuc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHVuaWZpZWQgPSB0cnVlOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwLi4uYCk7XG5cbiAgICAgIHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZWQgPSBzdGF0ZW1lbnQudW5pZnlTdWJwcm9vZih0aGlzLnN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnByb29mVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gZXF1aXZhbGVuY2VzLnVuaWZ5U3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBbmRVbmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQW5kVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHRoaXMudW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllZEFuZFVuaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBbmRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZWZXJpZmllZCA9IHRoaXMuc3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHN1YnByb29mVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBpZiAodGhpcy5yZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHJlZmVyZW5jZVZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9vZlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZiA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN0cmluZywgc3VicHJvb2YsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN1YnByb29mLCBTdGF0ZW1lbnQsIFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBwcm9vZlN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3RyaW5nLCBzdWJwcm9vZiwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJQcm9vZlN0ZXAiLCJzdHJpbmciLCJzdWJwcm9vZiIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldFN1YnByb29mIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllZCIsInByb29mU3RlcFN0cmluZyIsInRyYWNlIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdWJwcm9vZlVuaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1YnN0aXR1dGlvbnMiLCJ2ZXJpZnlBbmRVbmlmeSIsInZlcmlmaWVkQW5kVW5pZmllZCIsImFzc2lnbm1lbnRzIiwidmVyaWZpZWQiLCJ2ZXJpZnkiLCJwcm9vZlN0ZXAiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFByb29mU3RlcCIsInN1YnByb29mVmVyaWZpZWQiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInJlZmVyZW5jZVZlcmlmaWVkIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZpbGVDb250ZXh0IiwiU3VicHJvb2YiLCJkb20iLCJTdGF0ZW1lbnQiLCJSZWZlcmVuY2UiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCOzREQUNRO29FQUNFOzJCQUdROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsQyxXQUFlQSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEbkJKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBYSxJQUFJLENBQUNOLFNBQVMsS0FBSztnQkFFdEMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhLEVBQUVDLE9BQU87O2dCQUMxQixJQUFJQztnQkFFSixJQUFJ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