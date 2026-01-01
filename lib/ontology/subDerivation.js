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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _assign = require("../process/assign");
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
var _default = (0, _ontology.define)((_SubDerivation = /*#__PURE__*/ function() {
    function SubDerivation(stepsOrSubproofs) {
        _class_call_check(this, SubDerivation);
        this.stepsOrSubproofs = stepsOrSubproofs;
    }
    _create_class(SubDerivation, [
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
                            var assignmentsAssigned = (0, _assign.assignAssignments)(assignments, context);
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
            key: "fromSubDerivationNode",
            value: function fromSubDerivationNode(subDerivationNode, context) {
                var stepsOrSubproofs = stepOrSubproofFromSubDerivationNode(subDerivationNode, context), subDerivation = new SubDerivation(stepsOrSubproofs);
                return subDerivation;
            }
        }
    ]);
    return SubDerivation;
}(), _define_property(_SubDerivation, "name", "SubDerivation"), _SubDerivation));
function stepOrSubproofFromSubDerivationNode(subDerivationNode, context) {
    var Step = _ontology.default.Step, Subproof = _ontology.default.Subproof, stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, context), step = Step.fromStepOrSubproofNode(stepOrSubproofNode, context), stepOrSubproof = step || subproof;
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdWJEZXJpdmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJEZXJpdmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RlcHNPclN1YnByb29mcykge1xuICAgIHRoaXMuc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBjb25zdCBsYXN0U3RlcE9yU3VicHJvb2YgPSBsYXN0KHRoaXMuc3RlcHNPclN1YnByb29mcyksXG4gICAgICAgICAgbGFzdFN0ZXAgPSBsYXN0U3RlcE9yU3VicHJvb2Y7ICAvLy9cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgdmVyaWZpZXMgPSB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMuZXZlcnkoKHN0ZXBPclN1YnByb29mKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0ZXBPclN1YnByb29mVmVyaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3ViRGVyaXZhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihzdGVwc09yU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBzdWJEZXJpdmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcE9yU3VicHJvb2ZGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwLCBTdWJwcm9vZiB9ID0gb250b2xvZ3ksXG4gICAgICAgIHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3RlcCA9IFN0ZXAuZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn0iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3ViRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcE9yU3VicHJvb2YiLCJsYXN0U3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJldmVyeSIsInN0ZXBPclN1YnByb29mIiwiYXNzaWdubWVudHMiLCJzdGVwT3JTdWJwcm9vZlZlcmlmaWVzIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwidW5pZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdGVwT3JTdWJwcm9vZiIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Ob2RlIiwic3RlcE9yU3VicHJvb2ZGcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uIiwibmFtZSIsIlN0ZXAiLCJvbnRvbG9neSIsIlN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsImdldFN0ZXBPclN1YnByb29mTm9kZXMiLCJtYXAiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZiIsImZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozt5QkFUK0I7Z0VBRVY7c0JBR2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLGtDQUFDO2FBQU1DLGNBQ2RDLGdCQUFnQjtnQ0FERkQ7UUFFeEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7Ozs7WUFHMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCO1lBQzlCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQlAsS0FBSyxJQUFJLENBQUNJLGdCQUFnQixHQUMvQ0ksV0FBV0Qsb0JBQXFCLEdBQUc7Z0JBRXpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxPQUFPO2dCQUMzQixJQUFJQztnQkFFSkEsV0FBVyxJQUFJLENBQUNSLGdCQUFnQixDQUFDUyxLQUFLLENBQUMsU0FBQ0M7b0JBQ3RDLElBQU1DLGNBQWMsRUFBRSxFQUNoQkMseUJBQXlCRixlQUFlTCxNQUFNLENBQUNDLGVBQWVLLGFBQWFKO29CQUVqRixJQUFJSyx3QkFBd0I7d0JBQzFCLElBQU1DLHdCQUF3QkgsZUFBZUksS0FBSyxDQUFDUixlQUFlQzt3QkFFbEUsSUFBSU0sdUJBQXVCOzRCQUN6QixJQUFNRSxzQkFBc0JDLElBQUFBLHlCQUFpQixFQUFDTCxhQUFhSjs0QkFFM0QsSUFBSVEscUJBQXFCO2dDQUN2QlIsUUFBUVUsaUJBQWlCLENBQUNQO2dDQUUxQixPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFJT1UsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRVosT0FBTztnQkFDckQsSUFBTVAsbUJBQW1Cb0Isb0NBQW9DRCxtQkFBbUJaLFVBQzFFYyxnQkFBZ0IsSUFBSXRCLGNBQWNDO2dCQUV4QyxPQUFPcUI7WUFDVDs7OztLQVBBLGlDQUFPQyxRQUFPO0FBVWhCLFNBQVNGLG9DQUFvQ0QsaUJBQWlCLEVBQUVaLE9BQU87SUFDckUsSUFBUWdCLE9BQW1CQyxpQkFBUSxDQUEzQkQsTUFBTUUsV0FBYUQsaUJBQVEsQ0FBckJDLFVBQ1JDLHNCQUFzQlAsa0JBQWtCUSxzQkFBc0IsSUFDOUQzQixtQkFBbUIwQixvQkFBb0JFLEdBQUcsQ0FBQyxTQUFDQztRQUMxQyxJQUFNQyxXQUFXTCxTQUFTTSxzQkFBc0IsQ0FBQ0Ysb0JBQW9CdEIsVUFDL0R5QixPQUFPVCxLQUFLUSxzQkFBc0IsQ0FBQ0Ysb0JBQW9CdEIsVUFDdkRHLGlCQUFrQnNCLFFBQVFGO1FBRWhDLE9BQU9wQjtJQUNUO0lBRU4sT0FBT1Y7QUFDVCJ9