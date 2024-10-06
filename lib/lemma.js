"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Lemma;
    }
});
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
var proofNodeQuery = (0, _query.nodeQuery)("/lemma/proof"), labelNodesQuery = (0, _query.nodesQuery)("/lemma/label"), consequentNodeQuery = (0, _query.nodeQuery)("/lemma/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/lemma/supposition");
var Lemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Lemma, TopLevelAssertion);
    function Lemma() {
        _class_call_check(this, Lemma);
        return _call_super(this, Lemma, arguments);
    }
    _create_class(Lemma, [
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var labelsString = (0, _topLevelAssertion.labelsStringFromLabels)(this.labels);
                labelsString === null ? this.fileContext.trace("Verifying a lemma...") : this.fileContext.trace("Verifying the '".concat(labelsString, "' lemma..."));
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
                                var lemma = this; ///
                                this.fileContext.addLemma(lemma);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    labelsString === null ? this.fileContext.debug("...verified a lemma.") : this.fileContext.debug("...verified the '".concat(labelsString, "' lemma."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(Lemma, json, fileContext);
            }
        },
        {
            key: "fromLemmaNode",
            value: function fromLemmaNode(lemmaNode, fileContext) {
                var proofNode = proofNodeQuery(lemmaNode), labelNodes = labelNodesQuery(lemmaNode), consequentNode = consequentNodeQuery(lemmaNode), suppositionNodes = suppositionNodesQuery(lemmaNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = _consequent.default.fromConsequentNode(consequentNode, fileContext), proof = _proof.default.fromProofNode(proofNode, fileContext), lemma = new Lemma(fileContext, labels, suppositions, consequent, proof);
                return lemma;
            }
        }
    ]);
    return Lemma;
}(_topLevelAssertion.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgUHJvb2YgZnJvbSBcIi4vcHJvb2ZcIjtcbmltcG9ydCBDb25zZXF1ZW50IGZyb20gXCIuL2NvbnNlcXVlbnRcIjtcbmltcG9ydCBTdXBwb3NpdGlvbiBmcm9tIFwiLi9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWEvcHJvb2ZcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2xlbW1hL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sZW1tYS9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sZW1tYS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHModGhpcy5sYWJlbHMpO1xuXG4gICAgKGxhYmVsc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIGEgbGVtbWEuLi5gKSA6XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbGVtbWEuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRBdFRvcExldmVsID0gbGFiZWwudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRMZW1tYShsZW1tYSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIChsYWJlbHNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgYSBsZW1tYS5gKSA6XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oTGVtbWEsIGpzb24sIGZpbGVDb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGxlbW1hID0gbmV3IExlbW1hKGZpbGVDb250ZXh0LCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGVtbWEiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwidmVyaWZ5IiwidmVyaWZpZWQiLCJsYWJlbHNTdHJpbmciLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIiwibGFiZWxzIiwiZmlsZUNvbnRleHQiLCJ0cmFjZSIsImxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCIsImV2ZXJ5IiwibGFiZWwiLCJsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwiLCJ2ZXJpZnlBdFRvcExldmVsIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJjb25zZXF1ZW50Iiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mVmVyaWZpZWQiLCJwcm9vZiIsImxlbW1hIiwiYWRkTGVtbWEiLCJkZWJ1ZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUxlbW1hTm9kZSIsImxlbW1hTm9kZSIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJjb25zZXF1ZW50Tm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJMYWJlbCIsImZyb21MYWJlbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJDb25zZXF1ZW50IiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiUHJvb2YiLCJmcm9tUHJvb2ZOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWtCcUJBOzs7NERBaEJIOzREQUNBO2lFQUNLO2tFQUNDOzREQUNDO29FQUNDO3lFQUNJO3FCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEMs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