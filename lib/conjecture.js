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
var proofNodeQuery = (0, _query.nodeQuery)("/conjecture/proof"), labelNodesQuery = (0, _query.nodesQuery)("/conjecture/label"), consequentNodeQuery = (0, _query.nodeQuery)("/conjecture/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/conjecture/supposition");
var Conjecture = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Conjecture, TopLevelAssertion);
    function Conjecture() {
        _class_call_check(this, Conjecture);
        return _call_super(this, Conjecture, arguments);
    }
    _create_class(Conjecture, [
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var conjectureString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(conjectureString, "' conjecture..."));
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
                            if (this.proof !== null) {
                                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing();
                                this.proof.verify(substitutions, this.consequent, localContext);
                            }
                            var conjecture = this; ///
                            this.fileContext.addConjecture(conjecture);
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(conjectureString, "' conjecture."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(Conjecture, json, fileContext);
            }
        },
        {
            key: "fromConjectureNode",
            value: function fromConjectureNode(conjectureNode, fileContext) {
                var Label = _shim.default.Label, Proof = _shim.default.Proof, Supposition = _shim.default.Supposition, Consequent = _shim.default.Consequent, proofNode = proofNodeQuery(conjectureNode), labelNodes = labelNodesQuery(conjectureNode), consequentNode = consequentNodeQuery(conjectureNode), suppositionNodes = suppositionNodesQuery(conjectureNode), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = Consequent.fromConsequentNode(consequentNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = Proof.fromProofNode(proofNode, fileContext), conjecture = new Conjecture(fileContext, string, labels, suppositions, consequent, proof);
                return conjecture;
            }
        }
    ]);
    return Conjecture;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Conjecture: Conjecture
});
var _default = Conjecture;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25qZWN0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb25qZWN0dXJlL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbmplY3R1cmUvc3VwcG9zaXRpb25cIik7XG5cbmNsYXNzIENvbmplY3R1cmUgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbmplY3R1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmplY3R1cmVTdHJpbmd9JyBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBsYWJlbC52ZXJpZnlXaGVuRGVjbGFyZWQodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbnNlcXVlbnRWZXJpZmllZCA9IHRoaXMuY29uc2VxdWVudC52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uamVjdHVyZVN0cmluZ30nIGNvbmplY3R1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihDb25qZWN0dXJlLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFByb29mLCBTdXBwb3NpdGlvbiwgQ29uc2VxdWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSBuZXcgQ29uamVjdHVyZShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIENvbmplY3R1cmVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25qZWN0dXJlO1xuIl0sIm5hbWVzIjpbInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJDb25qZWN0dXJlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJjb25qZWN0dXJlU3RyaW5nIiwic3RyaW5nIiwiZmlsZUNvbnRleHQiLCJ0cmFjZSIsImxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkIiwibGFiZWxzIiwiZXZlcnkiLCJsYWJlbCIsImxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsInN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImNvbmplY3R1cmUiLCJhZGRDb25qZWN0dXJlIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVOb2RlIiwiTGFiZWwiLCJQcm9vZiIsIlN1cHBvc2l0aW9uIiwiQ29uc2VxdWVudCIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJjb25zZXF1ZW50Tm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsImZyb21Db25zZXF1ZW50Tm9kZSIsInN0cmluZ0Zyb21MYWJlbHMiLCJmcm9tUHJvb2ZOb2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrR0E7OztlQUFBOzs7MkRBaEdpQjs0REFDUTt5RUFDSztxQkFHUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JB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