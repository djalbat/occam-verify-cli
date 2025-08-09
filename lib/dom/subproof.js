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
                var unified;
                unified = true; ///
                return unified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
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
            key: "unifySatisfiesAssertion",
            value: function unifySatisfiesAssertion(satisfiesAssertion, context) {
                var unifySatisfiesAssertion = false;
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var axiomUnconditional = axiom.isUnconditional();
                    if (!axiomUnconditional) {
                        debugger;
                    }
                }
                return unifySatisfiesAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N1YnByb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN1YnByb29mIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLnN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbi5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBsYXN0U3RlcCA9IHRoaXMuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uc3VwcG9zaXRpb25TdGF0ZW1lbnRzLFxuICAgICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBpc1N0ZXAoKSB7XG4gICAgY29uc3Qgc1N0ZXAgPSBmYWxzZTtcblxuICAgIHJldHVybiBzU3RlcDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIHVuaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dChjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllZCA9IHRoaXMuc3ViRGVyaXZhdGlvbi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21VbmNvbmRpdGlvbmFsID0gYXhpb20uaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICAgIGlmICghYXhpb21VbmNvbmRpdGlvbmFsKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc1N0ZXBPclN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc1N0ZXBPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mTm9kZSkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc1N0ZXBPclN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZzsgIC8vL1xuXG4gICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihzdHJpbmcsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1YnByb29mTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJEZXJpdmF0aW9uIH0gPSBkb20sXG4gICAgICAgIHN1YkRlcml2YXRpb25Ob2RlID0gc3VicHJvb2ZOb2RlLmdldFN1YkRlcml2YXRpb25Ob2RlKCksXG4gICAgICAgIHN1YkRlcml2YXRpb24gPSBTdWJEZXJpdmF0aW9uLmZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU3VicHJvb2YiLCJzdHJpbmciLCJzdXBwb3NpdGlvbnMiLCJzdWJEZXJpdmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsIm5vZGUiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGF0ZW1lbnRzIiwibGFzdFN0ZXAiLCJzdXBwb3NpdGlvblN0YXRlbWVudHMiLCJtYXAiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwiaXNTdGVwIiwic1N0ZXAiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllZCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3VicHJvb2ZWZXJpZmllZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZWQiLCJ1bmlmeVNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbiIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVVuY29uZGl0aW9uYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJmcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic1N0ZXBPclN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2YiLCJzdWJwcm9vZk5vZGUiLCJpc1N1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlIiwibmFtZSIsIlN1cHBvc2l0aW9uIiwiZG9tIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInN1YkRlcml2YXRpb25Ob2RlIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjs0REFDUztvRUFDQzt3QkFHcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQyxXQUFlQSxJQUFBQSxnQkFBVyw2QkFBQzthQUFNQyxTQUNuQkMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRGhCSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOzs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1B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