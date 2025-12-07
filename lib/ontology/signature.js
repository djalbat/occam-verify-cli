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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
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
var _default = (0, _ontology.define)((_Signature = /*#__PURE__*/ function() {
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
                var signatureString = this.string;
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
                    var termAType = termA.getType(), termBType = termB.getType(), termATypeEqualToOrSubTypeOfTermB = termAType.isEqualToOrSubTypeOf(termBType);
                    if (termATypeEqualToOrSubTypeOfTermB) {
                        var context, term;
                        context = generalContext; ///
                        term = termB; ///
                        var variable = (0, _node.variableFromTerm)(term, context);
                        context = specificContext; ///
                        term = termA; ///
                        var TermSubstitution = _ontology.default.TermSubstitution, termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context), substitution = termSubstitution; ///
                        substitutions.addSubstitution(substitution, specificContext);
                        return true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zaWduYXR1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVRlcm1zLCB2YXJpYWJsZUZyb21UZXJtLCB0ZXJtc0Zyb21UZXJtTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpZ25hdHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IHRoaXMudGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgbWF0Y2goc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBzaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtc0EgPSB0aGlzLnRlcm1zLCAgLy8vXG4gICAgICAgICAgdGVybXNCID0gdGVybXMsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0ZXJtc0EsIHRlcm1zQiwgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUFUeXBlID0gdGVybUEuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdGVybUJUeXBlID0gdGVybUIuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdGVybUFUeXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybUIgPSB0ZXJtQVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybUJUeXBlKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BVHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1CKSB7XG4gICAgICAgICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgdGVybTtcblxuICAgICAgICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtQjsgLy8vXG5cbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUE7IC8vL1xuXG4gICAgICAgICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zQ29tcGFyZXM7XG4gIH1cblxuICBjb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29ycmVsYXRlcyA9IGNvcnJlbGF0ZSh0aGlzLnRlcm1zLCBhcnJheSwgKHRlcm0sIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVGVybSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb25UZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChjb3JyZWxhdGVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShzdHJpbmcsIHRlcm1zKTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoc3RyaW5nLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiY29tcGFyZSIsImNvcnJlbGF0ZSIsImRlZmluZSIsIlNpZ25hdHVyZSIsInN0cmluZyIsInRlcm1zIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybXMiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJ0cmFjZSIsImV2ZXJ5IiwidGVybSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJkZWJ1ZyIsInNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1zQSIsInRlcm1zQiIsIm1hdGNoZXMiLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFUeXBlIiwiZ2V0VHlwZSIsInRlcm1CVHlwZSIsInRlcm1BVHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1CIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2YXJpYWJsZSIsInZhcmlhYmxlRnJvbVRlcm0iLCJUZXJtU3Vic3RpdHV0aW9uIiwib250b2xvZ3kiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvbXBhcmVzIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiYXJyYXkiLCJnZXRBcnJheSIsImNvbXBhcmVzIiwic3Vic3RpdHV0aW9uVGVybSIsImdldFRlcm0iLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVzIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJzdHJpbmdGcm9tVGVybXMiLCJmcm9tU2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7Z0VBRVY7b0JBRzJCO29CQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRFLElBQVFBLFFBQThCQyx5QkFBYyxDQUE1Q0QsT0FBT0UsVUFBdUJELHlCQUFjLENBQXJDQyxTQUFTQyxZQUFjRix5QkFBYyxDQUE1QkU7SUFFeEIsV0FBZUMsSUFBQUEsZ0JBQU0s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