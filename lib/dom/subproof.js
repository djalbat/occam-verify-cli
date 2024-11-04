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
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _unification = require("../utilities/unification");
var _query = require("../utilities/query");
var _subproof = require("../utilities/subproof");
var _verification = require("../utilities/verification");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _Subproof;
var match = _necessary.arrayUtilities.match;
var subproofNodeQuery = (0, _query.nodeQuery)("/proofStep/subproof"), suppositionNodesQuery = (0, _query.nodesQuery)("/subproof/supposition"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation");
var _default = (0, _dom.domAssigned)((_Subproof = /*#__PURE__*/ function() {
    function Subproof(string, suppositions, subDerivation) {
        _class_call_check(this, Subproof);
        this.string = string;
        this.suppositions = suppositions;
        this.subDerivation = subDerivation;
    }
    _create_class(Subproof, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getSubDerivation",
            value: function getSubDerivation() {
                return this.subDerivation;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                return this.subDerivation.getLastProofStep();
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                var lastProofStep = this.getLastProofStep(), suppositionStatements = this.suppositions.map(function(supposition) {
                    var suppositionStatement = supposition.getStatement();
                    return suppositionStatement;
                }), lastProofStepStatement = lastProofStep.getStatement(), statements = _to_consumable_array(suppositionStatements).concat([
                    lastProofStepStatement
                ]);
                return statements;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified = false;
                var context = specificContext, subproofAssertion = (0, _verification.subproofAssertionFromStatement)(statement, context);
                if (subproofAssertion !== null) {
                    var subproofAssertionUnified = this.unifySubproofAssertion(subproofAssertion, substitutions, generalContext, specificContext);
                    statementUnified = subproofAssertionUnified; ///
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproofAssertion",
            value: function unifySubproofAssertion(subproofAssertion, substitutions, generalContext, specificContext) {
                var subproofAssertionUnified;
                var subproofString = this.string, subproofAssertionString = subproofAssertion.getString();
                specificContext.trace("Unifying the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof..."));
                var subproofStatements = this.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                subproofAssertionUnified = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                    var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnified = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                    if (statementUnified) {
                        return true;
                    }
                });
                if (subproofAssertionUnified) {
                    var substitutionsLength = substitutions.getLength();
                    if (substitutionsLength > 0) {
                        subproofAssertionUnified = false;
                    }
                }
                if (subproofAssertionUnified) {
                    specificContext.trace("...unified the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof."));
                }
                return subproofAssertionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var subproofVerified = false;
                var localContext = _local.default.fromContext(context); ///
                context = localContext; ///
                var suppositionsVerified = this.suppositions.every(function(supposition) {
                    var suppositionVerified = supposition.verify(context);
                    if (suppositionVerified) {
                        return true;
                    }
                });
                if (suppositionsVerified) {
                    var subDerivationVerified = this.subDerivation.verify(substitutions, context);
                    if (subDerivationVerified) {
                        subproofVerified = true;
                    }
                }
                return subproofVerified;
            }
        }
    ], [
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var subproof = null;
                var subproofNode = subproofNodeQuery(proofStepNode);
                if (subproofNode !== null) {
                    var Supposition = _dom.default.Supposition, SubDerivation = _dom.default.SubDerivation, subproofString = (0, _subproof.subproofStringFromSubproofNode)(subproofNode, fileContext), suppositionNodes = suppositionNodesQuery(subproofNode), subDerivationNode = subDerivationNodeQuery(subproofNode), string = subproofString, suppositions = suppositionNodes.map(function(suppositionNode) {
                        var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                        return supposition;
                    }), subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, fileContext);
                    subproof = new Subproof(string, suppositions, subDerivation);
                }
                return subproof;
            }
        }
    ]);
    return Subproof;
}(), _define_property(_Subproof, "name", "Subproof"), _Subproof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3VicHJvb2ZcIjtcbmltcG9ydCB7IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXAvc3VicHJvb2ZcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdWJwcm9vZiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5zdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHsgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbi5nZXRMYXN0UHJvb2ZTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXAgPSB0aGlzLmdldExhc3RQcm9vZlN0ZXAoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFzdFByb29mU3RlcFN0YXRlbWVudCA9IGxhc3RQcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50cygpO1xuXG4gICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0KGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZlwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3VwcG9zaXRpb24sIFN1YkRlcml2YXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZywgIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdWJEZXJpdmF0aW9uID0gU3ViRGVyaXZhdGlvbi5mcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgc3VicHJvb2YgPSBuZXcgU3VicHJvb2Yoc3RyaW5nLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsInN1YnByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YkRlcml2YXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlN1YnByb29mIiwic3RyaW5nIiwic3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvbiIsImdldFN0cmluZyIsImdldE5vZGUiLCJub2RlIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbiIsImdldExhc3RQcm9vZlN0ZXAiLCJnZXRTdGF0ZW1lbnRzIiwibGFzdFByb29mU3RlcCIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsImNvbnRleHQiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCIsInVuaWZ5U3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImdldExlbmd0aCIsInZlcmlmeSIsInN1YnByb29mVmVyaWZpZWQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwiZmlsZUNvbnRleHQiLCJzdWJwcm9vZiIsInN1YnByb29mTm9kZSIsIlN1cHBvc2l0aW9uIiwiZG9tIiwiU3ViRGVyaXZhdGlvbiIsInN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdWJEZXJpdmF0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7eUJBakIrQjsyREFFZjs0REFDUzsyQkFHTTtxQkFDTzt3QkFDUzs0QkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUM5QkMsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLDBCQUNuQ0MseUJBQXlCSCxJQUFBQSxnQkFBUyxFQUFDO0lBRXpDLFdBQWVJLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEaEJIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0MsSUFB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