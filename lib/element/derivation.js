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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var _default = (0, _elements.define)((_Derivation = /*#__PURE__*/ function() {
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
                            var assignmentsAssigned = (0, _assign.default)(assignments, context);
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
    var Step = _elements.default.Step, Subproof = _elements.default.Subproof, stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0ZXBzT3JTdWJwcm9vZnMpIHtcbiAgICB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0U3RlcHNPclN1YnByb29mcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFN0ZXBPclN1YnByb29mID0gbGFzdCh0aGlzLnN0ZXBzT3JTdWJwcm9vZnMpLFxuICAgICAgICAgIGxhc3RTdGVwID0gbGFzdFN0ZXBPclN1YnByb29mOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFN0ZXA7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIHZlcmlmaWVzID0gdGhpcy5zdGVwc09yU3VicHJvb2ZzLmV2ZXJ5KChzdGVwT3JTdWJwcm9vZikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGVwT3JTdWJwcm9vZlZlcmlmaWVzID0gc3RlcE9yU3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3RlcE9yU3VicHJvb2YudW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlcml2YXRpb25cIjtcblxuICBzdGF0aWMgZnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGRlcml2YXRpb24gPSBuZXcgRGVyaXZhdGlvbihzdGVwc09yU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBkZXJpdmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAsIFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBsZXQgc3RlcE9yU3VicHJvb2Y7XG5cbiAgICAgICAgICBjb25zdCBzdGVwID0gU3RlcC5mcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdGVwOyAgLy8vXG4gICAgICAgICAgfSBlbHNlIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdWJwcm9vZjsgIC8vL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsImdldExhc3RTdGVwIiwibGFzdFN0ZXBPclN1YnByb29mIiwibGFzdFN0ZXAiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInZlcmlmaWVzIiwiZXZlcnkiLCJzdGVwT3JTdWJwcm9vZiIsImFzc2lnbm1lbnRzIiwic3RlcE9yU3VicHJvb2ZWZXJpZmllcyIsInN0ZXBPclN1YnByb29mVW5pZmllcyIsInVuaWZ5IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3RlcE9yU3VicHJvb2YiLCJmcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uIiwibmFtZSIsIlN0ZXAiLCJlbGVtZW50cyIsIlN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsImdldFN0ZXBPclN1YnByb29mTm9kZXMiLCJtYXAiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwIiwiZnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozt5QkFUK0I7Z0VBRVY7NkRBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0sK0JBQUM7YUFBTUMsV0FDZEMsZ0JBQWdCO2dDQURGRDtRQUV4QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7OztZQUcxQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxnQkFBZ0I7WUFDOUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCUCxLQUFLLElBQUksQ0FBQ0ksZ0JBQWdCLEdBQy9DSSxXQUFXRCxvQkFBcUIsR0FBRztnQkFFekMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDO2dCQUVKQSxXQUFXLElBQUksQ0FBQ1IsZ0JBQWdCLENBQUNTLEtBQUssQ0FBQyxTQUFDQztvQkFDdEMsSUFBTUMsY0FBYyxFQUFFLEVBQ2hCQyx5QkFBeUJGLGVBQWVMLE1BQU0sQ0FBQ0MsZUFBZUssYUFBYUo7b0JBRWpGLElBQUlLLHdCQUF3Qjt3QkFDMUIsSUFBTUMsd0JBQXdCSCxlQUFlSSxLQUFLLENBQUNSLGVBQWVDO3dCQUVsRSxJQUFJTSx1QkFBdUI7NEJBQ3pCLElBQU1FLHNCQUFzQkMsSUFBQUEsZUFBaUIsRUFBQ0wsYUFBYUo7NEJBRTNELElBQUlRLHFCQUFxQjtnQ0FDdkJSLFFBQVFVLGlCQUFpQixDQUFDUDtnQ0FFMUIsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBSU9VLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFWixPQUFPO2dCQUMvQyxJQUFNUCxtQkFBbUJvQixtQ0FBbUNELGdCQUFnQlosVUFDdEVjLGFBQWEsSUFBSXRCLFdBQVdDO2dCQUVsQyxPQUFPcUI7WUFDVDs7OztLQVBBLDhCQUFPQyxRQUFPO0FBVWhCLFNBQVNGLG1DQUFtQ0QsY0FBYyxFQUFFWixPQUFPO0lBQ2pFLElBQVFnQixPQUFtQkMsaUJBQVEsQ0FBM0JELE1BQU1FLFdBQWFELGlCQUFRLENBQXJCQyxVQUNSQyxzQkFBc0JQLGVBQWVRLHNCQUFzQixJQUMzRDNCLG1CQUFtQjBCLG9CQUFvQkUsR0FBRyxDQUFDLFNBQUNDO1FBQzFDLElBQUluQjtRQUVKLElBQU1vQixPQUFPUCxLQUFLUSxzQkFBc0IsQ0FBQ0Ysb0JBQW9CdEIsVUFDdkR5QixXQUFXUCxTQUFTTSxzQkFBc0IsQ0FBQ0Ysb0JBQW9CdEI7UUFFckUsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSXVCLFNBQVMsTUFBTTtZQUN4QnBCLGlCQUFpQm9CLE1BQU8sR0FBRztRQUM3QixPQUFPLElBQUlFLGFBQWEsTUFBTTtZQUM1QnRCLGlCQUFpQnNCLFVBQVcsR0FBRztRQUNqQztRQUVBLE9BQU90QjtJQUNUO0lBRU4sT0FBT1Y7QUFDVCJ9