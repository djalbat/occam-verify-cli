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
            value: function verify(localContext) {
                var verified = false;
                var referenceString = this.getString(); ///
                localContext.trace("Verifying the '".concat(referenceString, "' reference..."));
                if (!verified) {
                    var metaType = _metaType.referenceMetaType, metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, localContext);
                    verified = metavariableVerifiedGivenMetaType; ///
                }
                if (!verified) {
                    var reference = this, metaLemmaPresent = localContext.isMetaLemmaPresentByReference(reference, localContext), metatheoremPresent = localContext.isMetatheoremPresentByReference(reference, localContext);
                    verified = metaLemmaPresent || metatheoremPresent;
                }
                if (!verified) {
                    var reference1 = this, axiomPresent = localContext.isAxiomPresentByReference(reference1), lemmaPresent = localContext.isLemmaPresentByReference(reference1), theoremPresent = localContext.isTheoremPresentByReference(reference1), conjecturePresent = localContext.isConjecturePresentByReference(reference1);
                    verified = axiomPresent || lemmaPresent || theoremPresent || conjecturePresent;
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(referenceString, "' reference."));
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
                var Metavariable = _shim.default.Metavariable, metavariableNode = metavariableNodeQuery(referenceNode), localContext = _local.default.fromFileContext(fileContext), metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext), reference = new Reference(metavariable);
                return reference;
            }
        }
    ]);
    return Reference;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZU1ldGFUeXBlIH0gZnJvbSBcIi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IGxvY2FsIGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLy9yZWZlcmVuY2UvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWFQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzTWV0YUxlbW1hUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc01ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSAobWV0YUxlbW1hUHJlc2VudCB8fCBtZXRhdGhlb3JlbVByZXNlbnQpO1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgYXhpb21QcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIGxlbW1hUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc0xlbW1hUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICB0aGVvcmVtUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1RoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIGNvbmplY3R1cmVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICB2ZXJpZmllZCA9IChheGlvbVByZXNlbnQgfHwgbGVtbWFQcmVzZW50IHx8IHRoZW9yZW1QcmVzZW50IHx8IGNvbmplY3R1cmVQcmVzZW50KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidmVyaWZ5IiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJ0cmFjZSIsIm1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwicmVmZXJlbmNlIiwibWV0YUxlbW1hUHJlc2VudCIsImlzTWV0YUxlbW1hUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW1QcmVzZW50IiwiaXNNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImF4aW9tUHJlc2VudCIsImlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UiLCJsZW1tYVByZXNlbnQiLCJpc0xlbW1hUHJlc2VudEJ5UmVmZXJlbmNlIiwidGhlb3JlbVByZXNlbnQiLCJpc1RoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlUHJlc2VudCIsImlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImRlYnVnIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsInN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJmcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJzaGltIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJEQVZKOzREQUNRO3FCQUVDO3dCQUNRO29CQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdyRSxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRiwwQkFBTjthQUFNQSxVQUNQRyxZQUFZO2dDQURMSDtRQUVqQixJQUFJLENBQUNHLFlBQVksR0FBR0E7O2tCQUZISDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsWUFBWSxDQUFDRSxTQUFTO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDSixZQUFZLENBQUNHLHFCQUFxQixDQUFDQztZQUFtQjs7O1lBRTVHQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsbUJBQW1CLElBQUksQ0FBQ0osWUFBWSxDQUFDTSxPQUFPO2dCQUVsRCxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVk7Z0JBQ2pCLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1IsU0FBUyxJQUFJLEdBQUc7Z0JBRTdDTSxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJELGlCQUFnQjtnQkFFckQsSUFBSSxDQUFDRCxVQUFVO29CQUNiLElBQU1HLFdBQVdDLDJCQUFpQixFQUM1QkMsb0NBQW9DLElBQUksQ0FBQ2QsWUFBWSxDQUFDZSxtQkFBbUIsQ0FBQ0gsVUFBVUo7b0JBRTFGQyxXQUFXSyxtQ0FBbUMsR0FBRztnQkFDbkQ7Z0JBRUEsSUFBSSxDQUFDTCxVQUFVO29CQUNiLElBQU1PLFlBQVksSUFBSSxFQUNoQkMsbUJBQW1CVCxhQUFhVSw2QkFBNkIsQ0FBQ0YsV0FBV1IsZUFDekVXLHFCQUFxQlgsYUFBYVksK0JBQStCLENBQUNKLFdBQVdSO29CQUVuRkMsV0FBWVEsb0JBQW9CRTtnQkFDbEM7Z0JBRUEsSUFBSSxDQUFDVixVQUFVO29CQUNiLElBQU1PLGFBQVksSUFBSSxFQUNoQkssZUFBZWIsYUFBYWMseUJBQXlCLENBQUNOLGFBQ3RETyxlQUFlZixhQUFhZ0IseUJBQXlCLENBQUNSLGFBQ3REUyxpQkFBaUJqQixhQUFha0IsMkJBQTJCLENBQUNWLGFBQzFEVyxvQkFBb0JuQixhQUFhb0IsOEJBQThCLENBQUNaO29CQUV0RVAsV0FBWVksZ0JBQWdCRSxnQkFBZ0JFLGtCQUFrQkU7Z0JBQ2hFO2dCQUVBLElBQUlsQixVQUFVO29CQUNaRCxhQUFhcUIsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCbkIsaUJBQWdCO2dCQUN6RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQXFCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUJDLElBQUFBLG9DQUE4QixFQUFDLElBQUksQ0FBQ2hDLFlBQVksR0FDbkVBLGVBQWUrQixrQkFDZkUsVUFBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJDLE9BQU87b0JBQ0xELFFBQUFBO29CQUNBakMsY0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2tDO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNcEMsZUFBZXFDLElBQUFBLDBCQUFvQixFQUFDSCxNQUFNRSxjQUMxQ3BCLFlBQVksSUF4RURuQixVQXdFZW9DLFFBQVFqQztnQkFFeEMsT0FBT2dCO1lBQ1Q7OztZQUVPc0IsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVILFdBQVc7Z0JBQ2pELElBQU0sQUFBRUksZUFBaUJDLGFBQUksQ0FBckJELGNBQ0ZwQyxtQkFBbUJOLHNCQUFzQnlDLGdCQUN6Qy9CLGVBQWVrQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1AsY0FDNUNwQyxlQUFld0MsYUFBYUksb0JBQW9CLENBQUN4QyxrQkFBa0JJLGVBQ25FUSxZQUFZLElBbEZEbkIsVUFrRmVHO2dCQUVoQyxPQUFPZ0I7WUFDVDs7O1dBckZtQm5CIn0=