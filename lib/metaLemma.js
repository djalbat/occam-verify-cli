"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return MetaLemma;
    },
    substitutionsToSubstitutionsJSON: function() {
        return substitutionsToSubstitutionsJSON;
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
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _topLevelAssertion.labelsToLabelJSON)(this.labels), suppositionsJSON = (0, _topLevelAssertion.suppositionsToSuppositionsJSON)(this.suppositions), consequentJSON = this.consequent.toJSON(), substitutionsJSON = substitutionsToSubstitutionsJSON(this.substitutions), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequent: consequent,
                    substitutions: substitutions
                };
                return json;
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
function substitutionsToSubstitutionsJSON(substitutions) {
    var substitutionsJSON = substitutions.map(function(substitution) {
        var substitutionJSON = substitution.toJSON();
        return substitutionJSON;
    });
    return substitutionsJSON;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFByb29mIGZyb20gXCIuL3Byb29mXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzLCBsYWJlbHNUb0xhYmVsSlNPTiwgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhTGVtbWEvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYS9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhTGVtbWEvc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFMZW1tYSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgKG1ldGFMZW1tYVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgYSBtZXRhLWxlbW1hLi4uYCkgOlxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRBdFRvcExldmVsID0gbGFiZWwudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIChtZXRhTGVtbWFTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCBhIG1ldGEtbGVtbWEuYCkgOlxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbEpTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gdGhpcy5jb25zZXF1ZW50LnRvSlNPTigpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KG1ldGFMZW1tYU5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobWV0YUxlbW1hTm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KG1ldGFMZW1tYU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkobWV0YUxlbW1hTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG4iXSwibmFtZXMiOlsiTWV0YUxlbW1hIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YUxlbW1hU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwiLCJldmVyeSIsImxhYmVsIiwibGFiZWxWVmVyaWZpZWRBdFRvcExldmVsIiwidmVyaWZ5QXRUb3BMZXZlbCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwiY29uc2VxdWVudFZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsIm1ldGFMZW1tYSIsImFkZE1ldGFMZW1tYSIsImRlYnVnIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxKU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsImNvbnNlcXVlbnRKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFOb2RlIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsIkNvbnNlcXVlbnQiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJQcm9vZiIsImZyb21Qcm9vZk5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBbUJxQkE7O0lBNEdMQyxnQ0FBZ0M7ZUFBaENBOzs7NERBN0hFOzREQUNBO2lFQUNLO2tFQUNDOzREQUNDO29FQUNDO3lFQUNJO3lCQUVEO3FCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLHFCQUM3QkMsc0JBQXNCSCxJQUFBQSxnQkFBUyxFQUFDLDBCQUNoQ0ksd0JBQXdCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFCLElBQUEsQUFBTUwsMEJBQU47Y0FBTUE7YUFBQUEsVUFDUFEsV0FBVyxFQUFFQyxN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