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
                var proofNode = proofNodeQuery(metaLemmaNode), labelNodes = labelNodesQuery(metaLemmaNode), consequentNode = consequentNodeQuery(metaLemmaNode), suppositionNodes = suppositionNodesQuery(metaLemmaNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = _consequent.default.fromConsequentNode(consequentNode, fileContext), proof = _proof.default.fromProofNode(proofNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), substitutions = _substitutions.default.fromNothing(), metaLemma = new MetaLemma(fileContext, string, labels, suppositions, consequent, proof, substitutions);
                return metaLemma;
            }
        }
    ]);
    return MetaLemma;
}(_topLevelAssertion.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFByb29mIGZyb20gXCIuL3Byb29mXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbUxhYmVscyB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhTGVtbWEvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYS9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhTGVtbWEvc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFMZW1tYSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgKG1ldGFMZW1tYVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgYSBtZXRhLWxlbW1hLi4uYCkgOlxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRBdFRvcExldmVsID0gbGFiZWwudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIChtZXRhTGVtbWFTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCBhIG1ldGEtbGVtbWEuYCkgOlxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KG1ldGFMZW1tYU5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobWV0YUxlbW1hTm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KG1ldGFMZW1tYU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkobWV0YUxlbW1hTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJtZXRhTGVtbWFTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJ0cmFjZSIsImxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCIsImV2ZXJ5IiwibGFiZWwiLCJsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwiLCJ2ZXJpZnlBdFRvcExldmVsIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJwcm9vZlZlcmlmaWVkIiwibWV0YUxlbW1hIiwiYWRkTWV0YUxlbW1hIiwiZGVidWciLCJmcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYU5vZGUiLCJwcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiY29uc2VxdWVudE5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiTGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiQ29uc2VxdWVudCIsImZyb21Db25zZXF1ZW50Tm9kZSIsIlByb29mIiwiZnJvbVByb29mTm9kZSIsInN0cmluZ0Zyb21MYWJlbHMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJUb3BMZXZlbEFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQnFCQTs7OzREQWpCSDs0REFDQTtpRUFDSztrRUFDQzs0REFDQztvRUFDQzt5RUFDSTt5QkFFRDtxQkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxxQkFDN0JDLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQywwQkFDaENJLHdCQUF3QkYsSUFBQUEsaUJBQVUsRUFBQztBQUUxQixJQUFBLEFBQU1KLDBCQUFOO2NBQU1BO2FBQUFBLFVBQ1BPLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLGFBQWE7Z0NBRHBFYjs7Z0JBRWpCLGtCQUZpQkE7WUFFWE87WUFBYUM7WUFBUUM7WUFBUUM7WUFBY0M7WUFBWUM7O1FBRTdELE1BQUtDLGFBQWEsR0FBR0E7OztrQkFKSmI7O1lBT25CYyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGFBQWE7WUFDM0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsa0JBQWtCLElB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