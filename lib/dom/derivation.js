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
var stepOrSubproofNodesQuery = (0, _query.nodesQuery)("/derivation/step|subproof");
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
                var verified;
                verified = this.stepsOrSubproofs.every(function(stepOrSubproof) {
                    var assignments = [], stepOrSubproofVerified = stepOrSubproof.verify(substitutions, assignments, context);
                    if (stepOrSubproofVerified) {
                        var stepOrSubproofUnified = stepOrSubproof.unify(substitutions, context);
                        if (stepOrSubproofUnified) {
                            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                            if (assignmentsAssigned) {
                                context.addStepOrSubproof(stepOrSubproof);
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
                var stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, fileContext), derivation = new Derivation(stepsOrSubproofs);
                return derivation;
            }
        }
    ]);
    return Derivation;
}(), _define_property(_Derivation, "name", "Derivation"), _Derivation));
function stepsOrSubproofsFromDerivationNode(derivationNode, fileContext) {
    var Step = _dom.default.Step, Subproof = _dom.default.Subproof, stepOrSubproofNodes = stepOrSubproofNodesQuery(derivationNode), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9uL3N0ZXB8c3VicHJvb2ZcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlcml2YXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdGVwc09yU3VicHJvb2ZzKSB7XG4gICAgdGhpcy5zdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldExhc3RTdGVwKCkge1xuICAgIGNvbnN0IGxhc3RTdGVwT3JTdWJwcm9vZiA9IGxhc3QodGhpcy5zdGVwc09yU3VicHJvb2ZzKSxcbiAgICAgICAgICBsYXN0U3RlcCA9IGxhc3RTdGVwT3JTdWJwcm9vZjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICB2ZXJpZmllZCA9IHRoaXMuc3RlcHNPclN1YnByb29mcy5ldmVyeSgoc3RlcE9yU3VicHJvb2YpID0+IHsgLy8vXG4gICAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RlcE9yU3VicHJvb2ZWZXJpZmllZCA9IHN0ZXBPclN1YnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mVW5pZmllZCA9IHN0ZXBPclN1YnByb29mLnVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZXJpdmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGRlcml2YXRpb24gPSBuZXcgRGVyaXZhdGlvbihzdGVwc09yU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBkZXJpdmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwLCBTdWJwcm9vZiB9ID0gZG9tLFxuICAgICAgICBzdGVwT3JTdWJwcm9vZk5vZGVzID0gc3RlcE9yU3VicHJvb2ZOb2Rlc1F1ZXJ5KGRlcml2YXRpb25Ob2RlKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBsZXQgc3RlcE9yU3VicHJvb2Y7XG5cbiAgICAgICAgICBjb25zdCBzdGVwID0gU3RlcC5mcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1YnByb29mID0gU3VicHJvb2YuZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgICAgLy8vXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGVwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IHN0ZXA7ICAvLy9cbiAgICAgICAgICB9IGVsc2UgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IHN1YnByb29mOyAgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn0iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwic3RlcE9yU3VicHJvb2ZOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcE9yU3VicHJvb2YiLCJsYXN0U3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJldmVyeSIsInN0ZXBPclN1YnByb29mIiwiYXNzaWdubWVudHMiLCJzdGVwT3JTdWJwcm9vZlZlcmlmaWVkIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVkIiwidW5pZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdGVwT3JTdWJwcm9vZiIsImZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbiIsIm5hbWUiLCJTdGVwIiwiZG9tIiwiU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwibWFwIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcCIsImZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7eUJBWitCOzJEQUVmO3FCQUVXOzJCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFUixJQUFNRSwyQkFBMkJDLElBQUFBLGlCQUFVLEVBQUM7SUFFNUMsV0FBZUMsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLGdCQUFnQjtnQ0FER0Q7UUFFN0IsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7Ozs7WUFHMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCO1lBQzlCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQlQsS0FBSyxJQUFJLENBQUNNLGdCQUFnQixHQUMvQ0ksV0FBV0Qsb0JBQXFCLEdBQUc7Z0JBRXpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxPQUFPO2dCQUMzQixJQUFJQztnQkFFSkEsV0FBVyxJQUFJLENBQUNSLGdCQUFnQixDQUFDUyxLQUFLLENBQUMsU0FBQ0M7b0JBQ3RDLElBQU1DLGNBQWMsRUFBRSxFQUNoQkMseUJBQXlCRixlQUFlTCxNQUFNLENBQUNDLGVBQWVLLGFBQWFKO29CQUVqRixJQUFJSyx3QkFBd0I7d0JBQzFCLElBQU1DLHdCQUF3QkgsZUFBZUksS0FBSyxDQUFDUixlQUFlQzt3QkFFbEUsSUFBSU0sdUJBQXVCOzRCQUN6QixJQUFNRSxzQkFBc0JDLElBQUFBLDhCQUFpQixFQUFDTCxhQUFhSjs0QkFFM0QsSUFBSVEscUJBQXFCO2dDQUN2QlIsUUFBUVUsaUJBQWlCLENBQUNQO2dDQUUxQixPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFJT1UsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVDLFdBQVc7Z0JBQ25ELElBQU1wQixtQkFBbUJxQixtQ0FBbUNGLGdCQUFnQkMsY0FDdEVFLGFBQWEsSUFBSXZCLFdBQVdDO2dCQUVsQyxPQUFPc0I7WUFDVDs7OztLQVBBLDhCQUFPQyxRQUFPO0FBVWhCLFNBQVNGLG1DQUFtQ0YsY0FBYyxFQUFFQyxXQUFXO0lBQ3JFLElBQVFJLE9BQW1CQyxZQUFHLENBQXRCRCxNQUFNRSxXQUFhRCxZQUFHLENBQWhCQyxVQUNSQyxzQkFBc0IvQix5QkFBeUJ1QixpQkFDL0NuQixtQkFBbUIyQixvQkFBb0JDLEdBQUcsQ0FBQyxTQUFDQztRQUMxQyxJQUFJbkI7UUFFSixJQUFNb0IsT0FBT04sS0FBS08sc0JBQXNCLENBQUNGLG9CQUFvQlQsY0FDdkRZLFdBQVdOLFNBQVNLLHNCQUFzQixDQUFDRixvQkFBb0JUO1FBRXJFLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlVLFNBQVMsTUFBTTtZQUN4QnBCLGlCQUFpQm9CLE1BQU8sR0FBRztRQUM3QixPQUFPLElBQUlFLGFBQWEsTUFBTTtZQUM1QnRCLGlCQUFpQnNCLFVBQVcsR0FBRztRQUNqQztRQUVBLE9BQU90QjtJQUNUO0lBRU4sT0FBT1Y7QUFDVCJ9