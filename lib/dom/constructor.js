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
    if (type === _type.objectType) {
        string = termString; ///
    } else {
        var typeString = type.getString();
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL2RvbS90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHsgcmV0dXJuIHRoaXMudGVybS5pc1Byb3Zpc2lvbmFsKCk7IH1cblxuICBzZXRUeXBlKHR5cGUpIHsgdGhpcy50ZXJtLnNldFR5cGUodHlwZSk7IH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVzQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVW5pZmllcyA9IHZlcmlmaWVzQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybSh0ZXJtKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm0odGVybSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtKHRlcm0pIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gIGlmICh0eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufSJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbnN0cnVjdG9yIiwic3RyaW5nIiwidGVybSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwiaXNQcm92aXNpb25hbCIsInNldFR5cGUiLCJ0eXBlIiwidW5pZnlUZXJtIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVVuaWZpZXMiLCJjb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJ2ZXJpZmllc0FoZWFkIiwiZGVidWciLCJ0b0pTT04iLCJ0ZXJtSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwianNvbiIsImZyb21KU09OIiwidGVybUZyb21KU09OIiwic3RyaW5nRnJvbVRlcm0iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJvYmplY3RUeXBlIiwidHlwZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO29CQUVXOzJCQUVjO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdDLFdBQWVBLElBQUFBLGdCQUFXLGdCQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLElBQUk7Z0NBRE9GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQ0csT0FBTztZQUFJOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNKLElBQUksQ0FBQ0ksYUFBYTtZQUFJOzs7WUFFcERDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO2dCQUFJLElBQUksQ0FBQ04sSUFBSSxDQUFDSyxPQUFPLENBQUNDO1lBQU87OztZQUV6Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVQLElBQUksRUFBRVEsT0FBTyxFQUFFQyxXQUFXO2dCQUNsQyxJQUFJQyxjQUFjO2dCQUVsQixJQUFNQyxjQUFjLElBQUksRUFDbEJDLGFBQWFaLEtBQUtDLFNBQVMsSUFDM0JZLG9CQUFvQkYsWUFBWVYsU0FBUztnQkFFL0NPLFFBQVFNLEtBQUssQ0FBQyxBQUFDLGlCQUE4Q0QsT0FBOUJELFlBQVcscUJBQXFDLE9BQWxCQyxtQkFBa0I7Z0JBRS9FLElBQU1FLDZCQUE2QkMsSUFBQUEscUNBQXdCLEVBQUNoQixNQUFNVyxhQUFhSDtnQkFFL0UsSUFBSU8sNEJBQTRCO29CQUM5QixJQUFJRTtvQkFFSixJQUFNWCxPQUFPSyxZQUFZUixPQUFPO29CQUVoQ0gsS0FBS0ssT0FBTyxDQUFDQztvQkFFYlcsZ0JBQWdCUjtvQkFFaEJDLGNBQWNPLGVBQWdCLEdBQUc7Z0JBQ25DO2dCQUVBLElBQUlQLGFBQWE7b0JBQ2ZGLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG1CQUFnREwsT0FBOUJELFlBQVcscUJBQXFDLE9BQWxCQyxtQkFBa0I7Z0JBQ25GO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUNyQixJQUFJLEdBQ25DQSxPQUFPb0IsVUFDUEUsT0FBTztvQkFDTHRCLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9zQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRWQsT0FBTztnQkFDM0IsSUFBTVIsT0FBT3dCLElBQUFBLGtCQUFZLEVBQUNGLE1BQU1kLFVBQzFCVCxTQUFTMEIsZUFBZXpCLE9BQ3hCVyxjQUFjLElBQUliLFlBQVlDLFFBQVFDO2dCQUU1QyxPQUFPVztZQUNUOzs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRW5CLE9BQU87Z0JBQ3ZFLElBQU0sQUFBRW9CLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRjVCLE9BQU80QixLQUFLRiw4QkFBOEIsQ0FBQ0MsNEJBQTRCbkIsVUFDdkVULFNBQVMwQixlQUFlekIsT0FDeEJXLGNBQWMsSUFBSWIsWUFBWUMsUUFBUUM7Z0JBRTVDLE9BQU9XO1lBQ1Q7Ozs7O0FBR0YsU0FBU2MsZUFBZXpCLElBQUk7SUFDMUIsSUFBSUQ7SUFFSixJQUFNYSxhQUFhWixLQUFLQyxTQUFTLElBQzNCSyxPQUFPTixLQUFLRyxPQUFPO0lBRXpCLElBQUlHLFNBQVN3QixnQkFBVSxFQUFFO1FBQ3ZCL0IsU0FBU2EsWUFBYSxHQUFHO0lBQzNCLE9BQU87UUFDTCxJQUFNbUIsYUFBYXpCLEtBQUtMLFNBQVM7UUFFakNGLFNBQVMsQUFBQyxHQUFnQmdDLE9BQWRuQixZQUFXLEtBQWMsT0FBWG1CO0lBQzVCO0lBRUEsT0FBT2hDO0FBQ1QifQ==