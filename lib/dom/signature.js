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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _node = require("../utilities/node");
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
var _Signature;
var match = _necessary.arrayUtilities.match;
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
                var verified;
                var signatureString = this.string;
                context.trace("Verifying the ".concat(signatureString, " signature..."));
                verified = this.terms.every(function(term) {
                    var termVerified = term.verify(context, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    if (termVerified) {
                        return true;
                    }
                });
                if (verified) {
                    context.debug("...verified the ".concat(signatureString, " signature."));
                }
                return verified;
            }
        },
        {
            key: "match",
            value: function match1(signature, substitutions, context) {
                var terms = signature.getTerms(), termsA = this.terms, termsB = terms, matches = match(termsA, termsB, function(termA, termB) {
                    var termAType = termA.getType(), termBType = termB.getType(), termATypeEqualToOrSubTypeOfTermB = termAType.isEqualToOrSubTypeOf(termBType);
                    if (termATypeEqualToOrSubTypeOfTermB) {
                        var TermSubstitution = _dom.default.TermSubstitution, termSubstitution = TermSubstitution.fromTerms;
                        return true;
                    }
                });
                return matches;
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
                var terms = (0, _json.termsFromJSON)(json, fileContext), string = stringFromTerms(terms), signature = new Signature(string, terms);
                return signature;
            }
        },
        {
            key: "fromSignatureNode",
            value: function fromSignatureNode(signatureNode, fileContext) {
                var termNodes = signatureNode.getTermNodes(), terms = termsFromTermNodes(termNodes, fileContext), string = stringFromTerms(terms), signature = new Signature(string, terms);
                return signature;
            }
        }
    ]);
    return Signature;
}(), _define_property(_Signature, "name", "Signature"), _Signature));
function termsFromTermNodes(termNodes, fileContext) {
    var localContext = _local.default.fromContext(fileContext), context = localContext, terms = termNodes.map(function(termNode) {
        var term = (0, _node.termFromTermNode)(termNode, context);
        return term;
    });
    return terms;
}
function stringFromTerms(terms) {
    var termsString = terms.reduce(function(termsString, term) {
        var termString = term.getString();
        termsString = termsString !== null ? "".concat(termsString, ", ").concat(termString) : termString;
        return termsString;
    }, null), string = "[".concat(termsString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2lnbmF0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU2lnbmF0dXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICR7c2lnbmF0dXJlU3RyaW5nfSBzaWduYXR1cmUuLi5gKTtcblxuICAgIHZlcmlmaWVkID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBtYXRjaChzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zQSA9IHRoaXMudGVybXMsICAvLy9cbiAgICAgICAgICB0ZXJtc0IgPSB0ZXJtcywgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRlcm1zQSwgdGVybXNCLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQVR5cGUgPSB0ZXJtQS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtQlR5cGUgPSB0ZXJtQi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtQVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtQiA9IHRlcm1BVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtQlR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFUeXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybUIpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJtc1xuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0aGlzLnRlcm1zKSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaWduYXR1cmVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShzdHJpbmcsIHRlcm1zKTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShzdHJpbmcsIHRlcm1zKTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0ZXJtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtcyh0ZXJtcykge1xuICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zLnJlZHVjZSgodGVybXNTdHJpbmcsIHRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHRlcm1zU3RyaW5nID0gKHRlcm1zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Rlcm1zU3RyaW5nfSwgJHt0ZXJtU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1TdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybXNTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJTaWduYXR1cmUiLCJzdHJpbmciLCJ0ZXJtcyIsImdldFN0cmluZyIsImdldFRlcm1zIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwic2lnbmF0dXJlU3RyaW5nIiwidHJhY2UiLCJldmVyeSIsInRlcm0iLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwiZGVidWciLCJzaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zIiwidGVybXNBIiwidGVybXNCIiwibWF0Y2hlcyIsInRlcm1BIiwidGVybUIiLCJ0ZXJtQVR5cGUiLCJnZXRUeXBlIiwidGVybUJUeXBlIiwidGVybUFUeXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybUIiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlRlcm1TdWJzdGl0dXRpb24iLCJkb20iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm1zIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidGVybXNGcm9tSlNPTiIsInN0cmluZ0Zyb21UZXJtcyIsImZyb21TaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlTm9kZSIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsIm5hbWUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dCIsIm1hcCIsInRlcm1Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1zU3RyaW5nIiwicmVkdWNlIiwidGVybVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7eUJBWCtCOzJEQUVmOzREQUNTO29CQUdRO29CQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsT0FBTztnQkFDWixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDUCxNQUFNO2dCQUVuQ0ssUUFBUUcsS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCRCxpQkFBZ0I7Z0JBRS9DRCxXQUFXLElBQUksQ0FBQ0wsS0FBSyxDQUFDUSxLQUFLLENBQUMsU0FBQ0M7b0JBQzNCLElBQU1DLGVBQWVELEtBQUtOLE1BQU0sQ0FBQ0MsU0FBUzt3QkFDeEMsSUFBTU8sZ0JBQWdCO3dCQUV0QixPQUFPQTtvQkFDVDtvQkFFQSxJQUFJRCxjQUFjO3dCQUNoQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlMLFVBQVU7b0JBQ1pELFFBQVFRLEtBQUssQ0FBQyxBQUFDLG1CQUFrQyxPQUFoQk4saUJBQWdCO2dCQUNuRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQVYsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU1rQixTQUFTLEVBQUVDLGFBQWEsRUFBRVYsT0FBTztnQkFDckMsSUFBTUosUUFBUWEsVUFBVVgsUUFBUSxJQUMxQmEsU0FBUyxJQUFJLENBQUNmLEtBQUssRUFDbkJnQixTQUFTaEIsT0FDVGlCLFVBQVV0QixNQUFNb0IsUUFBUUMsUUFBUSxTQUFDRSxPQUFPQztvQkFDdEMsSUFBTUMsWUFBWUYsTUFBTUcsT0FBTyxJQUN6QkMsWUFBWUgsTUFBTUUsT0FBTyxJQUN6QkUsbUNBQW1DSCxVQUFVSSxvQkFBb0IsQ0FBQ0Y7b0JBRXhFLElBQUlDLGtDQUFrQzt3QkFDcEMsSUFBTSxBQUFFRSxtQkFBcUJDLFlBQUcsQ0FBeEJELGtCQUNGRSxtQkFBbUJGLGlCQUFpQkcsU0FBUzt3QkFFbkQsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixPQUFPWDtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVlDLElBQUFBLHNCQUFnQixFQUFDLElBQUksQ0FBQy9CLEtBQUssR0FDdkNBLFFBQVE4QixXQUNSRSxPQUFPO29CQUNMaEMsT0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2dDO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNbEMsUUFBUW1DLElBQUFBLG1CQUFhLEVBQUNILE1BQU1FLGNBQzVCbkMsU0FBU3FDLGdCQUFnQnBDLFFBQ3pCYSxZQUFZLElBQUlmLFVBQVVDLFFBQVFDO2dCQUV4QyxPQUFPYTtZQUNUOzs7WUFFT3dCLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFSixXQUFXO2dCQUNqRCxJQUFNSyxZQUFZRCxjQUFjRSxZQUFZLElBQ3RDeEMsUUFBUXlDLG1CQUFtQkYsV0FBV0wsY0FDdENuQyxTQUFTcUMsZ0JBQWdCcEMsUUFDekJhLFlBQVksSUFBSWYsVUFBVUMsUUFBUUM7Z0JBRXhDLE9BQU9hO1lBQ1Q7Ozs7S0FqQkEsNkJBQU82QixRQUFPO0FBb0JoQixTQUFTRCxtQkFBbUJGLFNBQVMsRUFBRUwsV0FBVztJQUNoRCxJQUFNUyxlQUFlQyxjQUFZLENBQUNDLFdBQVcsQ0FBQ1gsY0FDeEM5QixVQUFVdUMsY0FDVjNDLFFBQVF1QyxVQUFVTyxHQUFHLENBQUMsU0FBQ0M7UUFDckIsSUFBTXRDLE9BQU91QyxJQUFBQSxzQkFBZ0IsRUFBQ0QsVUFBVTNDO1FBRXhDLE9BQU9LO0lBQ1Q7SUFFTixPQUFPVDtBQUNUO0FBRUEsU0FBU29DLGdCQUFnQnBDLEtBQUs7SUFDNUIsSUFBTWlELGNBQWNqRCxNQUFNa0QsTUFBTSxDQUFDLFNBQUNELGFBQWF4QztRQUN2QyxJQUFNMEMsYUFBYTFDLEtBQUtSLFNBQVM7UUFFakNnRCxjQUFjLEFBQUNBLGdCQUFnQixPQUNmLEFBQUMsR0FBa0JFLE9BQWhCRixhQUFZLE1BQWUsT0FBWEUsY0FDakJBO1FBRWxCLE9BQU9GO0lBQ1QsR0FBRyxPQUNIbEQsU0FBUyxBQUFDLElBQWUsT0FBWmtELGFBQVk7SUFFL0IsT0FBT2xEO0FBQ1QifQ==