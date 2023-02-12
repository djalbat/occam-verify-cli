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
var _kinds = require("./kinds");
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
                var termString = (0, _string.nodeAsString)(this.termNode, tokens), typeJSON = this.type === null ? null : this.type.toJSON(tokens), kind = _kinds.CONSTRUCTOR_KIND, term = termString, type = typeJSON, json = {
                    kind: kind,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBDT05TVFJVQ1RPUl9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvciB7XG4gIGNvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKSB7XG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMudGVybU5vZGUsIHRva2Vucyk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vU3VwZXJUeXBlID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuYXNTdHJpbmcodG9rZW5zLCBub1N1cGVyVHlwZSk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHR5cGVKU09OID0gKHRoaXMudHlwZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBraW5kID0gQ09OU1RSVUNUT1JfS0lORCxcbiAgICAgICAgICB0ZXJtID0gdGVybVN0cmluZywgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgdGVybSxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgdGVybSB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybSwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZTsgIC8vL1xuXG4gICAgICBqc29uID0gdHlwZUpTT047ICAvLy9cblxuICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwidHlwZSIsImdldFRlcm1Ob2RlIiwiZ2V0VHlwZSIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm5vU3VwZXJUeXBlIiwidHlwZVN0cmluZyIsInRvSlNPTiIsInR5cGVKU09OIiwia2luZCIsIkNPTlNUUlVDVE9SX0tJTkQiLCJ0ZXJtIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwiVHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImNvbnN0cnVjdG9yIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eURBTko7c0JBRVk7cUJBQ0k7b0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxRQUFRLEVBQUVDLElBQUk7OEJBRFBGO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0E7O2lCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTSxFQUFFO2dCQUNmLElBQUlDO2dCQUVKLElBQU1DLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUixRQUFRLEVBQUVLO2dCQUUvQyxJQUFJLElBQUksQ0FBQ0osSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDdEJLLFNBQVMsQUFBQyxHQUFhLE9BQVhDO2dCQUNkLE9BQU87b0JBQ0wsSUFBTUUsY0FBYyxJQUFJLEVBQ2xCQyxhQUFhLElBQUksQ0FBQ1QsSUFBSSxDQUFDRyxRQUFRLENBQUNDLFFBQVFJO29CQUU5Q0gsU0FBUyxBQUFDLEdBQWdCSSxPQUFkSCxZQUFXLEtBQWMsT0FBWEc7Z0JBQzVCLENBQUM7Z0JBRUQsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTixNQUFNLEVBQUU7Z0JBQ2IsSUFBTUUsYUFBYUMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNSLFFBQVEsRUFBRUssU0FDekNPLFdBQVcsQUFBQyxJQUFJLENBQUNYLElBQUksS0FBSyxJQUFJLEdBQ2hCLElBQUksR0FDRixJQUFJLENBQUNBLElBQUksQ0FBQ1UsTUFBTSxDQUFDTixPQUFPLEVBQ3hDUSxPQUFPQyx1QkFBZ0IsRUFDdkJDLE9BQU9SLFlBQ1BOLE9BQU9XLFVBQ1BJLE9BQU87b0JBQ0xILE1BQUFBO29CQUNBRSxNQUFBQTtvQkFDQWQsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJELElBQUksRUFBRUUsV0FBVyxFQUFFO2dCQUMvQyxJQUFNLEFBQUVILE9BQVNDLEtBQVRELE1BQ0ZSLGFBQWFRLE1BQ2JJLFFBQVFELFlBQVlFLFFBQVEsSUFDNUJDLFNBQVNILFlBQVlJLFNBQVMsSUFDOUJ0QixXQUFXdUIsSUFBQUEsNEJBQXNCLEVBQUNoQixZQUFZWSxPQUFPRTtnQkFFM0QsSUFBSSxBQUFFcEIsT0FBU2UsS0FBVGY7Z0JBRU4sSUFBSUEsU0FBUyxJQUFJLEVBQUU7b0JBQ2pCLElBQU1XLFdBQVdYLE1BQU8sR0FBRztvQkFFM0JlLE9BQU9KLFVBQVcsR0FBRztvQkFFckJYLE9BQU91QixhQUFJLENBQUNQLHNCQUFzQixDQUFDRCxNQUFNRTtvQkFFekMsSUFBTU8sV0FBV3hCLEtBQUt5QixPQUFPO29CQUU3QnpCLE9BQU9pQixZQUFZUyxrQkFBa0IsQ0FBQ0YsV0FBVyxHQUFHO2dCQUN0RCxDQUFDO2dCQUVELElBQU1HLGNBQWMsSUFyRUg3QixZQXFFbUJDLFVBQVVDO2dCQUU5QyxPQUFPMkI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQjdCLFFBQVEsRUFBRUMsSUFBSSxFQUFFO2dCQUN6QyxJQUFNMkIsY0FBYyxJQTNFSDdCLFlBMkVtQkMsVUFBVUM7Z0JBRTlDLE9BQU8yQjtZQUNUOzs7V0E5RW1CN0IifQ==