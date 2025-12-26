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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _metaType = require(".//metaType");
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
var _default = (0, _ontology.define)((_Reference = /*#__PURE__*/ function() {
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
            key: "isEqualTo",
            value: function isEqualTo(refernece) {
                var metavariable = refernece.getMetavariable(), metavariableEqualToMetvariable = this.metavariable.isEqualTo(metavariable), equalTo = metavariableEqualToMetvariable; ///
                return equalTo;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
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
                var metavariableNodeA = metavariableNode; ///
                metavariableNode = this.metavariable.getNode();
                var metavariableNodeB = metavariableNode, matches = metavariableNodeA.match(metavariableNodeB), metavariableNodeMatches = matches; ///
                return metavariableNodeMatches; ///
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
                    var reference1 = this; ///
                    context.addReference(reference1);
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
                var Substitutions = _ontology.default.Substitutions, substitutions = Substitutions.fromNothing(), generalContext = context, specificContext = context, generalMetavariable = this.metavariable, specificMetavariable = metavariable, metavariableUnifiesIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
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
                var Substitutions = _ontology.default.Substitutions, label = metaLemmaMetatheorem.getLabel(), substitutions = Substitutions.fromNothing(), labelUnifies = this.unifyLabel(label, substitutions, context);
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
            key: "fromAssumptionNode",
            value: function fromAssumptionNode(assumptionNode, context) {
                var reference = null;
                var metavariableNode = assumptionNode.getMetavariableNode();
                if (metavariableNode !== null) {
                    reference = referenceFromMetavariableNode(metavariableNode, context);
                }
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
    var Reference = _ontology.default.Reference, Metavariable = _ontology.default.Metavariable, metavariable = Metavariable.fromReferenceNode(referenceNode, context), reference = new Reference(metavariable);
    return reference;
}
function referenceFromMetavariableNode(metavariableNode, context) {
    var Reference = _ontology.default.Reference, Metavariable = _ontology.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), reference = new Reference(metavariable);
    return reference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyByZWZlcmVuY2VNZXRhVHlwZSB9IGZyb20gXCIuLy9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTsgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJuZWNlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gcmVmZXJuZWNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gbWV0YXZhcmlhYmxlTm9kZUEubWF0Y2gobWV0YXZhcmlhYmxlTm9kZUIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzOyAvLy9cbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBpZiAoIXZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllcyA9IG1ldGF2YXJpYWJsZVZlcmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVzKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICB2ZXJpZmllcyA9IGxhYmVsUHJlc2VudDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllc0dpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gbWV0YXZhcmlhYmxlVmVyaWZpZXNHaXZlbk1ldGFUeXBlOyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbGFiZWwuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGxhYmVsTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXM7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIGxhYmVsID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSBsYWJlbFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICAgIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXROYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJpc0VxdWFsVG8iLCJyZWZlcm5lY2UiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUiLCJlcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQiIsIm1hdGNoZXMiLCJtYXRjaCIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwicmVmZXJlbmNlU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJhZGRSZWZlcmVuY2UiLCJkZWJ1ZyIsIm1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllc0dpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidW5pZnlMYWJlbCIsImxhYmVsIiwic3Vic3RpdHV0aW9ucyIsImxhYmVsVW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImxhYmVsU3RyaW5nIiwibGFiZWxNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIlN1YnN0aXR1dGlvbnMiLCJvbnRvbG9neSIsImZyb21Ob3RoaW5nIiwidW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmciLCJnZXRMYWJlbCIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsImZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJuYW1lIiwiTWV0YXZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQcUI7d0JBR2E7MkJBQ2E7b0JBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckUsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsWUFBWTtnQ0FERUQ7UUFFeEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOzs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFFQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNGLFlBQVksQ0FBQ0UsT0FBTztZQUFJOzs7WUFFaERDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0gsWUFBWSxDQUFDRyxTQUFTO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNMLFlBQVksQ0FBQ0UsT0FBTztnQkFFbEQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUCxZQUFZLENBQUNRLE9BQU87Z0JBRWxELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsU0FBUztnQkFDakIsSUFBTVYsZUFBZVUsVUFBVVQsZUFBZSxJQUN4Q1UsaUNBQWlDLElBQUksQ0FBQ1gsWUFBWSxDQUFDUyxTQUFTLENBQUNULGVBQzdEWSxVQUFVRCxnQ0FBZ0MsR0FBRztnQkFFbkQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0NiLFlBQVk7Z0JBQUksT0FB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