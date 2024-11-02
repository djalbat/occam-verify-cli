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
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.metavariable.matchMetavariableName(metavariableName);
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext, nameOnly) {
                var verifiedWhenDeclared = false;
                var labelString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(labelString, "' label when declared..."));
                var labelPresent;
                if (nameOnly) {
                    var metavariableName = this.getMetavariableName();
                    labelPresent = fileContext.isLabelPresentByMetavariableName(metavariableName);
                } else {
                    var metavariableNode = this.getMetavariableNode();
                    labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8vbGFiZWwvbWV0YXZhcmlhYmxlXCIpO1xuXG5jbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0LCBuYW1lT25seSkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZWNsYXJlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgbGV0IGxhYmVsUHJlc2VudDtcblxuICAgIGlmIChuYW1lT25seSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZWNsYXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVjbGFyZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGxhYmVsTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTGFiZWxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcbiJdLCJuYW1lcyI6WyJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJMYWJlbCIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFN0cmluZyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImZpbGVDb250ZXh0IiwibmFtZU9ubHkiLCJ2ZXJpZmllZFdoZW5EZWNsYXJlZCIsImxhYmVsU3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJsYWJlbCIsImZyb21MYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJNZXRhdmFyaWFibGUiLCJzaGltIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFHQTs7O2VBQUE7OzsyREFuR2lCOzREQUNRO3FCQUVDO29CQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7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