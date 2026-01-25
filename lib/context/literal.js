"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiteralContext;
    }
});
var _occamfurtle = require("occam-furtle");
var _node = require("../utilities/node");
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
var chainContext = _occamfurtle.contextUtilities.chainContext;
var LiteralContext = /*#__PURE__*/ function() {
    function LiteralContext(context, tokens) {
        _class_call_check(this, LiteralContext);
        this.context = context;
        this.tokens = tokens;
        return chainContext(this);
    }
    _create_class(LiteralContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _node.nodeAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.context.getFileContext();
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var tokens = null, literalContext = new LiteralContext(context, tokens);
                return literalContext;
            }
        }
    ]);
    return LiteralContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IGNoYWluQ29udGV4dCB9ID0gY29udGV4dFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl0ZXJhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0b2tlbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RmlsZUNvbnRleHQoKTsgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGxldCBkZXB0aCA9IHRoaXMuY29udGV4dC5nZXREZXB0aCgpO1xuXG4gICAgZGVwdGgrKztcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBsaXRlcmFsQ29udGV4dCA9IG5ldyBMaXRlcmFsQ29udGV4dChjb250ZXh0LCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGxpdGVyYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGl0ZXJhbENvbnRleHQiLCJjaGFpbkNvbnRleHQiLCJjb250ZXh0VXRpbGl0aWVzIiwiY29udGV4dCIsInRva2VucyIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJzZXRUb2tlbnMiLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkJBTlk7b0JBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMsZUFBaUJDLDZCQUFnQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELCtCQUFOO2FBQU1BLGVBQ1BHLE9BQU8sRUFBRUMsTUFBTTtnQ0FEUko7UUFFakIsSUFBSSxDQUFDRyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBRWQsT0FBT0gsYUFBYSxJQUFJOztrQkFMUEQ7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUgsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsSUFBSTtnQkFDZixJQUFNQyxTQUFTRixJQUFBQSxrQkFBWSxFQUFDQyxNQUFNLElBQUksQ0FBQ0wsTUFBTTtnQkFFN0MsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBbUIsT0FBTyxJQUFJLENBQUNSLE9BQU8sQ0FBQ1EsY0FBYztZQUFJOzs7WUFFekRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxRQUFRLElBQUksQ0FBQ1YsT0FBTyxDQUFDUyxRQUFRO2dCQUVqQ0M7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZWCxPQUFPO2dCQUN4QixJQUFNQyxTQUFTLE1BQ1RXLGlCQUFpQixJQXRDTmYsZUFzQ3lCRyxTQUFTQztnQkFFbkQsT0FBT1c7WUFDVDs7O1dBekNtQmYifQ==