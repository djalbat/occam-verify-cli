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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _subproof = require("./utilities/subproof");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var suppositionNodesQuery = (0, _query.nodesQuery)("/subproof/supposition"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation");
var Subproof = /*#__PURE__*/ function() {
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
            key: "verify",
            value: function verify(substitutions, localContext) {
                var subproofVerified = false;
                localContext = _local.default.fromLocalContext(localContext); ///
                var suppositionsVerified = this.suppositions.every(function(supposition) {
                    var suppositionVerified = supposition.verify(localContext);
                    if (suppositionVerified) {
                        return true;
                    }
                });
                if (suppositionsVerified) {
                    var subDerivationVerified = this.subDerivation.verify(substitutions, localContext);
                    if (subDerivationVerified) {
                        subproofVerified = true;
                    }
                }
                return subproofVerified;
            }
        }
    ], [
        {
            key: "fromSubproofNode",
            value: function fromSubproofNode(subproofNode, fileContext) {
                var subproof = null;
                if (subproofNode !== null) {
                    var Supposition = _shim.default.Supposition, SubDerivation = _shim.default.SubDerivation, subproofString = (0, _subproof.subproofStringFromSubproofNode)(subproofNode, fileContext), suppositionNodes = suppositionNodesQuery(subproofNode), subDerivationNode = subDerivationNodeQuery(subproofNode), string = subproofString, suppositions = suppositionNodes.map(function(suppositionNode) {
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
}();
Object.assign(_shim.default, {
    Subproof: Subproof
});
var _default = Subproof;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3VicHJvb2ZcIjtcblxuY29uc3Qgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvblwiKSxcbiAgICAgIHN1YkRlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvblwiKTtcblxuY2xhc3MgU3VicHJvb2Yge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldFN1YkRlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7IHJldHVybiB0aGlzLnN1YkRlcml2YXRpb24uZ2V0TGFzdFByb29mU3RlcCgpOyB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZTdGVwID0gdGhpcy5nZXRMYXN0UHJvb2ZTdGVwKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uU3RhdGVtZW50O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQgPSBsYXN0UHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5zdXBwb3NpdGlvblN0YXRlbWVudHMsXG4gICAgICAgICAgICBsYXN0UHJvb2ZTdGVwU3RhdGVtZW50XG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN1cHBvc2l0aW9uLCBTdWJEZXJpdmF0aW9uIH0gPSBzaGltLFxuICAgICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1YkRlcml2YXRpb24gPSBTdWJEZXJpdmF0aW9uLmZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihzdHJpbmcsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdWJwcm9vZlxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnByb29mO1xuIl0sIm5hbWVzIjpbInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiU3VicHJvb2YiLCJzdHJpbmciLCJzdXBwb3NpdGlvbnMiLCJzdWJEZXJpdmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsIm5vZGUiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0TGFzdFByb29mU3RlcCIsImdldFN0YXRlbWVudHMiLCJsYXN0UHJvb2ZTdGVwIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInN1YnByb29mVmVyaWZpZWQiLCJMb2NhbENvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZWQiLCJmcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwiZmlsZUNvbnRleHQiLCJzdWJwcm9vZiIsIlN1cHBvc2l0aW9uIiwic2hpbSIsIlN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdWJEZXJpdmF0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdHQTs7O2VBQUE7OzsyREF0R2lCOzREQUVRO3FCQUVhO3dCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsMEJBQ25DQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFekMsSUFBQSxBQUFNQyx5QkFBTjthQUFNQSxTQUNRQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEM0NIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSm5CSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxJQUFJO1lBQ2xCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxZQUFZO1lBQzFCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxhQUFhO1lBQzNCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFxQixPQUFPLElBQUksQ0FBQ04sYUFBYSxDQUFDTSxnQkFBZ0I7WUFBSTs7O1lBRW5FQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLElBQ3JDRyx3QkFBd0IsSUFBSSxDQUFDVixZQUFZLENBQUNXLEdBQUcsQ0FBQyxTQUFDQztvQkFDN0MsSUFBTUMsdUJBQXVCRCxZQUFZRSxZQUFZO29CQUVyRCxPQUFPRDtnQkFDVCxJQUNBRSx5QkFBeUJOLGNBQWNLLFlBQVksSUFDbkRFLGFBQWEsQUFDWCxxQkFBR04sOEJBRFE7b0JBRVhLO2lCQUNEO2dCQUVQLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxZQUFZO2dCQUNoQyxJQUFJQyxtQkFBbUI7Z0JBRXZCRCxlQUFlRSxjQUFZLENBQUNDLGdCQUFnQixDQUFDSCxlQUFnQixHQUFHO2dCQUVoRSxJQUFNSSx1QkFBdUIsSUFBSSxDQUFDdkIsWUFBWSxDQUFDd0IsS0FBSyxDQUFDLFNBQUNaO29CQUNwRCxJQUFNYSxzQkFBc0JiLFlBQVlLLE1BQU0sQ0FBQ0U7b0JBRS9DLElBQUlNLHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJRixzQkFBc0I7b0JBQ3hCLElBQU1HLHdCQUF3QixJQUFJLENBQUN6QixhQUFhLENBQUNnQixNQUFNLENBQUNDLGVBQWVDO29CQUV2RSxJQUFJTyx1QkFBdUI7d0JBQ3pCTixtQkFBbUI7b0JBQ3JCO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCQyxZQUFZLEVBQUVDLFdBQVc7Z0JBQy9DLElBQUlDLFdBQVc7Z0JBRWYsSUFBSUYsaUJBQWlCLE1BQU07b0JBQ3pCLElBQVFHLGNBQStCQyxhQUFJLENBQW5DRCxhQUFhRSxnQkFBa0JELGFBQUksQ0FBdEJDLGVBQ2ZDLGlCQUFpQkMsSUFBQUEsd0NBQThCLEVBQUNQLGNBQWNDLGNBQzlETyxtQkFBbUIxQyxzQkFBc0JrQyxlQUN6Q1Msb0JBQW9CekMsdUJBQXVCZ0MsZUFDM0M3QixTQUFTbUMsZ0JBQ1RsQyxlQUFlb0MsaUJBQWlCekIsR0FBRyxDQUFDLFNBQUMyQjt3QkFDbkMsSUFBTTFCLGNBQWNtQixZQUFZUSxtQkFBbUIsQ0FBQ0QsaUJBQWlCVDt3QkFFckUsT0FBT2pCO29CQUNULElBQ0FYLGdCQUFnQmdDLGNBQWNPLHFCQUFxQixDQUFDSCxtQkFBbUJSO29CQUU3RUMsV0FBVyxJQWpGWGhDLFNBaUZ3QkMsUUFBUUMsY0FBY0M7Z0JBQ2hEO2dCQUVBLE9BQU82QjtZQUNUOzs7V0FyRkloQzs7QUF3Rk4yQyxPQUFPQyxNQUFNLENBQUNWLGFBQUksRUFBRTtJQUNsQmxDLFVBQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9