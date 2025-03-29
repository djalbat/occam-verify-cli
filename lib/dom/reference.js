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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
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
var stepReferenceNodeQuery = (0, _query.nodeQuery)("/step/reference"), procedureCallReferenceNodeQuery = (0, _query.nodeQuery)("/procedureCall/reference"), declarationMetavariableNodeQuery = (0, _query.nodeQuery)("/declaration/metavariable"), satisfiesAssertionMetavariableNodeQuery = (0, _query.nodeQuery)("/satisfiesAssertion/metavariable");
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
            value: function unifyLabel(label, substitutions, context) {
                var labelUnified;
                var reference = this, labelString = label.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(referenceString, "' reference..."));
                var fileContext = label.getFileContext(), generalContext = context, specificContext = fileContext, labelMetavariable = label.getMetavariable(), generalMetavariable = this.metavariable, specificMetavariable = labelMetavariable, metavariableUnifiedIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                labelUnified = metavariableUnifiedIntrinsically; ///
                if (labelUnified) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(referenceString, "' reference."));
                }
                return labelUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var metavariableUnified;
                var reference = this, metavariableString = metavariable.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference..."));
                var fileContext = context.getFileContext(), substitutions = _substitutions.default.fromNothing(), generalContext = context, specificContext = fileContext, generalMetavariable = this.metavariable, specificMetavariable = metavariable, metavariableUnifiedIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                metavariableUnified = metavariableUnifiedIntrinsically; ///
                if (metavariableUnified) {
                    context.debug("...unified the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference."));
                }
                return metavariableUnified;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnified;
                var reference = this, referenceString = reference.getString(), metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(referenceString, "' reference..."));
                var label = metaLemmaMetatheorem.getLabel(), substitutions = _substitutions.default.fromNothing(), labelUnified = this.unifyLabel(label, substitutions, context);
                metaLemmaMetatheoremUnified = labelUnified; ///
                if (metaLemmaMetatheoremUnified) {
                    context.trace("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(referenceString, "' reference."));
                }
                return metaLemmaMetatheoremUnified;
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
            key: "fromStepNode",
            value: function fromStepNode(stepNode, fileContext) {
                var reference = null;
                var stepReferenceNode = stepReferenceNodeQuery(stepNode);
                if (stepReferenceNode !== null) {
                    var referenceNode = stepReferenceNode; ///
                    reference = referenceFromReferenceNode(referenceNode, fileContext);
                }
                return reference;
            }
        },
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, fileContext) {
                var reference = referenceFromReferenceNode(referenceNode, fileContext);
                return reference;
            }
        },
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, fileContext) {
                var declarationMetavariableNode = declarationMetavariableNodeQuery(declarationNode), metavariableNode = declarationMetavariableNode, reference = referenceFromMetavariableNode(metavariableNode, fileContext);
                return reference;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode, fileContext) {
                var reference = referenceFromMetavariableNode(metavariableNode, fileContext);
                return reference;
            }
        },
        {
            key: "fromProcedureCallNode",
            value: function fromProcedureCallNode(procedureCallNode, fileContext) {
                var reference = null;
                var procedureCallReferenceNode = procedureCallReferenceNodeQuery(procedureCallNode);
                if (procedureCallReferenceNode !== null) {
                    var referenceNode = procedureCallReferenceNode; ///
                    reference = referenceFromReferenceNode(referenceNode, fileContext);
                }
                return reference;
            }
        },
        {
            key: "fromSatisfiesAssertionNode",
            value: function fromSatisfiesAssertionNode(satisfiesAssertionNode, fileContext) {
                var satisfiesAssertionMetavariableNode = satisfiesAssertionMetavariableNodeQuery(satisfiesAssertionNode), metavariableNode = satisfiesAssertionMetavariableNode, reference = referenceFromMetavariableNode(metavariableNode, fileContext);
                return reference;
            }
        }
    ]);
    return Reference;
}(), _define_property(_Reference, "name", "Reference"), _Reference));
function referenceFromReferenceNode(referenceNode, fileContext) {
    var Reference = _dom.default.Reference, Metavariable = _dom.default.Metavariable, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromReferenceNode(referenceNode, context), reference = new Reference(metavariable);
    return reference;
}
function referenceFromMetavariableNode(metavariableNode, fileContext) {
    var Reference = _dom.default.Reference, Metavariable = _dom.default.Metavariable, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), reference = new Reference(metavariable);
    return reference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlTWV0YVR5cGUgfSBmcm9tIFwiLi4vZG9tL21ldGFUeXBlXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHN0ZXBSZWZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9yZWZlcmVuY2VcIiksXG4gICAgICBwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZUNhbGwvcmVmZXJlbmNlXCIpLFxuICAgICAgZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NhdGlzZmllc0Fzc2VydGlvbi9tZXRhdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG8gPSBlcXVhbFRvOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBtZXRhdmFyaWFibGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgdmVyaWZpZWQgPSBsYWJlbFByZXNlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlOyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gbGFiZWwuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGxhYmVsTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZWQgPSBtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gY29udGV4dC5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllZEludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxhYmVsVW5pZmllZCA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBsYWJlbFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGVwUmVmZXJlbmNlTm9kZSA9IHN0ZXBSZWZlcmVuY2VOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHN0ZXBSZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlID0gZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkoZGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkocHJvY2VkdXJlQ2FsbE5vZGUpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk1ldGF2YXJpYWJsZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59Il0sIm5hbWVzIjpbInN0ZXBSZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzYXRpc2ZpZXNBc3NlcnRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldE5hbWUiLCJnZXRTdHJpbmciLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUbyIsImVxdWFsVG8iLCJpc0VxdWFsVG8iLCJtZXRhdmFyaWFibGVFcXVhbFRvIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwicmVmZXJlbmNlU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJkZWJ1ZyIsIm1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidW5pZnlMYWJlbCIsImxhYmVsIiwic3Vic3RpdHV0aW9ucyIsImxhYmVsVW5pZmllZCIsImxhYmVsU3RyaW5nIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibGFiZWxNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllZCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0TGFiZWwiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInN0ZXBSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGUiLCJmcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25NZXRhdmFyaWFibGVOb2RlIiwibmFtZSIsImRvbSIsIk1ldGF2YXJpYWJsZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7OzJEQWZnQjs0REFDUztvRUFDQztxQkFFQTt3QkFFUTsyQkFDYTtvQkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJFLElBQU1BLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbkNDLGtDQUFrQ0QsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDNUNFLG1DQUFtQ0YsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDN0NHLDBDQUEwQ0gsSUFBQUEsZ0JBQVMsRUFBQztJQUUxRCxXQUFlSSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsWUFBWTtnQ0FET0Q7UUFFN0IsSUFB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