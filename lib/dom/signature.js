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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _dom = require("../dom");
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
var _Signature;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2lnbmF0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTaWduYXR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm1zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJHtzaWduYXR1cmVTdHJpbmd9IHNpZ25hdHVyZS4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSB0aGlzLnRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAke3NpZ25hdHVyZVN0cmluZ30gc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKHN0cmluZywgdGVybXMpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKHN0cmluZywgdGVybXMpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHRlcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMucmVkdWNlKCh0ZXJtc1N0cmluZywgdGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSAodGVybXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGVybXNTdHJpbmd9LCAke3Rlcm1TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybVN0cmluZztcblxuICAgICAgICAgIHJldHVybiB0ZXJtc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtc1N0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU2lnbmF0dXJlIiwic3RyaW5nIiwidGVybXMiLCJnZXRTdHJpbmciLCJnZXRUZXJtcyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInNpZ25hdHVyZVN0cmluZyIsInRyYWNlIiwiZXZlcnkiLCJ0ZXJtIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsImRlYnVnIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidGVybXNGcm9tSlNPTiIsInN0cmluZ0Zyb21UZXJtcyIsInNpZ25hdHVyZSIsImZyb21TaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlTm9kZSIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsIm5hbWUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dCIsIm1hcCIsInRlcm1Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1zU3RyaW5nIiwicmVkdWNlIiwidGVybVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7NERBTnlCO21CQUVHO29CQUNLO29CQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEQsV0FBZUEsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxPQUFPO2dCQUNaLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQixJQUFJLENBQUNQLE1BQU07Z0JBRW5DSyxRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJELGlCQUFnQjtnQkFFL0NELFdBQVcsSUFBSSxDQUFDTCxLQUFLLENBQUNRLEtBQUssQ0FBQyxTQUFDQztvQkFDM0IsSUFBTUMsZUFBZUQsS0FBS04sTUFBTSxDQUFDQyxTQUFTO3dCQUN4QyxJQUFNTyxnQkFBZ0I7d0JBRXRCLE9BQU9BO29CQUNUO29CQUVBLElBQUlELGNBQWM7d0JBQ2hCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUwsVUFBVTtvQkFDWkQsUUFBUVEsS0FBSyxDQUFDLEFBQUMsbUJBQWtDLE9BQWhCTixpQkFBZ0I7Z0JBQ25EO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWUMsSUFBQUEsc0JBQWdCLEVBQUMsSUFBSSxDQUFDZixLQUFLLEdBQ3ZDQSxRQUFRYyxXQUNSRSxPQUFPO29CQUNMaEIsT0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2dCO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNbEIsUUFBUW1CLElBQUFBLG1CQUFhLEVBQUNILE1BQU1FLGNBQzVCbkIsU0FBU3FCLGdCQUFnQnBCLFFBQ3pCcUIsWUFBWSxJQUFJdkIsVUFBVUMsUUFBUUM7Z0JBRXhDLE9BQU9xQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVMLFdBQVc7Z0JBQ2pELElBQU1NLFlBQVlELGNBQWNFLFlBQVksSUFDdEN6QixRQUFRMEIsbUJBQW1CRixXQUFXTixjQUN0Q25CLFNBQVNxQixnQkFBZ0JwQixRQUN6QnFCLFlBQVksSUFBSXZCLFVBQVVDLFFBQVFDO2dCQUV4QyxPQUFPcUI7WUFDVDs7OztLQWpCQSw2QkFBT00sUUFBTztBQW9CaEIsU0FBU0QsbUJBQW1CRixTQUFTLEVBQUVOLFdBQVc7SUFDaEQsSUFBTVUsZUFBZUMsY0FBWSxDQUFDQyxXQUFXLENBQUNaLGNBQ3hDZCxVQUFVd0IsY0FDVjVCLFFBQVF3QixVQUFVTyxHQUFHLENBQUMsU0FBQ0M7UUFDckIsSUFBTXZCLE9BQU93QixJQUFBQSxzQkFBZ0IsRUFBQ0QsVUFBVTVCO1FBRXhDLE9BQU9LO0lBQ1Q7SUFFTixPQUFPVDtBQUNUO0FBRUEsU0FBU29CLGdCQUFnQnBCLEtBQUs7SUFDNUIsSUFBTWtDLGNBQWNsQyxNQUFNbUMsTUFBTSxDQUFDLFNBQUNELGFBQWF6QjtRQUN2QyxJQUFNMkIsYUFBYTNCLEtBQUtSLFNBQVM7UUFFakNpQyxjQUFjLEFBQUNBLGdCQUFnQixPQUNmLEFBQUMsR0FBa0JFLE9BQWhCRixhQUFZLE1BQWUsT0FBWEUsY0FDakJBO1FBRWxCLE9BQU9GO0lBQ1QsR0FBRyxPQUNIbkMsU0FBUyxBQUFDLElBQWUsT0FBWm1DLGFBQVk7SUFFL0IsT0FBT25DO0FBQ1QifQ==