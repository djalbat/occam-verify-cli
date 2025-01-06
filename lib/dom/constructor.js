"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    stringFromTermAndType: function() {
        return stringFromTermAndType;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _unification = require("../utilities/unification");
var _json = require("../utilities/json");
var _type = require("./type");
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
var termNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/term"), typeNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/type");
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
                var term = (0, _json.termFromJSON)(json, fileContext), type = term.getType(), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Term = _dom.default.Term, Type = _dom.default.Type, termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), localContext = _local.default.fromFileContext(fileContext), context = localContext, type = Type.fromTypeNode(typeNode), term = Term.fromTermNodeAndType(termNode, type, context), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}());
function stringFromTermAndType(term, type) {
    var string;
    var termString = term.getString();
    if (type === null) {
        string = "".concat(termString);
    } else {
        var typeName = type.getName();
        string = "".concat(termString, ":").concat(typeName);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7b2JqZWN0VHlwZX0gZnJvbSBcIi4vdHlwZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25zdHJ1Y3RvciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMudGVybS5nZXRUeXBlKCk7IH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGVybSk7XG5cbiAgICBjb25zdCB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVW5pZmllZCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtLCBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdHJpbmdGcm9tVGVybUFuZFR5cGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29uc3RydWN0b3IiLCJzdHJpbmciLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImdldFR5cGUiLCJ1bmlmeVRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZCIsImNvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlIiwic2V0VHlwZSIsImRlYnVnIiwidG9KU09OIiwidGVybUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidGVybUZyb21KU09OIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJUZXJtIiwiZG9tIiwiVHlwZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tVHlwZU5vZGUiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjQSxPQThFRztlQTlFSDs7SUFnRmdCQSxxQkFBcUI7ZUFBckJBOzs7MkRBNUZBOzREQUNTO3FCQUVDOzJCQUVlO29CQUNJO29CQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUVoQyxXQUFlRSxJQUFBQSxnQkFBVyxnQkFBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxJQUFJO2dDQURPRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUNHLE9BQU87WUFBSTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUosSUFBSSxFQUFFSyxPQUFPLEVBQUVDLFdBQVc7Z0JBQ2xDLElBQUlDLGNBQWM7Z0JBRWxCLElBQU1DLGNBQWMsSUFBSSxFQUNsQkMsYUFBYVQsS0FBS0MsU0FBUyxJQUMzQlMsb0JBQW9CRixZQUFZUCxTQUFTO2dCQUUvQ0ksUUFBUU0sS0FBSyxDQUFDLEFBQUMsaUJBQThDRCxPQUE5QkQsWUFBVyxxQkFBcUMsT0FBbEJDLG1CQUFrQixxQkFBbUJWO2dCQUVsRyxJQUFNWSw2QkFBNkJDLElBQUFBLHFDQUF3QixFQUFDYixNQUFNUSxhQUFhSDtnQkFFL0UsSUFBSU8sNEJBQTRCO29CQUM5QixJQUFJRTtvQkFFSixJQUFNQyxPQUFPUCxZQUFZTCxPQUFPO29CQUVoQ0gsS0FBS2dCLE9BQU8sQ0FBQ0Q7b0JBRWJELGdCQUFnQlI7b0JBRWhCQyxjQUFjTyxlQUFnQixHQUFHO2dCQUNuQztnQkFFQSxJQUFJUCxhQUFhO29CQUNmRixRQUFRWSxLQUFLLENBQUMsQUFBQyxtQkFBZ0RQLE9BQTlCRCxZQUFXLHFCQUFxQyxPQUFsQkMsbUJBQWtCLG1CQUFpQlY7Z0JBQ3BHO2dCQUVBLE9BQU9PO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUNwQixJQUFJLEdBQ25DQSxPQUFPbUIsVUFDUEUsT0FBTztvQkFDTHJCLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9xQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsV0FBVztnQkFDL0IsSUFBTXZCLE9BQU93QixJQUFBQSxrQkFBWSxFQUFDSCxNQUFNRSxjQUMxQlIsT0FBT2YsS0FBS0csT0FBTyxJQUNuQkosU0FBU04sc0JBQXNCTyxNQUFNZSxPQUNyQ1AsY0FBYyxJQUFJVixZQUFZQyxRQUFRQztnQkFFNUMsT0FBT1E7WUFDVDs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFSCxXQUFXO2dCQUMzRSxJQUFRSSxPQUFlQyxZQUFHLENBQWxCRCxNQUFNRSxPQUFTRCxZQUFHLENBQVpDLE1BQ1JDLFdBQVdwQyxjQUFjZ0MsNkJBQ3pCSyxXQUFXbkMsY0FBYzhCLDZCQUN6Qk0sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNYLGNBQzVDbEIsVUFBVTJCLGNBQ1ZqQixPQUFPYyxLQUFLTSxZQUFZLENBQUNKLFdBQ3pCL0IsT0FBTzJCLEtBQUtTLG1CQUFtQixDQUFDTixVQUFVZixNQUFNVixVQUNoRE4sU0FBU04sc0JBQXNCTyxNQUFNZSxPQUNyQ1AsY0FBYyxJQUFJVixZQUFZQyxRQUFRQztnQkFFNUMsT0FBT1E7WUFDVDs7Ozs7QUFHSyxTQUFTZixzQkFBc0JPLElBQUksRUFBRWUsSUFBSTtJQUM5QyxJQUFJaEI7SUFFSixJQUFNVSxhQUFhVCxLQUFLQyxTQUFTO0lBRWpDLElBQUljLFNBQVMsTUFBTTtRQUNqQmhCLFNBQVMsQUFBQyxHQUFhLE9BQVhVO0lBQ2QsT0FBTztRQUNMLElBQU00QixXQUFXdEIsS0FBS3VCLE9BQU87UUFFN0J2QyxTQUFTLEFBQUMsR0FBZ0JzQyxPQUFkNUIsWUFBVyxLQUFZLE9BQVQ0QjtJQUM1QjtJQUVBLE9BQU90QztBQUNUIn0=