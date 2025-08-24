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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _default = (0, _dom.domAssigned)((_Signature = /*#__PURE__*/ function() {
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
                        var TermSubstitution = _dom.default.TermSubstitution, termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context), substitution = termSubstitution; ///
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
            value: function fromJSON(json, fileContext) {
                var terms = (0, _json.termsFromJSON)(json, fileContext), string = (0, _node.stringFromTerms)(terms), signature = new Signature(string, terms);
                return signature;
            }
        },
        {
            key: "fromSignatureNode",
            value: function fromSignatureNode(signatureNode, fileContext) {
                var termNodes = signatureNode.getTermNodes(), terms = (0, _node.termsFromTermNodes)(termNodes, fileContext), string = (0, _node.stringFromTerms)(terms), signature = new Signature(string, terms);
                return signature;
            }
        }
    ]);
    return Signature;
}(), _define_property(_Signature, "name", "Signature"), _Signature));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2lnbmF0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVRlcm1zLCB2YXJpYWJsZUZyb21UZXJtLCB0ZXJtc0Zyb21UZXJtTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU2lnbmF0dXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBtYXRjaChzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zQSA9IHRoaXMudGVybXMsICAvLy9cbiAgICAgICAgICB0ZXJtc0IgPSB0ZXJtcywgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRlcm1zQSwgdGVybXNCLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQVR5cGUgPSB0ZXJtQS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtQlR5cGUgPSB0ZXJtQi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtQVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtQiA9IHRlcm1BVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtQlR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFUeXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybUIpIHtcbiAgICAgICAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICB0ZXJtO1xuXG5cbiAgICAgICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUI7IC8vL1xuXG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1BOyAvLy9cblxuICAgICAgICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc0NvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb21wYXJlcyA9IGNvbXBhcmUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb21wYXJlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvcnJlbGF0aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGhpcy50ZXJtcyksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2lnbmF0dXJlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoc3RyaW5nLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoc3RyaW5nLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiY29tcGFyZSIsImNvcnJlbGF0ZSIsImRvbUFzc2lnbmVkIiwiU2lnbmF0dXJlIiwic3RyaW5nIiwidGVybXMiLCJnZXRTdHJpbmciLCJnZXRUZXJtcyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsInRyYWNlIiwiZXZlcnkiLCJ0ZXJtIiwidGVybVZlcmlmaWVzIiwidmVyaWZpZXNBaGVhZCIsImRlYnVnIiwic2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybXNBIiwidGVybXNCIiwibWF0Y2hlcyIsInRlcm1BIiwidGVybUIiLCJ0ZXJtQVR5cGUiLCJnZXRUeXBlIiwidGVybUJUeXBlIiwidGVybUFUeXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybUIiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybSIsIlRlcm1TdWJzdGl0dXRpb24iLCJkb20iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvbXBhcmVzIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiYXJyYXkiLCJnZXRBcnJheSIsImNvbXBhcmVzIiwic3Vic3RpdHV0aW9uVGVybSIsImdldFRlcm0iLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVzIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidGVybXNGcm9tSlNPTiIsInN0cmluZ0Zyb21UZXJtcyIsImZyb21TaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlTm9kZSIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3lCQVYrQjsyREFFZjtvQkFHZ0M7b0JBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEUsSUFBUUEsUUFBOEJDLHlCQUFjLENBQTVDRCxPQUFPRSxVQUF1QkQseUJBQWMsQ0FBckNDLFNBQVNDLFlBQWNGLHlCQUFjLENBQTVCRTtJQUV4QixX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