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
var _necessary = require("necessary");
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
var _json = require("../utilities/json");
var _node = require("../utilities/node");
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
var _Signature;
var match = _necessary.arrayUtilities.match, compare = _necessary.arrayUtilities.compare, correlate = _necessary.arrayUtilities.correlate;
var _default = (0, _structure.define)((_Signature = /*#__PURE__*/ function() {
    function Signature(string, terms) {
        _class_call_check(this, Signature);
        this.string = string;
        this.terms = terms;
    }
    _create_class(Signature, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getTerms",
            value: function getTerms() {
                return this.terms;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies;
                var signatureString = this.string; ///
                context.trace("Verifying the ".concat(signatureString, " signature..."));
                verifies = this.terms.every(function(term) {
                    var termVerifies = term.verify(context, function() {
                        var verifiesAhead = true;
                        return verifiesAhead;
                    });
                    if (termVerifies) {
                        return true;
                    }
                });
                if (verifies) {
                    context.debug("...verified the ".concat(signatureString, " signature."));
                }
                return verifies;
            }
        },
        {
            key: "match",
            value: function match1(signature, substitutions, generalContext, specificContext) {
                var terms = signature.getTerms(), termsA = this.terms, termsB = terms, matches = match(termsA, termsB, function(termA, termB) {
                    var term = termB, context = generalContext, variable = (0, _node.variableFromTerm)(term, context);
                    if (variable !== null) {
                        var term1 = termA, termType = term1.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
                        if (termTypeEqualToOrSubTypeOfVariableType) {
                            var TermSubstitution = _structure.default.TermSubstitution, context1 = specificContext, termSubstitution = TermSubstitution.fromTernAndVariable(term1, variable, context1), substitution = termSubstitution; ///
                            substitutions.addSubstitution(substitution, context1);
                            return true;
                        }
                    }
                });
                return matches;
            }
        },
        {
            key: "compareSubstitutions",
            value: function compareSubstitutions(substitutions, context) {
                var substitutionsCompares = false;
                var signatureString = this.string, substitutionsString = substitutions.asString();
                context.trace("Comparing the '".concat(substitutionsString, "' substitutions against the ").concat(signatureString, " signature..."));
                var array = substitutions.getArray(), compares = compare(this.terms, array, function(term, substitution) {
                    var substitutionTerm = substitution.getTerm(), substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);
                    if (substitutionTermEqualToTerm) {
                        return true;
                    }
                });
                if (compares) {
                    substitutionsCompares = true;
                }
                if (substitutionsCompares) {
                    context.debug("...compared the '".concat(substitutionsString, "' substitutions against the ").concat(signatureString, " signature."));
                }
                return substitutionsCompares;
            }
        },
        {
            key: "correlateSubstitutions",
            value: function correlateSubstitutions(substitutions, context) {
                var substitutionsCorrelates = false;
                var signatureString = this.string, substitutionsString = substitutions.asString();
                context.trace("Correlating the '".concat(substitutionsString, "' substitutions against the ").concat(signatureString, " signature..."));
                var array = substitutions.getArray(), correlates = correlate(this.terms, array, function(term, substitution) {
                    var substitutionTerm = substitution.getTerm(), substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);
                    if (substitutionTermEqualToTerm) {
                        return true;
                    }
                });
                if (correlates) {
                    substitutionsCorrelates = true;
                }
                if (substitutionsCorrelates) {
                    context.debug("...correlated the '".concat(substitutionsString, "' substitutions against the ").concat(signatureString, " signature."));
                }
                return substitutionsCorrelates;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termsJSON = (0, _json.termsToTermsJSON)(this.terms), terms = termsJSON, json = {
                    terms: terms
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var terms = (0, _json.termsFromJSON)(json, context), string = (0, _node.stringFromTerms)(terms), signature = new Signature(string, terms);
                return signature;
            }
        },
        {
            key: "fromSignatureNode",
            value: function fromSignatureNode(signatureNode, context) {
                var termNodes = signatureNode.getTermNodes(), terms = (0, _node.termsFromTermNodes)(termNodes, context), string = (0, _node.stringFromTerms)(terms), signature = new Signature(string, terms);
                return signature;
            }
        }
    ]);
    return Signature;
}(), _define_property(_Signature, "name", "Signature"), _Signature));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvc2lnbmF0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIHRlcm1zVG9UZXJtc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21UZXJtcywgdmFyaWFibGVGcm9tVGVybSwgdGVybXNGcm9tVGVybU5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGNvbXBhcmUsIGNvcnJlbGF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaWduYXR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm1zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IHRoaXMudGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgbWF0Y2goc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBzaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtc0EgPSB0aGlzLnRlcm1zLCAgLy8vXG4gICAgICAgICAgdGVybXNCID0gdGVybXMsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0ZXJtc0EsIHRlcm1zQiwgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1CLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc0NvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IGFycmF5ID0gc3Vic3RpdHV0aW9ucy5nZXRBcnJheSgpLFxuICAgICAgICAgIGNvbXBhcmVzID0gY29tcGFyZSh0aGlzLnRlcm1zLCBhcnJheSwgKHRlcm0sIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVGVybSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb25UZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChjb21wYXJlcykge1xuICAgICAgc3Vic3RpdHV0aW9uc0NvbXBhcmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvbXBhcmVzO1xuICB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29ycmVsYXRlcyA9IGNvcnJlbGF0ZSh0aGlzLnRlcm1zLCBhcnJheSwgKHRlcm0sIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVGVybSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb25UZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChjb3JyZWxhdGVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShzdHJpbmcsIHRlcm1zKTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoc3RyaW5nLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiY29tcGFyZSIsImNvcnJlbGF0ZSIsImRlZmluZSIsIlNpZ25hdHVyZSIsInN0cmluZyIsInRlcm1zIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybXMiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJ0cmFjZSIsImV2ZXJ5IiwidGVybSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJkZWJ1ZyIsInNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1zQSIsInRlcm1zQiIsIm1hdGNoZXMiLCJ0ZXJtQSIsInRlcm1CIiwidmFyaWFibGUiLCJ2YXJpYWJsZUZyb21UZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlRlcm1TdWJzdGl0dXRpb24iLCJzdHJ1Y3R1cmUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvbXBhcmVzIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiYXJyYXkiLCJnZXRBcnJheSIsImNvbXBhcmVzIiwic3Vic3RpdHV0aW9uVGVybSIsImdldFRlcm0iLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVzIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJzdHJpbmdGcm9tVGVybXMiLCJmcm9tU2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7aUVBRVQ7b0JBRzBCO29CQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRFLElBQVFBLFFBQThCQyx5QkFBYyxDQUE1Q0QsT0FBT0UsVUFBdUJELHlCQUFjLENBQXJDQyxTQUFTQyxZQUFjRix5QkFBYyxDQUE1QkU7SUFFeEIsV0FBZUMsSUFBQUEsaUJBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxLQUFLO2dDQURDRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1AsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDSyxRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJELGlCQUFnQjtnQkFFL0NELFdBQVcsSUFBSSxDQUFDTCxLQUFLLENBQUNRLEtBQUssQ0FBQyxTQUFDQztvQkFDM0IsSUFBTUMsZUFBZUQsS0FBS04sTUFBTSxDQUFDQyxTQUFTO3dCQUN4QyxJQUFNTyxnQkFBZ0I7d0JBRXRCLE9BQU9BO29CQUNUO29CQUVBLElBQUlELGNBQWM7d0JBQ2hCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUwsVUFBVTtvQkFDWkQsUUFBUVEsS0FBSyxDQUFDLEFBQUMsbUJBQWtDLE9BQWhCTixpQkFBZ0I7Z0JBQ25EO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBWixLQUFBQTttQkFBQUEsU0FBQUEsT0FBTW9CLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQzdELElBQU1oQixRQUFRYSxVQUFVWCxRQUFRLElBQzFCZSxTQUFTLElBQUksQ0FBQ2pCLEtBQUssRUFDbkJrQixTQUFTbEIsT0FDVG1CLFVBQVUxQixNQUFNd0IsUUFBUUMsUUFBUSxTQUFDRSxPQUFPQztvQkFDdEMsSUFBTVosT0FBT1ksT0FDUGpCLFVBQVVXLGdCQUNWTyxXQUFXQyxJQUFBQSxzQkFBZ0IsRUFBQ2QsTUFBTUw7b0JBRXhDLElBQUlrQixhQUFhLE1BQU07d0JBQ3JCLElBQU1iLFFBQU9XLE9BQ1BJLFdBQVdmLE1BQUtnQixPQUFPLElBQ3ZCQyxlQUFlSixTQUFTRyxPQUFPLElBQy9CRSx5Q0FBeUNILFNBQVNJLG9CQUFvQixDQUFDRjt3QkFFN0UsSUFBSUMsd0NBQXdDOzRCQUMxQyxJQUFNLEFBQUVFLG1CQUFxQkMsa0JBQVMsQ0FBOUJELGtCQUNGekIsV0FBVVksaUJBQ1ZlLG1CQUFtQkYsaUJBQWlCRyxtQkFBbUIsQ0FBQ3ZCLE9BQU1hLFVBQVVsQixXQUN4RTZCLGVBQWVGLGtCQUFtQixHQUFHOzRCQUUzQ2pCLGNBQWNvQixlQUFlLENBQUNELGNBQWM3Qjs0QkFFNUMsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFTixPQUFPZTtZQUNUOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJyQixhQUFhLEVBQUVWLE9BQU87Z0JBQ3pDLElBQUlnQyx3QkFBd0I7Z0JBRTVCLElBQU05QixrQkFBa0IsSUFBSSxDQUFDUCxNQUFNLEVBQzdCc0Msc0JBQXNCdkIsY0FBY3dCLFFBQVE7Z0JBRWxEbEMsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQW1FRCxPQUFsRCtCLHFCQUFvQixnQ0FBOEMsT0FBaEIvQixpQkFBZ0I7Z0JBRWxHLElBQU1pQyxRQUFRekIsY0FBYzBCLFFBQVEsSUFDOUJDLFdBQVc5QyxRQUFRLElBQUksQ0FBQ0ssS0FBSyxFQUFFdUMsT0FBTyxTQUFDOUIsTUFBTXdCO29CQUMzQyxJQUFNUyxtQkFBbUJULGFBQWFVLE9BQU8sSUFDdkNDLDhCQUE4QkYsaUJBQWlCRyxTQUFTLENBQUNwQztvQkFFL0QsSUFBSW1DLDZCQUE2Qjt3QkFDL0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixJQUFJSCxVQUFVO29CQUNaTCx3QkFBd0I7Z0JBQzFCO2dCQUVBLElBQUlBLHVCQUF1QjtvQkFDekJoQyxRQUFRUSxLQUFLLENBQUMsQUFBQyxvQkFBcUVOLE9BQWxEK0IscUJBQW9CLGdDQUE4QyxPQUFoQi9CLGlCQUFnQjtnQkFDdEc7Z0JBRUEsT0FBTzhCO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCaEMsYUFBYSxFQUFFVixPQUFPO2dCQUMzQyxJQUFJMkMsMEJBQTBCO2dCQUU5QixJQUFNekMsa0JBQWtCLElBQUksQ0FBQ1AsTUFBTSxFQUM3QnNDLHNCQUFzQnZCLGNBQWN3QixRQUFRO2dCQUVsRGxDLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG9CQUFxRUQsT0FBbEQrQixxQkFBb0IsZ0NBQThDLE9BQWhCL0IsaUJBQWdCO2dCQUVwRyxJQUFNaUMsUUFBUXpCLGNBQWMwQixRQUFRLElBQzlCUSxhQUFhcEQsVUFBVSxJQUFJLENBQUNJLEtBQUssRUFBRXVDLE9BQU8sU0FBQzlCLE1BQU13QjtvQkFDL0MsSUFBTVMsbUJBQW1CVCxhQUFhVSxPQUFPLElBQ3ZDQyw4QkFBOEJGLGlCQUFpQkcsU0FBUyxDQUFDcEM7b0JBRS9ELElBQUltQyw2QkFBNkI7d0JBQy9CLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sSUFBSUksWUFBWTtvQkFDZEQsMEJBQTBCO2dCQUM1QjtnQkFFQSxJQUFJQSx5QkFBeUI7b0JBQzNCM0MsUUFBUVEsS0FBSyxDQUFDLEFBQUMsc0JBQXVFTixPQUFsRCtCLHFCQUFvQixnQ0FBOEMsT0FBaEIvQixpQkFBZ0I7Z0JBQ3hHO2dCQUVBLE9BQU95QztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVlDLElBQUFBLHNCQUFnQixFQUFDLElBQUksQ0FBQ25ELEtBQUssR0FDdkNBLFFBQVFrRCxXQUNSRSxPQUFPO29CQUNMcEQsT0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT29EO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFaEQsT0FBTztnQkFDM0IsSUFBTUosUUFBUXNELElBQUFBLG1CQUFhLEVBQUNGLE1BQU1oRCxVQUM1QkwsU0FBU3dELElBQUFBLHFCQUFlLEVBQUN2RCxRQUN6QmEsWUFBWSxJQUFJZixVQUFVQyxRQUFRQztnQkFFeEMsT0FBT2E7WUFDVDs7O1lBRU8yQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRXJELE9BQU87Z0JBQzdDLElBQU1zRCxZQUFZRCxjQUFjRSxZQUFZLElBQ3RDM0QsUUFBUTRELElBQUFBLHdCQUFrQixFQUFDRixXQUFXdEQsVUFDdENMLFNBQVN3RCxJQUFBQSxxQkFBZSxFQUFDdkQsUUFDekJhLFlBQVksSUFBSWYsVUFBVUMsUUFBUUM7Z0JBRXhDLE9BQU9hO1lBQ1Q7Ozs7S0FqQkEsNkJBQU9nRCxRQUFPIn0=