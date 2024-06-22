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
var _string = require("./utilities/string");
var _type = require("./type");
var _node = require("./utilities/node");
var _tokens = require("./utilities/tokens");
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
                var term = json.term, termString = term, lexer = fileContext.getLexer(), parser = fileContext.getParser(), constructorDeclarationTokens = (0, _tokens.constructorDeclarationTokensFromTermString)(termString, lexer), termNode = (0, _node.termNodeFromConstructorDeclarationTokens)(constructorDeclarationTokens, parser);
                var type = json.type;
                if (type !== null) {
                    var typeJSON = type; ///
                    json = typeJSON; ///
                    type = (0, _type.typeFromJSONAndFileContext)(json, fileContext);
                }
                var tokens = constructorDeclarationTokens, string = stringFromTermNodeTypeAndTokens(termNode, type, tokens), constructor = new Constructor(termNode, string, type);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnNGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgc3RyaW5nLCB0eXBlKSB7XG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHR5cGVKU09OID0gKHRoaXMudHlwZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICB0ZXJtID0gdGVybVN0cmluZywgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRlcm0gfSA9IGpzb24sXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0sICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnNGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBsZXhlciksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMsIHBhcnNlcik7XG5cbiAgICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZTsgIC8vL1xuXG4gICAgICBqc29uID0gdHlwZUpTT047ICAvLy9cblxuICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbnMgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1Ob2RlVHlwZUFuZFRva2Vucyh0ZXJtTm9kZSwgdHlwZSwgdG9rZW5zKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgc3RyaW5nLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlLCB0b2tlbnMpO1xuXG4gIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ31gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vU3VwZXJUeXBlID0gdHJ1ZSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5hc1N0cmluZyh0b2tlbnMsIG5vU3VwZXJUeXBlKTtcblxuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwic3RyaW5nIiwidHlwZSIsImdldFRlcm1Ob2RlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsInRvSlNPTiIsInRva2VucyIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0eXBlSlNPTiIsInRlcm0iLCJqc29uIiwiZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2VucyIsInN0cmluZ0Zyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnMiLCJjb25zdHJ1Y3RvciIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2Vuc0Zyb21UZXJtU3RyaW5nIiwidGVybU5vZGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyIsInR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0Iiwibm9TdXBlclR5cGUiLCJ0eXBlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3NCQUxRO29CQUNjO29CQUNjO3NCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLDRCQUFELEFBQUw7YUFBTUEsWUFDUEMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Z0NBRGZIO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUpLSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDVCxRQUFRLEVBQUVPLFNBQ3pDRyxXQUFXLEFBQUMsSUFBSSxDQUFDUixJQUFJLEtBQUssT0FDWixPQUNFLElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxNQUFNLENBQUNDLFNBQ2pDSSxPQUFPSCxZQUNQTixPQUFPUSxVQUNQRSxPQUFPO29CQUNMRCxNQUFBQTtvQkFDQVQsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJiLFFBQVEsRUFBRUUsSUFBSSxFQUFFSyxNQUFNO2dCQUNyRCxJQUFNTixTQUFTYSxnQ0FBZ0NkLFVBQVVFLE1BQU1LLFNBQ3pEUSxjQUFjLElBcENIaEIsWUFvQ21CQyxVQUFVQyxRQUFRQztnQkFFdEQsT0FBT2E7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkosSUFBSSxFQUFFSyxXQUFXO2dCQUM3QyxJQUFNLEFBQUVOLE9BQVNDLEtBQVRELE1BQ0ZILGFBQWFHLE1BQ2JPLFFBQVFELFlBQVlFLFFBQVEsSUFDNUJDLFNBQVNILFlBQVlJLFNBQVMsSUFDOUJDLCtCQUErQkMsSUFBQUEsa0RBQTBDLEVBQUNmLFlBQVlVLFFBQ3RGbEIsV0FBV3dCLElBQUFBLDhDQUF3QyxFQUFDRiw4QkFBOEJGO2dCQUV4RixJQUFJLEFBQUVsQixPQUFTVSxLQUFUVjtnQkFFTixJQUFJQSxTQUFTLE1BQU07b0JBQ2pCLElBQU1RLFdBQVdSLE1BQU8sR0FBRztvQkFFM0JVLE9BQU9GLFVBQVcsR0FBRztvQkFFckJSLE9BQU91QixJQUFBQSxnQ0FBMEIsRUFBQ2IsTUFBTUs7Z0JBQzFDO2dCQUVBLElBQU1WLFNBQVNlLDhCQUNUckIsU0FBU2EsZ0NBQWdDZCxVQUFVRSxNQUFNSyxTQUN6RFEsY0FBYyxJQTdESGhCLFlBNkRtQkMsVUFBVUMsUUFBUUM7Z0JBRXRELE9BQU9hO1lBQ1Q7OztXQWhFbUJoQjs7QUFtRXJCLFNBQVNlLGdDQUFnQ2QsUUFBUSxFQUFFRSxJQUFJLEVBQUVLLE1BQU07SUFDN0QsSUFBSU47SUFFSixJQUFNTyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDVCxVQUFVTztJQUUxQyxJQUFJTCxTQUFTLE1BQU07UUFDakJELFNBQVMsQUFBQyxHQUFhLE9BQVhPO0lBQ2QsT0FBTztRQUNMLElBQU1rQixjQUFjLE1BQ2RDLGFBQWF6QixLQUFLMEIsUUFBUSxDQUFDckIsUUFBUW1CO1FBRXpDekIsU0FBUyxBQUFDLEdBQWdCMEIsT0FBZG5CLFlBQVcsS0FBYyxPQUFYbUI7SUFDNUI7SUFFQSxPQUFPMUI7QUFDVCJ9