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
var _query = require("../utilities/query");
var _metaType = require("../dom/metaType");
var _json = require("../utilities/json");
var _unification = require("../utilities/unification");
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
var _Reference;
var proofStepReferenceNodeQuery = (0, _query.nodeQuery)("/proofStep/reference"), procedureCallReferenceNodeQuery = (0, _query.nodeQuery)("/procedureCall/reference"), declarationMetavariableNodeQuery = (0, _query.nodeQuery)("/declaration/metavariable");
var _default = (0, _dom.domAssigned)((_Reference = /*#__PURE__*/ function() {
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
            key: "getName",
            value: function getName() {
                return this.metavariable.getName();
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
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var referenceString = this.getString(); ///
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                if (!verified) {
                    var metavariableVerified = this.verifyMetavariable(context);
                    verified = metavariableVerified; ///
                }
                if (!verified) {
                    var reference = this, labelPresent = context.isLabelPresentByReference(reference);
                    verified = labelPresent; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return verified;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(context) {
                var metavariableVerified;
                var metaType = _metaType.referenceMetaType, metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, context);
                metavariableVerified = metavariableVerifiedGivenMetaType; ///
                return metavariableVerified;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, context) {
                var labelUnified;
                var reference = this, labelString = label.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(referenceString, "' reference..."));
                var labelUnifiedWithReference = (0, _unification.unifyLabelWithReference)(label, reference, context);
                labelUnified = labelUnifiedWithReference; ///
                if (labelUnified) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(referenceString, "' reference."));
                }
                return labelUnified;
            }
        },
        {
            key: "unifyMetaLemma",
            value: function unifyMetaLemma(metaLemma, context) {
                var metaLemmaUnified;
                var reference = this, referenceString = reference.getString(), metaLemmaString = metaLemma.getString();
                context.trace("Unifying the '".concat(metaLemmaString, "' meta-lemma with the '").concat(referenceString, "' reference..."));
                var label = metaLemma.getLabel(), labelUnified = this.unifyLabel(label, context);
                metaLemmaUnified = labelUnified; ///
                if (metaLemmaUnified) {
                    context.trace("...unified the '".concat(metaLemmaString, "' meta-lemma with the '").concat(referenceString, "' reference."));
                }
                return metaLemmaUnified;
            }
        },
        {
            key: "unifyMetatheorem",
            value: function unifyMetatheorem(metatheorem, context) {
                var metatheoremUnified;
                var reference = this, referenceString = reference.getString(), metatheoremString = metatheorem.getString();
                context.trace("Unifying the '".concat(metatheoremString, "' metatheorem with the '").concat(referenceString, "' reference..."));
                var label = metatheorem.getLabel(), labelUnified = this.unifyLabel(label, context);
                metatheoremUnified = labelUnified; ///
                if (metatheoremUnified) {
                    context.trace("...unified the '".concat(metatheoremString, "' metatheorem with the '").concat(referenceString, "' reference."));
                }
                return metatheoremUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var metavariableUnified;
                var reference = this, metavariableString = metavariable.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference..."));
                var metavariableUnifiedWithReference = (0, _unification.unifyMetavariableWithReference)(metavariable, reference, context);
                metavariableUnified = metavariableUnifiedWithReference; ///
                if (metavariableUnified) {
                    context.debug("...unified the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference."));
                }
                return metavariableUnified;
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
                var metavariable = (0, _json.metavariableFromJSON)(json, fileContext), reference = new Reference(metavariable);
                return reference;
            }
        },
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, fileContext) {
                var Metavariable = _dom.default.Metavariable, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromReferenceNode(referenceNode, context), reference = new Reference(metavariable);
                return reference;
            }
        },
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var reference = null;
                var proofStepReferenceNode = proofStepReferenceNodeQuery(proofStepNode);
                if (proofStepReferenceNode !== null) {
                    var Metavariable = _dom.default.Metavariable, referenceNode = proofStepReferenceNode, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromReferenceNode(referenceNode, context);
                    reference = new Reference(metavariable);
                }
                return reference;
            }
        },
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, fileContext) {
                var Metavariable = _dom.default.Metavariable, declarationMetavariableNode = declarationMetavariableNodeQuery(declarationNode), metavariableNode = declarationMetavariableNode, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), reference = new Reference(metavariable);
                return reference;
            }
        },
        {
            key: "fromProcedureCallNode",
            value: function fromProcedureCallNode(procedureCallNode, fileContext) {
                var reference = null;
                var procedureCallReferenceNode = procedureCallReferenceNodeQuery(procedureCallNode);
                if (procedureCallReferenceNode !== null) {
                    var Metavariable = _dom.default.Metavariable, referenceNode = procedureCallReferenceNode, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromReferenceNode(referenceNode, context);
                    reference = new Reference(metavariable);
                }
                return reference;
            }
        }
    ]);
    return Reference;
}(), _define_property(_Reference, "name", "Reference"), _Reference));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyByZWZlcmVuY2VNZXRhVHlwZSB9IGZyb20gXCIuLi9kb20vbWV0YVR5cGVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlLCB1bmlmeU1ldGF2YXJpYWJsZVdpdGhSZWZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHByb29mU3RlcFJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXAvcmVmZXJlbmNlXCIpLFxuICAgICAgcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVDYWxsL3JlZmVyZW5jZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUmVmZXJlbmNlIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTsgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIHZlcmlmaWVkID0gbGFiZWxQcmVzZW50OyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlID0gdW5pZnlMYWJlbFdpdGhSZWZlcmVuY2UobGFiZWwsIHJlZmVyZW5jZSwgIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVkID0gbGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWEobWV0YUxlbW1hLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YUxlbW1hU3RyaW5nID0gbWV0YUxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IG1ldGFMZW1tYS5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsVW5pZmllZCA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICBtZXRhTGVtbWFVbmlmaWVkID0gbGFiZWxVbmlmaWVkOyAgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hVW5pZmllZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF0aGVvcmVtVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbVN0cmluZyA9IG1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IG1ldGF0aGVvcmVtLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVkID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgIG1ldGF0aGVvcmVtVW5pZmllZCA9IGxhYmVsVW5pZmllZDsgIC8vL1xuXG4gICAgaWYgKG1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFJlZmVyZW5jZSA9IHVuaWZ5TWV0YXZhcmlhYmxlV2l0aFJlZmVyZW5jZShtZXRhdmFyaWFibGUsIHJlZmVyZW5jZSwgIGNvbnRleHQpO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoUmVmZXJlbmNlOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwUmVmZXJlbmNlTm9kZSA9IHByb29mU3RlcFJlZmVyZW5jZU5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKTtcblxuICAgIGlmIChwcm9vZlN0ZXBSZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHByb29mU3RlcFJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUgPSBkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeShwcm9jZWR1cmVDYWxsTm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInByb29mU3RlcFJlZmVyZW5jZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkiLCJkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwicmVmZXJlbmNlU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJkZWJ1ZyIsIm1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidW5pZnlMYWJlbCIsImxhYmVsIiwibGFiZWxVbmlmaWVkIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlIiwidW5pZnlMYWJlbFdpdGhSZWZlcmVuY2UiLCJ1bmlmeU1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYVVuaWZpZWQiLCJtZXRhTGVtbWFTdHJpbmciLCJnZXRMYWJlbCIsInVuaWZ5TWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtVW5pZmllZCIsIm1ldGF0aGVvcmVtU3RyaW5nIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlVW5pZmllZFdpdGhSZWZlcmVuY2UiLCJ1bmlmeU1ldGF2YXJpYWJsZVdpdGhSZWZlcmVuY2UiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsImZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsIk1ldGF2YXJpYWJsZSIsImRvbSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcFJlZmVyZW5jZU5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkRBYmdCOzREQUNTO3FCQUVDO3dCQUVRO29CQUNtQzsyQkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsSUFBTUEsOEJBQThCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUN4Q0Msa0NBQWtDRCxJQUFBQSxnQkFBUyxFQUFDLDZCQUM1Q0UsbUNBQW1DRixJQUFBQSxnQkFBUyxFQUFDO0lBRW5ELFdBQWVHLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxZQUFZO2dDQURPRDtRQUU3QixJQUFJLENBQUNDLFlBQVksR0FBR0E7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0YsWUFBWSxDQUFDRSxPQUFPO1lBQUk7OztZQUVoREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxZQUFZLENBQUNHLFNBQVM7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0wsWUFBWSxDQUFDRSxPQUFPO2dCQUVsRCxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLFlBQVksQ0FBQ1EsT0FBTztnQkFFbEQsT0FBT0Q7WUFDVDs7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