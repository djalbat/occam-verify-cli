"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Label;
    }
});
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
var Label = /*#__PURE__*/ function() {
    function Label(metavariableNode) {
        _class_call_check(this, Label);
        this.metavariableNode = metavariableNode;
    }
    _create_class(Label, [
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matches = this.metavariableNode.match(metavariableNode);
                return matches;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var string = (0, _string.nodeAsString)(this.metavariableNode, tokens);
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var string = (0, _string.nodeAsString)(this.metavariableNode, tokens), json = string; ///
                return json;
            }
        }
    ], [
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode) {
                var label = new Label(metavariableNode);
                return label;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metavariableString = json, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metavariableNode = (0, _node.metavariableNodeFromMetavariableString)(metavariableString, lexer, parser), label = new Label(metavariableNode);
                return label;
            }
        }
    ]);
    return Label;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhdmFyaWFibGVOb2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhdmFyaWFibGVOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGpzb24gPSBzdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0ganNvbiwgLy8vXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcobWV0YXZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxhYmVsIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaGVzIiwibWF0Y2giLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsImpzb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztzQkFIUTtvQkFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEsc0JBQUQsQUFBTDthQUFNQSxNQUNQQyxnQkFBZ0I7Z0NBRFREO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztrQkFGUEQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGdCQUFnQjtZQUM5Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JGLGdCQUFnQjtnQkFDcEMsSUFBTUcsVUFBVSxJQUFJLENBQUNILGdCQUFnQixDQUFDSSxLQUFLLENBQUNKO2dCQUU1QyxPQUFPRztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU07Z0JBQ2IsSUFBTUMsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNSLGdCQUFnQixFQUFFTTtnQkFFbkQsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSCxNQUFNO2dCQUNYLElBQU1DLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUixnQkFBZ0IsRUFBRU0sU0FDN0NJLE9BQU9ILFFBQVMsR0FBRztnQkFFekIsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJYLGdCQUFnQjtnQkFDMUMsSUFBTVksUUFBUSxJQTdCR2IsTUE2Qk9DO2dCQUV4QixPQUFPWTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCSCxJQUFJLEVBQUVJLFdBQVc7Z0JBQzdDLElBQU1DLHFCQUFxQkwsTUFDckJNLFFBQVNGLFlBQVlHLFFBQVEsSUFDN0JDLFNBQVNKLFlBQVlLLFNBQVMsSUFDOUJuQixtQkFBbUJvQixJQUFBQSw0Q0FBc0MsRUFBQ0wsb0JBQW9CQyxPQUFPRSxTQUNyRk4sUUFBUSxJQXZDR2IsTUF1Q09DO2dCQUV4QixPQUFPWTtZQUNUOzs7V0ExQ21CYiJ9