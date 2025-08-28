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
            value: function fromDerivationNode(derivationNode, context) {
                var stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context), derivation = new Derivation(stepsOrSubproofs);
                return derivation;
            }
        }
    ]);
    return Derivation;
}(), _define_property(_Derivation, "name", "Derivation"), _Derivation));
function stepsOrSubproofsFromDerivationNode(derivationNode, context) {
    var Step = _dom.default.Step, Subproof = _dom.default.Subproof, stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var stepOrSubproof;
        var step = Step.fromStepOrSubproofNode(stepOrSubproofNode, context), subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBEZXJpdmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RlcHNPclN1YnByb29mcykge1xuICAgIHRoaXMuc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBjb25zdCBsYXN0U3RlcE9yU3VicHJvb2YgPSBsYXN0KHRoaXMuc3RlcHNPclN1YnByb29mcyksXG4gICAgICAgICAgbGFzdFN0ZXAgPSBsYXN0U3RlcE9yU3VicHJvb2Y7ICAvLy9cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgdmVyaWZpZXMgPSB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMuZXZlcnkoKHN0ZXBPclN1YnByb29mKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0ZXBPclN1YnByb29mVmVyaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVyaXZhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgZGVyaXZhdGlvbiA9IG5ldyBEZXJpdmF0aW9uKHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gICAgcmV0dXJuIGRlcml2YXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCwgU3VicHJvb2YgfSA9IGRvbSxcbiAgICAgICAgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBsZXQgc3RlcE9yU3VicHJvb2Y7XG5cbiAgICAgICAgICBjb25zdCBzdGVwID0gU3RlcC5mcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdGVwOyAgLy8vXG4gICAgICAgICAgfSBlbHNlIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdWJwcm9vZjsgIC8vL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcE9yU3VicHJvb2YiLCJsYXN0U3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJldmVyeSIsInN0ZXBPclN1YnByb29mIiwiYXNzaWdubWVudHMiLCJzdGVwT3JTdWJwcm9vZlZlcmlmaWVzIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwidW5pZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdGVwT3JTdWJwcm9vZiIsImZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Ob2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb24iLCJuYW1lIiwiU3RlcCIsImRvbSIsIlN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsImdldFN0ZXBPclN1YnByb29mTm9kZXMiLCJtYXAiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwIiwiZnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozt5QkFUK0I7MkRBRWY7MkJBR2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsZ0JBQWdCO2dDQURHRDtRQUU3QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7OztZQUcxQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxnQkFBZ0I7WUFDOUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCUCxLQUFLLElBQUksQ0FBQ0ksZ0JBQWdCLEdBQy9DSSxXQUFXRCxvQkFBcUIsR0FBRztnQkFFekMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDO2dCQUVKQSxXQUFXLElBQUksQ0FBQ1IsZ0JBQWdCLENBQUNTLEtBQUssQ0FBQyxTQUFDQztvQkFDdEMsSUFBTUMsY0FBYyxFQUFFLEVBQ2hCQyx5QkFBeUJGLGVBQWVMLE1BQU0sQ0FBQ0MsZUFBZUssYUFBYUo7b0JBRWpGLElBQUlLLHdCQUF3Qjt3QkFDMUIsSUFBTUMsd0JBQXdCSCxlQUFlSSxLQUFLLENBQUNSLGVBQWVDO3dCQUVsRSxJQUFJTSx1QkFBdUI7NEJBQ3pCLElBQU1FLHNCQUFzQkMsSUFBQUEsOEJBQWlCLEVBQUNMLGFBQWFKOzRCQUUzRCxJQUFJUSxxQkFBcUI7Z0NBQ3ZCUixRQUFRVSxpQkFBaUIsQ0FBQ1A7Z0NBRTFCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQUlPVSxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWMsRUFBRVosT0FBTztnQkFDL0MsSUFBTVAsbUJBQW1Cb0IsbUNBQW1DRCxnQkFBZ0JaLFVBQ3RFYyxhQUFhLElBQUl0QixXQUFXQztnQkFFbEMsT0FBT3FCO1lBQ1Q7Ozs7S0FQQSw4QkFBT0MsUUFBTztBQVVoQixTQUFTRixtQ0FBbUNELGNBQWMsRUFBRVosT0FBTztJQUNqRSxJQUFRZ0IsT0FBbUJDLFlBQUcsQ0FBdEJELE1BQU1FLFdBQWFELFlBQUcsQ0FBaEJDLFVBQ1JDLHNCQUFzQlAsZUFBZVEsc0JBQXNCLElBQzNEM0IsbUJBQW1CMEIsb0JBQW9CRSxHQUFHLENBQUMsU0FBQ0M7UUFDMUMsSUFBSW5CO1FBRUosSUFBTW9CLE9BQU9QLEtBQUtRLHNCQUFzQixDQUFDRixvQkFBb0J0QixVQUN2RHlCLFdBQVdQLFNBQVNNLHNCQUFzQixDQUFDRixvQkFBb0J0QjtRQUVyRSxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJdUIsU0FBUyxNQUFNO1lBQ3hCcEIsaUJBQWlCb0IsTUFBTyxHQUFHO1FBQzdCLE9BQU8sSUFBSUUsYUFBYSxNQUFNO1lBQzVCdEIsaUJBQWlCc0IsVUFBVyxHQUFHO1FBQ2pDO1FBRUEsT0FBT3RCO0lBQ1Q7SUFFTixPQUFPVjtBQUNUIn0=