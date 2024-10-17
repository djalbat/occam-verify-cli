"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return Metatheorem;
    },
    substitutionsFromJSON: function() {
        return substitutionsFromJSON;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./proof"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("./substitution"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_wildcard(require("./topLevelAssertion"));
var _query = require("./utilities/query");
var _metaLemma = require("./metaLemma");
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
                var labelsJSON = (0, _topLevelAssertion.labelsToLabelJSON)(this.labels), suppositionsJSON = (0, _topLevelAssertion.suppositionsToSuppositionsJSON)(this.suppositions), consequentJSON = this.consequent.toJSON(), substitutionsJSON = (0, _metaLemma.substitutionsToSubstitutionsJSON)(this.substitutions), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequent: consequent,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var labels = (0, _topLevelAssertion.labelsFromJSON)(json, fileContext), suppositions = (0, _topLevelAssertion.suppositionsFromJSON)(json, fileContext), consequent = (0, _topLevelAssertion.consequentFromJSON)(json, fileContext), substitutions = substitutionsFromJSON(json, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = null, topLevelAssertion = new Metatheorem(fileContext, string, labels, suppositions, consequent, proof, substitutions);
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
function substitutionsFromJSON(json, fileContext) {
    var substitutions = json.substitutions;
    var substitutionsJSON = substitutions; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = _substitution.default.fromJSON(_$json, fileContext);
        return substitution;
    });
    return substitutions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgUHJvb2YgZnJvbSBcIi4vcHJvb2ZcIjtcbmltcG9ydCBDb25zZXF1ZW50IGZyb20gXCIuL2NvbnNlcXVlbnRcIjtcbmltcG9ydCBTdXBwb3NpdGlvbiBmcm9tIFwiLi9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi9tZXRhTGVtbWFcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgc3RyaW5nRnJvbUxhYmVscyxcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbS9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YXRoZW9yZW0vbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGF0aGVvcmVtL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhdGhlb3JlbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdGhlb3JlbVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0uLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRBdFRvcExldmVsID0gbGFiZWwudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdGhlb3JlbSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRNZXRhdGhlb3JlbShtZXRhdGhlb3JlbSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdGhlb3JlbVN0cmluZ30nIG1ldGF0aGVvcmVtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbEpTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gdGhpcy5jb25zZXF1ZW50LnRvSlNPTigpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IE1ldGF0aGVvcmVtKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobWV0YXRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG1ldGF0aGVvcmVtTm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KG1ldGF0aGVvcmVtTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShtZXRhdGhlb3JlbU5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGhlb3JlbShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG4iXSwibmFtZXMiOlsiTWV0YXRoZW9yZW0iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YXRoZW9yZW1TdHJpbmciLCJ0cmFjZSIsImxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCIsImV2ZXJ5IiwibGFiZWwiLCJsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwiLCJ2ZXJpZnlBdFRvcExldmVsIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJwcm9vZlZlcmlmaWVkIiwibWV0YXRoZW9yZW0iLCJhZGRNZXRhdGhlb3JlbSIsImRlYnVnIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxKU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsImNvbnNlcXVlbnRKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1Ob2RlIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsIkNvbnNlcXVlbnQiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJQcm9vZiIsImZyb21Qcm9vZk5vZGUiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJUb3BMZXZlbEFzc2VydGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUF5QnFCQTs7SUFxSExDLHFCQUFxQjtlQUFyQkE7Ozs0REE1SUU7NERBQ0E7aUVBQ0s7a0VBQ0M7NERBQ0M7bUVBQ0E7b0VBQ0M7eUVBQ0k7cUJBRVE7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRCxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsdUJBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMsNEJBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsSUFBQSxBQUFNTCw0QkFBTjtjQUFNQTthQUFBQSxZQUNQUSxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxhQUFhO2dDQURwRWQ7O2dCQUVqQixrQkFGaUJBO1lBRVhRO1lBQWFDO1lBQVFDO1lBQVFDO1lB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