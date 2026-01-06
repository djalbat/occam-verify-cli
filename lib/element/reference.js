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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _metaType = require(".//metaType");
var _unify = require("../process/unify");
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
var _default = (0, _elements.define)((_Reference = /*#__PURE__*/ function() {
    function Reference(context, string, node, metavariable) {
        _class_call_check(this, Reference);
        this.context = context;
        this.string = string;
        this.node = node;
        this.metavariable = metavariable;
    }
    _create_class(Reference, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
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
                var labelMetavariable = label.getMetavariable(), generalMetavariable = this.metavariable, specificMetavariable = labelMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
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
                var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing(), generalContext = context, specificContext = context, generalMetavariable = this.metavariable, specificMetavariable = metavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
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
                var Substitutions = _elements.default.Substitutions, label = metaLemmaMetatheorem.getLabel(), substitutions = Substitutions.fromNothing(), labelUnifies = this.unifyLabel(label, substitutions, context);
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
        }
    ]);
    return Reference;
}(), _define_property(_Reference, "name", "Reference"), _Reference));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlZmVyZW5jZU1ldGFUeXBlIH0gZnJvbSBcIi4vL21ldGFUeXBlXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHJlZmVybmVjZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVybmVjZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZU5vZGVBLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgLy8vXG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllcykge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBtZXRhdmFyaWFibGVWZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllcykge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgdmVyaWZpZXMgPSBsYWJlbFByZXNlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuXG4gICAgY29uc3QgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVWZXJpZmllcyA9IG1ldGF2YXJpYWJsZVZlcmlmaWVzR2l2ZW5NZXRhVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlID0gbGFiZWwuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBsYWJlbE1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBsYWJlbCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gbGFiZWxVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2UiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc0VxdWFsVG8iLCJyZWZlcm5lY2UiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUiLCJlcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQiIsIm1hdGNoZXMiLCJtYXRjaCIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImFkZFJlZmVyZW5jZSIsImRlYnVnIiwibWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzR2l2ZW5NZXRhVHlwZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJzdWJzdGl0dXRpb25zIiwibGFiZWxVbmlmaWVzIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJsYWJlbFN0cmluZyIsImxhYmVsTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJmcm9tTm90aGluZyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0TGFiZWwiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQcUI7d0JBR2E7cUJBQ2E7b0JBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckUsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWTtnQ0FEckJKO1FBRXhCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0Ms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