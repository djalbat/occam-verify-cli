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
var _type = require("../dom/type");
var _unification = require("../utilities/unification");
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
var _default = (0, _dom.domAssigned)(/*#__PURE__*/ function() {
    function Constructor(string, term) {
        _class_call_check(this, Constructor);
        this.string = string;
        this.term = term;
    }
    _create_class(Constructor, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.term.getType();
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.term.isProvisional();
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.term.setType(type);
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, context, verifyAhead) {
                var termUnifies = false;
                var constructor = this, termString = term.getString(), constructorString = constructor.getString();
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."));
                var termUnifiesWithConstructor = (0, _unification.unifyTermWithConstructor)(term, constructor, context);
                if (termUnifiesWithConstructor) {
                    var verifiesAhead;
                    var type = constructor.getType();
                    term.setType(type);
                    verifiesAhead = verifyAhead();
                    termUnifies = verifiesAhead; ///
                }
                if (termUnifies) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."));
                }
                return termUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termJSON = (0, _json.termToTermJSON)(this.term), term = termJSON, json = {
                    term: term
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var term = (0, _json.termFromJSON)(json, context), string = stringFromTerm(term), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Term = _dom.default.Term, term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context), string = stringFromTerm(term), constructor = new Constructor(string, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}());
function stringFromTerm(term) {
    var string;
    var termString = term.getString(), type = term.getType();
    if (type === _type.baseType) {
        string = termString; ///
    } else {
        var typeString = type.getString();
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUpTT04sIHRlcm1Ub1Rlcm1KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7IHJldHVybiB0aGlzLnRlcm0uaXNQcm92aXNpb25hbCgpOyB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7IHRoaXMudGVybS5zZXRUeXBlKHR5cGUpOyB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB2ZXJpZmllc0FoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybVVuaWZpZXMgPSB2ZXJpZmllc0FoZWFkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm1Ub1Rlcm1KU09OKHRoaXMudGVybSksXG4gICAgICAgICAgdGVybSA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm0odGVybSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybSh0ZXJtKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICBpZiAodHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICBzdHJpbmcgPSB0ZXJtU3RyaW5nOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29uc3RydWN0b3IiLCJzdHJpbmciLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImdldFR5cGUiLCJpc1Byb3Zpc2lvbmFsIiwic2V0VHlwZSIsInR5cGUiLCJ1bmlmeVRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllcyIsImNvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZlcmlmaWVzQWhlYWQiLCJkZWJ1ZyIsInRvSlNPTiIsInRlcm1KU09OIiwidGVybVRvVGVybUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtRnJvbUpTT04iLCJzdHJpbmdGcm9tVGVybSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiVGVybSIsImRvbSIsImJhc2VUeXBlIiwidHlwZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO29CQUVTOzJCQUVnQjtvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QyxXQUFlQSxJQUFBQSxnQkFBVyxnQkFBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxJQUFJO2dDQURPRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUNHLE9BQU87WUFBSTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUNJLGFBQWE7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsSUFBSTtnQkFBSSxJQUFJLENBQUNOLElBQUksQ0FBQ0ssT0FBTyxDQUFDQztZQUFPOzs7WUFFekNDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUCxJQUFJLEVBQUVRLE9BQU8sRUFBRUMsV0FBVztnQkFDbEMsSUFBSUMsY0FBYztnQkFFbEIsSUFBTUMsY0FBYyxJQUFJLEVBQ2xCQyxhQUFhWixLQUFLQyxTQUFTLElBQzNCWSxvQkFBb0JGLFlBQVlWLFNBQVM7Z0JBRS9DTyxRQUFRTSxLQUFLLENBQUMsQUFBQyxpQkFBOENELE9BQTlCRCxZQUFXLHFCQUFxQyxPQUFsQkMsbUJBQWtCO2dCQUUvRSxJQUFNRSw2QkFBNkJDLElBQUFBLHFDQUF3QixFQUFDaEIsTUFBTVcsYUFBYUg7Z0JBRS9FLElBQUlPLDRCQUE0QjtvQkFDOUIsSUFBSUU7b0JBRUosSUFBTVgsT0FBT0ssWUFBWVIsT0FBTztvQkFFaENILEtBQUtLLE9BQU8sQ0FBQ0M7b0JBRWJXLGdCQUFnQlI7b0JBRWhCQyxjQUFjTyxlQUFnQixHQUFHO2dCQUNuQztnQkFFQSxJQUFJUCxhQUFhO29CQUNmRixRQUFRVSxLQUFLLENBQUMsQUFBQyxtQkFBZ0RMLE9BQTlCRCxZQUFXLHFCQUFxQyxPQUFsQkMsbUJBQWtCO2dCQUNuRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLElBQUFBLG9CQUFjLEVBQUMsSUFBSSxDQUFDckIsSUFBSSxHQUNuQ0EsT0FBT29CLFVBQ1BFLE9BQU87b0JBQ0x0QixNQUFBQTtnQkFDRjtnQkFFTixPQUFPc0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVkLE9BQU87Z0JBQzNCLElBQU1SLE9BQU93QixJQUFBQSxrQkFBWSxFQUFDRixNQUFNZCxVQUMxQlQsU0FBUzBCLGVBQWV6QixPQUN4QlcsY0FBYyxJQUFJYixZQUFZQyxRQUFRQztnQkFFNUMsT0FBT1c7WUFDVDs7O1lBRU9lLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUVuQixPQUFPO2dCQUN2RSxJQUFNLEFBQUVvQixPQUFTQyxZQUFHLENBQVpELE1BQ0Y1QixPQUFPNEIsS0FBS0YsOEJBQThCLENBQUNDLDRCQUE0Qm5CLFVBQ3ZFVCxTQUFTMEIsZUFBZXpCLE9BQ3hCVyxjQUFjLElBQUliLFlBQVlDLFFBQVFDO2dCQUU1QyxPQUFPVztZQUNUOzs7OztBQUdGLFNBQVNjLGVBQWV6QixJQUFJO0lBQzFCLElBQUlEO0lBRUosSUFBTWEsYUFBYVosS0FBS0MsU0FBUyxJQUMzQkssT0FBT04sS0FBS0csT0FBTztJQUV6QixJQUFJRyxTQUFTd0IsY0FBUSxFQUFFO1FBQ3JCL0IsU0FBU2EsWUFBYSxHQUFHO0lBQzNCLE9BQU87UUFDTCxJQUFNbUIsYUFBYXpCLEtBQUtMLFNBQVM7UUFFakNGLFNBQVMsQUFBQyxHQUFnQmdDLE9BQWRuQixZQUFXLEtBQWMsT0FBWG1CO0lBQzVCO0lBRUEsT0FBT2hDO0FBQ1QifQ==