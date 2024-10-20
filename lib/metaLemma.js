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
var proofNodeQuery = (0, _query.nodeQuery)("/metaLemma/proof"), labelNodesQuery = (0, _query.nodesQuery)("/metaLemma/label"), consequentNodeQuery = (0, _query.nodeQuery)("/metaLemma/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/metaLemma/supposition");
var MetaLemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(MetaLemma, TopLevelAssertion);
    function MetaLemma(fileContext, string, labels, suppositions, consequent, proof, substitutions) {
        _class_call_check(this, MetaLemma);
        var _this;
        _this = _call_super(this, MetaLemma, [
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
    _create_class(MetaLemma, [
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
                var metaLemmaString = this.string; ///
                metaLemmaString === _constants.EMPTY_STRING ? this.fileContext.trace("Verifying a meta-lemma...") : this.fileContext.trace("Verifying the '".concat(metaLemmaString, "' meta-lemma..."));
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
                                var metaLemma = this; ///
                                this.fileContext.addMetaLemma(metaLemma);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    metaLemmaString === _constants.EMPTY_STRING ? this.fileContext.debug("...verified a meta-lemma.") : this.fileContext.debug("...verified the '".concat(metaLemmaString, "' meta-lemma."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromMetaLemmaNode",
            value: function fromMetaLemmaNode(metaLemmaNode, fileContext) {
                var Label = _shim.default.Label, Proof = _shim.default.Proof, Consequent = _shim.default.Consequent, Supposition = _shim.default.Supposition, Substitutions = _shim.default.Substitutions, proofNode = proofNodeQuery(metaLemmaNode), labelNodes = labelNodesQuery(metaLemmaNode), consequentNode = consequentNodeQuery(metaLemmaNode), suppositionNodes = suppositionNodesQuery(metaLemmaNode), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = Consequent.fromConsequentNode(consequentNode, fileContext), proof = Proof.fromProofNode(proofNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), substitutions = Substitutions.fromNothing(), metaLemma = new MetaLemma(fileContext, string, labels, suppositions, consequent, proof, substitutions);
                return metaLemma;
            }
        }
    ]);
    return MetaLemma;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    MetaLemma: MetaLemma
});
var _default = MetaLemma;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbUxhYmVscyB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhTGVtbWEvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYS9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhTGVtbWEvc3VwcG9zaXRpb25cIik7XG5cbmNsYXNzIE1ldGFMZW1tYSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgKG1ldGFMZW1tYVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgYSBtZXRhLWxlbW1hLi4uYCkgOlxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCA9IGxhYmVsLnZlcmlmeVdoZW5EZWNsYXJlZCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkodGhpcy5zdWJzdGl0dXRpb25zLCB0aGlzLmNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZE1ldGFMZW1tYShtZXRhTGVtbWEpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAobWV0YUxlbW1hU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgYSBtZXRhLWxlbW1hLmApIDpcbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IExhYmVsLCBQcm9vZiwgQ29uc2VxdWVudCwgU3VwcG9zaXRpb24sIFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobWV0YUxlbW1hTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShtZXRhTGVtbWFOb2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkobWV0YUxlbW1hTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShtZXRhTGVtbWFOb2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbWV0YUxlbW1hID0gbmV3IE1ldGFMZW1tYShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTWV0YUxlbW1hXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YUxlbW1hOyJdLCJuYW1lcyI6WyJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwiTWV0YUxlbW1hIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YUxlbW1hU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCIsImV2ZXJ5IiwibGFiZWwiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwiY29uc2VxdWVudFZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsIm1ldGFMZW1tYSIsImFkZE1ldGFMZW1tYSIsImRlYnVnIiwiZnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFOb2RlIiwiTGFiZWwiLCJzaGltIiwiUHJvb2YiLCJDb25zZXF1ZW50IiwiU3VwcG9zaXRpb24iLCJTdWJzdGl0dXRpb25zIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiZnJvbVByb29mTm9kZSIsInN0cmluZ0Zyb21MYWJlbHMiLCJmcm9tTm90aGluZyIsIlRvcExldmVsQXNzZXJ0aW9uIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2R0E7OztlQUFBOzs7MkRBM0dpQjs0REFDUTt5RUFDSzt5QkFFRDtxQkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxxQkFDN0JDLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQywwQkFDaENJLHdCQUF3QkYsSUFBQUEsaUJBQVUsRUFBQztBQUV6QyxJQUFBLEFBQU1HLDBCQUFOO2NBQU1BO2FBQUFBLFVBQ1FDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLGFBQWE7Z0NBRG5GUDs7Z0JBRUYsa0JBRkVBO1lBRUlDO1lBQWFDO1lBQVFDO1lBQVFDO1lBQWNDO1lBQVlDOztRQUU3RCxNQUFLQyxhQUFhLEdBQUdBOzs7a0JBSm5CUDs7WUFPSlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGtCQUFrQixJQUFJLENBQUNULE1BQU0sRUFBRyxH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