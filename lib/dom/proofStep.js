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
                var unified = false;
                if (this.statement !== null) {
                    var proofStepString = this.string; ///
                    context.trace("Unifying the '".concat(proofStepString, "' proof step's statement..."));
                    unified = _unify.default.some(function(unifyMixin) {
                        var unified = unifyMixin(_this.statement, _this.reference, substitutions, context);
                        if (unified) {
                            return true;
                        }
                    });
                    if (unified) {
                        context.debug("...unified the '".concat(proofStepString, "' proof step's statement."));
                    }
                }
                return unified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var statementString = this.statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement..."));
                var specificContext = context, generalContext = context, substitutions = _substitutions.default.fromNothing();
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement."));
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
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var verified = false;
                if (false) {
                ///
                } else if (this.subproof !== null) {
                    var subproofVerified = this.subproof.verify(substitutions, context);
                    verified = subproofVerified; ///
                } else if (this.statement !== null) {
                    var proofStepString = this.string; ///
                    context.trace("Verifying the '".concat(proofStepString, "' proof step's statement..."));
                    var qualified = this.isQualified(), stated = qualified; ///
                    if (!verified) {
                        var statementVerified = this.statement.verify(assignments, stated, context);
                        verified = statementVerified; ///
                    }
                    if (!verified) {
                        var _$assignments = null, statementUnified = this.statement.unify(_$assignments, stated, context);
                        verified = statementUnified; ///
                    }
                    if (verified) {
                        context.debug("...verified the '".concat(proofStepString, "' proof step's statement."));
                    }
                } else {
                    var proofStepString1 = this.string;
                    context.debug("Cannot verify the '".concat(proofStepString1, "' proof step because it is nonsense."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Byb29mU3RlcC91bmlmeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3VicHJvb2YsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdWJwcm9vZiA9IHN1YnByb29mO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN1YnByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcCdzIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0aGlzLnN0YXRlbWVudCwgdGhpcy5yZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwJ3Mgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gdGhpcy5zdWJwcm9vZi51bmlmeVN1YnByb29mQXNzZXJ0aW9uKHN1YnByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZWZXJpZmllZCA9IHRoaXMuc3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHN1YnByb29mVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAncyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAncyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb29mU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnByb29mID0gbnVsbCxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3RyaW5nLCBzdWJwcm9vZiwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3VicHJvb2YsIFN0YXRlbWVudCwgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHByb29mU3RlcE5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IFN1YnByb29mLmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdHJpbmcsIHN1YnByb29mLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByb29mU3RlcCIsInN0cmluZyIsInN1YnByb29mIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0U3VicHJvb2YiLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsInVuaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ1bmlmaWVkIiwicHJvb2ZTdGVwU3RyaW5nIiwidHJhY2UiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInVuaWZ5U3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwidmVyaWZpZWQiLCJzdWJwcm9vZlZlcmlmaWVkIiwic3RhdGVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJmcm9tU3RhdGVtZW50IiwicHJvb2ZTdGVwIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwiZmlsZUNvbnRleHQiLCJTdWJwcm9vZiIsImRvbSIsIlN0YXRlbWVudCIsIlJlZmVyZW5jZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7NERBQ1E7b0VBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSTFCLFdBQWVBLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQURuQko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxR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