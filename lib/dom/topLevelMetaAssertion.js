"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelMetaAssertion;
    }
});
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_wildcard(require("./topLevelAssertion"));
var _query = require("../utilities/query");
var _json = require("../utilities/json");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var first = _necessary.arrayUtilities.first;
var labelNodeQuery = (0, _query.nodeQuery)("/metatheorem/label");
var TopLevelMetaAssertion = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(TopLevelMetaAssertion, TopLevelAssertion);
    function TopLevelMetaAssertion(fileContext, string, labels, suppositions, deduction, proof, substitutions) {
        _class_call_check(this, TopLevelMetaAssertion);
        var _this;
        _this = _call_super(this, TopLevelMetaAssertion, [
            fileContext,
            string,
            labels,
            suppositions,
            deduction,
            proof
        ]);
        _this.substitutions = substitutions;
        return _this;
    }
    _create_class(TopLevelMetaAssertion, [
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getLabel",
            value: function getLabel() {
                var labels = this.getLabels(), firstLabel = first(labels), label = firstLabel; ///
                return label;
            }
        },
        {
            key: "matchReference",
            value: function matchReference(reference) {
                var label = this.getLabel(), referenceMatches = label.matchReference(reference);
                return referenceMatches;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var labelsVerified = this.verifyLabels();
                if (labelsVerified) {
                    var localContext = _local.default.fromFileContext(this.fileContext), context = localContext, suppositionsVerified = this.suppositions.every(function(supposition) {
                        var suppositionVerified = supposition.verify(context);
                        if (suppositionVerified) {
                            return true;
                        }
                    });
                    if (suppositionsVerified) {
                        var deductionVerified = this.deduction.verify(context);
                        if (deductionVerified) {
                            if (this.proof === null) {
                                verified = true;
                            } else {
                                var proofVerified = this.proof.verify(this.substitutions, this.deduction, context);
                                verified = proofVerified; ///
                            }
                        }
                    }
                }
                return verified;
            }
        },
        {
            key: "verifyLabels",
            value: function verifyLabels() {
                var labelsVerified = this.labels.every(function(label) {
                    var nameOnly = false, labelVerified = label.verify(nameOnly);
                    if (labelVerified) {
                        return true;
                    }
                });
                return labelsVerified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), labels = labelsJSON, deduction = deductionJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    deduction: deduction,
                    suppositions: suppositions,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), substitutions = (0, _json.substitutionsFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), deduction = (0, _json.deductionFromJSON)(json, fileContext), proof = null, string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof, substitutions);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, fileContext) {
                var labels = labelsFromNode(node, fileContext), substitutions = _substitutions.default.fromNothing(), suppositions = (0, _topLevelAssertion.suppositionsFromNode)(node, fileContext), deduction = (0, _topLevelAssertion.deductionFromNode)(node, fileContext), proof = (0, _topLevelAssertion.proofFromNode)(node, fileContext), string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), metaLemma = new Class(fileContext, string, labels, suppositions, deduction, proof, substitutions);
                return metaLemma;
            }
        }
    ]);
    return TopLevelMetaAssertion;
}(_topLevelAssertion.default);
function labelsFromNode(node, fileContext) {
    var Label = _dom.default.Label, labelNode = labelNodeQuery(node), label = Label.fromLabelNode(labelNode, fileContext), labels = [
        label
    ];
    return labels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHByb29mRnJvbU5vZGUsIGRlZHVjdGlvbkZyb21Ob2RlLCBzdXBwb3NpdGlvbnNGcm9tTm9kZSwgc3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbGFiZWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW0vbGFiZWxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsTWV0YUFzc2VydGlvbiBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcihmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZik7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBmaXJzdExhYmVsID0gZmlyc3QobGFiZWxzKSxcbiAgICAgICAgICBsYWJlbCA9IGZpcnN0TGFiZWw7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCksXG4gICAgICAgICAgcmVmZXJlbmNlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVkID0gdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllZCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuZGVkdWN0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSBwcm9vZlZlcmlmaWVkOyAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVkID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTih0aGlzLnN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uKGxhYmVscywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IHByb29mRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhYmVsc0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGRvbSxcbiAgICAgICAgbGFiZWxOb2RlID0gbGFiZWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gW1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFiZWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRMYWJlbCIsImdldExhYmVscyIsImZpcnN0TGFiZWwiLCJsYWJlbCIsIm1hdGNoUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTWF0Y2hlcyIsInZlcmlmeSIsInZlcmlmaWVkIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJjb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImRlZHVjdGlvblZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllZCIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwibm9kZSIsImxhYmVsc0Zyb21Ob2RlIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3VwcG9zaXRpb25zRnJvbU5vZGUiLCJkZWR1Y3Rpb25Gcm9tTm9kZSIsInByb29mRnJvbU5vZGUiLCJtZXRhTGVtbWEiLCJUb3BMZXZlbEFzc2VydGlvbiIsIkxhYmVsIiwiZG9tIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF3QnFCQTs7O3lCQXRCVTswREFFZjs0REFDUztvRUFDQzt5RUFDSTtxQkFFSjtvQkFTdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVsQixJQUFBLEFBQU1KLHNDQUFOO2NBQU1BO2FBQUFBLHNCQUNQSyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhO2dDQURuRVg7O2dCQUVqQixrQkFGaUJBO1lBRVhLO1lBQWFDO1lBQVFD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