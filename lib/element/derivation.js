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
    function Derivation(context, string, node, stepsOrSubproofs) {
        _class_call_check(this, Derivation);
        this.context = context;
        this.string = string;
        this.node = node;
        this.stepsOrSubproofs = stepsOrSubproofs;
    }
    _create_class(Derivation, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldExhc3RTdGVwKCkge1xuICAgIGNvbnN0IGxhc3RTdGVwT3JTdWJwcm9vZiA9IGxhc3QodGhpcy5zdGVwc09yU3VicHJvb2ZzKSxcbiAgICAgICAgICBsYXN0U3RlcCA9IGxhc3RTdGVwT3JTdWJwcm9vZjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICB2ZXJpZmllcyA9IHRoaXMuc3RlcHNPclN1YnByb29mcy5ldmVyeSgoc3RlcE9yU3VicHJvb2YpID0+IHsgLy8vXG4gICAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RlcE9yU3VicHJvb2ZWZXJpZmllcyA9IHN0ZXBPclN1YnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHN0ZXBPclN1YnByb29mLnVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZXJpdmF0aW9uXCI7XG59KTtcblxuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkRlcml2YXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwT3JTdWJwcm9vZiIsImxhc3RTdGVwIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsInZlcmlmaWVzIiwiZXZlcnkiLCJzdGVwT3JTdWJwcm9vZiIsImFzc2lnbm1lbnRzIiwic3RlcE9yU3VicHJvb2ZWZXJpZmllcyIsInN0ZXBPclN1YnByb29mVW5pZmllcyIsInVuaWZ5IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3RlcE9yU3VicHJvb2YiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozt5QkFSK0I7NkRBRUQ7d0JBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLCtCQUFDO2FBQU1DLFdBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLGdCQUFnQjtnQ0FEekJKO1FBRXhCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOzs7O1lBRzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGdCQUFnQjtZQUM5Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUJiLEtBQUssSUFBSSxDQUFDTyxnQkFBZ0IsR0FDL0NPLFdBQVdELG9CQUFxQixHQUFHO2dCQUV6QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRVosT0FBTztnQkFDM0IsSUFBSWE7Z0JBRUpBLFdBQVcsSUFBSSxDQUFDVixnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDLFNBQUNDO29CQUN0QyxJQUFNQyxjQUFjLEVBQUUsRUFDaEJDLHlCQUF5QkYsZUFBZUosTUFBTSxDQUFDQyxlQUFlSSxhQUFhaEI7b0JBRWpGLElBQUlpQix3QkFBd0I7d0JBQzFCLElBQU1DLHdCQUF3QkgsZUFBZUksS0FBSyxDQUFDUCxlQUFlWjt3QkFFbEUsSUFBSWtCLHVCQUF1Qjs0QkFDekIsSUFBTUUsc0JBQXNCQyxJQUFBQSxlQUFpQixFQUFDTCxhQUFhaEI7NEJBRTNELElBQUlvQixxQkFBcUI7Z0NBQ3ZCcEIsUUFBUXNCLGlCQUFpQixDQUFDUDtnQ0FFMUIsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O0tBRUEsOEJBQU9VLFFBQU8ifQ==