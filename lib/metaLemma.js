"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemma;
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
var proofNodeQuery = (0, _query.nodeQuery)("/metaLemma/proof"), labelNodesQuery = (0, _query.nodesQuery)("/metaLemma/label"), consequentNodeQuery = (0, _query.nodeQuery)("/metaLemma/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/metaLemma/supposition");
var MetaLemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(MetaLemma, TopLevelAssertion);
    function MetaLemma() {
        _class_call_check(this, MetaLemma);
        return _call_super(this, MetaLemma, arguments);
    }
    _create_class(MetaLemma, [
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var labelsString = (0, _topLevelAssertion.labelsStringFromLabels)(this.labels);
                labelsString === null ? this.fileContext.trace("Verifying a meta-emma...") : this.fileContext.trace("Verifying the '".concat(labelsString, "' meta-emma..."));
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
                                var metaLemma = this; ///
                                this.fileContext.addLemma(metaLemma);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    labelsString === null ? this.fileContext.debug("...verified a meta-emma.") : this.fileContext.debug("...verified the '".concat(labelsString, "' meta-emma."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(MetaLemma, json, fileContext);
            }
        },
        {
            key: "fromMetaLemmaNode",
            value: function fromMetaLemmaNode(metaLemmaNode, fileContext) {
                var proofNode = proofNodeQuery(metaLemmaNode), labelNodes = labelNodesQuery(metaLemmaNode), consequentNode = consequentNodeQuery(metaLemmaNode), suppositionNodes = suppositionNodesQuery(metaLemmaNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = _consequent.default.fromConsequentNode(consequentNode, fileContext), proof = _proof.default.fromProofNode(proofNode, fileContext), metaLemma = new MetaLemma(fileContext, labels, suppositions, consequent, proof);
                return metaLemma;
            }
        }
    ]);
    return MetaLemma;
}(_topLevelAssertion.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFByb29mIGZyb20gXCIuL3Byb29mXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbGFiZWxzU3RyaW5nRnJvbUxhYmVscyB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYS9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YUxlbW1hL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhTGVtbWEvY29uc2VxdWVudFwiKSxcbiAgICAgIHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YUxlbW1hL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHModGhpcy5sYWJlbHMpO1xuXG4gICAgKGxhYmVsc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIGEgbWV0YS1lbW1hLi4uYCkgOlxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIG1ldGEtZW1tYS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRBdFRvcExldmVsID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwgPSBsYWJlbC52ZXJpZnlBdFRvcExldmVsKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbnNlcXVlbnRWZXJpZmllZCA9IHRoaXMuY29uc2VxdWVudC52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRMZW1tYShtZXRhTGVtbWEpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAobGFiZWxzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIGEgbWV0YS1lbW1hLmApIDpcbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbWV0YS1lbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oTWV0YUxlbW1hLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShtZXRhTGVtbWFOb2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG1ldGFMZW1tYU5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShtZXRhTGVtbWFOb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KG1ldGFMZW1tYU5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBuZXcgTWV0YUxlbW1hKGZpbGVDb250ZXh0LCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImxhYmVsc1N0cmluZyIsImxhYmVsc1N0cmluZ0Zyb21MYWJlbHMiLCJsYWJlbHMiLCJmaWxlQ29udGV4dCIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWRBdFRvcExldmVsIiwiZXZlcnkiLCJsYWJlbCIsImxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCIsInZlcmlmeUF0VG9wTGV2ZWwiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsImNvbnNlcXVlbnQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicHJvb2ZWZXJpZmllZCIsInByb29mIiwibWV0YUxlbW1hIiwiYWRkTGVtbWEiLCJkZWJ1ZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFOb2RlIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsIkNvbnNlcXVlbnQiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJQcm9vZiIsImZyb21Qcm9vZk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBa0JxQkE7Ozs0REFoQkg7NERBQ0E7aUVBQ0s7a0VBQ0M7NERBQ0M7b0VBQ0M7eUVBQ0k7cUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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