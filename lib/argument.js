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
            key: "verify",
            value: function verify(fileContext) {
                var verified = false;
                var argumentString = this.string; ///
                fileContext.trace("Verifying the '".concat(argumentString, "' argument..."));
                if (this.node === null) {
                    verified = true;
                } else {
                    var termNode = termNodeQuery(this.node);
                    if (termNode !== null) {
                        var termString = this.fileContext.nodeAsString(termNode);
                        this.fileContext.debug("The '".concat(termString, "' term was found when a type should have been present."));
                    } else {
                        var typeNode = typeNodeQuery(this.node);
                        if (typeNode !== null) {
                            var typePresent = this.fileContext.isTypePresentByTypeNode(typeNode);
                            if (typePresent) {
                                verified = true;
                            } else {
                                var typeString = this.fileContext.nodeAsString(typeNode);
                                this.fileContext.debug("The '".concat(typeString, "' type is not present."));
                            }
                        }
                    }
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(argumentString, "' argument."));
                }
                return verified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZ3VtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhcmd1bWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQuLi5gKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5maWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3YXMgZm91bmQgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICAgICAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy5maWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudCA9IG51bGw7XG5cbiAgICBpZiAoYXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gYXJndW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGFyZ3VtZW50ID0gbmV3IEFyZ3VtZW50KHN0cmluZywgbm9kZSwgZmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFyZ3VtZW50IiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwiZmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0RmlsZUNvbnRleHQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImFyZ3VtZW50U3RyaW5nIiwidHJhY2UiLCJ0ZXJtTm9kZSIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSIsInR5cGVTdHJpbmciLCJmcm9tQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlIiwiYXJndW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FCQUxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNRix5QkFBTjthQUFNQSxTQUNQSSxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVztnQ0FEbEJOO1FBRWpCLElBQUksQ0FBQ0ksTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSkZOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9KLFdBQVc7Z0JBQ2hCLElBQUlLLFdBQVc7Z0JBRWYsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBRXZDRSxZQUFZTyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkQsZ0JBQWU7Z0JBRW5ELElBQUksSUFBSSxDQUFDUCxJQUFJLEtBQUssTUFBTTtvQkFDdEJNLFdBQVc7Z0JBQ2IsT0FBTztvQkFDTCxJQUFNRyxXQUFXYixjQUFjLElBQUksQ0FBQ0ksSUFBSTtvQkFFeEMsSUFBSVMsYUFBYSxNQUFNO3dCQUNyQixJQUFNQyxhQUFhLElBQUksQ0FBQ1QsV0FBVyxDQUFDVSxZQUFZLENBQUNGO3dCQUVqRCxJQUFJLENBQUNSLFdBQVcsQ0FBQ1csS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEYsWUFBVztvQkFDNUMsT0FBTzt3QkFDTCxJQUFNRyxXQUFXZixjQUFjLElBQUksQ0FBQ0UsSUFBSTt3QkFFeEMsSUFBSWEsYUFBYSxNQUFNOzRCQUNyQixJQUFNQyxjQUFjLElBQUksQ0FBQ2IsV0FBVyxDQUFDYyx1QkFBdUIsQ0FBQ0Y7NEJBRTdELElBQUlDLGFBQWE7Z0NBQ2ZSLFdBQVc7NEJBQ2IsT0FBTztnQ0FDTCxJQUFNVSxhQUFhLElBQUksQ0FBQ2YsV0FBVyxDQUFDVSxZQUFZLENBQUNFO2dDQUVqRCxJQUFJLENBQUNaLFdBQVcsQ0FBQ1csS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEksWUFBVzs0QkFDNUM7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSVYsVUFBVTtvQkFDWkwsWUFBWVcsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZMLGdCQUFlO2dCQUN2RDtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkMsWUFBWSxFQUFFakIsV0FBVztnQkFDL0MsSUFBSWtCLFdBQVc7Z0JBRWYsSUFBSUQsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1sQixPQUFPa0IsY0FDUG5CLFNBQVNFLFlBQVlVLFlBQVksQ0FBQ1g7b0JBRXhDbUIsV0FBVyxJQWxFSXhCLFNBa0VTSSxRQUFRQyxNQUFNQztnQkFDeEM7Z0JBRUEsT0FBT2tCO1lBQ1Q7OztXQXRFbUJ4QiJ9