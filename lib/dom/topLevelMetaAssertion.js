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
    function TopLevelMetaAssertion(fileContext, string, labels, suppositions, consequent, proof, substitutions) {
        _class_call_check(this, TopLevelMetaAssertion);
        var _this;
        _this = _call_super(this, TopLevelMetaAssertion, [
            fileContext,
            string,
            labels,
            suppositions,
            consequent,
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
                        var consequentVerified = this.consequent.verify(context);
                        if (consequentVerified) {
                            if (this.proof === null) {
                                verified = true;
                            } else {
                                var proofVerified = this.proof.verify(this.substitutions, this.consequent, context);
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
            key: "verifyWhenStated",
            value: function verifyWhenStated(statement, reference, context) {
                var verifiedWhenStated;
                debugger;
                return verifiedWhenStated;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), consequentJSON = (0, _json.consequentToConsequentJSON)(this.consequent), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), labels = labelsJSON, consequent = consequentJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    consequent: consequent,
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
                var labels = (0, _json.labelsFromJSON)(json, fileContext), substitutions = (0, _json.substitutionsFromJSON)(json, fileContext), labelsString = (0, _topLevelAssertion.labelsStringFromLabels)(labels), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), consequent = (0, _json.consequentFromJSON)(json, fileContext), proof = null, string = labelsString, topLevelAssertion = new Class(fileContext, string, labels, suppositions, consequent, proof, substitutions);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, fileContext) {
                var labels = labelsFromNode(node, fileContext), substitutions = _substitutions.default.fromNothing(), labelsString = (0, _topLevelAssertion.labelsStringFromLabels)(labels), suppositions = (0, _topLevelAssertion.suppositionsFromNode)(node, fileContext), consequent = (0, _topLevelAssertion.consequentFromNode)(node, fileContext), proof = (0, _topLevelAssertion.proofFromNode)(node, fileContext), string = labelsString, metaLemma = new Class(fileContext, string, labels, suppositions, consequent, proof, substitutions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHByb29mRnJvbU5vZGUsIGNvbnNlcXVlbnRGcm9tTm9kZSwgc3VwcG9zaXRpb25zRnJvbU5vZGUsIGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMgfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBjb25zZXF1ZW50RnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGxhYmVsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtL2xhYmVsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZiwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBmaXJzdExhYmVsID0gZmlyc3QobGFiZWxzKSxcbiAgICAgICAgICBsYWJlbCA9IGZpcnN0TGFiZWw7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllZCA9IHRoaXMucHJvb2YudmVyaWZ5KHRoaXMuc3Vic3RpdHV0aW9ucywgdGhpcy5jb25zZXF1ZW50LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSBwcm9vZlZlcmlmaWVkOyAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVkID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04odGhpcy5jb25zZXF1ZW50KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IGxhYmVsc1N0cmluZywgIC8vL1xuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IHByb29mRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IGxhYmVsc1N0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYSA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYWJlbHNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVsTm9kZSA9IGxhYmVsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IFtcbiAgICAgICAgICBsYWJlbFxuICAgICAgICBdO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhYmVsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldExhYmVsIiwiZ2V0TGFiZWxzIiwiZmlyc3RMYWJlbCIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwiY29uc2VxdWVudFZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiY29uc2VxdWVudEpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsImxhYmVsc1N0cmluZyIsImxhYmVsc1N0cmluZ0Zyb21MYWJlbHMiLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsImNvbnNlcXVlbnRGcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJub2RlIiwibGFiZWxzRnJvbU5vZGUiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdXBwb3NpdGlvbnNGcm9tTm9kZSIsImNvbnNlcXVlbnRGcm9tTm9kZSIsInByb29mRnJvbU5vZGUiLCJtZXRhTGVtbWEiLCJUb3BMZXZlbEFzc2VydGlvbiIsIkxhYmVsIiwiZG9tIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF3QnFCQTs7O3lCQXRCVTswREFFZjs0REFDUztvRUFDQzt5RUFDSTtxQkFFSjtvQkFTdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVsQixJQUFBLEFBQU1KLHNDQUFOO2NBQU1BO2FBQUFBLHNCQUNQSyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZ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