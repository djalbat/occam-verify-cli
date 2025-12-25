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
var _reference = /*#__PURE__*/ _interop_require_default(require("./substitution/reference"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyByZWZlcmVuY2VNZXRhVHlwZSB9IGZyb20gXCIuLy9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHJlZmVyZW5jZSBmcm9tIFwiLi9zdWJzdGl0dXRpb24vcmVmZXJlbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpOyB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTsgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhyZWZlcm5lY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcm5lY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBtZXRhdmFyaWFibGVOb2RlQS5tYXRjaChtZXRhdmFyaWFibGVOb2RlQiksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7IC8vL1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGlmICghdmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gbWV0YXZhcmlhYmxlVmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIHZlcmlmaWVzID0gbGFiZWxQcmVzZW50OyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllcztcblxuICAgIGNvbnN0IG1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSBtZXRhdmFyaWFibGVWZXJpZmllc0dpdmVuTWV0YVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbGFiZWxNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgbGFiZWwgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IGxhYmVsVW5pZmllczsgIC8vL1xuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlLCBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlLCBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldE5hbWUiLCJnZXRTdHJpbmciLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsImlzRXF1YWxUbyIsInJlZmVybmVjZSIsIm1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSIsImVxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVCIiwibWF0Y2hlcyIsIm1hdGNoIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImFkZFJlZmVyZW5jZSIsImRlYnVnIiwibWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzR2l2ZW5NZXRhVHlwZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJzdWJzdGl0dXRpb25zIiwibGFiZWxVbmlmaWVzIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwibGFiZWxTdHJpbmciLCJsYWJlbE1ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiU3Vic3RpdHV0aW9ucyIsIm9udG9sb2d5IiwiZnJvbU5vdGhpbmciLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsImdldExhYmVsIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJmcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJNZXRhdmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dFQVJxQjt3QkFHYTsyQkFDYTtvQkFDc0I7Z0VBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QixXQUFlQSxJQUFBQSxnQkFBTSw4QkFBQzthQUFNQyxVQUNkQyxZQUFZO2dDQURFRDtRQUV4QixJQUFJLENBQUNDLFlBQVksR0FBR0E7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUVBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0YsWUFBWSxDQUFDRSxPQUFPO1lBQUk7OztZQUVoREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxZQUFZLENBQUNHLFNBQVM7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0wsWUFBWSxDQUFDRSxPQUFPO2dCQUVsRCxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLFlBQVksQ0FBQ1EsT0FBTztnQkFFbEQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxTQUFTO2dCQUNqQixJQUFNVixlQUFlVSxVQUFVVCxlQUFlLElBQ3hDVSxpQ0FBaUMsSUFBSSxDQUFDWCxZQUFZLENBQUNTLFNBQVMsQ0FBQ1QsZUFDN0RZLFVBQVVELGdDQUFnQyxHQUFHO2dCQUVuRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ2IsWUFBWTtnQkFBSSxPQUFPLElBQUksQ0FBQ0EsWUFBWSxDQUFDUyxTQUFTLENBQUNUO1lBQWU7OztZQUVwR2MsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQlQsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDTCxZQUFZLENBQUNjLHFCQUFxQixDQUFDVDtZQUFtQjs7O1lBRTVHVSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCUixnQkFBZ0I7Z0JBQ3BDLElBQU1TLG9CQUFvQlQsa0JBQWtCLEdBQUc7Z0JBRS9DQSxtQkFBbUIsSUFBSSxDQUFDUCxZQUFZLENBQUNRLE9BQU87Z0JBRTVDLElBQU1TLG9CQUFvQlYsa0JBQ3BCVyxVQUFVRixrQkFBa0JHLEtBQUssQ0FBQ0Ysb0JBQ2xDRywwQkFBMEJGLFNBQVUsR0FBRztnQkFFN0MsT0FBT0UseUJBQXlCLEdBQUc7WUFDckM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsT0FBTztnQkFDWixJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGtCQUFrQixJQUFJLENBQUNyQixTQUFTLElBQUksR0FBRztnQkFFN0NtQixRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJELGlCQUFnQjtnQkFFaEQsSUFBSSxDQUFDRCxVQUFVO29CQUNiLElBQU1HLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDTDtvQkFFckRDLFdBQVdHLHNCQUFzQixHQUFHO2dCQUN0QztnQkFFQSxJQUFJLENBQUNILFVBQVU7b0JBQ2IsSUFBTUssWUFBWSxJQUFJLEVBQ2hCQyxlQUFlUCxRQUFRUSx5QkFBeUIsQ0FBQ0Y7b0JBRXZETCxXQUFXTSxjQUFlLEdBQUc7Z0JBQy9CO2dCQUVBLElBQUlOLFVBQVU7b0JBQ1osSUFBTUssYUFBWSxJQUFJLEVBQUUsR0FBRztvQkFFM0JOLFFBQVFTLFlBQVksQ0FBQ0g7b0JBRXJCTixRQUFRVSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJSLGlCQUFnQjtnQkFDcEQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJMLE9BQU87Z0JBQ3hCLElBQUlJO2dCQUVKLElBQU1PLFdBQVdDLDJCQUFpQixFQUM1QkMsb0NBQW9DLElBQUksQ0FBQ25DLFlBQVksQ0FBQ29DLG1CQUFtQixDQUFDSCxVQUFVWDtnQkFFMUZJLHVCQUF1QlMsbUNBQW1DLEdBQUc7Z0JBRTdELE9BQU9UO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVqQixPQUFPO2dCQUN0QyxJQUFJa0I7Z0JBRUosSUFBTUMsa0JBQWtCbkIsU0FBUyxHQUFHO2dCQUVwQ0EsVUFBVWdCLE1BQU1JLFVBQVU7Z0JBRTFCLElBQU1DLGlCQUFpQnJCLFNBQVUsR0FBRztnQkFFcENBLFVBQVVtQixpQkFBa0IsR0FBRztnQkFFL0IsSUFBTWIsWUFBWSxJQUFJLEVBQ2hCZ0IsY0FBY04sTUFBTW5DLFNBQVMsSUFDN0JxQixrQkFBa0JJLFVBQVV6QixTQUFTO2dCQUUzQ21CLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGlCQUFnREQsT0FBaENvQixhQUFZLHNCQUFvQyxPQUFoQnBCLGlCQUFnQjtnQkFFL0UsSUFBTXFCLG9CQUFvQlAsTUFBTXJDLGVBQWUsSUFDekM2QyxzQkFBc0IsSUFBSSxDQUFDOUMsWUFBWSxFQUN2QytDLHVCQUF1QkYsbUJBQ3ZCRyxtQ0FBbUNDLElBQUFBLDJDQUE4QixFQUFDSCxxQkFBcUJDLHNCQUFzQlIsZUFBZUksZ0JBQWdCRjtnQkFFbEpELGVBQWVRLGtDQUFrQyxHQUFHO2dCQUVwRCxJQUFJUixjQUFjO29CQUNoQmxCLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG1CQUFrRFIsT0FBaENvQixhQUFZLHNCQUFvQyxPQUFoQnBCLGlCQUFnQjtnQkFDbkY7Z0JBRUEsT0FBT2dCO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCbEQsWUFBWSxFQUFFc0IsT0FBTztnQkFDckMsSUFBSTZCO2dCQUVKLElBQU12QixZQUFZLElBQUksRUFDaEJ3QixxQkFBcUJwRCxhQUFhRyxTQUFTLElBQzNDcUIsa0JBQWtCSSxVQUFVekIsU0FBUztnQkFFM0NtQixRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBOERELE9BQTlDNEIsb0JBQW1CLDZCQUEyQyxPQUFoQjVCLGlCQUFnQjtnQkFFN0YsSUFBTSxBQUFFNkIsZ0JBQWtCQyxpQkFBUSxDQUExQkQsZUFDRmQsZ0JBQWdCYyxjQUFjRSxXQUFXLElBQ3pDWixpQkFBaUJyQixTQUNqQm1CLGtCQUFrQm5CLFNBQ2xCd0Isc0JBQXNCLElBQUksQ0FBQzlDLFlBQVksRUFDdkMrQyx1QkFBdUIvQyxjQUN2QmdELG1DQUFtQ0MsSUFBQUEsMkNBQThCLEVBQUNILHFCQUFxQkMsc0JBQXNCUixlQUFlSSxnQkFBZ0JGO2dCQUVsSlUsc0JBQXNCSCxrQ0FBa0MsR0FBRztnQkFFM0QsSUFBSUcscUJBQXFCO29CQUN2QjdCLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG1CQUFnRVIsT0FBOUM0QixvQkFBbUIsNkJBQTJDLE9BQWhCNUIsaUJBQWdCO2dCQUNqRztnQkFFQSxPQUFPMkI7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLG9CQUFvQixFQUFFbkMsT0FBTztnQkFDckQsSUFBSW9DO2dCQUVKLElBQU05QixZQUFZLElBQUksRUFDaEJKLGtCQUFrQkksVUFBVXpCLFNBQVMsSUFDckN3RCw2QkFBNkJGLHFCQUFxQnRELFNBQVM7Z0JBRWpFbUIsUUFBUUcsS0FBSyxDQUFDLEFBQUMsaUJBQW1GRCxPQUFuRW1DLDRCQUEyQiwwQ0FBd0QsT0FBaEJuQyxpQkFBZ0I7Z0JBRWxILElBQU0sQUFBRTZCLGdCQUFrQkMsaUJBQVEsQ0FBMUJELGVBQ0ZmLFFBQVFtQixxQkFBcUJHLFFBQVEsSUFDckNyQixnQkFBZ0JjLGNBQWNFLFdBQVcsSUFDekNmLGVBQWUsSUFBSSxDQUFDSCxVQUFVLENBQUNDLE9BQU9DLGVBQWVqQjtnQkFFM0RvQyw4QkFBOEJsQixjQUFlLEdBQUc7Z0JBRWhELElBQUlrQiw2QkFBNkI7b0JBQy9CcEMsUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQXFGRCxPQUFuRW1DLDRCQUEyQiwwQ0FBd0QsT0FBaEJuQyxpQkFBZ0I7Z0JBQ3RIO2dCQUVBLE9BQU9rQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQkMsSUFBQUEsb0NBQThCLEVBQUMsSUFBSSxDQUFDL0QsWUFBWSxHQUNuRUEsZUFBZThELGtCQUNmRSxPQUFPO29CQUNMaEUsY0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2dFO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFMUMsT0FBTztnQkFDM0IsSUFBTXRCLGVBQWVrRSxJQUFBQSwwQkFBb0IsRUFBQ0YsTUFBTTFDLFVBQzFDTSxZQUFZLElBQUk3QixVQUFVQztnQkFFaEMsT0FBTzRCO1lBQ1Q7OztZQUVPdUMsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFOUMsT0FBTztnQkFDbkMsSUFBSU0sWUFBWTtnQkFFaEIsSUFBTXlDLGdCQUFnQkQsU0FBU0UsZ0JBQWdCO2dCQUUvQyxJQUFJRCxrQkFBa0IsTUFBTTtvQkFDMUJ6QyxZQUFZMkMsMkJBQTJCRixlQUFlL0M7Z0JBQ3hEO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVPNEMsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCSCxhQUFhLEVBQUUvQyxPQUFPO2dCQUM3QyxJQUFNTSxZQUFZMkMsMkJBQTJCRixlQUFlL0M7Z0JBRTVELE9BQU9NO1lBQ1Q7OztZQUVPNkMsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVwRCxPQUFPO2dCQUMvQyxJQUFJTSxZQUFZO2dCQUVoQixJQUFNckIsbUJBQW1CbUUsZUFBZXBFLG1CQUFtQjtnQkFFM0QsSUFBSUMscUJBQXFCLE1BQU07b0JBQzdCcUIsWUFBWStDLDhCQUE4QnBFLGtCQUFrQmU7Z0JBQzlEO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVPZ0QsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCckUsZ0JBQWdCLEVBQUVlLE9BQU87Z0JBQ25ELElBQU1NLFlBQVkrQyw4QkFBOEJwRSxrQkFBa0JlO2dCQUVsRSxPQUFPTTtZQUNUOzs7WUFFT2lELEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUV4RCxPQUFPO2dCQUNyRCxJQUFJTSxZQUFZO2dCQUVoQixJQUFNeUMsZ0JBQWdCUyxrQkFBa0JSLGdCQUFnQjtnQkFFeEQsSUFBSUQsa0JBQWtCLE1BQU07b0JBQzFCekMsWUFBWTJDLDJCQUEyQkYsZUFBZS9DO2dCQUN4RDtnQkFFQSxPQUFPTTtZQUNUOzs7WUFFT21ELEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQkMsc0JBQXNCLEVBQUUxRCxPQUFPO2dCQUMvRCxJQUFNZixtQkFBbUJ5RSx1QkFBdUIxRSxtQkFBbUIsSUFDN0RzQixZQUFZK0MsOEJBQThCcEUsa0JBQWtCZTtnQkFFbEUsT0FBT007WUFDVDs7OztLQTlEQSw2QkFBT3FELFFBQU87QUFpRWhCLFNBQVNWLDJCQUEyQkYsYUFBYSxFQUFFL0MsT0FBTztJQUN4RCxJQUFRdkIsWUFBNEJ1RCxpQkFBUSxDQUFwQ3ZELFdBQVdtRixlQUFpQjVCLGlCQUFRLENBQXpCNEIsY0FDYmxGLGVBQWVrRixhQUFhVixpQkFBaUIsQ0FBQ0gsZUFBZS9DLFVBQzdETSxZQUFZLElBQUk3QixVQUFVQztJQUVoQyxPQUFPNEI7QUFDVDtBQUVBLFNBQVMrQyw4QkFBOEJwRSxnQkFBZ0IsRUFBRWUsT0FBTztJQUM5RCxJQUFRdkIsWUFBNEJ1RCxpQkFBUSxDQUFwQ3ZELFdBQVdtRixlQUFpQjVCLGlCQUFRLENBQXpCNEIsY0FDYmxGLGVBQWVrRixhQUFhTixvQkFBb0IsQ0FBQ3JFLGtCQUFrQmUsVUFDbkVNLFlBQVksSUFBSTdCLFVBQVVDO0lBRWhDLE9BQU80QjtBQUNUIn0=