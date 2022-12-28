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
var _query = require("./utilities/query");
var _string = require("./utilities/string");
var _kinds = require("./kinds");
var _ruleNames = require("./ruleNames");
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
var statementNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/term");
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
            value: function asString() {
                var string;
                var termString = (0, _string.nodeAsString)(this.termNode);
                if (this.type === null) {
                    string = "".concat(termString);
                } else {
                    var noSuperType = true, typeString = this.type.asString(noSuperType);
                    string = "".concat(termString, ":").concat(typeString);
                }
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termString = (0, _string.nodeAsString)(this.termNode), typeJSON = this.type === null ? null : this.type.toJSON(), kind = _kinds.CONSTRUCTOR_KIND, term = termString, type = typeJSON, json = {
                    kind: kind,
                    term: term,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var term = json.term, ruleName = _ruleNames.CONSTRUCTOR_DECLARATION_RULE_NAME, content = "Constructor ".concat(term, "\n"), node = releaseContext.nodeFromContentAndRuleName(content, ruleName), constructorDeclarationNode = node, termNode = statementNodeQuery(constructorDeclarationNode);
                var type = json.type;
                var typeJSON = type; ///
                json = typeJSON; ///
                type = _type.default.fromJSON(json, releaseContext);
                var typeName = type.getName();
                type = releaseContext.findTypeByTypeName(typeName); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IENPTlNUUlVDVE9SX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgQ09OU1RSVUNUT1JfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3Rlcm1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vU3VwZXJUeXBlID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuYXNTdHJpbmcobm9TdXBlclR5cGUpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSksXG4gICAgICAgICAgdHlwZUpTT04gPSAodGhpcy50eXBlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBDT05TVFJVQ1RPUl9LSU5ELFxuICAgICAgICAgIHRlcm0gPSB0ZXJtU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgdGVybSB9ID0ganNvbixcbiAgICAgICAgICBydWxlTmFtZSA9IENPTlNUUlVDVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjb250ZW50ID0gYENvbnN0cnVjdG9yICR7dGVybX1cbmAsXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0Lm5vZGVGcm9tQ29udGVudEFuZFJ1bGVOYW1lKGNvbnRlbnQsIHJ1bGVOYW1lKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlOyAgLy8vXG5cbiAgICBqc29uID0gdHlwZUpTT047ICAvLy9cblxuICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICB0eXBlID0gcmVsZWFzZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlIiwidHlwZSIsImdldFRlcm1Ob2RlIiwiZ2V0VHlwZSIsImFzU3RyaW5nIiwic3RyaW5nIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm5vU3VwZXJUeXBlIiwidHlwZVN0cmluZyIsInRvSlNPTiIsInR5cGVKU09OIiwia2luZCIsIkNPTlNUUlVDVE9SX0tJTkQiLCJ0ZXJtIiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJydWxlTmFtZSIsIkNPTlNUUlVDVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSIsImNvbnRlbnQiLCJub2RlIiwibm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJjb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lEQVRKO3FCQUVTO3NCQUNHO3FCQUNJO3lCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRiw0QkFBTjthQUFNQSxZQUNQRyxRQUFRLEVBQUVDLElBQUk7OEJBRFBKO1FBRWpCLElBQUksQ0FBQ0csUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0E7O2lCQUhLSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFJQztnQkFFSixJQUFNQyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1AsUUFBUTtnQkFFN0MsSUFBSSxJQUFJLENBQUNDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCSSxTQUFTLEFBQUMsR0FBYSxPQUFYQztnQkFDZCxPQUFPO29CQUNMLElBQU1FLGNBQWMsSUFBSSxFQUNsQkMsYUFBYSxJQUFJLENBQUNSLElBQUksQ0FBQ0csUUFBUSxDQUFDSTtvQkFFdENILFNBQVMsQUFBQyxHQUFnQkksT0FBZEgsWUFBVyxLQUFjLE9BQVhHO2dCQUM1QixDQUFDO2dCQUVELE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNSixhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1AsUUFBUSxHQUN2Q1csV0FBVyxBQUFDLElBQUksQ0FBQ1YsSUFBSSxLQUFLLElBQUksR0FDaEIsSUFBSSxHQUNGLElBQUksQ0FBQ0EsSUFBSSxDQUFDUyxNQUFNLEVBQUUsRUFDbENFLE9BQU9DLHVCQUFnQixFQUN2QkMsT0FBT1IsWUFDUEwsT0FBT1UsVUFDUEksT0FBTztvQkFDTEgsTUFBQUE7b0JBQ0FFLE1BQUFBO29CQUNBYixNQUFBQTtnQkFDRjtnQkFFTixPQUFPYztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsY0FBYyxFQUFFO2dCQUNwQyxJQUFNLEFBQUVILE9BQVNDLEtBQVRELE1BQ0ZJLFdBQVdDLDRDQUFpQyxFQUM1Q0MsVUFBVSxBQUFDLGVBQW1CLE9BQUxOLE1BQUssT0FFOUJPLE9BQU9KLGVBQWVLLDBCQUEwQixDQUFDRixTQUFTRixXQUMxREssNkJBQTZCRixNQUM3QnJCLFdBQVdGLG1CQUFtQnlCO2dCQUVwQyxJQUFJLEFBQUV0QixPQUFTYyxLQUFUZDtnQkFFTixJQUFNVSxXQUFXVixNQUFPLEdBQUc7Z0JBRTNCYyxPQUFPSixVQUFXLEdBQUc7Z0JBRXJCVixPQUFPdUIsYUFBSSxDQUFDUixRQUFRLENBQUNELE1BQU1FO2dCQUUzQixJQUFNUSxXQUFXeEIsS0FBS3lCLE9BQU87Z0JBRTdCekIsT0FBT2dCLGVBQWVVLGtCQUFrQixDQUFDRixXQUFXLEdBQUc7Z0JBRXZELElBQU1HLGNBQWMsSUFyRUgvQixZQXFFbUJHLFVBQVVDO2dCQUU5QyxPQUFPMkI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQjdCLFFBQVEsRUFBRUMsSUFBSSxFQUFFO2dCQUN6QyxJQUFNMkIsY0FBYyxJQTNFSC9CLFlBMkVtQkcsVUFBVUM7Z0JBRTlDLE9BQU8yQjtZQUNUOzs7V0E5RW1CL0IifQ==