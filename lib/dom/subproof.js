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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _unification = require("../utilities/unification");
var _query = require("../utilities/query");
var _subproof = require("../utilities/subproof");
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
            key: "unifySubproofAssertion",
            value: function unifySubproofAssertion(subproofAssertion, context) {
                var subproofAssertionUnified;
                var subproofString = this.string, subproofAssertionString = subproofAssertion.getString();
                context.trace("Unifying the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof..."));
                var specificContext = context, generalContext = context, substitutions = _substitutions.default.fromNothing(), subproofStatements = this.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
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
                    context.trace("...unified the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N1YnByb29mXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXAvc3VicHJvb2ZcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdWJwcm9vZiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5zdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHsgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbi5nZXRMYXN0UHJvb2ZTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXAgPSB0aGlzLmdldExhc3RQcm9vZlN0ZXAoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFzdFByb29mU3RlcFN0YXRlbWVudCA9IGxhc3RQcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mQXNzZXJ0aW9uKHN1YnByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50cygpO1xuXG4gICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2YuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dChjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllZCA9IHRoaXMuc3ViRGVyaXZhdGlvbi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZcIjtcblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN1cHBvc2l0aW9uLCBTdWJEZXJpdmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YkRlcml2YXRpb25Ob2RlID0gc3ViRGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3VicHJvb2ZTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IFN1YkRlcml2YXRpb24uZnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHN1YnByb29mID0gbmV3IFN1YnByb29mKHN0cmluZywgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2Y7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJzdWJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTdWJwcm9vZiIsInN0cmluZyIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdHJpbmciLCJnZXROb2RlIiwibm9kZSIsImdldFN1cHBvc2l0aW9ucyIsImdldFN1YkRlcml2YXRpb24iLCJnZXRMYXN0UHJvb2ZTdGVwIiwiZ2V0U3RhdGVtZW50cyIsImxhc3RQcm9vZlN0ZXAiLCJzdXBwb3NpdGlvblN0YXRlbWVudHMiLCJtYXAiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFByb29mU3RlcFN0YXRlbWVudCIsInN0YXRlbWVudHMiLCJ1bmlmeVN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb24iLCJjb250ZXh0Iiwic3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJ2ZXJpZnkiLCJzdWJwcm9vZlZlcmlmaWVkIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb25WZXJpZmllZCIsInN1YkRlcml2YXRpb25WZXJpZmllZCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2YiLCJzdWJwcm9vZk5vZGUiLCJTdXBwb3NpdGlvbiIsImRvbSIsIlN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1YkRlcml2YXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O3lCQWpCK0I7MkRBRWY7NERBQ1M7b0VBQ0M7MkJBR0s7cUJBQ087d0JBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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