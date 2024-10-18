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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./proof"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_wildcard(require("./topLevelAssertion"));
var _query = require("./utilities/query");
var _json = require("./utilities/json");
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
var proofNodeQuery = (0, _query.nodeQuery)("/metatheorem/proof"), labelNodesQuery = (0, _query.nodesQuery)("/metatheorem/label"), consequentNodeQuery = (0, _query.nodeQuery)("/metatheorem/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/metatheorem/supposition");
var Metatheorem = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Metatheorem, TopLevelAssertion);
    function Metatheorem(fileContext, string, labels, suppositions, consequent, proof, substitutions) {
        _class_call_check(this, Metatheorem);
        var _this;
        _this = _call_super(this, Metatheorem, [
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
    _create_class(Metatheorem, [
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var metatheoremString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(metatheoremString, "' metatheorem..."));
                var labelsVerifiedAtTopLevel = this.labels.every(function(label) {
                    var labelVVerifiedAtTopLevel = label.verifyAtTopLevel(_this.fileContext);
                    if (labelVVerifiedAtTopLevel) {
                        return true;
                    }
                });
                if (labelsVerifiedAtTopLevel) {
                    var localContext = _local.default.fromFileContext(this.fileContext), suppositionsVerified = this.suppositions.every(function(supposition) {
                        var suppositionVerified = supposition.verify(localContext);
                        if (suppositionVerified) {
                            return true;
                        }
                    });
                    if (suppositionsVerified) {
                        var consequentVerified = this.consequent.verify(localContext);
                        if (consequentVerified) {
                            var proofVerified = this.proof.verify(this.substitutions, this.consequent, localContext);
                            if (proofVerified) {
                                var metatheorem = this; ///
                                this.fileContext.addMetatheorem(metatheorem);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(metatheoremString, "' metatheorem."));
                }
                return verified;
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
            value: function fromJSON(json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), consequent = (0, _json.consequentFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), substitutions = (0, _json.substitutionsFromJSON)(json, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = null, topLevelAssertion = new Metatheorem(fileContext, string, labels, suppositions, consequent, proof, substitutions);
                return topLevelAssertion;
            }
        },
        {
            key: "fromMetatheoremNode",
            value: function fromMetatheoremNode(metatheoremNode, fileContext) {
                var proofNode = proofNodeQuery(metatheoremNode), labelNodes = labelNodesQuery(metatheoremNode), consequentNode = consequentNodeQuery(metatheoremNode), suppositionNodes = suppositionNodesQuery(metatheoremNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = _consequent.default.fromConsequentNode(consequentNode, fileContext), proof = _proof.default.fromProofNode(proofNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), substitutions = _substitutions.default.fromNothing(), metatheorem = new Metatheorem(fileContext, string, labels, suppositions, consequent, proof, substitutions);
                return metatheorem;
            }
        }
    ]);
    return Metatheorem;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Metatheorem: Metatheorem
});
var _default = Metatheorem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgUHJvb2YgZnJvbSBcIi4vcHJvb2ZcIjtcbmltcG9ydCBDb25zZXF1ZW50IGZyb20gXCIuL2NvbnNlcXVlbnRcIjtcbmltcG9ydCBTdXBwb3NpdGlvbiBmcm9tIFwiLi9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW0vcHJvb2ZcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGF0aGVvcmVtL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbS9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhdGhlb3JlbS9zdXBwb3NpdGlvblwiKTtcblxuY2xhc3MgTWV0YXRoZW9yZW0gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZiwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXRoZW9yZW1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdGhlb3JlbVN0cmluZ30nIG1ldGF0aGVvcmVtLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCA9IGxhYmVsLnZlcmlmeUF0VG9wTGV2ZWwodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkodGhpcy5zdWJzdGl0dXRpb25zLCB0aGlzLmNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgbWV0YXRoZW9yZW0gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhdGhlb3JlbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTih0aGlzLmNvbnNlcXVlbnQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBNZXRhdGhlb3JlbShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdGhlb3JlbU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KG1ldGF0aGVvcmVtTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShtZXRhdGhlb3JlbU5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShtZXRhdGhlb3JlbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkobWV0YXRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBuZXcgTWV0YXRoZW9yZW0oZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTWV0YXRoZW9yZW1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhdGhlb3JlbTtcbiJdLCJuYW1lcyI6WyJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwiTWV0YXRoZW9yZW0iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJtZXRhdGhlb3JlbVN0cmluZyIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWRBdFRvcExldmVsIiwiZXZlcnkiLCJsYWJlbCIsImxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCIsInZlcmlmeUF0VG9wTGV2ZWwiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsInByb29mVmVyaWZpZWQiLCJtZXRhdGhlb3JlbSIsImFkZE1ldGF0aGVvcmVtIiwiZGVidWciLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiY29uc2VxdWVudEpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHMiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbU5vZGUiLCJwcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiY29uc2VxdWVudE5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiTGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiQ29uc2VxdWVudCIsImZyb21Db25zZXF1ZW50Tm9kZSIsIlByb29mIiwiZnJvbVByb29mTm9kZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsIlRvcExldmVsQXNzZXJ0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUpBOzs7ZUFBQTs7OzJEQWpKaUI7NERBQ0M7NERBQ0E7aUVBQ0s7a0VBQ0M7NERBQ0M7b0VBQ0M7eUVBQ0k7cUJBRVE7b0JBU1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsdUJBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMsNEJBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFekMsSUFBQSxBQUFNRyw0QkFBTjtjQUFNQTthQUFBQSxZQUNRQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxhQUFhO2dDQURuRlA7O2dCQUVGLGtCQUZFQTtZQUVJQztZQUFhQztZQUFRQztZQUFRQztZQUFjQztZQUFZQzs7UUFFN0QsTUFBS0MsYUFBYSxHQUFHQTs7O2tCQUpuQlA7O1lBT0pRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxvQkFBb0IsSUFBSSxDQUFDVCxNQUFNLEVBQUcsR0FBRztnQkFFM0MsSUFBSSxDQUFDRCxXQUFXLENBQUNXLEtBQUssQ0FBQyxBQUFDLGtCQUFtQyxPQUFsQkQsbUJBQWtCO2dCQUUzRCxJ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