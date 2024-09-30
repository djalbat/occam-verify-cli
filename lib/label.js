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
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./metavariable"));
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
            key: "getString",
            value: function getString() {
                return this.metavariable.getString();
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var verified = false;
                var labelString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(labelString, "' label..."));
                var metavariableNode = this.metavariable.getNode(), labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);
                if (labelPresent) {
                    fileContext.debug("The '".concat(labelString, "' label is already present."));
                } else {
                    verified = true;
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(labelString, "' label."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(fileContext) {
                var metavariableJSON = this.metavariable.toJSON(fileContext), metavariable = metavariableJSON, string = this.string, json = {
                    string: string,
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string;
                var metavariable = json.metavariable;
                json = metavariable; ///
                metavariable = _metavariable.default.fromJSON(json, fileContext);
                var label = new Label(string, metavariable);
                return label;
            }
        },
        {
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode, fileContext) {
                var metavariableNode = metavariableNodeQuery(labelNode), metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, fileContext), label = new Label(metavariable);
                return label;
            }
        }
    ]);
    return Label;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8vbGFiZWwvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIHZlcmlmeShmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IHRoaXMubWV0YXZhcmlhYmxlLnRvSlNPTihmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbjtcblxuICAgIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICAgIGpzb24gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChzdHJpbmcsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShsYWJlbE5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxhYmVsIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmeSIsImZpbGVDb250ZXh0IiwidmVyaWZpZWQiLCJsYWJlbFN0cmluZyIsInRyYWNlIiwiZ2V0Tm9kZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwic3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiTWV0YXZhcmlhYmxlIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O21FQU5JO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLHNCQUFOO2FBQU1BLE1BQ1BHLFlBQVk7Z0NBRExIO1FBRWpCLElBQUksQ0FBQ0csWUFBWSxHQUFHQTs7a0JBRkhIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRCxZQUFZLENBQUNDLFNBQVM7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNKLFlBQVksQ0FBQ0cscUJBQXFCLENBQUNDO1lBQW1COzs7WUFFNUdDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXO2dCQUNoQixJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGNBQWMsSUFBSSxDQUFDUCxTQUFTLElBQUksR0FBRztnQkFFekNLLFlBQVlHLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRCxhQUFZO2dCQUVoRCxJQUFNSixtQkFBbUIsSUFBSSxDQUFDSixZQUFZLENBQUNVLE9BQU8sSUFDNUNDLGVBQWVMLFlBQVlNLGdDQUFnQyxDQUFDUjtnQkFFbEUsSUFBSU8sY0FBYztvQkFDaEJMLFlBQVlPLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpMLGFBQVk7Z0JBQ3hDLE9BQU87b0JBQ0xELFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWkQsWUFBWU8sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVk7Z0JBQ3BEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1IsV0FBVztnQkFDaEIsSUFBTVMsbUJBQW1CLElBQUksQ0FBQ2YsWUFBWSxDQUFDYyxNQUFNLENBQUNSLGNBQzVDTixlQUFlZSxrQkFDZkMsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJDLE9BQU87b0JBQ0xELFFBQUFBO29CQUNBaEIsY0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2lCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFWCxXQUFXO2dCQUMvQixJQUFNLEFBQUVVLFNBQVdDLEtBQVhEO2dCQUVSLElBQUksQUFBRWhCLGVBQWlCaUIsS0FBakJqQjtnQkFFTmlCLE9BQU9qQixjQUFlLEdBQUc7Z0JBRXpCQSxlQUFlbUIscUJBQVksQ0FBQ0QsUUFBUSxDQUFDRCxNQUFNWDtnQkFFM0MsSUFBTWMsUUFBUSxJQXpER3ZCLE1BeURPbUIsUUFBUWhCO2dCQUVoQyxPQUFPb0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRWhCLFdBQVc7Z0JBQ3pDLElBQU1GLG1CQUFtQk4sc0JBQXNCd0IsWUFDekN0QixlQUFlbUIscUJBQVksQ0FBQ0ksb0JBQW9CLENBQUNuQixrQkFBa0JFLGNBQ25FYyxRQUFRLElBakVHdkIsTUFpRU9HO2dCQUV4QixPQUFPb0I7WUFDVDs7O1dBcEVtQnZCIn0=