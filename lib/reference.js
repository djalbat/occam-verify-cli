"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Reference;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _metaType = require("./metaType");
var _unification = require("./utilities/unification");
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
var metavariableNodeQuery = (0, _query.nodeQuery)("//reference/metavariable");
var Reference = /*#__PURE__*/ function() {
    function Reference(metavariable) {
        _class_call_check(this, Reference);
        this.metavariable = metavariable;
    }
    _create_class(Reference, [
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
            key: "unifyLabel",
            value: function unifyLabel(label, substitutions, generalContext, specificContext) {
                var labelUnified;
                var reference = this, labelString = label.getString(), referenceString = reference.getString();
                specificContext.trace("Unifying the '".concat(labelString, "' label with the '").concat(referenceString, "' reference..."));
                var labelUnifiedWithReference = (0, _unification.unifyLabelWithReference)(label, reference, substitutions, generalContext, specificContext);
                labelUnified = labelUnifiedWithReference; ///
                if (labelUnified) {
                    specificContext.debug("...unified the '".concat(labelString, "' label with the '").concat(referenceString, "' reference."));
                }
                return labelUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var referenceString = this.getString(); ///
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                if (!verified) {
                    var metaType = _metaType.referenceMetaType, metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, context);
                    verified = metavariableVerifiedGivenMetaType; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), metavariable = metavariableJSON, string1 = this.string, json = {
                    string: string1,
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var metavariable = (0, _json.metavariableFromJSON)(json, fileContext), reference = new Reference(string, metavariable);
                return reference;
            }
        },
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, fileContext) {
                var Metavariable = _shim.default.Metavariable, metavariableNode = metavariableNodeQuery(referenceNode), localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), reference = new Reference(metavariable);
                return reference;
            }
        }
    ]);
    return Reference;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZU1ldGFUeXBlIH0gZnJvbSBcIi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IHVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLy9yZWZlcmVuY2UvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcyxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlID0gdW5pZnlMYWJlbFdpdGhSZWZlcmVuY2UobGFiZWwsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZWQgPSBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlOyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwidW5pZnlMYWJlbCIsImxhYmVsIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibGFiZWxVbmlmaWVkIiwicmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJyZWZlcmVuY2VTdHJpbmciLCJ0cmFjZSIsImxhYmVsVW5pZmllZFdpdGhSZWZlcmVuY2UiLCJ1bmlmeUxhYmVsV2l0aFJlZmVyZW5jZSIsImRlYnVnIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwibWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsImZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsIk1ldGF2YXJpYWJsZSIsInNoaW0iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkRBVko7NERBQ1E7cUJBRUM7d0JBQ1E7MkJBQ007b0JBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJFLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLDBCQUFOO2FBQU1BLFVBQ1BHLFlBQVk7Z0NBRExIO1FBRWpCLElBQUksQ0FBQ0csWUFBWSxHQUFHQTs7a0JBRkhIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFF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