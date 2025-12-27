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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
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
var _default = (0, _structure.define)((_Label = /*#__PURE__*/ function() {
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
                var metavariable = reference.getMetavariable(), metavariableEqualToMetavariable = this.isMetavariableEqualToMetavariable(metavariable), referenceMatches = metavariableEqualToMetavariable; ///
                return referenceMatches;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
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
                var Metavariable = _structure.default.Metavariable, metavariable = Metavariable.fromLabelNode(labelNode, context), label = new Label(context, metavariable);
                return label;
            }
        }
    ]);
    return Label;
}(), _define_property(_Label, "name", "Label"), _Label));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSB0aGlzLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU1hdGNoZXMgPSBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VNYXRjaGVzO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgdmVyaWZ5KG5hbWVPbmx5KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxldCBsYWJlbFByZXNlbnQ7XG5cbiAgICBpZiAobmFtZU9ubHkpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgbGFiZWxQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICBsYWJlbFByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMYWJlbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJMYWJlbCIsImNvbnRleHQiLCJtZXRhdmFyaWFibGUiLCJnZXRDb250ZXh0IiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWF0Y2hSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWF0Y2hlcyIsImlzRXF1YWxUbyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsInZlcmlmeSIsIm5hbWVPbmx5IiwidmVyaWZpZXMiLCJsYWJlbFN0cmluZyIsInRyYWNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJsYWJlbCIsImZyb21MYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJNZXRhdmFyaWFibGUiLCJzdHJ1Y3R1cmUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztpRUFMc0I7b0JBRytDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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