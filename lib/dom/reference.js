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
                var verifies = false;
                var referenceString = this.getString(); ///
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                if (!verifies) {
                    var metavariableVerifies = this.verifyMetavariable(context);
                    verifies = metavariableVerifies; ///
                }
                if (!verifies) {
                    var reference = this, labelPresent = context.isLabelPresentByReference(reference);
                    verifies = labelPresent; ///
                }
                if (verifies) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return verifies;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(context) {
                var metavariableVerifies;
                var metaType = _metaType.referenceMetaType, metavariableVerifiesGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, context);
                metavariableVerifies = metavariableVerifiesGivenMetaType; ///
                return metavariableVerifies;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, substitutions, context) {
                var labelUnifies;
                var specificContext = context; ///
                context = label.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var reference = this, labelString = label.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(referenceString, "' reference..."));
                var labelMetavariable = label.getMetavariable(), generalMetavariable = this.metavariable, specificMetavariable = labelMetavariable, metavariableUnifiesIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
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
                var substitutions = _substitutions.default.fromNothing(), generalContext = context, specificContext = context, generalMetavariable = this.metavariable, specificMetavariable = metavariable, metavariableUnifiesIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
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
            value: function fromJSON(json, context) {
                var metavariable = (0, _json.metavariableFromJSON)(json, context), reference = new Reference(metavariable);
                return reference;
            }
        },
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var reference = null;
                var referenceNode = stepNode.getReferenceNode();
                if (referenceNode !== null) {
                    reference = referenceFromReferenceNode(referenceNode, context);
                }
                return reference;
            }
        },
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, context) {
                var reference = referenceFromReferenceNode(referenceNode, context);
                return reference;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode, context) {
                var reference = referenceFromMetavariableNode(metavariableNode, context);
                return reference;
            }
        },
        {
            key: "fromProcedureCallNode",
            value: function fromProcedureCallNode(procedureCallNode, context) {
                var reference = null;
                var referenceNode = procedureCallNode.getReferenceNode();
                if (referenceNode !== null) {
                    reference = referenceFromReferenceNode(referenceNode, context);
                }
                return reference;
            }
        },
        {
            key: "fromSatisfiesAssertionNode",
            value: function fromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
                var metavariableNode = satisfiesAssertionNode.getMetavariableNode(), reference = referenceFromMetavariableNode(metavariableNode, context);
                return reference;
            }
        }
    ]);
    return Reference;
}(), _define_property(_Reference, "name", "Reference"), _Reference));
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _dom.default.Reference, Metavariable = _dom.default.Metavariable, metavariable = Metavariable.fromReferenceNode(referenceNode, context), reference = new Reference(metavariable);
    return reference;
}
function referenceFromMetavariableNode(metavariableNode, context) {
    var Reference = _dom.default.Reference, Metavariable = _dom.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), reference = new Reference(metavariable);
    return reference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlTWV0YVR5cGUgfSBmcm9tIFwiLi4vZG9tL21ldGFUeXBlXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG8gPSBlcXVhbFRvOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllcykge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBtZXRhdmFyaWFibGVWZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllcykge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgdmVyaWZpZXMgPSBsYWJlbFByZXNlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllc0dpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gbWV0YXZhcmlhYmxlVmVyaWZpZXNHaXZlbk1ldGFUeXBlOyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbGFiZWwuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGxhYmVsTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IGxhYmVsVW5pZmllczsgIC8vL1xuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlLCBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXROYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJlcXVhbFRvIiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlRXF1YWxUbyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInJlZmVyZW5jZVN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiZGVidWciLCJtZXRhVHlwZSIsInJlZmVyZW5jZU1ldGFUeXBlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsInN1YnN0aXR1dGlvbnMiLCJsYWJlbFVuaWZpZXMiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJsYWJlbFN0cmluZyIsImxhYmVsTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsImdldExhYmVsIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJuYW1lIiwiZG9tIiwiTWV0YXZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7b0VBQ1U7d0JBR1E7MkJBQ2E7b0JBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyRSxXQUFlQSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsWUFBWTtnQ0FET0Q7UUFFN0IsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOzs7O1lBR3RCQyxL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