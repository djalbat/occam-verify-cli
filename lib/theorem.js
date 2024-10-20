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
                            var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), proofVerified = this.proof.verify(substitutions, this.consequent, localContext);
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
                var Label = _shim.default.Label, Proof = _shim.default.Proof, Consequent = _shim.default.Consequent, Supposition = _shim.default.Supposition, proofNode = proofNodeQuery(theoremNode), labelNodes = labelNodesQuery(theoremNode), consequentNode = consequentNodeQuery(theoremNode), suppositionNodes = suppositionNodesQuery(theoremNode), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = Consequent.fromConsequentNode(consequentNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = Proof.fromProofNode(proofNode, fileContext), theorem = new Theorem(fileContext, string, labels, suppositions, consequent, proof);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aGVvcmVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3RoZW9yZW0vc3VwcG9zaXRpb25cIik7XG5cbmNsYXNzIFRoZW9yZW0gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRoZW9yZW1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhlb3JlbVN0cmluZ30nIHRoZW9yZW0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihUaGVvcmVtLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFByb29mLCBDb25zZXF1ZW50LCBTdXBwb3NpdGlvbiB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHRoZW9yZW0gPSBuZXcgVGhlb3JlbShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFRoZW9yZW1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUaGVvcmVtO1xuIl0sIm5hbWVzIjpbInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJUaGVvcmVtIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ0aGVvcmVtU3RyaW5nIiwic3RyaW5nIiwiZmlsZUNvbnRleHQiLCJ0cmFjZSIsImxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkIiwibGFiZWxzIiwiZXZlcnkiLCJsYWJlbCIsImxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJjb25zZXF1ZW50IiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlZlcmlmaWVkIiwicHJvb2YiLCJ0aGVvcmVtIiwiYWRkVGhlb3JlbSIsImRlYnVnIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tVGhlb3JlbU5vZGUiLCJ0aGVvcmVtTm9kZSIsIkxhYmVsIiwiUHJvb2YiLCJDb25zZXF1ZW50IiwiU3VwcG9zaXRpb24iLCJwcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiY29uc2VxdWVudE5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzIiwiZnJvbVByb29mTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUdBOzs7ZUFBQTs7OzJEQS9GaUI7NERBQ1E7eUVBQ0s7cUJBR1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsbUJBQzdCQyxzQkFBc0JILElBQUFBLGdC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