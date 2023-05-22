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
    function Constructor(termNode, type) {
        _class_call_check(this, Constructor);
        this.termNode = termNode;
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
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var string;
                var termString = (0, _string.nodeAsString)(this.termNode, tokens);
                if (this.type === null) {
                    string = "".concat(termString);
                } else {
                    var noSuperType = true, typeString = this.type.asString(tokens, noSuperType);
                    string = "".concat(termString, ":").concat(typeString);
                }
                return string;
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
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type) {
                var constructor = new Constructor(termNode, type);
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
                var constructor = new Constructor(termNode, type);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSkge1xuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub1N1cGVyVHlwZSA9IHRydWUsXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICB0eXBlSlNPTiA9ICh0aGlzLnR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgdGVybSA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybSxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyB0ZXJtIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlOyAgLy8vXG5cbiAgICAgIGpzb24gPSB0eXBlSlNPTjsgIC8vL1xuXG4gICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwidHlwZSIsImdldFRlcm1Ob2RlIiwiZ2V0VHlwZSIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm5vU3VwZXJUeXBlIiwidHlwZVN0cmluZyIsInRvSlNPTiIsInR5cGVKU09OIiwidGVybSIsImpzb24iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiY29uc3RydWN0b3IiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidGVybU5vZGVGcm9tVGVybVN0cmluZyIsIlR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKO3NCQUVZO29CQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUEMsUUFBUSxFQUFFQyxJQUFJO2dDQURQRjtRQUVqQixJQUFJLENBQUNDLFdBQVdBO1FBQ2hCLElBQUksQ0FBQ0MsT0FBT0E7O2tCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQUlDO2dCQUVKLElBQU1DLGFBQWFDLElBQUFBLHNCQUFhLElBQUksQ0FBQ1IsVUFBVUs7Z0JBRS9DLElBQUksSUFBSSxDQUFDSixTQUFTLE1BQU07b0JBQ3RCSyxTQUFTLEFBQUMsR0FBYSxPQUFYQztnQkFDZCxPQUFPO29CQUNMLElBQU1FLGNBQWMsTUFDZEMsYUFBYSxJQUFJLENBQUNULEtBQUtHLFNBQVNDLFFBQVFJO29CQUU5Q0gsU0FBUyxBQUFDLEdBQWdCSSxPQUFkSCxZQUFXLEtBQWMsT0FBWEc7Z0JBQzVCO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT04sTUFBTTtnQkFDWCxJQUFNRSxhQUFhQyxJQUFBQSxzQkFBYSxJQUFJLENBQUNSLFVBQVVLLFNBQ3pDTyxXQUFXLEFBQUMsSUFBSSxDQUFDWCxTQUFTLE9BQ1osT0FDRSxJQUFJLENBQUNBLEtBQUtVLE9BQU9OLFNBQ2pDUSxPQUFPTixZQUNQTixPQUFPVyxVQUNQRSxPQUFPO29CQUNMRCxNQUFBQTtvQkFDQVosTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JmLFFBQVEsRUFBRUMsSUFBSTtnQkFDdkMsSUFBTWUsY0FBYyxJQS9DSGpCLFlBK0NtQkMsVUFBVUM7Z0JBRTlDLE9BQU9lO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILElBQUksRUFBRUksV0FBVztnQkFDN0MsSUFBTSxBQUFFTCxPQUFTQyxLQUFURCxNQUNGTixhQUFhTSxNQUNiTSxRQUFRRCxZQUFZRSxZQUNwQkMsU0FBU0gsWUFBWUksYUFDckJ0QixXQUFXdUIsSUFBQUEsOEJBQXVCaEIsWUFBWVksT0FBT0U7Z0JBRTNELElBQUksQUFBRXBCLE9BQVNhLEtBQVRiO2dCQUVOLElBQUlBLFNBQVMsTUFBTTtvQkFDakIsSUFBTVcsV0FBV1gsTUFBTyxHQUFHO29CQUUzQmEsT0FBT0YsVUFBVyxHQUFHO29CQUVyQlgsT0FBT3VCLGNBQUtQLHVCQUF1QkgsTUFBTUk7b0JBRXpDLElBQU1PLFdBQVd4QixLQUFLeUI7b0JBRXRCekIsT0FBT2lCLFlBQVlTLG1CQUFtQkYsV0FBVyxHQUFHO2dCQUN0RDtnQkFFQSxJQUFNVCxjQUFjLElBekVIakIsWUF5RW1CQyxVQUFVQztnQkFFOUMsT0FBT2U7WUFDVDs7O1dBNUVtQmpCIn0=