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
var match = _necessary.arrayUtilities.match, correlate = _necessary.arrayUtilities.correlate;
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
            key: "correlateSubstitutions",
            value: function correlateSubstitutions(substitutions, context) {
                var substitutionsCorrelates;
                var signatureString = this.string, substitutionsString = substitutions.asString();
                context.trace("Correlating the '".concat(substitutionsString, "' substitutions against the ").concat(signatureString, " signature..."));
                var array = substitutions.getArray(), correlates = correlate(this.terms, array, function(term, substitution) {
                    var substitutionTerm = substitution.getTerm(), substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);
                    if (substitutionTermEqualToTerm) {
                        return true;
                    }
                });
                substitutionsCorrelates = correlates; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2lnbmF0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVRlcm1zLCB2YXJpYWJsZUZyb21UZXJtLCB0ZXJtc0Zyb21UZXJtTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBtYXRjaCwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU2lnbmF0dXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBtYXRjaChzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zQSA9IHRoaXMudGVybXMsICAvLy9cbiAgICAgICAgICB0ZXJtc0IgPSB0ZXJtcywgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRlcm1zQSwgdGVybXNCLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQVR5cGUgPSB0ZXJtQS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtQlR5cGUgPSB0ZXJtQi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtQVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtQiA9IHRlcm1BVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtQlR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFUeXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybUIpIHtcbiAgICAgICAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICB0ZXJtO1xuXG5cbiAgICAgICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUI7IC8vL1xuXG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1BOyAvLy9cblxuICAgICAgICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcztcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29ycmVsYXRlcyA9IGNvcnJlbGF0ZSh0aGlzLnRlcm1zLCBhcnJheSwgKHRlcm0sIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVGVybSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb25UZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gY29ycmVsYXRlczsgIC8vL1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKHN0cmluZywgdGVybXMpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKHN0cmluZywgdGVybXMpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImNvcnJlbGF0ZSIsImRvbUFzc2lnbmVkIiwiU2lnbmF0dXJlIiwic3RyaW5nIiwidGVybXMiLCJnZXRTdHJpbmciLCJnZXRUZXJtcyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsInRyYWNlIiwiZXZlcnkiLCJ0ZXJtIiwidGVybVZlcmlmaWVzIiwidmVyaWZpZXNBaGVhZCIsImRlYnVnIiwic2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybXNBIiwidGVybXNCIiwibWF0Y2hlcyIsInRlcm1BIiwidGVybUIiLCJ0ZXJtQVR5cGUiLCJnZXRUeXBlIiwidGVybUJUeXBlIiwidGVybUFUeXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybUIiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybSIsIlRlcm1TdWJzdGl0dXRpb24iLCJkb20iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImFycmF5IiwiZ2V0QXJyYXkiLCJjb3JyZWxhdGVzIiwic3Vic3RpdHV0aW9uVGVybSIsImdldFRlcm0iLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJ0b0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJ0ZXJtc0Zyb21KU09OIiwic3RyaW5nRnJvbVRlcm1zIiwiZnJvbVNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmVOb2RlIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwidGVybXNGcm9tVGVybU5vZGVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7eUJBVitCOzJEQUVmO29CQUdnQztvQkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RSxJQUFRQSxRQUFxQkMseUJBQWMsQ0FBbkNELE9BQU9FLFlBQWNELHlCQUFjLENBQTVCQztJQUVmLFdBQWVDLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FB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