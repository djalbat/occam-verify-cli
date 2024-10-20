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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
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
                var labelsVerifiedWhenDeclared = this.labels.every(function(label) {
                    var labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                if (labelsVerifiedWhenDeclared) {
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
                var Label = _shim.default.Label, Proof = _shim.default.Proof, Consequent = _shim.default.Consequent, Supposition = _shim.default.Supposition, Substitutions = _shim.default.Substitutions, proofNode = proofNodeQuery(metatheoremNode), labelNodes = labelNodesQuery(metatheoremNode), consequentNode = consequentNodeQuery(metatheoremNode), suppositionNodes = suppositionNodesQuery(metatheoremNode), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = Consequent.fromConsequentNode(consequentNode, fileContext), proof = Proof.fromProofNode(proofNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), substitutions = Substitutions.fromNothing(), metatheorem = new Metatheorem(fileContext, string, labels, suppositions, consequent, proof, substitutions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW0vcHJvb2ZcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGF0aGVvcmVtL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbS9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhdGhlb3JlbS9zdXBwb3NpdGlvblwiKTtcblxuY2xhc3MgTWV0YXRoZW9yZW0gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZiwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXRoZW9yZW1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdGhlb3JlbVN0cmluZ30nIG1ldGF0aGVvcmVtLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBsYWJlbC52ZXJpZnlXaGVuRGVjbGFyZWQodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbnNlcXVlbnRWZXJpZmllZCA9IHRoaXMuY29uc2VxdWVudC52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllZCA9IHRoaXMucHJvb2YudmVyaWZ5KHRoaXMuc3Vic3RpdHV0aW9ucywgdGhpcy5jb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04odGhpcy5jb25zZXF1ZW50KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgTWV0YXRoZW9yZW0oZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IExhYmVsLCBQcm9vZiwgQ29uc2VxdWVudCwgU3VwcG9zaXRpb24sIFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobWV0YXRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG1ldGF0aGVvcmVtTm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KG1ldGF0aGVvcmVtTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShtZXRhdGhlb3JlbU5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGhlb3JlbShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhdGhlb3JlbVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGF0aGVvcmVtO1xuIl0sIm5hbWVzIjpbInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJNZXRhdGhlb3JlbSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCIsInByb29mIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsIm1ldGF0aGVvcmVtU3RyaW5nIiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCIsImV2ZXJ5IiwibGFiZWwiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwiY29uc2VxdWVudFZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsIm1ldGF0aGVvcmVtIiwiYWRkTWV0YXRoZW9yZW0iLCJkZWJ1ZyIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJjb25zZXF1ZW50SlNPTiIsImNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsImNvbnNlcXVlbnRGcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3RyaW5nRnJvbUxhYmVscyIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtTm9kZSIsIkxhYmVsIiwic2hpbSIsIlByb29mIiwiQ29uc2VxdWVudCIsIlN1cHBvc2l0aW9uIiwiU3Vic3RpdHV0aW9ucyIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJjb25zZXF1ZW50Tm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsImZyb21Db25zZXF1ZW50Tm9kZSIsImZyb21Qcm9vZk5vZGUiLCJmcm9tTm90aGluZyIsIlRvcExldmVsQXNzZXJ0aW9uIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErSUE7OztlQUFBOzs7MkRBN0lpQjs0REFDUTt5RUFDSztxQkFFUTtvQkFTVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDN0JDLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDaENJLHdCQUF3QkYsSUFBQUEsaUJBQVUsRUFBQztBQUV6QyxJQUFBLEFBQU1HLDRCQUFOO2NBQU1BO2FBQUFBLFlBQ1FDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLGFBQWE7Z0NBRG5GUDs7Z0JBRUYsa0JBRkVBO1lBRUlDO1lBQWFDO1lBQVFDO1lBQVFDO1lBQWNDO1lBQVlDOztRQUU3RCxNQUFLQyxhQUFhLEdBQUdBOzs7a0JBSm5CUDs7WUFPSlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLG9CQUFvQixJQUFJLENBQUNULE1BQU0sRUFBRyxHQUFHO2dCQUUzQyxJQUFJLENBQUNELFdBQVcsQ0FBQ1csS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCRCxtQkFBa0I7Z0JBRTNELElBQU1FLDZCQUE2QixJQUFJLENBQUNWLE1BQU0sQ0FBQ1csS0FBSyxDQUFDLFNBQUNDO29CQUNwRCxJQUFNQyw2QkFBNkJELE1BQU1FLGtCQUFrQixDQUFDLE1BQUtoQixXQUFXO29CQUU1RSxJQUFJZSw0QkFBNEI7d0JBQzlCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUgsNEJBQTRCO29CQUM5QixJQUFNSyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQyxJQUFJLENBQUNuQixXQUFXLEdBQzVEb0IsdUJBQXVCLElBQUksQ0FBQ2pCLFlBQVksQ0FBQ1UsS0FBSyxDQUFDLFNBQUNRO3dCQUM5QyxJQUFNQyxzQkFBc0JELFlBQVliLE1BQU0sQ0FBQ1M7d0JBRS9DLElBQUlLLHFCQUFxQjs0QkFDdkIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFTixJQUFJRixzQkFBc0I7d0JBQ3hCLElBQU1HLHFCQUFxQixJQUFJLENBQUNuQixVQUFVLENBQUNJLE1BQU0sQ0FBQ1M7d0JBRWxELElBQUlNLG9CQUFvQjs0QkFDdEIsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ25CLEtBQUssQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ0YsYUFBYSxFQUFFLElBQUksQ0FBQ0YsVUFBVSxFQUFFYTs0QkFFN0UsSUFBSU8sZUFBZTtnQ0FDakIsSUFBTUMsY0FBYyxJQUFJLEVBQUcsR0FBRztnQ0FFOUIsSUFBSSxDQUFDekIsV0FBVyxDQUFDMEIsY0FBYyxDQUFDRDtnQ0FFaENoQixXQUFXOzRCQUNiO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDVCxXQUFXLENBQUMyQixLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJqQixtQkFBa0I7Z0JBQy9EO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWFDLElBQUFBLHdCQUFrQixFQUFDLElBQUksQ0FBQzVCLE1BQU0sR0FDM0M2QixpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQzVCLFVBQVUsR0FDM0Q2QixtQkFBbUJDLElBQUFBLG9DQUE4QixFQUFDLElBQUksQ0FBQy9CLFlBQVksR0FDbkVnQyxvQkFBb0JDLElBQUFBLHNDQUFnQyxFQUFDLElBQUksQ0FBQzlCLGFBQWEsR0FDdkVKLFNBQVMyQixZQUNUekIsYUFBYTJCLGdCQUNiNUIsZUFBZThCLGtCQUNmM0IsZ0JBQWdCNkIsbUJBQ2hCRSxPQUFPO29CQUNMbkMsUUFBQUE7b0JBQ0FFLFlBQUFBO29CQUNBRCxjQUFBQTtvQkFDQUcsZUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBTytCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFckMsV0FBVztnQkFDL0IsSUFBTUUsU0FBU3FDLElBQUFBLG9CQUFjLEVBQUNGLE1BQU1yQyxjQUM5QkksYUFBYW9DLElBQUFBLHdCQUFrQixFQUFDSCxNQUFNckMsY0FDdENHLGVBQWVzQyxJQUFBQSwwQkFBb0IsRUFBQ0osTUFBTXJDLGNBQzFDTSxnQkFBZ0JvQyxJQUFBQSwyQkFBcUIsRUFBQ0wsTUFBTXJDLGNBQzVDQyxTQUFTMEMsSUFBQUEsbUNBQWdCLEVBQUN6QyxTQUMxQkcsUUFBUSxNQUNSdUMsb0JBQW9CLElBdEZ4QjdDLFlBc0Z3Q0MsYUFBYUMsUUFBUUMsUUFBUUMsY0FBY0MsWUFBWUMsT0FBT0M7Z0JBRXhHLE9BQU9zQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUU5QyxXQUFXO2dCQUNyRCxJQUFRK0MsUUFBeURDLGFBQUksQ0FBN0RELE9BQU9FLFFBQWtERCxhQUFJLENBQXREQyxPQUFPQyxhQUEyQ0YsYUFBSSxDQUEvQ0UsWUFBWUMsY0FBK0JILGFBQUksQ0FBbkNHLGFBQWFDLGdCQUFrQkosYUFBSSxDQUF0QkksZUFDekNDLFlBQVk1RCxlQUFlcUQsa0JBQzNCUSxhQUFhM0QsZ0JBQWdCbUQsa0JBQzdCUyxpQkFBaUIxRCxvQkFBb0JpRCxrQkFDckNVLG1CQUFtQjFELHNCQUFzQmdELGtCQUN6QzVDLFNBQVNvRCxXQUFXRyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3ZCLElBQU01QyxRQUFRaUMsTUFBTVksYUFBYSxDQUFDRCxXQUFXMUQ7b0JBRTdDLE9BQU9jO2dCQUNULElBQ0FYLGVBQWVxRCxpQkFBaUJDLEdBQUcsQ0FBQyxTQUFDRztvQkFDbkMsSUFBTXZDLGNBQWM4QixZQUFZVSxtQkFBbUIsQ0FBQ0QsaUJBQWlCNUQ7b0JBRXJFLE9BQU9xQjtnQkFDVCxJQUNBakIsYUFBYThDLFdBQVdZLGtCQUFrQixDQUFDUCxnQkFBZ0J2RCxjQUMzREssUUFBUTRDLE1BQU1jLGFBQWEsQ0FBQ1YsV0FBV3JELGNBQ3ZDQyxTQUFTMEMsSUFBQUEsbUNBQWdCLEVBQUN6QyxTQUMxQkksZ0JBQWdCOEMsY0FBY1ksV0FBVyxJQUN6Q3ZDLGNBQWMsSUEvR2xCMUIsWUErR2tDQyxhQUFhQyxRQUFRQyxRQUFRQyxjQUFjQyxZQUFZQyxPQUFPQztnQkFFbEcsT0FBT21CO1lBQ1Q7OztXQWxISTFCO0VBQW9Ca0UsMEJBQWlCO0FBcUgzQ0MsT0FBT0MsTUFBTSxDQUFDbkIsYUFBSSxFQUFFO0lBQ2xCakQsYUFBQUE7QUFDRjtJQUVBLFdBQWVBIn0=