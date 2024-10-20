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
var _constants = require("./constants");
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
                var lemmaString = this.string; ///
                lemmaString === _constants.EMPTY_STRING ? this.fileContext.trace("Verifying a lemma...") : this.fileContext.trace("Verifying the '".concat(lemmaString, "' lemma..."));
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
                                var lemma = this; ///
                                this.fileContext.addLemma(lemma);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    lemmaString === _constants.EMPTY_STRING ? this.fileContext.debug("...verified a lemma.") : this.fileContext.debug("...verified the '".concat(lemmaString, "' lemma."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromLemmaNode",
            value: function fromLemmaNode(lemmaNode, fileContext) {
                var Label = _shim.default.Label, Proof = _shim.default.Proof, Supposition = _shim.default.Supposition, Consequent = _shim.default.Consequent, proofNode = proofNodeQuery(lemmaNode), labelNodes = labelNodesQuery(lemmaNode), consequentNode = consequentNodeQuery(lemmaNode), suppositionNodes = suppositionNodesQuery(lemmaNode), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = Consequent.fromConsequentNode(consequentNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = Proof.fromProofNode(proofNode, fileContext), lemma = new Lemma(fileContext, string, labels, suppositions, consequent, proof);
                return lemma;
            }
        }
    ]);
    return Lemma;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Lemma: Lemma
});
var _default = Lemma;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sZW1tYS9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbGVtbWEvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2xlbW1hL3N1cHBvc2l0aW9uXCIpO1xuXG5jbGFzcyBMZW1tYSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVtbWFTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgKGxlbW1hU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyBhIGxlbW1hLi4uYCkgOlxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCA9IGxhYmVsLnZlcmlmeVdoZW5EZWNsYXJlZCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZExlbW1hKGxlbW1hKTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgKGxlbW1hU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgYSBsZW1tYS5gKSA6XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFByb29mLCBTdXBwb3NpdGlvbiwgQ29uc2VxdWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBsZW1tYSA9IG5ldyBMZW1tYShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBMZW1tYVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExlbW1hO1xuIl0sIm5hbWVzIjpbInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJMZW1tYSIsInZlcmlmeSIsInZlcmlmaWVkIiwibGVtbWFTdHJpbmciLCJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJmaWxlQ29udGV4dCIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJsYWJlbHMiLCJldmVyeSIsImxhYmVsIiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsImNvbnNlcXVlbnQiLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsInN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mVmVyaWZpZWQiLCJwcm9vZiIsImxlbW1hIiwiYWRkTGVtbWEiLCJkZWJ1ZyIsImZyb21MZW1tYU5vZGUiLCJsZW1tYU5vZGUiLCJMYWJlbCIsIlByb29mIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW50IiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwic3RyaW5nRnJvbUxhYmVscyIsImZyb21Qcm9vZk5vZGUiLCJUb3BMZXZlbEFzc2VydGlvbiIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0dBOzs7ZUFBQTs7OzJEQWxHaUI7NERBQ1E7eUVBQ0s7eUJBRUQ7cUJBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsaUJBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsaUJBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMsc0JBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFekMsSUFBQSxBQUFNRyxzQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxjQUFjLElBQUksQ0FBQ0MsTUFBTSxFQUFHLEdBQUc7Z0JBRXBDRCxnQkFBZ0JFLHVCQUFZLEdBQzNCLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxLQUFLLENBQUUsMEJBQ3RCLElBQUksQ0FBQ0QsV0FBVyxDQUFDQyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkosYUFBWTtnQkFFekQsSUFBTUssNkJBQTZCLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsU0FBQ0M7b0JBQ3BELElBQU1DLDZCQUE2QkQsTUFBTUUsa0JBQWtCLENBQUMsTUFBS1AsV0FBVztvQkFFNUUsSUFBSU0sNEJBQTRCO3dCQUM5QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlKLDRCQUE0QjtvQkFDOUIsSUFBTU0sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUMsSUFBSSxDQUFDVixXQUFXLEdBQzVEVyx1QkFBdUIsSUFBSSxDQUFDQyxZQUFZLENBQUNSLEtBQUssQ0FBQyxTQUFDUzt3QkFDOUMsSUFBTUMsc0JBQXNCRCxZQUFZbEIsTUFBTSxDQUFDYTt3QkFFL0MsSUFBSU0scUJBQXFCOzRCQUN2QixPQUFPO3dCQUNUO29CQUNGO29CQUVOLElBQUlILHNCQUFzQjt3QkFDeEIsSUFBTUkscUJBQXFCLElBQUksQ0FBQ0MsVUFBVSxDQUFDckIsTUFBTSxDQUFDYTt3QkFFbEQsSUFBSU8sb0JBQW9COzRCQUN0QixJQUFNLEFBQUVFLGdCQUFrQkMsYUFBSSxDQUF0QkQsZUFDRkUsZ0JBQWdCRixjQUFjRyxXQUFXLElBQ3pDQyxnQkFBZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUMzQixNQUFNLENBQUN3QixlQUFlLElBQUksQ0FBQ0gsVUFBVSxFQUFFUjs0QkFFeEUsSUFBSWEsZUFBZTtnQ0FDakIsSUFBTUUsUUFBUSxJQUFJLEVBQUcsR0FBRztnQ0FFeEIsSUFBSSxDQUFDdkIsV0FBVyxDQUFDd0IsUUFBUSxDQUFDRDtnQ0FFMUIzQixXQUFXOzRCQUNiO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1hDLGdCQUFnQkUsdUJBQVksR0FDM0IsSUFBSSxDQUFDQyxXQUFXLENBQUN5QixLQUFLLENBQUUsMEJBQ3RCLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQ3lCLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaNUIsYUFBWTtnQkFDN0Q7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPOEIsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFM0IsV0FBVztnQkFDekMsSUFBUTRCLFFBQTBDVixhQUFJLENBQTlDVSxPQUFPQyxRQUFtQ1gsYUFBSSxDQUF2Q1csT0FBT0MsY0FBNEJaLGFBQUksQ0FBaENZLGFBQWFDLGFBQWViLGFBQUksQ0FBbkJhLFlBQzdCQyxZQUFZNUMsZUFBZXVDLFlBQzNCTSxhQUFhM0MsZ0JBQWdCcUMsWUFDN0JPLGlCQUFpQjFDLG9CQUFvQm1DLFlBQ3JDUSxtQkFBbUIxQyxzQkFBc0JrQyxZQUN6Q3hCLFNBQVM4QixXQUFXRyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3ZCLElBQU1oQyxRQUFRdUIsTUFBTVUsYUFBYSxDQUFDRCxXQUFXckM7b0JBRTdDLE9BQU9LO2dCQUNULElBQ0FPLGVBQWV1QixpQkFBaUJDLEdBQUcsQ0FBQyxTQUFDRztvQkFDbkMsSUFBTTFCLGNBQWNpQixZQUFZVSxtQkFBbUIsQ0FBQ0QsaUJBQWlCdkM7b0JBRXJFLE9BQU9hO2dCQUNULElBQ0FHLGFBQWFlLFdBQVdVLGtCQUFrQixDQUFDUCxnQkFBZ0JsQyxjQUMzREYsU0FBUzRDLElBQUFBLG1DQUFnQixFQUFDdkMsU0FDMUJtQixRQUFRTyxNQUFNYyxhQUFhLENBQUNYLFdBQVdoQyxjQUN2Q3VCLFFBQVEsSUEzRVo3QixNQTJFc0JNLGFBQWFGLFFBQVFLLFFBQVFTLGNBQWNJLFlBQVlNO2dCQUUvRSxPQUFPQztZQUNUOzs7V0E5RUk3QjtFQUFja0QsMEJBQWlCO0FBaUZyQ0MsT0FBT0MsTUFBTSxDQUFDNUIsYUFBSSxFQUFFO0lBQ2xCeEIsT0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=