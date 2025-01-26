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
var _assignments = require("../utilities/assignments");
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
                    var assignments = [], proofStepSubproofVerified = proofStepSubproof.verify(substitutions, assignments, context);
                    if (proofStepSubproofVerified) {
                        var proofStepSubproofUnified = proofStepSubproof.unify(substitutions, context);
                        if (proofStepSubproofUnified) {
                            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                            if (assignmentsAssigned) {
                                context.addProofStepSubproof(proofStepSubproof);
                                return true;
                            }
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3ViRGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJEZXJpdmF0aW9uL3Byb29mU3RlcHxzdWJwcm9vZlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3ViRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb29mU3RlcFN1YnByb29mcykge1xuICAgIHRoaXMucHJvb2ZTdGVwU3VicHJvb2ZzID0gcHJvb2ZTdGVwU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mU3RlcFN1YnByb29mcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcFN1YnByb29mID0gbGFzdCh0aGlzLnByb29mU3RlcFN1YnByb29mcyksXG4gICAgICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3RQcm9vZlN0ZXBTdWJwcm9vZjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIHZlcmlmaWVkID0gdGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnMuZXZlcnkoKHByb29mU3RlcFN1YnByb29mKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHByb29mU3RlcFN1YnByb29mVmVyaWZpZWQgPSBwcm9vZlN0ZXBTdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwU3VicHJvb2ZWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQgPSBwcm9vZlN0ZXBTdWJwcm9vZi51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcFN1YnByb29mKHByb29mU3RlcFN1YnByb29mKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3ViRGVyaXZhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzID0gcHJvb2ZTdGVwU3VicHJvb2ZGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24ocHJvb2ZTdGVwU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBzdWJEZXJpdmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcHJvb2ZTdGVwU3VicHJvb2ZGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2ZTdGVwLCBTdWJwcm9vZiB9ID0gZG9tLFxuICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzID0gcHJvb2ZTdGVwU3VicHJvb2ZOb2Rlc1F1ZXJ5KHN1YkRlcml2YXRpb25Ob2RlKSxcbiAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZzID0gcHJvb2ZTdGVwU3VicHJvb2ZOb2Rlcy5tYXAoKHByb29mU3RlcFN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mID0gU3VicHJvb2YuZnJvbVByb29mU3RlcFN1YnByb29mTm9kZShwcm9vZlN0ZXBTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVByb29mU3RlcFN1YnByb29mTm9kZShwcm9vZlN0ZXBTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZiA9IChwcm9vZlN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gICAgICAgICAgcmV0dXJuIHByb29mU3RlcFN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcHJvb2ZTdGVwU3VicHJvb2ZzO1xufSJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTdWJEZXJpdmF0aW9uIiwicHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXBTdWJwcm9vZiIsImxhc3RQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInZlcmlmaWVkIiwiZXZlcnkiLCJwcm9vZlN0ZXBTdWJwcm9vZiIsImFzc2lnbm1lbnRzIiwicHJvb2ZTdGVwU3VicHJvb2ZWZXJpZmllZCIsInByb29mU3RlcFN1YnByb29mVW5pZmllZCIsInVuaWZ5IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkUHJvb2ZTdGVwU3VicHJvb2YiLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsImZpbGVDb250ZXh0IiwicHJvb2ZTdGVwU3VicHJvb2ZGcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uIiwibmFtZSIsIlByb29mU3RlcCIsImRvbSIsIlN1YnByb29mIiwicHJvb2ZTdGVwU3VicHJvb2ZOb2RlcyIsIm1hcCIsInByb29mU3RlcFN1YnByb29mTm9kZSIsInN1YnByb29mIiwiZnJvbVByb29mU3RlcFN1YnByb29mTm9kZSIsInByb29mU3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7eUJBWitCOzJEQUVmO3FCQUVXOzJCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFUixJQUFNRSw4QkFBOEJDLElBQUFBLGlCQUFVLEVBQUM7SUFFL0MsV0FBZUMsSUFBQUEsZ0JBQVcsa0NBQUM7YUFBTUMsY0FDbkJDLGtCQUFrQjtnQ0FEQ0Q7UUFFN0IsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Qsa0JBQWtCO1lBQ2hDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHdCQUF3QlQsS0FBSyxJQUFJLENBQUNNLGtCQUFrQixHQUNwREksZ0JBQWdCRCx1QkFBd0IsR0FBRztnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDO2dCQUVKQSxXQUFXLElBQUksQ0FBQ1Isa0JBQWtCLENBQUNTLEtBQUssQ0FBQyxTQUFDQztvQkFDeEMsSUFBTUMsY0FBYyxFQUFFLEVBQ2hCQyw0QkFBNEJGLGtCQUFrQkwsTUFBTSxDQUFDQyxlQUFlSyxhQUFhSjtvQkFFdkYsSUFBSUssMkJBQTJCO3dCQUM3QixJQUFNQywyQkFBMkJILGtCQUFrQkksS0FBSyxDQUFDUixlQUFlQzt3QkFFeEUsSUFBSU0sMEJBQTBCOzRCQUM1QixJQUFNRSxzQkFBc0JDLElBQUFBLDhCQUFpQixFQUFDTCxhQUFhSjs0QkFFM0QsSUFBSVEscUJBQXFCO2dDQUN2QlIsUUFBUVUsb0JBQW9CLENBQUNQO2dDQUU3QixPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFJT1UsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDekQsSUFBTXBCLHFCQUFxQnFCLHVDQUF1Q0YsbUJBQW1CQyxjQUMvRUUsZ0JBQWdCLElBQUl2QixjQUFjQztnQkFFeEMsT0FBT3NCO1lBQ1Q7Ozs7S0FQQSxpQ0FBT0MsUUFBTztBQVVoQixTQUFTRix1Q0FBdUNGLGlCQUFpQixFQUFFQyxXQUFXO0lBQzVFLElBQVFJLFlBQXdCQyxZQUFHLENBQTNCRCxXQUFXRSxXQUFhRCxZQUFHLENBQWhCQyxVQUNiQyx5QkFBeUIvQiw0QkFBNEJ1QixvQkFDckRuQixxQkFBcUIyQix1QkFBdUJDLEdBQUcsQ0FBQyxTQUFDQztRQUMvQyxJQUFNQyxXQUFXSixTQUFTSyx5QkFBeUIsQ0FBQ0YsdUJBQXVCVCxjQUNyRVksWUFBWVIsVUFBVU8seUJBQXlCLENBQUNGLHVCQUF1QlQsY0FDdkVWLG9CQUFxQnNCLGFBQWFGO1FBRXhDLE9BQU9wQjtJQUNUO0lBRU4sT0FBT1Y7QUFDVCJ9