"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Subproof;
    }
});
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./subDerivation"));
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
                    var subproofString = (0, _subproof.subproofStringFromSubproofNode)(subproofNode, fileContext), suppositionNodes = suppositionNodesQuery(subproofNode), subDerivationNode = subDerivationNodeQuery(subproofNode), string = subproofString, suppositions = suppositionNodes.map(function(suppositionNode) {
                        var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                        return supposition;
                    }), subDerivation = _subDerivation.default.fromSubDerivationNode(subDerivationNode, fileContext);
                    subproof = new Subproof(string, suppositions, subDerivation);
                }
                return subproof;
            }
        }
    ]);
    return Subproof;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJEZXJpdmF0aW9uIGZyb20gXCIuL3N1YkRlcml2YXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge3N1YnByb29mTm9kZUFzU3VicHJvb2ZTdHJpbmcsIHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL3N1YnByb29mXCI7XG5cbmNvbnN0IHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb25cIiksXG4gICAgICBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnByb29mIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLnN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RQcm9vZlN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcCA9IHRoaXMuZ2V0TGFzdFByb29mU3RlcCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0UHJvb2ZTdGVwU3RhdGVtZW50ID0gbGFzdFByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uc3VwcG9zaXRpb25TdGF0ZW1lbnRzLFxuICAgICAgICAgICAgbGFzdFByb29mU3RlcFN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YkRlcml2YXRpb25Ob2RlID0gc3ViRGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3VicHJvb2ZTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IFN1YkRlcml2YXRpb24uZnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHN1YnByb29mID0gbmV3IFN1YnByb29mKHN0cmluZywgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2Y7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJwcm9vZiIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwic3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvbiIsImdldFN0cmluZyIsImdldE5vZGUiLCJub2RlIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbiIsImdldExhc3RQcm9vZlN0ZXAiLCJnZXRTdGF0ZW1lbnRzIiwibGFzdFByb29mU3RlcCIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdWJwcm9vZlZlcmlmaWVkIiwiTG9jYWxDb250ZXh0IiwiZnJvbUxvY2FsQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwiZnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2YiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdWJEZXJpdmF0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsIlN1YkRlcml2YXRpb24iLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O2tFQVZHOzREQUNDO29FQUNDO3FCQUVZO3dCQUNxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBTUMsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLDBCQUNuQ0MseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLElBQUEsQUFBTUoseUJBQU47YUFBTUEsU0FDUEssTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDVCUDtRQUVqQixJQUFJLENBQUNLLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFKSlA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNDLElBQUk7WUFDbEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFlBQVk7WUFDMUI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGFBQWE7WUFDM0I7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXFCLE9BQU8sSUFBSSxDQUFDTixhQUFhLENBQUNNLGdCQUFnQjtZQUFJOzs7WUFFbkVDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNHLHdCQUF3QixJQUFJLENBQUNWLFlBQVksQ0FBQ1csR0FBRyxDQUFDLFNBQUNDO29CQUM3QyxJQUFNQyx1QkFBdUJELFlBQVlFLFlBQVk7b0JBRXJELE9BQU9EO2dCQUNULElBQ0FFLHlCQUF5Qk4sY0FBY0ssWUFBWSxJQUNuREUsYUFBYSxBQUNYLHFCQUFHTiw4QkFEUTtvQkFFWEs7aUJBQ0Q7Z0JBRVAsT0FBT0M7WUFDVDs7O1lBR0FDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQ2hDLElBQUlDLG1CQUFtQjtnQkFFdkJELGVBQWVFLGNBQVksQ0FBQ0MsZ0JBQWdCLENBQUNILGVBQWdCLEdBQUc7Z0JBRWhFLElBQU1JLHVCQUF1QixJQUFJLENBQUN2QixZQUFZLENBQUN3QixLQUFLLENBQUMsU0FBQ1o7b0JBQ3BELElBQU1hLHNCQUFzQmIsWUFBWUssTUFBTSxDQUFDRTtvQkFFL0MsSUFBSU0scUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlGLHNCQUFzQjtvQkFDeEIsSUFBTUcsd0JBQXdCLElBQUksQ0FBQ3pCLGFBQWEsQ0FBQ2dCLE1BQU0sQ0FBQ0MsZUFBZUM7b0JBRXZFLElBQUlPLHVCQUF1Qjt3QkFDekJOLG1CQUFtQjtvQkFDckI7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRUMsV0FBVztnQkFDL0MsSUFBSUMsV0FBVztnQkFFZixJQUFJRixpQkFBaUIsTUFBTTtvQkFDekIsSUFBTUcsaUJBQWlCQyxJQUFBQSx3Q0FBOEIsRUFBQ0osY0FBY0MsY0FDOURJLG1CQUFtQnRDLHNCQUFzQmlDLGVBQ3pDTSxvQkFBb0JyQyx1QkFBdUIrQixlQUMzQzdCLFNBQVNnQyxnQkFDVC9CLGVBQWVpQyxpQkFBaUJ0QixHQUFHLENBQUMsU0FBQ3dCO3dCQUNuQyxJQUFNdkIsY0FBY3dCLG9CQUFXLENBQUNDLG1CQUFtQixDQUFDRixpQkFBaUJOO3dCQUVyRSxPQUFPakI7b0JBQ1QsSUFDQVgsZ0JBQWdCcUMsc0JBQWEsQ0FBQ0MscUJBQXFCLENBQUNMLG1CQUFtQkw7b0JBRTdFQyxXQUFXLElBakZJcEMsU0FpRlNLLFFBQVFDLGNBQWNDO2dCQUNoRDtnQkFFQSxPQUFPNkI7WUFDVDs7O1dBckZtQnBDIn0=