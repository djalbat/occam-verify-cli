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
                var localContext = _local.default.fromContext(context); ///
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
                debugger;
                return statementUnifies;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var subproofString = this.string, satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        var subproof = this, substitutions = _substitutions.default.fromNothing(), statementUnifies = axiom.unifySubproof(subproof, substitutions, context);
                        if (statementUnifies) {
                            var substitutionsMatch = satisfiesAssertion.matchSubstitutions(substitutions, context);
                            if (substitutionsMatch) {
                                unifiesWithSatisfiesAssertion = true;
                            }
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return unifiesWithSatisfiesAssertion;
            }
        }
    ], [
        {
            key: "fromStepOrSubproofNode",
            value: function fromStepOrSubproofNode(sStepOrSubproofNode, fileContext) {
                var subproof = null;
                var subproofNode = sStepOrSubproofNode.isSubproofNode();
                if (subproofNode) {
                    var subproofNode1 = sStepOrSubproofNode, suppositions = suppositionsFromSubproofNode(subproofNode1, fileContext), subDerivation = subDerivationFromSubproofNode(subproofNode1, fileContext), subproofString = (0, _subproof.subproofStringFromSubproofNode)(subproofNode1, fileContext), string = subproofString; ///
                    subproof = new Subproof(string, suppositions, subDerivation);
                }
                return subproof;
            }
        }
    ]);
    return Subproof;
}(), _define_property(_Subproof, "name", "Subproof"), _Subproof));
function suppositionsFromSubproofNode(subproofNode, fileContext) {
    var Supposition = _dom.default.Supposition, suppositionNodes = subproofNode.getSuppositionNodes(), suppositions = suppositionNodes.map(function(suppositionNode) {
        var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
        return supposition;
    });
    return suppositions;
}
function subDerivationFromSubproofNode(subproofNode, fileContext) {
    var SubDerivation = _dom.default.SubDerivation, subDerivationNode = subproofNode.getSubDerivationNode(), subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, fileContext);
    return subDerivation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N1YnByb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN1YnByb29mIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLnN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbi5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBsYXN0U3RlcCA9IHRoaXMuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uc3VwcG9zaXRpb25TdGF0ZW1lbnRzLFxuICAgICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBpc1N0ZXAoKSB7XG4gICAgY29uc3Qgc1N0ZXAgPSBmYWxzZTtcblxuICAgIHJldHVybiBzU3RlcDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcztcblxuICAgIHVuaWZpZXMgPSB0cnVlOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dChjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVzID0gdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICBzdWJwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGVxdWF0ZVdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKVxuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICBjb25zdCBzdWJwcm9vZiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gc2F0aXNmaWVzQXNzZXJ0aW9uLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZlwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHNTdGVwT3JTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHNTdGVwT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHNTdGVwT3JTdWJwcm9vZk5vZGUsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3VicHJvb2ZTdHJpbmc7ICAvLy9cblxuICAgICAgc3VicHJvb2YgPSBuZXcgU3VicHJvb2Yoc3RyaW5nLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBkb20sXG4gICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZG9tLFxuICAgICAgICBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YnByb29mTm9kZS5nZXRTdWJEZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gU3ViRGVyaXZhdGlvbi5mcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN1YnByb29mIiwic3RyaW5nIiwic3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvbiIsImdldFN0cmluZyIsImdldE5vZGUiLCJub2RlIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbiIsImdldExhc3RTdGVwIiwiZ2V0U3RhdGVtZW50cyIsImxhc3RTdGVwIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsImlzU3RlcCIsInNTdGVwIiwidW5pZnkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZXMiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN1YnByb29mVmVyaWZpZXMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsImV2ZXJ5Iiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YkRlcml2YXRpb25WZXJpZmllcyIsImVxdWF0ZVdpdGhTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInRyYWNlIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwic3VicHJvb2YiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJ1bmlmeVN1YnByb29mIiwic3Vic3RpdHV0aW9uc01hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwiZGVidWciLCJmcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic1N0ZXBPclN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2ZOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUiLCJuYW1lIiwiU3VwcG9zaXRpb24iLCJkb20iLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJTdWJEZXJpdmF0aW9uIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJnZXRTdWJEZXJpdmF0aW9uTm9kZSIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCOzREQUNTO29FQUNDO3dCQUdxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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