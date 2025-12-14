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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
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
var _default = (0, _ontology.define)((_Label = /*#__PURE__*/ function() {
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
                var Metavariable = _ontology.default.Metavariable, metavariable = Metavariable.fromLabelNode(labelNode, context), label = new Label(context, metavariable);
                return label;
            }
        }
    ]);
    return Label;
}(), _define_property(_Label, "name", "Label"), _Label));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExhYmVsIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHRoaXMuaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgcmVmZXJlbmNlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1hdGNoZXM7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICB2ZXJpZnkobmFtZU9ubHkpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGV0IGxhYmVsUHJlc2VudDtcblxuICAgIGlmIChuYW1lT25seSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBsYWJlbFByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgIGxhYmVsUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG4gICAgfVxuXG4gICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTGFiZWwiLCJjb250ZXh0IiwibWV0YXZhcmlhYmxlIiwiZ2V0Q29udGV4dCIsImdldE1ldGF2YXJpYWJsZSIsImdldFN0cmluZyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1hdGNoUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1hdGNoZXMiLCJpc0VxdWFsVG8iLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJ2ZXJpZnkiLCJuYW1lT25seSIsInZlcmlmaWVzIiwibGFiZWxTdHJpbmciLCJ0cmFjZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImRlYnVnIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiTWV0YXZhcmlhYmxlIiwib250b2xvZ3kiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMcUI7b0JBR2dEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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