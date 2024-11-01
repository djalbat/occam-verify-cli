"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _json = require("./utilities/json");
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
var metavariableNodeQuery = (0, _query.nodeQuery)("//label/metavariable");
var Label = /*#__PURE__*/ function() {
    function Label(metavariable) {
        _class_call_check(this, Label);
        this.metavariable = metavariable;
    }
    _create_class(Label, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.metavariable.getString();
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.metavariable.matchMetavariableName(metavariableName);
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedWhenDeclared = false;
                var labelString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(labelString, "' label when declared..."));
                var metavariableName = this.metavariable.getName(), labelPresent = fileContext.isLabelPresentByMetavariableName(metavariableName);
                if (labelPresent) {
                    fileContext.debug("The '".concat(labelString, "' label is already present."));
                } else {
                    verifiedWhenDeclared = true;
                }
                if (verifiedWhenDeclared) {
                    fileContext.debug("...verified the '".concat(labelString, "' label when declared."));
                }
                return verifiedWhenDeclared;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), metavariable = metavariableJSON, json = {
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var metavariable = (0, _json.metavariableFromJSON)(json, fileContext), label = new Label(metavariable);
                return label;
            }
        },
        {
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode, fileContext) {
                var Metavariable = _shim.default.Metavariable, metavariableNode = metavariableNodeQuery(labelNode), localContext = _local.default.fromFileContext(fileContext), metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext), label = new Label(metavariable);
                return label;
            }
        }
    ]);
    return Label;
}();
Object.assign(_shim.default, {
    Label: Label
});
var _default = Label;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8vbGFiZWwvbWV0YXZhcmlhYmxlXCIpO1xuXG5jbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZWNsYXJlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobGFiZWxOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBMYWJlbFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIl0sIm5hbWVzIjpbIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJsYWJlbFN0cmluZyIsInRyYWNlIiwiZ2V0TmFtZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJsYWJlbCIsImZyb21MYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJNZXRhdmFyaWFibGUiLCJzaGltIiwibWV0YXZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4RUE7OztlQUFBOzs7MkRBNUVpQjs0REFDUTtxQkFFQztvQkFDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUMsc0JBQU47YUFBTUEsTUFDUUMsWUFBWTtnQ0FEcEJEO1FBRUYsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFGbEJEOztZQUtKRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNGLFlBQVksQ0FBQ0UsU0FBUztZQUFJOzs7WUFFcERDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFBSSxPQUFPLElBQUksQ0FBQ0osWUFBWSxDQUFDRyxxQkFBcUIsQ0FBQ0M7WUFBbUI7OztZQUU1R0MsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsV0FBVztnQkFDNUIsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFNQyxjQUFjLElBQUksQ0FBQ04sU0FBUyxJQUFJLEdBQUc7Z0JBRXpDSSxZQUFZRyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkQsYUFBWTtnQkFFaEQsSUFBTUosbUJBQW1CLElBQUksQ0FBQ0osWUFBWSxDQUFDVSxPQUFPLElBQzVDQyxlQUFlTCxZQUFZTSxnQ0FBZ0MsQ0FBQ1I7Z0JBRWxFLElBQUlPLGNBQWM7b0JBQ2hCTCxZQUFZTyxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaTCxhQUFZO2dCQUN4QyxPQUFPO29CQUNMRCx1QkFBdUI7Z0JBQ3pCO2dCQUVBLElBQUlBLHNCQUFzQjtvQkFDeEJELFlBQVlPLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTCxhQUFZO2dCQUNwRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQkMsSUFBQUEsb0NBQThCLEVBQUMsSUFBSSxDQUFDaEIsWUFBWSxHQUNuRUEsZUFBZWUsa0JBQ2ZFLE9BQU87b0JBQ0xqQixjQUFBQTtnQkFDRjtnQkFFTixPQUFPaUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVYLFdBQVc7Z0JBQy9CLElBQU1OLGVBQWVtQixJQUFBQSwwQkFBb0IsRUFBQ0YsTUFBTVgsY0FDMUNjLFFBQVEsSUFoRFpyQixNQWdEc0JDO2dCQUV4QixPQUFPb0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRWhCLFdBQVc7Z0JBQ3pDLElBQU0sQUFBRWlCLGVBQWlCQyxhQUFJLENBQXJCRCxjQUNGRSxtQkFBbUI1QixzQkFBc0J5QixZQUN6Q0ksZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUN0QixjQUM1Q04sZUFBZXVCLGFBQWFNLG9CQUFvQixDQUFDSixrQkFBa0JDLGVBQ25FTixRQUFRLElBMURackIsTUEwRHNCQztnQkFFeEIsT0FBT29CO1lBQ1Q7OztXQTdESXJCOztBQWdFTitCLE9BQU9DLE1BQU0sQ0FBQ1AsYUFBSSxFQUFFO0lBQ2xCekIsT0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=