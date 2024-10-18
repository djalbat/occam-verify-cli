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
                            if (this.proof !== null) {
                                var substitutions = _substitutions.default.fromNothing();
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
                var proofNode = proofNodeQuery(conjectureNode), labelNodes = labelNodesQuery(conjectureNode), consequentNode = consequentNodeQuery(conjectureNode), suppositionNodes = suppositionNodesQuery(conjectureNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = _consequent.default.fromConsequentNode(consequentNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = _proof.default.fromProofNode(proofNode, fileContext), conjecture = new Conjecture(fileContext, string, labels, suppositions, consequent, proof);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25qZWN0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9wcm9vZlwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb25qZWN0dXJlL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbmplY3R1cmUvc3VwcG9zaXRpb25cIik7XG5cbmNsYXNzIENvbmplY3R1cmUgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbmplY3R1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmplY3R1cmVTdHJpbmd9JyBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCA9IGxhYmVsLnZlcmlmeUF0VG9wTGV2ZWwodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgICAgICAgdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZENvbmplY3R1cmUoY29uamVjdHVyZSk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25qZWN0dXJlU3RyaW5nfScgY29uamVjdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKENvbmplY3R1cmUsIGpzb24sIGZpbGVDb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBDb25qZWN0dXJlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uamVjdHVyZTtcbiJdLCJuYW1lcyI6WyJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwiQ29uamVjdHVyZSIsInZlcmlmeSIsInZlcmlmaWVkIiwiY29uamVjdHVyZVN0cmluZyIsInN0cmluZyIsImZpbGVDb250ZXh0IiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwiLCJsYWJlbHMiLCJldmVyeSIsImxhYmVsIiwibGFiZWxWVmVyaWZpZWRBdFRvcExldmVsIiwidmVyaWZ5QXRUb3BMZXZlbCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwiY29uc2VxdWVudFZlcmlmaWVkIiwiY29uc2VxdWVudCIsInByb29mIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImNvbmplY3R1cmUiLCJhZGRDb25qZWN0dXJlIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVOb2RlIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsIkNvbnNlcXVlbnQiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzIiwiUHJvb2YiLCJmcm9tUHJvb2ZOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUdBOzs7ZUFBQTs7OzJEQW5HaUI7NERBQ0M7NERBQ0E7aUVBQ0s7a0VBQ0M7NERBQ0M7b0VBQ0M7eUVBQ0k7cUJBR1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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