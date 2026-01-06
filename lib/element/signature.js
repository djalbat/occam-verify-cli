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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _string = require("../utilities/string");
var _json = require("../utilities/json");
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
var _default = (0, _elements.define)((_Signature = /*#__PURE__*/ function() {
    function Signature(context, string, node, terms) {
        _class_call_check(this, Signature);
        this.context = context;
        this.string = string;
        this.node = node;
        this.terms = terms;
    }
    _create_class(Signature, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                    var term = termB, context = generalContext, variable = variableFromTerm(term, context);
                    if (variable !== null) {
                        var term1 = termA, termType = term1.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
                        if (termTypeEqualToOrSubTypeOfVariableType) {
                            var TermSubstitution = _elements.default.TermSubstitution, context1 = specificContext, termSubstitution = TermSubstitution.fromTernAndVariable(term1, variable, context1), substitution = termSubstitution; ///
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
                var terms = (0, _json.termsFromJSON)(json, context), signatureString = (0, _string.signatureStringFromTerms)(terms), string = signatureString, signature = new Signature(string, terms);
                return signature;
            }
        }
    ]);
    return Signature;
}(), _define_property(_Signature, "name", "Signature"), _Signature));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzaWduYXR1cmVTdHJpbmdGcm9tVGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IG1hdGNoLCBjb21wYXJlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2lnbmF0dXJlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBtYXRjaChzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zQSA9IHRoaXMudGVybXMsICAvLy9cbiAgICAgICAgICB0ZXJtc0IgPSB0ZXJtcywgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRlcm1zQSwgdGVybXNCLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUIsIC8vL1xuICAgICAgICAgICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtQSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb21wYXJlcyA9IGNvbXBhcmUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb21wYXJlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29ycmVsYXRpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IGFycmF5ID0gc3Vic3RpdHV0aW9ucy5nZXRBcnJheSgpLFxuICAgICAgICAgIGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29ycmVsYXRlcykge1xuICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0aGlzLnRlcm1zKSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaWduYXR1cmVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmVTdHJpbmcgPSBzaWduYXR1cmVTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgIHN0cmluZyA9IHNpZ25hdHVyZVN0cmluZywgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShzdHJpbmcsIHRlcm1zKTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wYXJlIiwiY29ycmVsYXRlIiwiZGVmaW5lIiwiU2lnbmF0dXJlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtcyIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VGVybXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsInRyYWNlIiwiZXZlcnkiLCJ0ZXJtIiwidGVybVZlcmlmaWVzIiwidmVyaWZpZXNBaGVhZCIsImRlYnVnIiwic2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybXNBIiwidGVybXNCIiwibWF0Y2hlcyIsInRlcm1BIiwidGVybUIiLCJ2YXJpYWJsZSIsInZhcmlhYmxlRnJvbVRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVGVybVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwidGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb21wYXJlcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImFycmF5IiwiZ2V0QXJyYXkiLCJjb21wYXJlcyIsInN1YnN0aXR1dGlvblRlcm0iLCJnZXRUZXJtIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNFcXVhbFRvIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlcyIsInRvSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwic2lnbmF0dXJlU3RyaW5nRnJvbVRlcm1zIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7eUJBVitCO2dFQUVWO3NCQUdvQjtvQkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQVFBLFFBQThCQyx5QkFBYyxDQUE1Q0QsT0FBT0UsVUFBdUJELHlCQUFjLENBQXJDQyxTQUFTQyxZQUFjRix5QkFBYyxDQUE1QkU7SUFFeEIsV0FBZUMsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEZEo7UUFFeEIsSUFBSSxDQUFDQyxPQUFP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