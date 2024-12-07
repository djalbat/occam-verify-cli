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
                var proofStepSubproofs = proofStepSubproofFromSubDerivationNode(subDerivationNode, fileContext), subDerivation = new SubDerivation(proofStepSubproofs);
                return subDerivation;
            }
        }
    ]);
    return SubDerivation;
}(), _define_property(_SubDerivation, "name", "SubDerivation"), _SubDerivation));
function proofStepSubproofFromSubDerivationNode(subDerivationNode, fileContext) {
    var ProofStep = _dom.default.ProofStep, Subproof = _dom.default.Subproof, proofStepSubproofNodes = proofStepSubproofNodesQuery(subDerivationNode), proofStepSubproofs = proofStepSubproofNodes.map(function(proofStepSubproofNode) {
        var subproof = Subproof.fromProofStepSubproofNode(proofStepSubproofNode, fileContext), proofStep = ProofStep.fromProofStepSubproofNode(proofStepSubproofNode, fileContext), proofStepSubproof = proofStep || subproof;
        return proofStepSubproof;
    });
    return proofStepSubproofs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3ViRGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb29mU3RlcFN1YnByb29mTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3ViRGVyaXZhdGlvbi9wcm9vZlN0ZXB8c3VicHJvb2ZcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN1YkRlcml2YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9vZlN0ZXBTdWJwcm9vZnMpIHtcbiAgICB0aGlzLnByb29mU3RlcFN1YnByb29mcyA9IHByb29mU3RlcFN1YnByb29mcztcbiAgfVxuXG4gIGdldFByb29mU3RlcFN1YnByb29mcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXBTdWJwcm9vZiA9IGxhc3QodGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnMpLFxuICAgICAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0UHJvb2ZTdGVwU3VicHJvb2Y7ICAvLy9cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICB2ZXJpZmllZCA9IHRoaXMucHJvb2ZTdGVwU3VicHJvb2ZzLmV2ZXJ5KChwcm9vZlN0ZXBTdWJwcm9vZikgPT4geyAvLy9cbiAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mVmVyaWZpZWRBbmRVbmlmaWVkID0gcHJvb2ZTdGVwU3VicHJvb2YudmVyaWZ5QW5kVW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBTdWJwcm9vZlZlcmlmaWVkQW5kVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJEZXJpdmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBwcm9vZlN0ZXBTdWJwcm9vZkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihwcm9vZlN0ZXBTdWJwcm9vZnMpO1xuXG4gICAgcmV0dXJuIHN1YkRlcml2YXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9vZlN0ZXBTdWJwcm9vZkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZlN0ZXAsIFN1YnByb29mIH0gPSBkb20sXG4gICAgICAgIHByb29mU3RlcFN1YnByb29mTm9kZXMgPSBwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzUXVlcnkoc3ViRGVyaXZhdGlvbk5vZGUpLFxuICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzLm1hcCgocHJvb2ZTdGVwU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tUHJvb2ZTdGVwU3VicHJvb2ZOb2RlKHByb29mU3RlcFN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tUHJvb2ZTdGVwU3VicHJvb2ZOb2RlKHByb29mU3RlcFN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcFN1YnByb29mID0gKHByb29mU3RlcCB8fCBzdWJwcm9vZik7XG5cbiAgICAgICAgICByZXR1cm4gcHJvb2ZTdGVwU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZnM7XG59Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInByb29mU3RlcFN1YnByb29mTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlN1YkRlcml2YXRpb24iLCJwcm9vZlN0ZXBTdWJwcm9vZnMiLCJnZXRQcm9vZlN0ZXBTdWJwcm9vZnMiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcFN1YnByb29mIiwibGFzdFByb29mU3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJldmVyeSIsInByb29mU3RlcFN1YnByb29mIiwicHJvb2ZTdGVwU3VicHJvb2ZWZXJpZmllZEFuZFVuaWZpZWQiLCJ2ZXJpZnlBbmRVbmlmeSIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJwcm9vZlN0ZXBTdWJwcm9vZkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb24iLCJuYW1lIiwiUHJvb2ZTdGVwIiwiZG9tIiwiU3VicHJvb2YiLCJwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzIiwibWFwIiwicHJvb2ZTdGVwU3VicHJvb2ZOb2RlIiwic3VicHJvb2YiLCJmcm9tUHJvb2ZTdGVwU3VicHJvb2ZOb2RlIiwicHJvb2ZTdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7Ozt5QkFYK0I7MkRBRWY7cUJBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUczQixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVSLElBQU1FLDhCQUE4QkMsSUFBQUEsaUJBQVUsRUFBQztJQUUvQyxXQUFlQyxJQUFBQSxnQkFBVyxrQ0FBQzthQUFNQyxjQUNuQkMsa0JBQWtCO2dDQURDRDtRQUU3QixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTs7OztZQUc1QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxrQkFBa0I7WUFDaEM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsd0JBQXdCVCxLQUFLLElBQUksQ0FBQ00sa0JBQWtCLEdBQ3BESSxnQkFBZ0JELHVCQUF3QixHQUFHO2dCQUVqRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRUMsT0FBTztnQkFDM0IsSUFBSUM7Z0JBRUpBLFdBQVcsSUFBSSxDQUFDUixrQkFBa0IsQ0FBQ1MsS0FBSyxDQUFDLFNBQUNDO29CQUN4QyxJQUFNQyxzQ0FBc0NELGtCQUFrQkUsY0FBYyxDQUFDTixlQUFlQztvQkFFNUYsSUFBSUkscUNBQXFDO3dCQUN2QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDekQsSUFBTWYscUJBQXFCZ0IsdUNBQXVDRixtQkFBbUJDLGNBQy9FRSxnQkFBZ0IsSUFBSWxCLGNBQWNDO2dCQUV4QyxPQUFPaUI7WUFDVDs7OztLQVBBLGlDQUFPQyxRQUFPO0FBVWhCLFNBQVNGLHVDQUF1Q0YsaUJBQWlCLEVBQUVDLFdBQVc7SUFDNUUsSUFBUUksWUFBd0JDLFlBQUcsQ0FBM0JELFdBQVdFLFdBQWFELFlBQUcsQ0FBaEJDLFVBQ2JDLHlCQUF5QjFCLDRCQUE0QmtCLG9CQUNyRGQscUJBQXFCc0IsdUJBQXVCQyxHQUFHLENBQUMsU0FBQ0M7UUFDL0MsSUFBTUMsV0FBV0osU0FBU0sseUJBQXlCLENBQUNGLHVCQUF1QlQsY0FDckVZLFlBQVlSLFVBQVVPLHlCQUF5QixDQUFDRix1QkFBdUJULGNBQ3ZFTCxvQkFBcUJpQixhQUFhRjtRQUV4QyxPQUFPZjtJQUNUO0lBRU4sT0FBT1Y7QUFDVCJ9