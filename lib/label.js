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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhdmFyaWFibGVOb2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhdmFyaWFibGVOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGpzb24gPSBzdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0ganNvbiwgLy8vXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcobWV0YXZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxhYmVsIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaGVzIiwibWF0Y2giLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsImpzb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztzQkFIUTtvQkFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsZ0JBQWdCO2dDQURURDtRQUVqQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7a0JBRlBEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxnQkFBZ0I7WUFDOUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCRixnQkFBZ0I7Z0JBQ3BDLElBQU1HLFVBQVUsSUFBSSxDQUFDSCxnQkFBZ0IsQ0FBQ0ksS0FBSyxDQUFDSjtnQkFFNUMsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQU1DLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUixnQkFBZ0IsRUFBRU07Z0JBRW5ELE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0gsTUFBTTtnQkFDWCxJQUFNQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1IsZ0JBQWdCLEVBQUVNLFNBQzdDSSxPQUFPSCxRQUFTLEdBQUc7Z0JBRXpCLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCWCxnQkFBZ0I7Z0JBQzFDLElBQU1ZLFFBQVEsSUE3QkdiLE1BNkJPQztnQkFFeEIsT0FBT1k7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkgsSUFBSSxFQUFFSSxXQUFXO2dCQUM3QyxJQUFNQyxxQkFBcUJMLE1BQ3JCTSxRQUFTRixZQUFZRyxRQUFRLElBQzdCQyxTQUFTSixZQUFZSyxTQUFTLElBQzlCbkIsbUJBQW1Cb0IsSUFBQUEsNENBQXNDLEVBQUNMLG9CQUFvQkMsT0FBT0UsU0FDckZOLFFBQVEsSUF2Q0diLE1BdUNPQztnQkFFeEIsT0FBT1k7WUFDVDs7O1dBMUNtQmIifQ==