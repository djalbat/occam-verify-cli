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
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
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
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var referenceString = this.getString(); ///
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                if (!verified) {
                    var metaType = _metaType.referenceMetaType, metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, context);
                    verified = metavariableVerifiedGivenMetaType; ///
                }
                if (!verified) {
                    var reference = this, generalContext = context, specificContext = context, metaLemmaPresent = generalContext.isMetaLemmaPresentByReference(reference, specificContext), metatheoremPresent = generalContext.isMetatheoremPresentByReference(reference, specificContext);
                    verified = metaLemmaPresent || metatheoremPresent;
                }
                if (!verified) {
                    var reference1 = this, axiomPresent = context.isAxiomPresentByReference(reference1), lemmaPresent = context.isLemmaPresentByReference(reference1), theoremPresent = context.isTheoremPresentByReference(reference1), conjecturePresent = context.isConjecturePresentByReference(reference1);
                    verified = axiomPresent || lemmaPresent || theoremPresent || conjecturePresent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZU1ldGFUeXBlIH0gZnJvbSBcIi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IGxvY2FsIGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLy9yZWZlcmVuY2UvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbWV0YUxlbW1hUHJlc2VudCA9IGdlbmVyYWxDb250ZXh0LmlzTWV0YUxlbW1hUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtUHJlc2VudCA9IGdlbmVyYWxDb250ZXh0LmlzTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IChtZXRhTGVtbWFQcmVzZW50IHx8IG1ldGF0aGVvcmVtUHJlc2VudCk7XG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBheGlvbVByZXNlbnQgPSBjb250ZXh0LmlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIGxlbW1hUHJlc2VudCA9IGNvbnRleHQuaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgdGhlb3JlbVByZXNlbnQgPSBjb250ZXh0LmlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgY29uamVjdHVyZVByZXNlbnQgPSBjb250ZXh0LmlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICB2ZXJpZmllZCA9IChheGlvbVByZXNlbnQgfHwgbGVtbWFQcmVzZW50IHx8IHRoZW9yZW1QcmVzZW50IHx8IGNvbmplY3R1cmVQcmVzZW50KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdHJpbmciLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJ0cmFjZSIsIm1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwicmVmZXJlbmNlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhTGVtbWFQcmVzZW50IiwiaXNNZXRhTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdGhlb3JlbVByZXNlbnQiLCJpc01ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwiYXhpb21QcmVzZW50IiwiaXNBeGlvbVByZXNlbnRCeVJlZmVyZW5jZSIsImxlbW1hUHJlc2VudCIsImlzTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UiLCJ0aGVvcmVtUHJlc2VudCIsImlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImNvbmplY3R1cmVQcmVzZW50IiwiaXNDb25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsImZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsIk1ldGF2YXJpYWJsZSIsInNoaW0iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkRBVko7NERBQ1E7cUJBRUM7d0JBQ1E7b0JBQ21DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3JFLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLDBCQUFOO2FBQU1BLFVBQ1BHLFlBQVk7Z0NBRExIO1FBRWpCLElBQUksQ0FBQ0csWUFBWSxHQUFHQTs7a0JBRkhIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxD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