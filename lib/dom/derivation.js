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
var _default = (0, _dom.domAssigned)((_Derivation = /*#__PURE__*/ function() {
    function Derivation(stepsOrSubproofs) {
        _class_call_check(this, Derivation);
        this.stepsOrSubproofs = stepsOrSubproofs;
    }
    _create_class(Derivation, [
        {
            key: "getStepsOrSubproofs",
            value: function getStepsOrSubproofs() {
                return this.stepsOrSubproofs;
            }
        },
        {
            key: "getLastStep",
            value: function getLastStep() {
                var lastStepOrSubproof = last(this.stepsOrSubproofs), lastStep = lastStepOrSubproof; ///
                return lastStep;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var verifies;
                verifies = this.stepsOrSubproofs.every(function(stepOrSubproof) {
                    var assignments = [], stepOrSubproofVerifies = stepOrSubproof.verify(substitutions, assignments, context);
                    if (stepOrSubproofVerifies) {
                        var stepOrSubproofUnifies = stepOrSubproof.unify(substitutions, context);
                        if (stepOrSubproofUnifies) {
                            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                            if (assignmentsAssigned) {
                                context.addStepOrSubproof(stepOrSubproof);
                                return true;
                            }
                        }
                    }
                });
                return verifies;
            }
        }
    ], [
        {
            key: "fromDerivationNode",
            value: function fromDerivationNode(derivationNode, fileContext) {
                var stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, fileContext), derivation = new Derivation(stepsOrSubproofs);
                return derivation;
            }
        }
    ]);
    return Derivation;
}(), _define_property(_Derivation, "name", "Derivation"), _Derivation));
function stepsOrSubproofsFromDerivationNode(derivationNode, fileContext) {
    var Step = _dom.default.Step, Subproof = _dom.default.Subproof, stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var stepOrSubproof;
        var step = Step.fromStepOrSubproofNode(stepOrSubproofNode, fileContext), subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, fileContext);
        if (false) {
        ///
        } else if (step !== null) {
            stepOrSubproof = step; ///
        } else if (subproof !== null) {
            stepOrSubproof = subproof; ///
        }
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBEZXJpdmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RlcHNPclN1YnByb29mcykge1xuICAgIHRoaXMuc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBjb25zdCBsYXN0U3RlcE9yU3VicHJvb2YgPSBsYXN0KHRoaXMuc3RlcHNPclN1YnByb29mcyksXG4gICAgICAgICAgbGFzdFN0ZXAgPSBsYXN0U3RlcE9yU3VicHJvb2Y7ICAvLy9cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgdmVyaWZpZXMgPSB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMuZXZlcnkoKHN0ZXBPclN1YnByb29mKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0ZXBPclN1YnByb29mVmVyaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVyaXZhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oc3RlcHNPclN1YnByb29mcyk7XG5cbiAgICByZXR1cm4gZGVyaXZhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCwgU3VicHJvb2YgfSA9IGRvbSxcbiAgICAgICAgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBsZXQgc3RlcE9yU3VicHJvb2Y7XG5cbiAgICAgICAgICBjb25zdCBzdGVwID0gU3RlcC5mcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1YnByb29mID0gU3VicHJvb2YuZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgICAgLy8vXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGVwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IHN0ZXA7ICAvLy9cbiAgICAgICAgICB9IGVsc2UgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IHN1YnByb29mOyAgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn0iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJEZXJpdmF0aW9uIiwic3RlcHNPclN1YnByb29mcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwT3JTdWJwcm9vZiIsImxhc3RTdGVwIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImV2ZXJ5Iiwic3RlcE9yU3VicHJvb2YiLCJhc3NpZ25tZW50cyIsInN0ZXBPclN1YnByb29mVmVyaWZpZXMiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN0ZXBPclN1YnByb29mIiwiZnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbk5vZGUiLCJmaWxlQ29udGV4dCIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uIiwibmFtZSIsIlN0ZXAiLCJkb20iLCJTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mTm9kZXMiLCJnZXRTdGVwT3JTdWJwcm9vZk5vZGVzIiwibWFwIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcCIsImZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7eUJBVCtCOzJEQUVmOzJCQUdrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLGdCQUFnQjtnQ0FER0Q7UUFFN0IsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7Ozs7WUFHMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCO1lBQzlCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQlAsS0FBSyxJQUFJLENBQUNJLGdCQUFnQixHQUMvQ0ksV0FBV0Qsb0JBQXFCLEdBQUc7Z0JBRXpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxPQUFPO2dCQUMzQixJQUFJQztnQkFFSkEsV0FBVyxJQUFJLENBQUNSLGdCQUFnQixDQUFDUyxLQUFLLENBQUMsU0FBQ0M7b0JBQ3RDLElBQU1DLGNBQWMsRUFBRSxFQUNoQkMseUJBQXlCRixlQUFlTCxNQUFNLENBQUNDLGVBQWVLLGFBQWFKO29CQUVqRixJQUFJSyx3QkFBd0I7d0JBQzFCLElBQU1DLHdCQUF3QkgsZUFBZUksS0FBSyxDQUFDUixlQUFlQzt3QkFFbEUsSUFBSU0sdUJBQXVCOzRCQUN6QixJQUFNRSxzQkFBc0JDLElBQUFBLDhCQUFpQixFQUFDTCxhQUFhSjs0QkFFM0QsSUFBSVEscUJBQXFCO2dDQUN2QlIsUUFBUVUsaUJBQWlCLENBQUNQO2dDQUUxQixPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFJT1UsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVDLFdBQVc7Z0JBQ25ELElBQU1wQixtQkFBbUJxQixtQ0FBbUNGLGdCQUFnQkMsY0FDdEVFLGFBQWEsSUFBSXZCLFdBQVdDO2dCQUVsQyxPQUFPc0I7WUFDVDs7OztLQVBBLDhCQUFPQyxRQUFPO0FBVWhCLFNBQVNGLG1DQUFtQ0YsY0FBYyxFQUFFQyxXQUFXO0lBQ3JFLElBQVFJLE9BQW1CQyxZQUFHLENBQXRCRCxNQUFNRSxXQUFhRCxZQUFHLENBQWhCQyxVQUNSQyxzQkFBc0JSLGVBQWVTLHNCQUFzQixJQUMzRDVCLG1CQUFtQjJCLG9CQUFvQkUsR0FBRyxDQUFDLFNBQUNDO1FBQzFDLElBQUlwQjtRQUVKLElBQU1xQixPQUFPUCxLQUFLUSxzQkFBc0IsQ0FBQ0Ysb0JBQW9CVixjQUN2RGEsV0FBV1AsU0FBU00sc0JBQXNCLENBQUNGLG9CQUFvQlY7UUFFckUsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSVcsU0FBUyxNQUFNO1lBQ3hCckIsaUJBQWlCcUIsTUFBTyxHQUFHO1FBQzdCLE9BQU8sSUFBSUUsYUFBYSxNQUFNO1lBQzVCdkIsaUJBQWlCdUIsVUFBVyxHQUFHO1FBQ2pDO1FBRUEsT0FBT3ZCO0lBQ1Q7SUFFTixPQUFPVjtBQUNUIn0=