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
                var labelUnifies;
                var reference = this, labelString = label.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(referenceString, "' reference..."));
                var fileContext = label.getFileContext(), generalContext = context, specificContext = fileContext, labelMetavariable = label.getMetavariable(), generalMetavariable = this.metavariable, specificMetavariable = labelMetavariable, metavariableUnifiesIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                labelUnifies = metavariableUnifiesIntrinsically; ///
                if (labelUnifies) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(referenceString, "' reference."));
                }
                return labelUnifies;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var metavariableUnifies;
                var reference = this, metavariableString = metavariable.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference..."));
                var fileContext = context.getFileContext(), substitutions = _substitutions.default.fromNothing(), generalContext = context, specificContext = fileContext, generalMetavariable = this.metavariable, specificMetavariable = metavariable, metavariableUnifiesIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                metavariableUnifies = metavariableUnifiesIntrinsically; ///
                if (metavariableUnifies) {
                    context.debug("...unified the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference."));
                }
                return metavariableUnifies;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnifies;
                var reference = this, referenceString = reference.getString(), metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(referenceString, "' reference..."));
                var label = metaLemmaMetatheorem.getLabel(), substitutions = _substitutions.default.fromNothing(), labelUnifies = this.unifyLabel(label, substitutions, context);
                metaLemmaMetatheoremUnifies = labelUnifies; ///
                if (metaLemmaMetatheoremUnifies) {
                    context.trace("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(referenceString, "' reference."));
                }
                return metaLemmaMetatheoremUnifies;
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
                var referenceNode = stepNode.getReferenceNode();
                if (referenceNode !== null) {
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
                var metavariableNode = declarationNode.getMetavariableNode(), reference = referenceFromMetavariableNode(metavariableNode, fileContext);
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
                var referenceNode = procedureCallNode.getReferenceNode();
                if (referenceNode !== null) {
                    reference = referenceFromReferenceNode(referenceNode, fileContext);
                }
                return reference;
            }
        },
        {
            key: "fromSatisfiesAssertionNode",
            value: function fromSatisfiesAssertionNode(satisfiesAssertionNode, fileContext) {
                var metavariableNode = satisfiesAssertionNode.getMetavariableNode(), reference = referenceFromMetavariableNode(metavariableNode, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlTWV0YVR5cGUgfSBmcm9tIFwiLi4vZG9tL21ldGFUeXBlXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG8gPSBlcXVhbFRvOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBtZXRhdmFyaWFibGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgdmVyaWZpZWQgPSBsYWJlbFByZXNlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlOyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gbGFiZWwuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGxhYmVsTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gY29udGV4dC5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSBsYWJlbFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGZpbGVDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZGVjbGFyYXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGZpbGVDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59Il0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvIiwiZXF1YWxUbyIsImlzRXF1YWxUbyIsIm1ldGF2YXJpYWJsZUVxdWFsVG8iLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImRlYnVnIiwibWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJzdWJzdGl0dXRpb25zIiwibGFiZWxVbmlmaWVzIiwibGFiZWxTdHJpbmciLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJsYWJlbE1ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwidW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmciLCJnZXRMYWJlbCIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsImZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJkb20iLCJNZXRhdmFyaWFibGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjs0REFDUztvRUFDQzt3QkFHUTsyQkFDYTtvQkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJFLFdBQWVBLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxZQUFZO2dDQURPRDtRQUU3QixJQUFJLENBQUNDLFlBQVksR0FBR0E7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0YsWUFBWSxDQUFDRSxPQUFPO1lBQUk7OztZQUVoREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxZQUFZLENBQUNHLFNBQVM7WUFBSTs7O1lBRXBEQyxL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