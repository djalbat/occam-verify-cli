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
var _type = /*#__PURE__*/ _interopRequireDefault(require("./type"));
var _string = require("./utilities/string");
var _node = require("./utilities/node");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Constructor = /*#__PURE__*/ function() {
    function Constructor(termNode, type) {
        _classCallCheck(this, Constructor);
        this.termNode = termNode;
        this.type = type;
    }
    _createClass(Constructor, [
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
        },
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type) {
                var constructor = new Constructor(termNode, type);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSkge1xuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub1N1cGVyVHlwZSA9IHRydWUsXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICB0eXBlSlNPTiA9ICh0aGlzLnR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgdGVybSA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybSxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgdGVybSB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybSwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZTsgIC8vL1xuXG4gICAgICBqc29uID0gdHlwZUpTT047ICAvLy9cblxuICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwidHlwZSIsImdldFRlcm1Ob2RlIiwiZ2V0VHlwZSIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm5vU3VwZXJUeXBlIiwidHlwZVN0cmluZyIsInRvSlNPTiIsInR5cGVKU09OIiwidGVybSIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidGVybU5vZGVGcm9tVGVybVN0cmluZyIsIlR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJjb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3lEQUxKO3NCQUVZO29CQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUEMsUUFBUSxFQUFFQyxJQUFJOzhCQURQRjtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztpQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU0sRUFBRTtnQkFDZixJQUFJQztnQkFFSixJQUFNQyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1IsUUFBUSxFQUFFSztnQkFFL0MsSUFBSSxJQUFJLENBQUNKLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCSyxTQUFTLEFBQUMsR0FBYSxPQUFYQztnQkFDZCxPQUFPO29CQUNMLElBQU1FLGNBQWMsSUFBSSxFQUNsQkMsYUFBYSxJQUFJLENBQUNULElBQUksQ0FBQ0csUUFBUSxDQUFDQyxRQUFRSTtvQkFFOUNILFNBQVMsQUFBQyxHQUFnQkksT0FBZEgsWUFBVyxLQUFjLE9BQVhHO2dCQUM1QixDQUFDO2dCQUVELE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT04sTUFBTSxFQUFFO2dCQUNiLElBQU1FLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUixRQUFRLEVBQUVLLFNBQ3pDTyxXQUFXLEFBQUMsSUFBSSxDQUFDWCxJQUFJLEtBQUssSUFBSSxHQUNoQixJQUFJLEdBQ0YsSUFBSSxDQUFDQSxJQUFJLENBQUNVLE1BQU0sQ0FBQ04sT0FBTyxFQUN4Q1EsT0FBT04sWUFDUE4sT0FBT1csVUFDUEUsT0FBTztvQkFDTEQsTUFBQUE7b0JBQ0FaLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9hO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCRCxJQUFJLEVBQUVFLFdBQVcsRUFBRTtnQkFDL0MsSUFBTSxBQUFFSCxPQUFTQyxLQUFURCxNQUNGTixhQUFhTSxNQUNiSSxRQUFRRCxZQUFZRSxRQUFRLElBQzVCQyxTQUFTSCxZQUFZSSxTQUFTLElBQzlCcEIsV0FBV3FCLElBQUFBLDRCQUFzQixFQUFDZCxZQUFZVSxPQUFPRTtnQkFFM0QsSUFBSSxBQUFFbEIsT0FBU2EsS0FBVGI7Z0JBRU4sSUFBSUEsU0FBUyxJQUFJLEVBQUU7b0JBQ2pCLElBQU1XLFdBQVdYLE1BQU8sR0FBRztvQkFFM0JhLE9BQU9GLFVBQVcsR0FBRztvQkFFckJYLE9BQU9xQixhQUFJLENBQUNQLHNCQUFzQixDQUFDRCxNQUFNRTtvQkFFekMsSUFBTU8sV0FBV3RCLEtBQUt1QixPQUFPO29CQUU3QnZCLE9BQU9lLFlBQVlTLGtCQUFrQixDQUFDRixXQUFXLEdBQUc7Z0JBQ3RELENBQUM7Z0JBRUQsSUFBTUcsY0FBYyxJQW5FSDNCLFlBbUVtQkMsVUFBVUM7Z0JBRTlDLE9BQU95QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CM0IsUUFBUSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ3pDLElBQU15QixjQUFjLElBekVIM0IsWUF5RW1CQyxVQUFVQztnQkFFOUMsT0FBT3lCO1lBQ1Q7OztXQTVFbUIzQiJ9