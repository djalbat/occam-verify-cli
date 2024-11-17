"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BracketedContext;
    }
});
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
var BracketedContext = /*#__PURE__*/ function() {
    function BracketedContext(string, node, tokens) {
        _class_call_check(this, BracketedContext);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(BracketedContext, [
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
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "nodeAsTokens",
            value: function nodeAsTokens() {
                return this.tokens;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString() {
                return this.string;
            }
        },
        {
            key: "tokensAsString",
            value: function tokensAsString() {
                return this.string;
            }
        }
    ], [
        {
            key: "fromString",
            value: function fromString(Class, string, context) {
                var node = context.getNode(), tokens = context.getTokens(), bracketedContext = new Class(string, node, tokens);
                return bracketedContext;
            }
        }
    ]);
    return BracketedContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2JyYWNrZXR0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWNrZXRlZENvbnRleHQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIG5vZGVBc1Rva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgdG9rZW5zQXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoQ2xhc3MsIHN0cmluZywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBjb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnRleHQgPSBuZXcgQ2xhc3Moc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCcmFja2V0ZWRDb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJub2RlQXNUb2tlbnMiLCJub2RlQXNTdHJpbmciLCJ0b2tlbnNBc1N0cmluZyIsImZyb21TdHJpbmciLCJDbGFzcyIsImNvbnRleHQiLCJicmFja2V0ZWRDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLGlDQUFOO2FBQU1BLGlCQUNQQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FEYkg7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLE1BQU07WUFDcEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLE1BQU07WUFDcEI7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0MsS0FBSyxFQUFFVixNQUFNLEVBQUVXLE9BQU87Z0JBQ3RDLElBQU1WLE9BQU9VLFFBQVFQLE9BQU8sSUFDdEJGLFNBQVNTLFFBQVFOLFNBQVMsSUFDMUJPLG1CQUFtQixJQUFJRixNQUFNVixRQUFRQyxNQUFNQztnQkFFakQsT0FBT1U7WUFDVDs7O1dBckNtQmIifQ==