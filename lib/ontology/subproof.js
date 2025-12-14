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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
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
var _default = (0, _ontology.define)((_Subproof = /*#__PURE__*/ function() {
    function Subproof(string, node, suppositions, subDerivation) {
        _class_call_check(this, Subproof);
        this.string = string;
        this.node = node;
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
            key: "getLastStep",
            value: function getLastStep() {
                return this.subDerivation.getLastStep();
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                var lastStep = this.getLastStep(), suppositionStatements = this.suppositions.map(function(supposition) {
                    var suppositionStatement = supposition.getStatement();
                    return suppositionStatement;
                }), lastStepStatement = lastStep.getStatement(), statements = _to_consumable_array(suppositionStatements).concat([
                    lastStepStatement
                ]);
                return statements;
            }
        },
        {
            key: "isStep",
            value: function isStep() {
                var sStep = false;
                return sStep;
            }
        },
        {
            key: "unify",
            value: function unify(substitutions, context) {
                var unifies;
                unifies = true; ///
                return unifies;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var subproofVerifies = false;
                var localContext = _local.default.fromNothing(context); ///
                context = localContext; ///
                var suppositionsVerify = this.suppositions.every(function(supposition) {
                    var suppositionVerifies = supposition.verify(context);
                    if (suppositionVerifies) {
                        return true;
                    }
                });
                if (suppositionsVerify) {
                    var subDerivationVerifies = this.subDerivation.verify(substitutions, context);
                    if (subDerivationVerifies) {
                        subproofVerifies = true;
                    }
                }
                return subproofVerifies;
            }
        },
        {
            key: "equateWithStatement",
            value: function equateWithStatement(statement, context) {
                var statementUnifies = false;
                return statementUnifies;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiedWithSatisfiesAssertion = false;
                var subproofString = this.string, satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        var subproof = this, substitutions = _substitutions.default.fromNothing(), statementUnifies = axiom.unifySubproof(subproof, substitutions, context);
                        if (statementUnifies) {
                            var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                            if (substitutionsCompare) {
                                unifiedWithSatisfiesAssertion = true;
                            }
                        }
                    }
                }
                if (unifiedWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return unifiedWithSatisfiesAssertion;
            }
        }
    ], [
        {
            key: "fromStepOrSubproofNode",
            value: function fromStepOrSubproofNode(sStepOrSubproofNode, context) {
                var subproof = null;
                var subproofNode = sStepOrSubproofNode.isSubproofNode();
                if (subproofNode) {
                    var subproofNode1 = sStepOrSubproofNode, suppositions = suppositionsFromSubproofNode(subproofNode1, context), subDerivation = subDerivationFromSubproofNode(subproofNode1, context), subproofString = (0, _subproof.subproofStringFromSubproofNode)(subproofNode1, context), node = subproofNode1, string = subproofString; ///
                    subproof = new Subproof(string, node, suppositions, subDerivation);
                }
                return subproof;
            }
        }
    ]);
    return Subproof;
}(), _define_property(_Subproof, "name", "Subproof"), _Subproof));
function suppositionsFromSubproofNode(subproofNode, context) {
    var Supposition = _ontology.default.Supposition, suppositionNodes = subproofNode.getSuppositionNodes(), suppositions = suppositionNodes.map(function(suppositionNode) {
        var supposition = Supposition.fromSuppositionNode(suppositionNode, context);
        return supposition;
    });
    return suppositions;
}
function subDerivationFromSubproofNode(subproofNode, context) {
    var SubDerivation = _ontology.default.SubDerivation, subDerivationNode = subproofNode.getSubDerivationNode(), subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, context);
    return subDerivation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N1YnByb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLnN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbi5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBsYXN0U3RlcCA9IHRoaXMuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uc3VwcG9zaXRpb25TdGF0ZW1lbnRzLFxuICAgICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBpc1N0ZXAoKSB7XG4gICAgY29uc3Qgc1N0ZXAgPSBmYWxzZTtcblxuICAgIHJldHVybiBzU3RlcDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcztcblxuICAgIHVuaWZpZXMgPSB0cnVlOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVzID0gdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICBzdWJwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGVxdWF0ZVdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYClcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2YgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgICB1bmlmaWVkV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZWRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBPclN1YnByb29mTm9kZShzU3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHNTdGVwT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHNTdGVwT3JTdWJwcm9vZk5vZGUsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3VicHJvb2ZTdHJpbmc7ICAvLy9cblxuICAgICAgc3VicHJvb2YgPSBuZXcgU3VicHJvb2Yoc3RyaW5nLCBub2RlLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VicHJvb2ZOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJEZXJpdmF0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IFN1YkRlcml2YXRpb24uZnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdWJwcm9vZiIsInN0cmluZyIsIm5vZGUiLCJzdXBwb3NpdGlvbnMiLCJzdWJEZXJpdmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFN1cHBvc2l0aW9ucyIsImdldFN1YkRlcml2YXRpb24iLCJnZXRMYXN0U3RlcCIsImdldFN0YXRlbWVudHMiLCJsYXN0U3RlcCIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0U3RlcFN0YXRlbWVudCIsInN0YXRlbWVudHMiLCJpc1N0ZXAiLCJzU3RlcCIsInVuaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ1bmlmaWVzIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdWJwcm9vZlZlcmlmaWVzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJldmVyeSIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZXMiLCJlcXVhdGVXaXRoU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZWRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInN1YnByb29mIiwiU3Vic3RpdHV0aW9ucyIsInVuaWZ5U3VicHJvb2YiLCJzdWJzdGl0dXRpb25zQ29tcGFyZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwiZGVidWciLCJmcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic1N0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlIiwibmFtZSIsIlN1cHBvc2l0aW9uIiwib250b2xvZ3kiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJTdWJEZXJpdmF0aW9uIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJnZXRTdWJEZXJpdmF0aW9uTm9kZSIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0VBUHFCOzREQUNJO29FQUND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