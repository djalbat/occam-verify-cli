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
                    var reference = this, metaLemmaPresent = localContext.isMetaLemmaPresentByReference(reference), metatheoremPresent = localContext.isMetatheoremPresentByReference(reference);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZU1ldGFUeXBlIH0gZnJvbSBcIi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IGxvY2FsIGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLy9yZWZlcmVuY2UvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWFQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzTWV0YUxlbW1hUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhdGhlb3JlbVByZXNlbnQgPSBsb2NhbENvbnRleHQuaXNNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICB2ZXJpZmllZCA9IChtZXRhTGVtbWFQcmVzZW50IHx8IG1ldGF0aGVvcmVtUHJlc2VudCk7XG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBheGlvbVByZXNlbnQgPSBsb2NhbENvbnRleHQuaXNBeGlvbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgbGVtbWFQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIHRoZW9yZW1QcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgY29uamVjdHVyZVByZXNlbnQgPSBsb2NhbENvbnRleHQuaXNDb25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIHZlcmlmaWVkID0gKGF4aW9tUHJlc2VudCB8fCBsZW1tYVByZXNlbnQgfHwgdGhlb3JlbVByZXNlbnQgfHwgY29uamVjdHVyZVByZXNlbnQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdHJpbmciLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ2ZXJpZnkiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInJlZmVyZW5jZVN0cmluZyIsInRyYWNlIiwibWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJyZWZlcmVuY2UiLCJtZXRhTGVtbWFQcmVzZW50IiwiaXNNZXRhTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdGhlb3JlbVByZXNlbnQiLCJpc01ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwiYXhpb21QcmVzZW50IiwiaXNBeGlvbVByZXNlbnRCeVJlZmVyZW5jZSIsImxlbW1hUHJlc2VudCIsImlzTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UiLCJ0aGVvcmVtUHJlc2VudCIsImlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImNvbmplY3R1cmVQcmVzZW50IiwiaXNDb25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsImZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsIk1ldGF2YXJpYWJsZSIsInNoaW0iLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkRBVko7NERBQ1E7cUJBRUM7d0JBQ1E7b0JBQ21DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3JFLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLDBCQUFOO2FBQU1BLFVBQ1BHLFlBQVk7Z0NBRExIO1FBRWpCLElBQUksQ0FBQ0csWUFBWSxHQUFHQTs7a0JBRkhIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixZQUFZLENBQUNFLFNBQVM7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNKLFlBQVksQ0FBQ0cscUJBQXFCLENBQUNDO1lBQW1COzs7WUFFNUdDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxtQkFBbUIsSUFBSSxDQUFDSixZQUFZLENBQUNNLE9BQU87Z0JBRWxELE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWTtnQkFDakIsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDUixTQUFTLElBQUksR0FBRztnQkFFN0NNLGFBQWFHLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkQsaUJBQWdCO2dCQUVyRCxJQUFJLENBQUNELFVBQVU7b0JBQ2IsSUFBTUcsV0FBV0MsMkJBQWlCLEVBQzVCQyxvQ0FBb0MsSUFBSSxDQUFDZCxZQUFZLENBQUNlLG1CQUFtQixDQUFDSCxVQUFVSjtvQkFFMUZDLFdBQVdLLG1DQUFtQyxHQUFHO2dCQUNuRDtnQkFFQSxJQUFJLENBQUNMLFVBQVU7b0JBQ2IsSUFBTU8sWUFBWSxJQUFJLEVBQ2hCQyxtQkFBbUJULGFBQWFVLDZCQUE2QixDQUFDRixZQUM5REcscUJBQXFCWCxhQUFhWSwrQkFBK0IsQ0FBQ0o7b0JBRXhFUCxXQUFZUSxvQkFBb0JFO2dCQUNsQztnQkFFQSxJQUFJLENBQUNWLFVBQVU7b0JBQ2IsSUFBTU8sYUFBWSxJQUFJLEVBQ2hCSyxlQUFlYixhQUFhYyx5QkFBeUIsQ0FBQ04sYUFDdERPLGVBQWVmLGFBQWFnQix5QkFBeUIsQ0FBQ1IsYUFDdERTLGlCQUFpQmpCLGFBQWFrQiwyQkFBMkIsQ0FBQ1YsYUFDMURXLG9CQUFvQm5CLGFBQWFvQiw4QkFBOEIsQ0FBQ1o7b0JBRXRFUCxXQUFZWSxnQkFBZ0JFLGdCQUFnQkUsa0JBQWtCRTtnQkFDaEU7Z0JBRUEsSUFBSWxCLFVBQVU7b0JBQ1pELGFBQWFxQixLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJuQixpQkFBZ0I7Z0JBQ3pEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQkMsSUFBQUEsb0NBQThCLEVBQUMsSUFBSSxDQUFDaEMsWUFBWSxHQUNuRUEsZUFBZStCLGtCQUNmRSxVQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQkMsT0FBTztvQkFDTEQsUUFBQUE7b0JBQ0FqQyxjQUFBQTtnQkFDRjtnQkFFTixPQUFPa0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLFdBQVc7Z0JBQy9CLElBQU1wQyxlQUFlcUMsSUFBQUEsMEJBQW9CLEVBQUNILE1BQU1FLGNBQzFDcEIsWUFBWSxJQXhFRG5CLFVBd0Vlb0MsUUFBUWpDO2dCQUV4QyxPQUFPZ0I7WUFDVDs7O1lBRU9zQixLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUgsV0FBVztnQkFDakQsSUFBTSxBQUFFSSxlQUFpQkMsYUFBSSxDQUFyQkQsY0FDRnBDLG1CQUFtQk4sc0JBQXNCeUMsZ0JBQ3pDL0IsZUFBZWtDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDUCxjQUM1Q3BDLGVBQWV3QyxhQUFhSSxvQkFBb0IsQ0FBQ3hDLGtCQUFrQkksZUFDbkVRLFlBQVksSUFsRkRuQixVQWtGZUc7Z0JBRWhDLE9BQU9nQjtZQUNUOzs7V0FyRm1CbkIifQ==