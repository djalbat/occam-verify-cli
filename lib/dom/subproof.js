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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _subproof = require("../utilities/subproof");
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/proofStep/unify"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _assignments = require("../utilities/assignments");
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
var subproofNodeQuery = (0, _query.nodeQuery)("/subproof"), suppositionNodesQuery = (0, _query.nodesQuery)("/subproof/supposition"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation");
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
            key: "isProofStep",
            value: function isProofStep() {
                var proofStep = false;
                return proofStep;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var specificContext = context, generalContext = context, substitutions = _substitutions.default.fromNothing(), subproof = this;
                var subproofUnified = statement.unifySubproof(subproof, substitutions, generalContext, specificContext);
                statementUnified = subproofUnified; ///
                if (statementUnified) {
                    var equivalences = context.getEquivalences(), substitutionsUnified = equivalences.unifySubstitutions(substitutions);
                    statementUnified = substitutionsUnified; ///
                }
                return statementUnified;
            }
        },
        {
            key: "unify",
            value: function unify(substitutions, context) {
                var unified;
                unified = true;
                return unified;
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
        },
        {
            key: "verifyAndUnify",
            value: function verifyAndUnify(substitutions, context) {
                var verifiedAndUnified = false;
                var verified = this.verify(substitutions, context);
                if (verified) {
                    var unified = this.unify(substitutions, context);
                    if (unified) {
                        var proofStepSubproof = this; ///
                        context.addProofStepSubproof(proofStepSubproof);
                        verifiedAndUnified = true; ///
                    }
                }
                return verifiedAndUnified;
            }
        }
    ], [
        {
            key: "fromProofStepSubproofNode",
            value: function fromProofStepSubproofNode(proofStepSubproofNode, fileContext) {
                var subproof = null;
                var subproofNode = subproofNodeQuery(proofStepSubproofNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3VicHJvb2ZcIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Byb29mU3RlcC91bmlmeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB7YXNzaWduQXNzaWdubWVudHN9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3Qgc3VicHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2ZcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdWJwcm9vZiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5zdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHsgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbi5nZXRMYXN0UHJvb2ZTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXAgPSB0aGlzLmdldExhc3RQcm9vZlN0ZXAoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFzdFByb29mU3RlcFN0YXRlbWVudCA9IGxhc3RQcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBpc1Byb29mU3RlcCgpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXAgPSBmYWxzZTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IHRoaXM7XG5cbiAgICBjb25zdCBzdWJwcm9vZlVuaWZpZWQgPSBzdGF0ZW1lbnQudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3VicHJvb2ZVbmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBlcXVpdmFsZW5jZXMudW5pZnlTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIHVuaWZpZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHQoY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB0aGlzLnN1YkRlcml2YXRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QW5kVW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEFuZFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB0aGlzLnVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YpO1xuXG4gICAgICAgIHZlcmlmaWVkQW5kVW5pZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFuZFVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZcIjtcblxuICBzdGF0aWMgZnJvbVByb29mU3RlcFN1YnByb29mTm9kZShwcm9vZlN0ZXBTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcFN1YnByb29mTm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN1cHBvc2l0aW9uLCBTdWJEZXJpdmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YkRlcml2YXRpb25Ob2RlID0gc3ViRGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3VicHJvb2ZTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IFN1YkRlcml2YXRpb24uZnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHN1YnByb29mID0gbmV3IFN1YnByb29mKHN0cmluZywgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2Y7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInN1YnByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YkRlcml2YXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlN1YnByb29mIiwic3RyaW5nIiwic3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvbiIsImdldFN0cmluZyIsImdldE5vZGUiLCJub2RlIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbiIsImdldExhc3RQcm9vZlN0ZXAiLCJnZXRTdGF0ZW1lbnRzIiwibGFzdFByb29mU3RlcCIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsImlzUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN1YnByb29mIiwic3VicHJvb2ZVbmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwidW5pZnlTdWJzdGl0dXRpb25zIiwidW5pZnkiLCJ1bmlmaWVkIiwidmVyaWZ5Iiwic3VicHJvb2ZWZXJpZmllZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlBbmRVbmlmeSIsInZlcmlmaWVkQW5kVW5pZmllZCIsInZlcmlmaWVkIiwicHJvb2ZTdGVwU3VicHJvb2YiLCJhZGRQcm9vZlN0ZXBTdWJwcm9vZiIsImZyb21Qcm9vZlN0ZXBTdWJwcm9vZk5vZGUiLCJwcm9vZlN0ZXBTdWJwcm9vZk5vZGUiLCJmaWxlQ29udGV4dCIsInN1YnByb29mTm9kZSIsIlN1cHBvc2l0aW9uIiwiZG9tIiwiU3ViRGVyaXZhdGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1YkRlcml2YXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OzsyREFkZ0I7NERBQ1M7cUJBR2E7d0JBQ1M7NERBQ3ZCO29FQUNFOzJCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGNBQzlCQyx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsMEJBQ25DQyx5QkFBeUJILElBQUFBLGdCQUFTLEVBQUM7SUFFekMsV0FBZUksSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxhQUFhO2dDQURoQkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZ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