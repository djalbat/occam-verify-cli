"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Argument;
    }
});
var _query = require("./utilities/query");
var _name = require("./utilities/name");
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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term"), typeNodeQuery = (0, _query.nodeQuery)("/argument//type");
var Argument = /*#__PURE__*/ function() {
    function Argument(string, node, fileContext) {
        _class_call_check(this, Argument);
        this.string = string;
        this.node = node;
        this.fileContext = fileContext;
    }
    _create_class(Argument, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel = false;
                var argumentString = this.string; ///
                fileContext.trace("Verifying the '".concat(argumentString, "' argument at top level..."));
                if (this.node === null) {
                    verifiedAtTopLevel = true;
                } else {
                    var termNode = termNodeQuery(this.node);
                    if (termNode !== null) {
                        var termString = this.fileContext.nodeAsString(termNode);
                        this.fileContext.debug("The '".concat(termString, "' term was found when a type should have been present."));
                    } else {
                        var typeNode = typeNodeQuery(this.node);
                        if (typeNode !== null) {
                            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                            if (typePresent) {
                                verifiedAtTopLevel = true;
                            } else {
                                this.fileContext.debug("The '".concat(typeName, "' type is not present."));
                            }
                        }
                    }
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(argumentString, "' argument at top level."));
                }
                return verifiedAtTopLevel;
            }
        }
    ], [
        {
            key: "fromArgumentNode",
            value: function fromArgumentNode(argumentNode, fileContext) {
                var argument = null;
                if (argumentNode !== null) {
                    var node = argumentNode, string = fileContext.nodeAsString(node);
                    argument = new Argument(string, node, fileContext);
                }
                return argument;
            }
        }
    ]);
    return Argument;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZ3VtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudCBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2FzIGZvdW5kIHdoZW4gYSB0eXBlIHNob3VsZCBoYXZlIGJlZW4gcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50IGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudCA9IG51bGw7XG5cbiAgICBpZiAoYXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gYXJndW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGFyZ3VtZW50ID0gbmV3IEFyZ3VtZW50KHN0cmluZywgbm9kZSwgZmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFyZ3VtZW50IiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwiZmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0RmlsZUNvbnRleHQiLCJ2ZXJpZnlBdFRvcExldmVsIiwidmVyaWZpZWRBdFRvcExldmVsIiwiYXJndW1lbnRTdHJpbmciLCJ0cmFjZSIsInRlcm1Ob2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImZyb21Bcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7cUJBTks7b0JBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixJQUFBLEFBQU1GLHlCQUFOO2FBQU1BLFNBQ1BJLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXO2dDQURsQk47UUFFakIsSUFBSSxDQUFDSSxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFKRk47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCSixXQUFXO2dCQUMxQixJQUFJSyxxQkFBcUI7Z0JBRXpCLElBQU1DLGlCQUFpQixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUV2Q0UsWUFBWU8sS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZELGdCQUFlO2dCQUVuRCxJQUFJLElBQUksQ0FBQ1AsSUFBSSxLQUFLLE1BQU07b0JBQ3RCTSxxQkFBcUI7Z0JBQ3ZCLE9BQU87b0JBQ0wsSUFBTUcsV0FBV2IsY0FBYyxJQUFJLENBQUNJLElBQUk7b0JBRXhDLElBQUlTLGFBQWEsTUFBTTt3QkFDckIsSUFBTUMsYUFBYSxJQUFJLENBQUNULFdBQVcsQ0FBQ1UsWUFBWSxDQUFDRjt3QkFFakQsSUFBSSxDQUFDUixXQUFXLENBQUNXLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhGLFlBQVc7b0JBQzVDLE9BQU87d0JBQ0wsSUFBTUcsV0FBV2YsY0FBYyxJQUFJLENBQUNFLElBQUk7d0JBRXhDLElBQUlhLGFBQWEsTUFBTTs0QkFDckIsSUFBTUMsV0FBV0MsSUFBQUEsMEJBQW9CLEVBQUNGLFdBQ2hDRyxjQUFjLElBQUksQ0FBQ2YsV0FBVyxDQUFDZ0IsdUJBQXVCLENBQUNIOzRCQUU3RCxJQUFJRSxhQUFhO2dDQUNmVixxQkFBcUI7NEJBQ3ZCLE9BQU87Z0NBQ0wsSUFBSSxDQUFDTCxXQUFXLENBQUNXLEtBQUssQ0FBQyxBQUFDLFFBQWdCLE9BQVRFLFVBQVM7NEJBQzFDO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQUlSLG9CQUFvQjtvQkFDdEJMLFlBQVlXLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmTCxnQkFBZTtnQkFDdkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRWxCLFdBQVc7Z0JBQy9DLElBQUltQixXQUFXO2dCQUVmLElBQUlELGlCQUFpQixNQUFNO29CQUN6QixJQUFNbkIsT0FBT21CLGNBQ1BwQixTQUFTRSxZQUFZVSxZQUFZLENBQUNYO29CQUV4Q29CLFdBQVcsSUFqRUl6QixTQWlFU0ksUUFBUUMsTUFBTUM7Z0JBQ3hDO2dCQUVBLE9BQU9tQjtZQUNUOzs7V0FyRW1CekIifQ==