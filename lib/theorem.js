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
var proofNodeQuery = (0, _query.nodeQuery)("/theorem/proof"), labelNodesQuery = (0, _query.nodesQuery)("/theorem/label"), consequentNodeQuery = (0, _query.nodeQuery)("/theorem/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/theorem/supposition");
var Theorem = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Theorem, TopLevelAssertion);
    function Theorem() {
        _class_call_check(this, Theorem);
        return _call_super(this, Theorem, arguments);
    }
    _create_class(Theorem, [
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var theoremString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(theoremString, "' theorem..."));
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
                            var substitutions = _substitutions.default.fromNothing(), proofVerified = this.proof.verify(substitutions, this.consequent, localContext);
                            if (proofVerified) {
                                var theorem = this; ///
                                this.fileContext.addTheorem(theorem);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(theoremString, "' theorem."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(Theorem, json, fileContext);
            }
        },
        {
            key: "fromTheoremNode",
            value: function fromTheoremNode(theoremNode, fileContext) {
                var proofNode = proofNodeQuery(theoremNode), labelNodes = labelNodesQuery(theoremNode), consequentNode = consequentNodeQuery(theoremNode), suppositionNodes = suppositionNodesQuery(theoremNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = _consequent.default.fromConsequentNode(consequentNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = _proof.default.fromProofNode(proofNode, fileContext), theorem = new Theorem(fileContext, string, labels, suppositions, consequent, proof);
                return theorem;
            }
        }
    ]);
    return Theorem;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Theorem: Theorem
});
var _default = Theorem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aGVvcmVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9wcm9vZlwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3RoZW9yZW0vc3VwcG9zaXRpb25cIik7XG5cbmNsYXNzIFRoZW9yZW0gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRoZW9yZW1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRBdFRvcExldmVsID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwgPSBsYWJlbC52ZXJpZnlBdFRvcExldmVsKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbnNlcXVlbnRWZXJpZmllZCA9IHRoaXMuY29uc2VxdWVudC52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW0gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RoZW9yZW1TdHJpbmd9JyB0aGVvcmVtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oVGhlb3JlbSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHRoZW9yZW0gPSBuZXcgVGhlb3JlbShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFRoZW9yZW1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUaGVvcmVtO1xuIl0sIm5hbWVzIjpbInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJUaGVvcmVtIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ0aGVvcmVtU3RyaW5nIiwic3RyaW5nIiwiZmlsZUNvbnRleHQiLCJ0cmFjZSIsImxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCIsImxhYmVscyIsImV2ZXJ5IiwibGFiZWwiLCJsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwiLCJ2ZXJpZnlBdFRvcExldmVsIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJjb25zZXF1ZW50Iiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mVmVyaWZpZWQiLCJwcm9vZiIsInRoZW9yZW0iLCJhZGRUaGVvcmVtIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21UaGVvcmVtTm9kZSIsInRoZW9yZW1Ob2RlIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsIkNvbnNlcXVlbnQiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzIiwiUHJvb2YiLCJmcm9tUHJvb2ZOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0dBOzs7ZUFBQTs7OzJEQWxHaUI7NERBQ0M7NERBQ0E7aUVBQ0s7a0VBQ0M7NERBQ0M7b0VBQ0M7eUVBQ0k7cUJBR1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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