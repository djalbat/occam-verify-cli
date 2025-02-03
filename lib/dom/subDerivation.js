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
var stepOrSubproofNodesQuery = (0, _query.nodesQuery)("/subDerivation/step|subproof");
var _default = (0, _dom.domAssigned)((_SubDerivation = /*#__PURE__*/ function() {
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
            key: "fromSubDerivationNode",
            value: function fromSubDerivationNode(subDerivationNode, fileContext) {
                var stepsOrSubproofs = stepOrSubproofFromSubDerivationNode(subDerivationNode, fileContext), subDerivation = new SubDerivation(stepsOrSubproofs);
                return subDerivation;
            }
        }
    ]);
    return SubDerivation;
}(), _define_property(_SubDerivation, "name", "SubDerivation"), _SubDerivation));
function stepOrSubproofFromSubDerivationNode(subDerivationNode, fileContext) {
    var Step = _dom.default.Step, Subproof = _dom.default.Subproof, stepOrSubproofNodes = stepOrSubproofNodesQuery(subDerivationNode), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, fileContext), step = Step.fromStepOrSubproofNode(stepOrSubproofNode, fileContext), stepOrSubproof = step || subproof;
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3ViRGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJEZXJpdmF0aW9uL3N0ZXB8c3VicHJvb2ZcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN1YkRlcml2YXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdGVwc09yU3VicHJvb2ZzKSB7XG4gICAgdGhpcy5zdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldExhc3RTdGVwKCkge1xuICAgIGNvbnN0IGxhc3RTdGVwT3JTdWJwcm9vZiA9IGxhc3QodGhpcy5zdGVwc09yU3VicHJvb2ZzKSxcbiAgICAgICAgICBsYXN0U3RlcCA9IGxhc3RTdGVwT3JTdWJwcm9vZjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICB2ZXJpZmllZCA9IHRoaXMuc3RlcHNPclN1YnByb29mcy5ldmVyeSgoc3RlcE9yU3VicHJvb2YpID0+IHsgLy8vXG4gICAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RlcE9yU3VicHJvb2ZWZXJpZmllZCA9IHN0ZXBPclN1YnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mVW5pZmllZCA9IHN0ZXBPclN1YnByb29mLnVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJEZXJpdmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24oc3RlcHNPclN1YnByb29mcyk7XG5cbiAgICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0ZXBPclN1YnByb29mRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAsIFN1YnByb29mIH0gPSBkb20sXG4gICAgICAgIHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzUXVlcnkoc3ViRGVyaXZhdGlvbk5vZGUpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mID0gU3VicHJvb2YuZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdGVwID0gU3RlcC5mcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn0iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwic3RlcE9yU3VicHJvb2ZOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiU3ViRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcE9yU3VicHJvb2YiLCJsYXN0U3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJldmVyeSIsInN0ZXBPclN1YnByb29mIiwiYXNzaWdubWVudHMiLCJzdGVwT3JTdWJwcm9vZlZlcmlmaWVkIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVkIiwidW5pZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdGVwT3JTdWJwcm9vZiIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJzdGVwT3JTdWJwcm9vZkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb24iLCJuYW1lIiwiU3RlcCIsImRvbSIsIlN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsIm1hcCIsInN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mIiwiZnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O3lCQVorQjsyREFFZjtxQkFFVzsyQkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBTUUsMkJBQTJCQyxJQUFBQSxpQkFBVSxFQUFDO0lBRTVDLFdBQWVDLElBQUFBLGdCQUFXLGtDQUFDO2FBQU1DLGNBQ25CQyxnQkFBZ0I7Z0NBREdEO1FBRTdCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOzs7O1lBRzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGdCQUFnQjtZQUM5Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUJULEtBQUssSUFBSSxDQUFDTSxnQkFBZ0IsR0FDL0NJLFdBQVdELG9CQUFxQixHQUFHO2dCQUV6QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRUMsT0FBTztnQkFDM0IsSUFBSUM7Z0JBRUpBLFdBQVcsSUFBSSxDQUFDUixnQkFBZ0IsQ0FBQ1MsS0FBSyxDQUFDLFNBQUNDO29CQUN0QyxJQUFNQyxjQUFjLEVBQUUsRUFDaEJDLHlCQUF5QkYsZUFBZUwsTUFBTSxDQUFDQyxlQUFlSyxhQUFhSjtvQkFFakYsSUFBSUssd0JBQXdCO3dCQUMxQixJQUFNQyx3QkFBd0JILGVBQWVJLEtBQUssQ0FBQ1IsZUFBZUM7d0JBRWxFLElBQUlNLHVCQUF1Qjs0QkFDekIsSUFBTUUsc0JBQXNCQyxJQUFBQSw4QkFBaUIsRUFBQ0wsYUFBYUo7NEJBRTNELElBQUlRLHFCQUFxQjtnQ0FDdkJSLFFBQVFVLGlCQUFpQixDQUFDUDtnQ0FFMUIsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBSU9VLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUVDLFdBQVc7Z0JBQ3pELElBQU1wQixtQkFBbUJxQixvQ0FBb0NGLG1CQUFtQkMsY0FDMUVFLGdCQUFnQixJQUFJdkIsY0FBY0M7Z0JBRXhDLE9BQU9zQjtZQUNUOzs7O0tBUEEsaUNBQU9DLFFBQU87QUFVaEIsU0FBU0Ysb0NBQW9DRixpQkFBaUIsRUFBRUMsV0FBVztJQUN6RSxJQUFRSSxPQUFtQkMsWUFBRyxDQUF0QkQsTUFBTUUsV0FBYUQsWUFBRyxDQUFoQkMsVUFDUkMsc0JBQXNCL0IseUJBQXlCdUIsb0JBQy9DbkIsbUJBQW1CMkIsb0JBQW9CQyxHQUFHLENBQUMsU0FBQ0M7UUFDMUMsSUFBTUMsV0FBV0osU0FBU0ssc0JBQXNCLENBQUNGLG9CQUFvQlQsY0FDL0RZLE9BQU9SLEtBQUtPLHNCQUFzQixDQUFDRixvQkFBb0JULGNBQ3ZEVixpQkFBa0JzQixRQUFRRjtRQUVoQyxPQUFPcEI7SUFDVDtJQUVOLE9BQU9WO0FBQ1QifQ==