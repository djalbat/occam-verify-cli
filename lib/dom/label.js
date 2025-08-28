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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _json = require("../utilities/json");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Label;
var _default = (0, _dom.domAssigned)((_Label = /*#__PURE__*/ function() {
    function Label(context, metavariable) {
        _class_call_check(this, Label);
        this.context = context;
        this.metavariable = metavariable;
    }
    _create_class(Label, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
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
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = this.metavariable.getName();
                return metavariableName;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.metavariable.getNode();
                return metavariableNode;
            }
        },
        {
            key: "matchReference",
            value: function matchReference(reference) {
                var metavariable = reference.getMetavariable(), metavariableEqualToMetavariable = this.isMetavariableEqualTo(metavariable), referenceMatches = metavariableEqualToMetavariable; ///
                return referenceMatches;
            }
        },
        {
            key: "isMetavariableEqualTo",
            value: function isMetavariableEqualTo(metavariable) {
                var equalTo = this.metavariable.isEqualTo(metavariable), metavariableEqualTo = equalTo; ///
                return metavariableEqualTo;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.metavariable.matchMetavariableName(metavariableName);
            }
        },
        {
            key: "verify",
            value: function verify(nameOnly) {
                var verifies = false;
                var labelString = this.getString(); ///
                this.context.trace("Verifying the '".concat(labelString, "' label..."));
                var labelPresent;
                if (nameOnly) {
                    var metavariableName = this.getMetavariableName();
                    labelPresent = this.context.isLabelPresentByMetavariableName(metavariableName);
                } else {
                    var metavariable = this.getMetavariable();
                    labelPresent = this.context.isLabelPresentByMetavariable(metavariable);
                }
                if (labelPresent) {
                    this.context.debug("The '".concat(labelString, "' label is already present."));
                } else {
                    verifies = true;
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(labelString, "' label."));
                }
                return verifies;
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
            value: function fromJSON(json, context) {
                var metavariable = (0, _json.metavariableFromJSON)(json, context), label = new Label(context, metavariable);
                return label;
            }
        },
        {
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode, context) {
                var Metavariable = _dom.default.Metavariable, localContext = _local.default.fromFileContext(context), metavariable = Metavariable.fromLabelNode(labelNode, localContext), label = new Label(context, metavariable);
                return label;
            }
        }
    ]);
    return Label;
}(), _define_property(_Label, "name", "Label"), _Label));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gdGhpcy5pc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICByZWZlcmVuY2VNYXRjaGVzID0gbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWF0Y2hlcztcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRXF1YWxUbyA9IGVxdWFsVG87ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVFcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIHZlcmlmeShuYW1lT25seSkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBsZXQgbGFiZWxQcmVzZW50O1xuXG4gICAgaWYgKG5hbWVPbmx5KSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGxhYmVsUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgbGFiZWxQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTGFiZWxcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiTGFiZWwiLCJjb250ZXh0IiwibWV0YXZhcmlhYmxlIiwiZ2V0Q29udGV4dCIsImdldE1ldGF2YXJpYWJsZSIsImdldFN0cmluZyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1hdGNoUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUbyIsInJlZmVyZW5jZU1hdGNoZXMiLCJlcXVhbFRvIiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlRXF1YWxUbyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsInZlcmlmeSIsIm5hbWVPbmx5IiwidmVyaWZpZXMiLCJsYWJlbFN0cmluZyIsInRyYWNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJsYWJlbCIsImZyb21MYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJNZXRhdmFyaWFibGUiLCJkb20iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7NERBQ1M7b0JBRzRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyRSxXQUFlQSxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsT0FBTyxFQUFFQyxZQUFZO2dDQURGRjtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFlBQVksR0FBR0E7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0gsWUFBWSxDQUFDRyxTQUFTO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNMLFlBQVksQ0FBQ00sT0FBTztnQkFFbEQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUixZQUFZLENBQUNTLE9BQU87Z0JBRWxELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUztnQkFDdEIsSUFBTVgsZUFBZVcsVUFBVVQsZUFBZSxJQUN4Q1Usa0NBQWtDLElBQUksQ0FBQ0MscUJBQXFCLENBQUNiLGVBQzdEYyxtQkFBbUJGLGlDQUFpQyxHQUFHO2dCQUU3RCxPQUFPRTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQmIsWUFBWTtnQkFDaEMsSUFBTWUsVUFBVSxJQUFJLENBQUNmLFlBQVksQ0FBQ2dCLFNBQVMsQ0FBQ2hCLGVBQ3RDaUIsc0JBQXNCRixTQUFVLEdBQUc7Z0JBRXpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCYixnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNMLFlBQVksQ0FBQ2tCLHFCQUFxQixDQUFDYjtZQUFtQjs7O1lBRTVHYyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsUUFBUTtnQkFDYixJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGNBQWMsSUFBSSxDQUFDbkIsU0FBUyxJQUFJLEdBQUc7Z0JBRXpDLElBQUksQ0FBQ0osT0FBTyxDQUFDd0IsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpELGFBQVk7Z0JBRWpELElBQUlFO2dCQUVKLElBQUlKLFVBQVU7b0JBQ1osSUFBTWYsbUJBQW1CLElBQUksQ0FBQ0QsbUJBQW1CO29CQUVqRG9CLGVBQWUsSUFBSSxDQUFDekIsT0FBTyxDQUFDMEIsZ0NBQWdDLENBQUNwQjtnQkFDL0QsT0FBTztvQkFDTCxJQUFNTCxlQUFlLElBQUksQ0FBQ0UsZUFBZTtvQkFFekNzQixlQUFlLElBQUksQ0FBQ3pCLE9BQU8sQ0FBQzJCLDRCQUE0QixDQUFDMUI7Z0JBQzNEO2dCQUVBLElBQUl3QixjQUFjO29CQUNoQixJQUFJLENBQUN6QixPQUFPLENBQUM0QixLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaTCxhQUFZO2dCQUN6QyxPQUFPO29CQUNMRCxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDdEIsT0FBTyxDQUFDNEIsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVk7Z0JBQ3JEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CQyxJQUFBQSxvQ0FBOEIsRUFBQyxJQUFJLENBQUM5QixZQUFZLEdBQ25FQSxlQUFlNkIsa0JBQ2ZFLE9BQU87b0JBQ0wvQixjQUFBQTtnQkFDRjtnQkFFTixPQUFPK0I7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVoQyxPQUFPO2dCQUMzQixJQUFNQyxlQUFlaUMsSUFBQUEsMEJBQW9CLEVBQUNGLE1BQU1oQyxVQUMxQ21DLFFBQVEsSUFBSXBDLE1BQU1DLFNBQVNDO2dCQUVqQyxPQUFPa0M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRXJDLE9BQU87Z0JBQ3JDLElBQU0sQUFBRXNDLGVBQWlCQyxZQUFHLENBQXBCRCxjQUNGRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQzFDLFVBQzVDQyxlQUFlcUMsYUFBYUYsYUFBYSxDQUFDQyxXQUFXRyxlQUNyREwsUUFBUSxJQUFJcEMsTUFBTUMsU0FBU0M7Z0JBRWpDLE9BQU9rQztZQUNUOzs7O0tBaEJBLHlCQUFPUSxRQUFPIn0=