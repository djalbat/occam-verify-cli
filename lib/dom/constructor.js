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
                var termUnified = false;
                var constructor = this, termString = term.getString(), constructorString = constructor.getString();
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."), term);
                var termUnifiedWithConstructor = (0, _unification.unifyTermWithConstructor)(term, constructor, context);
                if (termUnifiedWithConstructor) {
                    var verifiedAhead;
                    var type = constructor.getType();
                    term.setType(type);
                    verifiedAhead = verifyAhead();
                    termUnified = verifiedAhead; ///
                }
                if (termUnified) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."), term);
                }
                return termUnified;
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
            value: function fromJSON(json, fileContext) {
                var term = (0, _json.termFromJSON)(json, fileContext), string = stringFromTerm(term), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Term = _dom.default.Term, term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext), string = stringFromTerm(term), constructor = new Constructor(string, term);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL2RvbS90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHsgcmV0dXJuIHRoaXMudGVybS5pc1Byb3Zpc2lvbmFsKCk7IH1cblxuICBzZXRUeXBlKHR5cGUpIHsgdGhpcy50ZXJtLnNldFR5cGUodHlwZSk7IH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGVybSk7XG5cbiAgICBjb25zdCB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVW5pZmllZCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybSh0ZXJtKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICBpZiAodHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgIHN0cmluZyA9IHRlcm1TdHJpbmc7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb25zdHJ1Y3RvciIsInN0cmluZyIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImlzUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwidHlwZSIsInVuaWZ5VGVybSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1VbmlmaWVkIiwiY29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsInRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmVyaWZpZWRBaGVhZCIsImRlYnVnIiwidG9KU09OIiwidGVybUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidGVybUZyb21KU09OIiwic3RyaW5nRnJvbVRlcm0iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJvYmplY3RUeXBlIiwidHlwZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO29CQUVXOzJCQUVjO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdDLFdBQWVBLElBQUFBLGdCQUFXLGdCQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLElBQUk7Z0NBRE9GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQ0csT0FBTztZQUFJOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNKLElBQUksQ0FBQ0ksYUFBYTtZQUFJOzs7WUFFcERDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO2dCQUFJLElBQUksQ0FBQ04sSUFBSSxDQUFDSyxPQUFPLENBQUNDO1lBQU87OztZQUV6Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVQLElBQUksRUFBRVEsT0FBTyxFQUFFQyxXQUFXO2dCQUNsQyxJQUFJQyxjQUFjO2dCQUVsQixJQUFNQyxjQUFjLElBQUksRUFDbEJDLGFBQWFaLEtBQUtDLFNBQVMsSUFDM0JZLG9CQUFvQkYsWUFBWVYsU0FBUztnQkFFL0NPLFFBQVFNLEtBQUssQ0FBQyxBQUFDLGlCQUE4Q0QsT0FBOUJELFlBQVcscUJBQXFDLE9BQWxCQyxtQkFBa0IscUJBQW1CYjtnQkFFbEcsSUFBTWUsNkJBQTZCQyxJQUFBQSxxQ0FBd0IsRUFBQ2hCLE1BQU1XLGFBQWFIO2dCQUUvRSxJQUFJTyw0QkFBNEI7b0JBQzlCLElBQUlFO29CQUVKLElBQU1YLE9BQU9LLFlBQVlSLE9BQU87b0JBRWhDSCxLQUFLSyxPQUFPLENBQUNDO29CQUViVyxnQkFBZ0JSO29CQUVoQkMsY0FBY08sZUFBZ0IsR0FBRztnQkFDbkM7Z0JBRUEsSUFBSVAsYUFBYTtvQkFDZkYsUUFBUVUsS0FBSyxDQUFDLEFBQUMsbUJBQWdETCxPQUE5QkQsWUFBVyxxQkFBcUMsT0FBbEJDLG1CQUFrQixtQkFBaUJiO2dCQUNwRztnQkFFQSxPQUFPVTtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLElBQUFBLG9CQUFjLEVBQUMsSUFBSSxDQUFDckIsSUFBSSxHQUNuQ0EsT0FBT29CLFVBQ1BFLE9BQU87b0JBQ0x0QixNQUFBQTtnQkFDRjtnQkFFTixPQUFPc0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLFdBQVc7Z0JBQy9CLElBQU14QixPQUFPeUIsSUFBQUEsa0JBQVksRUFBQ0gsTUFBTUUsY0FDMUJ6QixTQUFTMkIsZUFBZTFCLE9BQ3hCVyxjQUFjLElBQUliLFlBQVlDLFFBQVFDO2dCQUU1QyxPQUFPVztZQUNUOzs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUVKLFdBQVc7Z0JBQzNFLElBQU0sQUFBRUssT0FBU0MsWUFBRyxDQUFaRCxNQUNGN0IsT0FBTzZCLEtBQUtGLDhCQUE4QixDQUFDQyw0QkFBNEJKLGNBQ3ZFekIsU0FBUzJCLGVBQWUxQixPQUN4QlcsY0FBYyxJQUFJYixZQUFZQyxRQUFRQztnQkFFNUMsT0FBT1c7WUFDVDs7Ozs7QUFHRixTQUFTZSxlQUFlMUIsSUFBSTtJQUMxQixJQUFJRDtJQUVKLElBQU1hLGFBQWFaLEtBQUtDLFNBQVMsSUFDM0JLLE9BQU9OLEtBQUtHLE9BQU87SUFFekIsSUFBSUcsU0FBU3lCLGdCQUFVLEVBQUU7UUFDdkJoQyxTQUFTYSxZQUFhLEdBQUc7SUFDM0IsT0FBTztRQUNMLElBQU1vQixhQUFhMUIsS0FBS0wsU0FBUztRQUVqQ0YsU0FBUyxBQUFDLEdBQWdCaUMsT0FBZHBCLFlBQVcsS0FBYyxPQUFYb0I7SUFDNUI7SUFFQSxPQUFPakM7QUFDVCJ9