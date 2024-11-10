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
var _query = require("../utilities/query");
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
var _SubDerivation;
var last = _necessary.arrayUtilities.last;
var proofStepSubproofNodesQuery = (0, _query.nodesQuery)("/subDerivation/proofStep|subproof");
var _default = (0, _dom.domAssigned)((_SubDerivation = /*#__PURE__*/ function() {
    function SubDerivation(proofStepSubproofs) {
        _class_call_check(this, SubDerivation);
        this.proofStepSubproofs = proofStepSubproofs;
    }
    _create_class(SubDerivation, [
        {
            key: "getProofStepSubproofs",
            value: function getProofStepSubproofs() {
                return this.proofStepSubproofs;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStepSubproof = last(this.proofStepSubproofs), lastProofStep = lastProofStepSubproof; ///
                return lastProofStep;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var verified;
                verified = this.proofStepSubproofs.every(function(proofStepSubproof) {
                    var proofStepSubproofVerifiedAndUnified = proofStepSubproof.verifyAndUnify(substitutions, context);
                    if (proofStepSubproofVerifiedAndUnified) {
                        return true;
                    }
                });
                return verified;
            }
        }
    ], [
        {
            key: "fromSubDerivationNode",
            value: function fromSubDerivationNode(subDerivationNode, fileContext) {
                var ProofStep = _dom.default.ProofStep, Subproof = _dom.default.Subproof, proofStepSubproofNodes = proofStepSubproofNodesQuery(subDerivationNode), proofStepSubproofs = proofStepSubproofNodes.map(function(proofStepSubproofNode) {
                    var subproof = Subproof.fromProofStepSubproofNode(proofStepSubproofNode, fileContext), proofStep = ProofStep.fromProofStepSubproofNode(proofStepSubproofNode, fileContext), proofStepSubproof = proofStep || subproof;
                    return proofStepSubproof;
                }), subDerivation = new SubDerivation(proofStepSubproofs);
                return subDerivation;
            }
        }
    ]);
    return SubDerivation;
}(), _define_property(_SubDerivation, "name", "SubDerivation"), _SubDerivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3ViRGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb29mU3RlcFN1YnByb29mTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3ViRGVyaXZhdGlvbi9wcm9vZlN0ZXB8c3VicHJvb2ZcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN1YkRlcml2YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9vZlN0ZXBTdWJwcm9vZnMpIHtcbiAgICB0aGlzLnByb29mU3RlcFN1YnByb29mcyA9IHByb29mU3RlcFN1YnByb29mcztcbiAgfVxuXG4gIGdldFByb29mU3RlcFN1YnByb29mcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXBTdWJwcm9vZiA9IGxhc3QodGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnMpLFxuICAgICAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0UHJvb2ZTdGVwU3VicHJvb2Y7ICAvLy9cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICB2ZXJpZmllZCA9IHRoaXMucHJvb2ZTdGVwU3VicHJvb2ZzLmV2ZXJ5KChwcm9vZlN0ZXBTdWJwcm9vZikgPT4geyAvLy9cbiAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mVmVyaWZpZWRBbmRVbmlmaWVkID0gcHJvb2ZTdGVwU3VicHJvb2YudmVyaWZ5QW5kVW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBTdWJwcm9vZlZlcmlmaWVkQW5kVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJEZXJpdmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFByb29mU3RlcCwgU3VicHJvb2YgfSA9IGRvbSxcbiAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzID0gcHJvb2ZTdGVwU3VicHJvb2ZOb2Rlc1F1ZXJ5KHN1YkRlcml2YXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzLm1hcCgocHJvb2ZTdGVwU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJwcm9vZiA9IFN1YnByb29mLmZyb21Qcm9vZlN0ZXBTdWJwcm9vZk5vZGUocHJvb2ZTdGVwU3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVByb29mU3RlcFN1YnByb29mTm9kZShwcm9vZlN0ZXBTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHByb29mU3RlcFN1YnByb29mID0gKHByb29mU3RlcCB8fCBzdWJwcm9vZik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24ocHJvb2ZTdGVwU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBzdWJEZXJpdmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTdWJEZXJpdmF0aW9uIiwicHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXBTdWJwcm9vZiIsImxhc3RQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInZlcmlmaWVkIiwiZXZlcnkiLCJwcm9vZlN0ZXBTdWJwcm9vZiIsInByb29mU3RlcFN1YnByb29mVmVyaWZpZWRBbmRVbmlmaWVkIiwidmVyaWZ5QW5kVW5pZnkiLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsImZpbGVDb250ZXh0IiwiUHJvb2ZTdGVwIiwiZG9tIiwiU3VicHJvb2YiLCJwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzIiwibWFwIiwicHJvb2ZTdGVwU3VicHJvb2ZOb2RlIiwic3VicHJvb2YiLCJmcm9tUHJvb2ZTdGVwU3VicHJvb2ZOb2RlIiwicHJvb2ZTdGVwIiwic3ViRGVyaXZhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O3lCQVgrQjsyREFFZjtxQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBTUUsOEJBQThCQyxJQUFBQSxpQkFBVSxFQUFDO0lBRS9DLFdBQWVDLElBQUFBLGdCQUFXLGtDQUFDO2FBQU1DLGNBQ25CQyxrQkFBa0I7Z0NBRENEO1FBRTdCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGtCQUFrQjtZQUNoQzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx3QkFBd0JULEtBQUssSUFBSSxDQUFDTSxrQkFBa0IsR0FDcERJLGdCQUFnQkQsdUJBQXdCLEdBQUc7Z0JBRWpELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxPQUFPO2dCQUMzQixJQUFJQztnQkFFSkEsV0FBVyxJQUFJLENBQUNSLGtCQUFrQixDQUFDUyxLQUFLLENBQUMsU0FBQ0M7b0JBQ3hDLElBQU1DLHNDQUFzQ0Qsa0JBQWtCRSxjQUFjLENBQUNOLGVBQWVDO29CQUU1RixJQUFJSSxxQ0FBcUM7d0JBQ3ZDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLGlCQUFpQixFQUFFQyxXQUFXO2dCQUN6RCxJQUFRQyxZQUF3QkMsWUFBRyxDQUEzQkQsV0FBV0UsV0FBYUQsWUFBRyxDQUFoQkMsVUFDYkMseUJBQXlCdkIsNEJBQTRCa0Isb0JBQ3JEZCxxQkFBcUJtQix1QkFBdUJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDL0MsSUFBTUMsV0FBV0osU0FBU0sseUJBQXlCLENBQUNGLHVCQUF1Qk4sY0FDckVTLFlBQVlSLFVBQVVPLHlCQUF5QixDQUFDRix1QkFBdUJOLGNBQ3ZFTCxvQkFBcUJjLGFBQWFGO29CQUV4QyxPQUFPWjtnQkFDVCxJQUNBZSxnQkFBZ0IsSUFBSTFCLGNBQWNDO2dCQUV4QyxPQUFPeUI7WUFDVDs7OztLQWZBLGlDQUFPQyxRQUFPIn0=