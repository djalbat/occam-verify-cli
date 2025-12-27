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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdWJEZXJpdmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3ViRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0ZXBzT3JTdWJwcm9vZnMpIHtcbiAgICB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0U3RlcHNPclN1YnByb29mcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFN0ZXBPclN1YnByb29mID0gbGFzdCh0aGlzLnN0ZXBzT3JTdWJwcm9vZnMpLFxuICAgICAgICAgIGxhc3RTdGVwID0gbGFzdFN0ZXBPclN1YnByb29mOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFN0ZXA7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIHZlcmlmaWVzID0gdGhpcy5zdGVwc09yU3VicHJvb2ZzLmV2ZXJ5KChzdGVwT3JTdWJwcm9vZikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGVwT3JTdWJwcm9vZlZlcmlmaWVzID0gc3RlcE9yU3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3RlcE9yU3VicHJvb2YudW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YkRlcml2YXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24oc3RlcHNPclN1YnByb29mcyk7XG5cbiAgICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0ZXBPclN1YnByb29mRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCwgU3VicHJvb2YgfSA9IG9udG9sb2d5LFxuICAgICAgICBzdGVwT3JTdWJwcm9vZk5vZGVzID0gc3ViRGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mID0gU3VicHJvb2YuZnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN0ZXAgPSBTdGVwLmZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IChzdGVwIHx8IHN1YnByb29mKTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN1YkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsImdldExhc3RTdGVwIiwibGFzdFN0ZXBPclN1YnByb29mIiwibGFzdFN0ZXAiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInZlcmlmaWVzIiwiZXZlcnkiLCJzdGVwT3JTdWJwcm9vZiIsImFzc2lnbm1lbnRzIiwic3RlcE9yU3VicHJvb2ZWZXJpZmllcyIsInN0ZXBPclN1YnByb29mVW5pZmllcyIsInVuaWZ5IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3RlcE9yU3VicHJvb2YiLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsInN0ZXBPclN1YnByb29mRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbiIsIm5hbWUiLCJTdGVwIiwib250b2xvZ3kiLCJTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mTm9kZXMiLCJnZXRTdGVwT3JTdWJwcm9vZk5vZGVzIiwibWFwIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2YiLCJmcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7eUJBVCtCO2dFQUVWOzJCQUdhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSxrQ0FBQzthQUFNQyxjQUNkQyxnQkFBZ0I7Z0NBREZEO1FBRXhCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOzs7O1lBRzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGdCQUFnQjtZQUM5Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUJQLEtBQUssSUFBSSxDQUFDSSxnQkFBZ0IsR0FDL0NJLFdBQVdELG9CQUFxQixHQUFHO2dCQUV6QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRUMsT0FBTztnQkFDM0IsSUFBSUM7Z0JBRUpBLFdBQVcsSUFBSSxDQUFDUixnQkFBZ0IsQ0FBQ1MsS0FBSyxDQUFDLFNBQUNDO29CQUN0QyxJQUFNQyxjQUFjLEVBQUUsRUFDaEJDLHlCQUF5QkYsZUFBZUwsTUFBTSxDQUFDQyxlQUFlSyxhQUFhSjtvQkFFakYsSUFBSUssd0JBQXdCO3dCQUMxQixJQUFNQyx3QkFBd0JILGVBQWVJLEtBQUssQ0FBQ1IsZUFBZUM7d0JBRWxFLElBQUlNLHVCQUF1Qjs0QkFDekIsSUFBTUUsc0JBQXNCQyxJQUFBQSw4QkFBaUIsRUFBQ0wsYUFBYUo7NEJBRTNELElBQUlRLHFCQUFxQjtnQ0FDdkJSLFFBQVFVLGlCQUFpQixDQUFDUDtnQ0FFMUIsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBSU9VLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUVaLE9BQU87Z0JBQ3JELElBQU1QLG1CQUFtQm9CLG9DQUFvQ0QsbUJBQW1CWixVQUMxRWMsZ0JBQWdCLElBQUl0QixjQUFjQztnQkFFeEMsT0FBT3FCO1lBQ1Q7Ozs7S0FQQSxpQ0FBT0MsUUFBTztBQVVoQixTQUFTRixvQ0FBb0NELGlCQUFpQixFQUFFWixPQUFPO0lBQ3JFLElBQVFnQixPQUFtQkMsaUJBQVEsQ0FBM0JELE1BQU1FLFdBQWFELGlCQUFRLENBQXJCQyxVQUNSQyxzQkFBc0JQLGtCQUFrQlEsc0JBQXNCLElBQzlEM0IsbUJBQW1CMEIsb0JBQW9CRSxHQUFHLENBQUMsU0FBQ0M7UUFDMUMsSUFBTUMsV0FBV0wsU0FBU00sc0JBQXNCLENBQUNGLG9CQUFvQnRCLFVBQy9EeUIsT0FBT1QsS0FBS1Esc0JBQXNCLENBQUNGLG9CQUFvQnRCLFVBQ3ZERyxpQkFBa0JzQixRQUFRRjtRQUVoQyxPQUFPcEI7SUFDVDtJQUVOLE9BQU9WO0FBQ1QifQ==