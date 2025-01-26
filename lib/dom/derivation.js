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
var _Derivation;
var last = _necessary.arrayUtilities.last;
var proofStepSubproofNodesQuery = (0, _query.nodesQuery)("/derivation/proofStep|subproof");
var _default = (0, _dom.domAssigned)((_Derivation = /*#__PURE__*/ function() {
    function Derivation(proofStepSubproofs) {
        _class_call_check(this, Derivation);
        this.proofStepSubproofs = proofStepSubproofs;
    }
    _create_class(Derivation, [
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
            key: "fromDerivationNode",
            value: function fromDerivationNode(derivationNode, fileContext) {
                var proofStepSubproofs = proofStepSubproofsFromDerivationNode(derivationNode, fileContext), derivation = new Derivation(proofStepSubproofs);
                return derivation;
            }
        }
    ]);
    return Derivation;
}(), _define_property(_Derivation, "name", "Derivation"), _Derivation));
function proofStepSubproofsFromDerivationNode(derivationNode, fileContext) {
    var ProofStep = _dom.default.ProofStep, Subproof = _dom.default.Subproof, proofStepSubproofNodes = proofStepSubproofNodesQuery(derivationNode), proofStepSubproofs = proofStepSubproofNodes.map(function(proofStepSubproofNode) {
        var subproof = Subproof.fromProofStepSubproofNode(proofStepSubproofNode, fileContext), proofStep = ProofStep.fromProofStepSubproofNode(proofStepSubproofNode, fileContext), proofStepSubproof = proofStep || subproof;
        return proofStepSubproof;
    });
    return proofStepSubproofs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9uL3Byb29mU3RlcHxzdWJwcm9vZlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb29mU3RlcFN1YnByb29mcykge1xuICAgIHRoaXMucHJvb2ZTdGVwU3VicHJvb2ZzID0gcHJvb2ZTdGVwU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mU3RlcFN1YnByb29mcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcFN1YnByb29mID0gbGFzdCh0aGlzLnByb29mU3RlcFN1YnByb29mcyksXG4gICAgICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3RQcm9vZlN0ZXBTdWJwcm9vZjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIHZlcmlmaWVkID0gdGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnMuZXZlcnkoKHByb29mU3RlcFN1YnByb29mKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHByb29mU3RlcFN1YnByb29mVmVyaWZpZWQgPSBwcm9vZlN0ZXBTdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwU3VicHJvb2ZWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQgPSBwcm9vZlN0ZXBTdWJwcm9vZi51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcFN1YnByb29mKHByb29mU3RlcFN1YnByb29mKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVyaXZhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzID0gcHJvb2ZTdGVwU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVyaXZhdGlvbiA9IG5ldyBEZXJpdmF0aW9uKHByb29mU3RlcFN1YnByb29mcyk7XG5cbiAgICByZXR1cm4gZGVyaXZhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb29mU3RlcFN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZlN0ZXAsIFN1YnByb29mIH0gPSBkb20sXG4gICAgICAgIHByb29mU3RlcFN1YnByb29mTm9kZXMgPSBwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzUXVlcnkoZGVyaXZhdGlvbk5vZGUpLFxuICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBwcm9vZlN0ZXBTdWJwcm9vZk5vZGVzLm1hcCgocHJvb2ZTdGVwU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tUHJvb2ZTdGVwU3VicHJvb2ZOb2RlKHByb29mU3RlcFN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tUHJvb2ZTdGVwU3VicHJvb2ZOb2RlKHByb29mU3RlcFN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcFN1YnByb29mID0gKHByb29mU3RlcCB8fCBzdWJwcm9vZik7XG5cbiAgICAgICAgICByZXR1cm4gcHJvb2ZTdGVwU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZnM7XG59Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInByb29mU3RlcFN1YnByb29mTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkRlcml2YXRpb24iLCJwcm9vZlN0ZXBTdWJwcm9vZnMiLCJnZXRQcm9vZlN0ZXBTdWJwcm9vZnMiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcFN1YnByb29mIiwibGFzdFByb29mU3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJldmVyeSIsInByb29mU3RlcFN1YnByb29mIiwiYXNzaWdubWVudHMiLCJwcm9vZlN0ZXBTdWJwcm9vZlZlcmlmaWVkIiwicHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkIiwidW5pZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRQcm9vZlN0ZXBTdWJwcm9vZiIsImZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJwcm9vZlN0ZXBTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uIiwibmFtZSIsIlByb29mU3RlcCIsImRvbSIsIlN1YnByb29mIiwicHJvb2ZTdGVwU3VicHJvb2ZOb2RlcyIsIm1hcCIsInByb29mU3RlcFN1YnByb29mTm9kZSIsInN1YnByb29mIiwiZnJvbVByb29mU3RlcFN1YnByb29mTm9kZSIsInByb29mU3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7eUJBWitCOzJEQUVmO3FCQUVXOzJCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFUixJQUFNRSw4QkFBOEJDLElBQUFBLGlCQUFVLEVBQUM7SUFFL0MsV0FBZUMsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLGtCQUFrQjtnQ0FEQ0Q7UUFFN0IsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Qsa0JBQWtCO1lBQ2hDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHdCQUF3QlQsS0FBSyxJQUFJLENBQUNNLGtCQUFrQixHQUNwREksZ0JBQWdCRCx1QkFBd0IsR0FBRztnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDO2dCQUVKQSxXQUFXLElBQUksQ0FBQ1Isa0JBQWtCLENBQUNTLEtBQUssQ0FBQyxTQUFDQztvQkFDeEMsSUFBTUMsY0FBYyxFQUFFLEVBQ2hCQyw0QkFBNEJGLGtCQUFrQkwsTUFBTSxDQUFDQyxlQUFlSyxhQUFhSjtvQkFFdkYsSUFBSUssMkJBQTJCO3dCQUM3QixJQUFNQywyQkFBMkJILGtCQUFrQkksS0FBSyxDQUFDUixlQUFlQzt3QkFFeEUsSUFBSU0sMEJBQTBCOzRCQUM1QixJQUFNRSxzQkFBc0JDLElBQUFBLDhCQUFpQixFQUFDTCxhQUFhSjs0QkFFM0QsSUFBSVEscUJBQXFCO2dDQUN2QlIsUUFBUVUsb0JBQW9CLENBQUNQO2dDQUU3QixPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFJT1UsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVDLFdBQVc7Z0JBQ25ELElBQU1wQixxQkFBcUJxQixxQ0FBcUNGLGdCQUFnQkMsY0FDMUVFLGFBQWEsSUFBSXZCLFdBQVdDO2dCQUVsQyxPQUFPc0I7WUFDVDs7OztLQVBBLDhCQUFPQyxRQUFPO0FBVWhCLFNBQVNGLHFDQUFxQ0YsY0FBYyxFQUFFQyxXQUFXO0lBQ3ZFLElBQVFJLFlBQXdCQyxZQUFHLENBQTNCRCxXQUFXRSxXQUFhRCxZQUFHLENBQWhCQyxVQUNiQyx5QkFBeUIvQiw0QkFBNEJ1QixpQkFDckRuQixxQkFBcUIyQix1QkFBdUJDLEdBQUcsQ0FBQyxTQUFDQztRQUMvQyxJQUFNQyxXQUFXSixTQUFTSyx5QkFBeUIsQ0FBQ0YsdUJBQXVCVCxjQUNyRVksWUFBWVIsVUFBVU8seUJBQXlCLENBQUNGLHVCQUF1QlQsY0FDdkVWLG9CQUFxQnNCLGFBQWFGO1FBRXhDLE9BQU9wQjtJQUNUO0lBRU4sT0FBT1Y7QUFDVCJ9