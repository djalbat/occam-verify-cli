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
var _query = require("../utilities/query");
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
var _ProofStep;
var proofStepNodeQuery = (0, _query.nodeQuery)("/proofStep");
var _default = (0, _dom.domAssigned)((_ProofStep = /*#__PURE__*/ function() {
    function ProofStep(string, statement, reference) {
        _class_call_check(this, ProofStep);
        this.string = string;
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
            key: "isProofStep",
            value: function isProofStep() {
                var proofStep = true;
                return proofStep;
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
                return unified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var verified = false;
                var proofStepString = this.string;
                context.trace("Verifying the '".concat(proofStepString, "' proof step..."));
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
                    context.debug("Cannot verify the '".concat(proofStepString, "' proof step because it is nonsense."));
                }
                if (verified) {
                    context.debug("...verified the '".concat(proofStepString, "' proof step."));
                }
                return verified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var specificContext = context, generalContext = context, substitutions = _substitutions.default.fromNothing();
                statementUnified = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    var equivalences = context.getEquivalences(), substitutionsUnified = equivalences.unifySubstitutions(substitutions);
                    statementUnified = substitutionsUnified; ///
                }
                return statementUnified;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementString = statement.getString(), string = statementString, reference = null, proofStep = new ProofStep(string, statement, reference);
                return proofStep;
            }
        },
        {
            key: "fromProofStepSubproofNode",
            value: function fromProofStepSubproofNode(proofStepSubproofNode, fileContext) {
                var proofStep = null;
                var proofStepNode = proofStepNodeQuery(proofStepSubproofNode);
                if (proofStepNode !== null) {
                    var Statement = _dom.default.Statement, Reference = _dom.default.Reference, node = proofStepNode, string = fileContext.nodeAsString(node), statement = Statement.fromProofStepNode(proofStepNode, fileContext), reference = Reference.fromProofStepNode(proofStepNode, fileContext);
                    proofStep = new ProofStep(string, statement, reference);
                }
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}(), _define_property(_ProofStep, "name", "ProofStep"), _ProofStep));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Byb29mU3RlcC91bmlmeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgcHJvb2ZTdGVwTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1Byb29mU3RlcCgpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXAgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBwcm9wZXJ0eUFzc2VydGlvbi5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwLi4uYCk7XG5cbiAgICB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4odGhpcy5zdGF0ZW1lbnQsIHRoaXMucmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSByZWZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBlcXVpdmFsZW5jZXMudW5pZnlTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9vZlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXBTdWJwcm9vZk5vZGUocHJvb2ZTdGVwU3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwTm9kZSA9IHByb29mU3RlcE5vZGVRdWVyeShwcm9vZlN0ZXBTdWJwcm9vZk5vZGUpO1xuXG4gICAgaWYgKHByb29mU3RlcE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50LCBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9vZlN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInByb29mU3RlcE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvb2ZTdGVwIiwic3RyaW5nIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1Byb29mU3RlcCIsInByb29mU3RlcCIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbnRleHQiLCJ0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVkIiwicHJvb2ZTdGVwU3RyaW5nIiwidHJhY2UiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInZlcmlmaWVkIiwic3RhdGVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJyZWZlcmVuY2VWZXJpZmllZCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1YnN0aXR1dGlvbnMiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwiZnJvbVByb29mU3RlcFN1YnByb29mTm9kZSIsInByb29mU3RlcFN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0IiwicHJvb2ZTdGVwTm9kZSIsIlN0YXRlbWVudCIsImRvbSIsIlJlZmVyZW5jZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tUHJvb2ZTdGVwTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjs0REFDUTtvRUFDRTtxQkFFQTt1QkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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