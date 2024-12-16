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
var _unification = require("../utilities/unification");
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
var _Reference;
var proofStepReferenceNodeQuery = (0, _query.nodeQuery)("/proofStep/reference"), declarationReferenceNodeQuery = (0, _query.nodeQuery)("/declaration/reference"), procedureCallReferenceNodeQuery = (0, _query.nodeQuery)("/procedureCall/reference");
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
                    var metavariableVerified = this.verifyMetavariable(context);
                    verified = metavariableVerified; ///
                }
                if (!verified) {
                    var reference = this, rulePresent = context.isRulePresentByReference(reference), metaLemmasMetaTheoremsPresent = context.areMetaLemmasMetaTheoremsPresentByReference(reference), axiomLemmaTheoremConjecturePresent = context.isAxiomLemmaTheoremConjecturePresentByReference(reference);
                    verified = rulePresent || metaLemmasMetaTheoremsPresent || axiomLemmaTheoremConjecturePresent;
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
                var reference = null;
                var declarationReferenceNode = declarationReferenceNodeQuery(declarationNode);
                if (declarationReferenceNode !== null) {
                    var Metavariable = _dom.default.Metavariable, referenceNode = declarationReferenceNode, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromReferenceNode(referenceNode, context);
                    reference = new Reference(metavariable);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyByZWZlcmVuY2VNZXRhVHlwZSB9IGZyb20gXCIuLi9kb20vbWV0YVR5cGVcIjtcbmltcG9ydCB7IHVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCBwcm9vZlN0ZXBSZWZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwL3JlZmVyZW5jZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uUmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL3JlZmVyZW5jZVwiKSxcbiAgICAgIHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlQ2FsbC9yZWZlcmVuY2VcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSA9IHVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlKGxhYmVsLCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVkID0gbGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBtZXRhdmFyaWFibGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBydWxlUHJlc2VudCA9IGNvbnRleHQuaXNSdWxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFzTWV0YVRoZW9yZW1zUHJlc2VudCA9IGNvbnRleHQuYXJlTWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudCA9IGNvbnRleHQuaXNBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgdmVyaWZpZWQgPSAocnVsZVByZXNlbnQgfHwgbWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnQgfHwgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcFJlZmVyZW5jZU5vZGUgPSBwcm9vZlN0ZXBSZWZlcmVuY2VOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSk7XG5cbiAgICBpZiAocHJvb2ZTdGVwUmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBwcm9vZlN0ZXBSZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25SZWZlcmVuY2VOb2RlID0gZGVjbGFyYXRpb25SZWZlcmVuY2VOb2RlUXVlcnkoZGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGlmIChkZWNsYXJhdGlvblJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gZGVjbGFyYXRpb25SZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeShwcm9jZWR1cmVDYWxsTm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInByb29mU3RlcFJlZmVyZW5jZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlY2xhcmF0aW9uUmVmZXJlbmNlTm9kZVF1ZXJ5IiwicHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwidW5pZnlMYWJlbCIsImxhYmVsIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibGFiZWxVbmlmaWVkIiwicmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJyZWZlcmVuY2VTdHJpbmciLCJ0cmFjZSIsImxhYmVsVW5pZmllZFdpdGhSZWZlcmVuY2UiLCJ1bmlmeUxhYmVsV2l0aFJlZmVyZW5jZSIsImRlYnVnIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJydWxlUHJlc2VudCIsImlzUnVsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYXNNZXRhVGhlb3JlbXNQcmVzZW50IiwiYXJlTWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVByZXNlbnQiLCJpc0F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsInN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJmcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJkb20iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBSZWZlcmVuY2VOb2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uUmVmZXJlbmNlTm9kZSIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OzsyREFiZ0I7NERBQ1M7cUJBRUM7d0JBRVE7MkJBQ007b0JBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRSxJQUFNQSw4QkFBOEJDLElBQUFBLGdCQUFTLEVBQUMseUJBQ3hDQyxnQ0FBZ0NELElBQUFBLGdCQUFTLEVBQUMsMkJBQzFDRSxrQ0FBa0NGLElBQUFBLGdCQUFTLEVBQUM7SUFFbEQsV0FBZUcsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLFlBQVk7Z0NBRE9EO1FBRTdCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDRixZQUFZLENBQUNFLE9BQU87WUFBSTs7O1lBRWhEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNILFlBQVksQ0FBQ0csU0FBUztZQUFJOzs7WUFFcERDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIs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