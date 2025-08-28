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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
var _Proof;
var _default = (0, _dom.domAssigned)((_Proof = /*#__PURE__*/ function() {
    function Proof(derivation) {
        _class_call_check(this, Proof);
        this.derivation = derivation;
    }
    _create_class(Proof, [
        {
            key: "getDerivation",
            value: function getDerivation() {
                return this.derivation;
            }
        },
        {
            key: "getLastStep",
            value: function getLastStep() {
                return this.derivation.getLastStep();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var lastStep = this.getLastStep(), lastStepStatement = lastStep.getStatement(), statement = lastStepStatement; ///
                return statement;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, conclusion, context) {
                var verifies = false;
                var localContext = _local.default.fromContext(context); ///
                context = localContext; ///
                var derivationVerifies = this.derivation.verify(substitutions, context);
                if (derivationVerifies) {
                    var lastStep = context.getLastStep();
                    if (lastStep !== null) {
                        var statement = this.getStatement(), conclusionStatement = conclusion.getStatement(), conclusionStatementEqualToStatement = conclusionStatement.isEqualTo(statement);
                        if (conclusionStatementEqualToStatement) {
                            verifies = true;
                        }
                    }
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromProofNode",
            value: function fromProofNode(proofNode, context) {
                var proof = null;
                if (proofNode !== null) {
                    var Derivation = _dom.default.Derivation, derivationNode = proofNode.getDerivationNode(), derivation = Derivation.fromDerivationNode(derivationNode, context);
                    proof = new Proof(derivation);
                }
                return proof;
            }
        }
    ]);
    return Proof;
}(), _define_property(_Proof, "name", "Proof"), _Proof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvb2Yge1xuICBjb25zdHJ1Y3RvcihkZXJpdmF0aW9uKSB7XG4gICAgdGhpcy5kZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldERlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldExhc3RTdGVwKCkgeyByZXR1cm4gdGhpcy5kZXJpdmF0aW9uLmdldExhc3RTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdFN0ZXAgPSB0aGlzLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBsYXN0U3RlcFN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbmNsdXNpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dChjb250ZXh0KTsgLy8vXG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGRlcml2YXRpb25WZXJpZmllcyA9IHRoaXMuZGVyaXZhdGlvbi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoZGVyaXZhdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IGNvbnRleHQuZ2V0TGFzdFN0ZXAoKTtcblxuICAgICAgaWYgKGxhc3RTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnQgPSBjb25jbHVzaW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IGNvbmNsdXNpb25TdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCk7XG5cbiAgICAgICAgaWYgKGNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb29mXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mID0gbnVsbDtcblxuICAgIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgRGVyaXZhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgZGVyaXZhdGlvbk5vZGUgPSBwcm9vZk5vZGUuZ2V0RGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgICAgIGRlcml2YXRpb24gPSBEZXJpdmF0aW9uLmZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHByb29mID0gbmV3IFByb29mKGRlcml2YXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJQcm9vZiIsImRlcml2YXRpb24iLCJnZXREZXJpdmF0aW9uIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0U3RlcCIsImxhc3RTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50IiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb24iLCJjb250ZXh0IiwidmVyaWZpZXMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dCIsImRlcml2YXRpb25WZXJpZmllcyIsImNvbmNsdXNpb25TdGF0ZW1lbnQiLCJjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImZyb21Qcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJwcm9vZiIsIkRlcml2YXRpb24iLCJkb20iLCJkZXJpdmF0aW9uTm9kZSIsImdldERlcml2YXRpb25Ob2RlIiwiZnJvbURlcml2YXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCOzREQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl6QixXQUFlQSxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsVUFBVTtnQ0FEU0Q7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWdCLE9BQU8sSUFBSSxDQUFDRixVQUFVLENBQUNFLFdBQVc7WUFBSTs7O1lBRXREQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNGLFdBQVcsSUFDM0JHLG9CQUFvQkQsU0FBU0QsWUFBWSxJQUN6Q0csWUFBWUQsbUJBQW1CLEdBQUc7Z0JBRXhDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ3ZDLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsZUFBZUMsY0FBWSxDQUFDQyxXQUFXLENBQUNKLFVBQVUsR0FBRztnQkFFM0RBLFVBQVVFLGNBQWMsR0FBRztnQkFFM0IsSUFBTUcscUJBQXFCLElBQUksQ0FBQ2YsVUFBVSxDQUFDTyxNQUFNLENBQUNDLGVBQWVFO2dCQUVqRSxJQUFJSyxvQkFBb0I7b0JBQ3RCLElBQU1YLFdBQVdNLFFBQVFSLFdBQVc7b0JBRXBDLElBQUlFLGFBQWEsTUFBTTt3QkFDckIsSUFBTUUsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JhLHNCQUFzQlAsV0FBV04sWUFBWSxJQUM3Q2Msc0NBQXNDRCxvQkFBb0JFLFNBQVMsQ0FBQ1o7d0JBRTFFLElBQUlXLHFDQUFxQzs0QkFDdkNOLFdBQVc7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUlPUSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVWLE9BQU87Z0JBQ3JDLElBQUlXLFFBQVE7Z0JBRVosSUFBSUQsY0FBYyxNQUFNO29CQUN0QixJQUFNLEFBQUVFLGFBQWVDLFlBQUcsQ0FBbEJELFlBQ0ZFLGlCQUFpQkosVUFBVUssaUJBQWlCLElBQzVDekIsYUFBYXNCLFdBQVdJLGtCQUFrQixDQUFDRixnQkFBZ0JkO29CQUVqRVcsUUFBUSxJQUFJdEIsTUFBTUM7Z0JBQ3BCO2dCQUVBLE9BQU9xQjtZQUNUOzs7O0tBZEEseUJBQU9NLFFBQU8ifQ==