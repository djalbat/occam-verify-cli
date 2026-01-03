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
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
var _elements = require("../elements");
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
    ]);
    return Derivation;
}(), _define_property(_Derivation, "name", "Derivation"), _Derivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0ZXBzT3JTdWJwcm9vZnMpIHtcbiAgICB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0U3RlcHNPclN1YnByb29mcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFN0ZXBPclN1YnByb29mID0gbGFzdCh0aGlzLnN0ZXBzT3JTdWJwcm9vZnMpLFxuICAgICAgICAgIGxhc3RTdGVwID0gbGFzdFN0ZXBPclN1YnByb29mOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFN0ZXA7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIHZlcmlmaWVzID0gdGhpcy5zdGVwc09yU3VicHJvb2ZzLmV2ZXJ5KChzdGVwT3JTdWJwcm9vZikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGVwT3JTdWJwcm9vZlZlcmlmaWVzID0gc3RlcE9yU3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3RlcE9yU3VicHJvb2YudW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlcml2YXRpb25cIjtcbn0pO1xuXG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcE9yU3VicHJvb2YiLCJsYXN0U3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJldmVyeSIsInN0ZXBPclN1YnByb29mIiwiYXNzaWdubWVudHMiLCJzdGVwT3JTdWJwcm9vZlZlcmlmaWVzIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwidW5pZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdGVwT3JTdWJwcm9vZiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O3lCQVIrQjs2REFFRDt3QkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0sK0JBQUM7YUFBTUMsV0FDZEMsZ0JBQWdCO2dDQURGRDtRQUV4QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7OztZQUcxQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxnQkFBZ0I7WUFDOUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCUCxLQUFLLElBQUksQ0FBQ0ksZ0JBQWdCLEdBQy9DSSxXQUFXRCxvQkFBcUIsR0FBRztnQkFFekMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDO2dCQUVKQSxXQUFXLElBQUksQ0FBQ1IsZ0JBQWdCLENBQUNTLEtBQUssQ0FBQyxTQUFDQztvQkFDdEMsSUFBTUMsY0FBYyxFQUFFLEVBQ2hCQyx5QkFBeUJGLGVBQWVMLE1BQU0sQ0FBQ0MsZUFBZUssYUFBYUo7b0JBRWpGLElBQUlLLHdCQUF3Qjt3QkFDMUIsSUFBTUMsd0JBQXdCSCxlQUFlSSxLQUFLLENBQUNSLGVBQWVDO3dCQUVsRSxJQUFJTSx1QkFBdUI7NEJBQ3pCLElBQU1FLHNCQUFzQkMsSUFBQUEsZUFBaUIsRUFBQ0wsYUFBYUo7NEJBRTNELElBQUlRLHFCQUFxQjtnQ0FDdkJSLFFBQVFVLGlCQUFpQixDQUFDUDtnQ0FFMUIsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O0tBRUEsOEJBQU9VLFFBQU8ifQ==