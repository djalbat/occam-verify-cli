"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Constructor;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("./type"));
var _string = require("./utilities/string");
var _node = require("./utilities/node");
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
var Constructor = /*#__PURE__*/ function() {
    function Constructor(termNode, string, type) {
        _class_call_check(this, Constructor);
        this.termNode = termNode;
        this.string = string;
        this.type = type;
    }
    _create_class(Constructor, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var termString = (0, _string.nodeAsString)(this.termNode, tokens), typeJSON = this.type === null ? null : this.type.toJSON(tokens), term = termString, type = typeJSON, json = {
                    term: term,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromTermNodeTypeAndTokens",
            value: function fromTermNodeTypeAndTokens(termNode, type, tokens) {
                var string = stringFromTermNodeTypeAndTokens(termNode, type, tokens), constructor = new Constructor(termNode, string, type);
                return constructor;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var term = json.term, termString = term, lexer = fileContext.getLexer(), parser = fileContext.getParser(), termNode = (0, _node.termNodeFromTermString)(termString, lexer, parser);
                var type = json.type;
                if (type !== null) {
                    var typeJSON = type; ///
                    json = typeJSON; ///
                    type = _type.default.fromJSONAndFileContext(json, fileContext);
                    var typeName = type.getName();
                    type = fileContext.findTypeByTypeName(typeName); ///
                }
                var constructorDeclarationTokens = (0, _node.constructorDeclarationTokensFromTermString)(termString, lexer), tokens = constructorDeclarationTokens, string = stringFromTermNodeTypeAndTokens(termNode, type, tokens), constructor = new Constructor(termNode, string, type);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();
function stringFromTermNodeTypeAndTokens(termNode, type, tokens) {
    var string;
    var termString = (0, _string.nodeAsString)(termNode, tokens);
    if (type === null) {
        string = "".concat(termString);
    } else {
        var noSuperType = true, typeString = type.asString(tokens, noSuperType);
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnNGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3IodGVybU5vZGUsIHN0cmluZywgdHlwZSkge1xuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICB0eXBlSlNPTiA9ICh0aGlzLnR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgdGVybSA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybSxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2Vucyh0ZXJtTm9kZSwgdHlwZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1Ob2RlVHlwZUFuZFRva2Vucyh0ZXJtTm9kZSwgdHlwZSwgdG9rZW5zKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgc3RyaW5nLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyB0ZXJtIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlOyAgLy8vXG5cbiAgICAgIGpzb24gPSB0eXBlSlNPTjsgIC8vL1xuXG4gICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHRva2VucyA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnModGVybU5vZGUsIHR5cGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUsIHRva2Vucyk7XG5cbiAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9TdXBlclR5cGUgPSB0cnVlLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yIiwidGVybU5vZGUiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0VGVybU5vZGUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwidG9KU09OIiwidG9rZW5zIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInR5cGVKU09OIiwidGVybSIsImpzb24iLCJmcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zIiwic3RyaW5nRnJvbVRlcm1Ob2RlVHlwZUFuZFRva2VucyIsImNvbnN0cnVjdG9yIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnNGcm9tVGVybVN0cmluZyIsIm5vU3VwZXJUeXBlIiwidHlwZVN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjtzQkFFWTtvQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd4QixJQUFBLEFBQU1BLDRCQXVFbEIsQUF2RVk7YUFBTUEsWUFDUEMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Z0NBRGZIO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUpLSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDVCxRQUFRLEVBQUVPLFNBQ3pDRyxXQUFXLEFBQUMsSUFBSSxDQUFDUixJQUFJLEtBQUssT0FDWixPQUNFLElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxNQUFNLENBQUNDLFNBQ2pDSSxPQUFPSCxZQUNQTixPQUFPUSxVQUNQRSxPQUFPO29CQUNMRCxNQUFBQTtvQkFDQVQsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJiLFFBQVEsRUFBRUUsSUFBSSxFQUFFSyxNQUFNO2dCQUNyRCxJQUFNTixTQUFTYSxnQ0FBZ0NkLFVBQVVFLE1BQU1LLFNBQ3pEUSxjQUFjLElBcENIaEIsWUFvQ21CQyxVQUFVQyxRQUFRQztnQkFFdEQsT0FBT2E7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkosSUFBSSxFQUFFSyxXQUFXO2dCQUM3QyxJQUFNLEFBQUVOLE9BQVNDLEtBQVRELE1BQ0ZILGFBQWFHLE1BQ2JPLFFBQVFELFlBQVlFLFFBQVEsSUFDNUJDLFNBQVNILFlBQVlJLFNBQVMsSUFDOUJyQixXQUFXc0IsSUFBQUEsNEJBQXNCLEVBQUNkLFlBQVlVLE9BQU9FO2dCQUUzRCxJQUFJLEFBQUVsQixPQUFTVSxLQUFUVjtnQkFFTixJQUFJQSxTQUFTLE1BQU07b0JBQ2pCLElBQU1RLFdBQVdSLE1BQU8sR0FBRztvQkFFM0JVLE9BQU9GLFVBQVcsR0FBRztvQkFFckJSLE9BQU9xQixhQUFJLENBQUNQLHNCQUFzQixDQUFDSixNQUFNSztvQkFFekMsSUFBTU8sV0FBV3RCLEtBQUt1QixPQUFPO29CQUU3QnZCLE9BQU9lLFlBQVlTLGtCQUFrQixDQUFDRixXQUFXLEdBQUc7Z0JBQ3REO2dCQUVBLElBQU1HLCtCQUErQkMsSUFBQUEsZ0RBQTBDLEVBQUNwQixZQUFZVSxRQUN0RlgsU0FBU29CLDhCQUNUMUIsU0FBU2EsZ0NBQWdDZCxVQUFVRSxNQUFNSyxTQUN6RFEsY0FBYyxJQWpFSGhCLFlBaUVtQkMsVUFBVUMsUUFBUUM7Z0JBRXRELE9BQU9hO1lBQ1Q7OztXQXBFbUJoQjs7QUF1RXJCLFNBQVNlLGdDQUFnQ2QsUUFBUSxFQUFFRSxJQUFJLEVBQUVLLE1BQU07SUFDN0QsSUFBSU47SUFFSixJQUFNTyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDVCxVQUFVTztJQUUxQyxJQUFJTCxTQUFTLE1BQU07UUFDakJELFNBQVMsQUFBQyxHQUFhLE9BQVhPO0lBQ2QsT0FBTztRQUNMLElBQU1xQixjQUFjLE1BQ2RDLGFBQWE1QixLQUFLNkIsUUFBUSxDQUFDeEIsUUFBUXNCO1FBRXpDNUIsU0FBUyxBQUFDLEdBQWdCNkIsT0FBZHRCLFlBQVcsS0FBYyxPQUFYc0I7SUFDNUI7SUFFQSxPQUFPN0I7QUFDVCJ9