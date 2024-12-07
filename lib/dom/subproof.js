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
                    var subproofString = (0, _subproof.subproofStringFromSubproofNode)(subproofNode, fileContext), string = subproofString, suppositions = suppositionsFromSubproofNode(subproofNode, fileContext), subDerivation = subDerivationFromSubproofNode(subproofNode, fileContext);
                    subproof = new Subproof(string, suppositions, subDerivation);
                }
                return subproof;
            }
        }
    ]);
    return Subproof;
}(), _define_property(_Subproof, "name", "Subproof"), _Subproof));
function suppositionsFromSubproofNode(subproofNode, fileContext) {
    var Supposition = _dom.default.Supposition, suppositionNodes = suppositionNodesQuery(subproofNode), suppositions = suppositionNodes.map(function(suppositionNode) {
        var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
        return supposition;
    });
    return suppositions;
}
function subDerivationFromSubproofNode(subproofNode, fileContext) {
    var SubDerivation = _dom.default.SubDerivation, subDerivationNode = subDerivationNodeQuery(subproofNode), subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, fileContext);
    return subDerivation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3VicHJvb2ZcIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Byb29mU3RlcC91bmlmeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB7YXNzaWduQXNzaWdubWVudHN9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3Qgc3VicHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2ZcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdWJwcm9vZiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5zdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHsgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbi5nZXRMYXN0UHJvb2ZTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXAgPSB0aGlzLmdldExhc3RQcm9vZlN0ZXAoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFzdFByb29mU3RlcFN0YXRlbWVudCA9IGxhc3RQcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBpc1Byb29mU3RlcCgpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXAgPSBmYWxzZTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IHRoaXM7XG5cbiAgICBjb25zdCBzdWJwcm9vZlVuaWZpZWQgPSBzdGF0ZW1lbnQudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3VicHJvb2ZVbmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBlcXVpdmFsZW5jZXMudW5pZnlTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIHVuaWZpZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHQoY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB0aGlzLnN1YkRlcml2YXRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QW5kVW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEFuZFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB0aGlzLnVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YpO1xuXG4gICAgICAgIHZlcmlmaWVkQW5kVW5pZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFuZFVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZcIjtcblxuICBzdGF0aWMgZnJvbVByb29mU3RlcFN1YnByb29mTm9kZShwcm9vZlN0ZXBTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcFN1YnByb29mTm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihzdHJpbmcsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZG9tLFxuICAgICAgICBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IFN1YkRlcml2YXRpb24uZnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb247XG59XG4iXSwibmFtZXMiOlsic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3ViRGVyaXZhdGlvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU3VicHJvb2YiLCJzdHJpbmciLCJzdXBwb3NpdGlvbnMiLCJzdWJEZXJpdmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsIm5vZGUiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0TGFzdFByb29mU3RlcCIsImdldFN0YXRlbWVudHMiLCJsYXN0UHJvb2ZTdGVwIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwiaXNQcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsImNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1YnN0aXR1dGlvbnMiLCJ1bmlmeSIsInVuaWZpZWQiLCJ2ZXJpZnkiLCJzdWJwcm9vZlZlcmlmaWVkIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb25WZXJpZmllZCIsInN1YkRlcml2YXRpb25WZXJpZmllZCIsInZlcmlmeUFuZFVuaWZ5IiwidmVyaWZpZWRBbmRVbmlmaWVkIiwidmVyaWZpZWQiLCJwcm9vZlN0ZXBTdWJwcm9vZiIsImFkZFByb29mU3RlcFN1YnByb29mIiwiZnJvbVByb29mU3RlcFN1YnByb29mTm9kZSIsInByb29mU3RlcFN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2ZOb2RlIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUiLCJuYW1lIiwiU3VwcG9zaXRpb24iLCJkb20iLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsIlN1YkRlcml2YXRpb24iLCJzdWJEZXJpdmF0aW9uTm9kZSIsImZyb21TdWJEZXJp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