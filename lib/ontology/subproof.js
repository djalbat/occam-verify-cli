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
                var unifiesWithSatisfiesAssertion = false;
                var subproofString = this.string, satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        var Substitutions = _ontology.default.Substitutions, subproof = this, substitutions = Substitutions.fromNothing(), statementUnifies = axiom.unifySubproof(subproof, substitutions, context);
                        if (statementUnifies) {
                            var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                            if (substitutionsCompare) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3VicHJvb2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldFN1YkRlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldExhc3RTdGVwKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGxhc3RTdGVwID0gdGhpcy5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5zdXBwb3NpdGlvblN0YXRlbWVudHMsXG4gICAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGlzU3RlcCgpIHtcbiAgICBjb25zdCBzU3RlcCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHNTdGVwO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzO1xuXG4gICAgdW5pZmllcyA9IHRydWU7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICBjb25zdCBzdWJEZXJpdmF0aW9uVmVyaWZpZXMgPSB0aGlzLnN1YkRlcml2YXRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgZXF1YXRlV2l0aFN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKVxuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBzdWJwcm9vZiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZlwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHNTdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc1N0ZXBPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mTm9kZSkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc1N0ZXBPclN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gc3VicHJvb2ZOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZzsgIC8vL1xuXG4gICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihzdHJpbmcsIG5vZGUsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YkRlcml2YXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YnByb29mTm9kZS5nZXRTdWJEZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gU3ViRGVyaXZhdGlvbi5mcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN1YnByb29mIiwic3RyaW5nIiwibm9kZSIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbiIsImdldExhc3RTdGVwIiwiZ2V0U3RhdGVtZW50cyIsImxhc3RTdGVwIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsImlzU3RlcCIsInNTdGVwIiwidW5pZnkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZXMiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN1YnByb29mVmVyaWZpZXMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tTm90aGluZyIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsImV2ZXJ5Iiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YkRlcml2YXRpb25WZXJpZmllcyIsImVxdWF0ZVdpdGhTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInRyYWNlIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwiU3Vic3RpdHV0aW9ucyIsIm9udG9sb2d5Iiwic3VicHJvb2YiLCJ1bmlmeVN1YnByb29mIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsImRlYnVnIiwiZnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInNTdGVwT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJpc1N1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSIsIm5hbWUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsIlN1YkRlcml2YXRpb24iLCJzdWJEZXJpdmF0aW9uTm9kZSIsImdldFN1YkRlcml2YXRpb25Ob2RlIiwiZnJvbVN1YkRlcml2YXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7NERBQ0k7d0JBR3NCOzs7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