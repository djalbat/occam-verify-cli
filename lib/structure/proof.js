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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
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
var _default = (0, _structure.define)((_Proof = /*#__PURE__*/ function() {
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
                var localContext = _local.default.fromNothing(context); ///
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
                    var Derivation = _structure.default.Derivation, derivationNode = proofNode.getDerivationNode(), derivation = Derivation.fromDerivationNode(derivationNode, context);
                    proof = new Proof(derivation);
                }
                return proof;
            }
        }
    ]);
    return Proof;
}(), _define_property(_Proof, "name", "Proof"), _Proof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvcHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9vZiB7XG4gIGNvbnN0cnVjdG9yKGRlcml2YXRpb24pIHtcbiAgICB0aGlzLmRlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0RGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7IHJldHVybiB0aGlzLmRlcml2YXRpb24uZ2V0TGFzdFN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0U3RlcCA9IHRoaXMuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IGxhc3RTdGVwU3RhdGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29uY2x1c2lvbiwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgZGVyaXZhdGlvblZlcmlmaWVzID0gdGhpcy5kZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXJpdmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGxhc3RTdGVwID0gY29udGV4dC5nZXRMYXN0U3RlcCgpO1xuXG4gICAgICBpZiAobGFzdFN0ZXAgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvblN0YXRlbWVudCA9IGNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gY29uY2x1c2lvblN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvb2ZcIjtcblxuICBzdGF0aWMgZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gICAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICAgICAgZGVyaXZhdGlvbiA9IERlcml2YXRpb24uZnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcHJvb2YgPSBuZXcgUHJvb2YoZGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9vZiIsImRlcml2YXRpb24iLCJnZXREZXJpdmF0aW9uIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0U3RlcCIsImxhc3RTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50IiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb24iLCJjb250ZXh0IiwidmVyaWZpZXMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tTm90aGluZyIsImRlcml2YXRpb25WZXJpZmllcyIsImNvbmNsdXNpb25TdGF0ZW1lbnQiLCJjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImZyb21Qcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJwcm9vZiIsIkRlcml2YXRpb24iLCJzdHJ1Y3R1cmUiLCJkZXJpdmF0aW9uTm9kZSIsImdldERlcml2YXRpb25Ob2RlIiwiZnJvbURlcml2YXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7aUVBTHNCOzREQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl6QixXQUFlQSxJQUFBQSxpQkFBTSwwQkFBQzthQUFNQyxNQUNkQyxVQUFVO2dDQURJRDtRQUV4QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBZ0IsT0FBTyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0UsV0FBVztZQUFJOzs7WUFFdERDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0YsV0FBVyxJQUMzQkcsb0JBQW9CRCxTQUFTRCxZQUFZLElBQ3pDRyxZQUFZRCxtQkFBbUIsR0FBRztnQkFFeEMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFDdkMsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxlQUFlQyxjQUFZLENBQUNDLFdBQVcsQ0FBQ0osVUFBVSxHQUFHO2dCQUUzREEsVUFBVUUsY0FBYyxHQUFHO2dCQUUzQixJQUFNRyxxQkFBcUIsSUFBSSxDQUFDZixVQUFVLENBQUNPLE1BQU0sQ0FBQ0MsZUFBZUU7Z0JBRWpFLElBQUlLLG9CQUFvQjtvQkFDdEIsSUFBTVgsV0FBV00sUUFBUVIsV0FBVztvQkFFcEMsSUFBSUUsYUFBYSxNQUFNO3dCQUNyQixJQUFNRSxZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3QmEsc0JBQXNCUCxXQUFXTixZQUFZLElBQzdDYyxzQ0FBc0NELG9CQUFvQkUsU0FBUyxDQUFDWjt3QkFFMUUsSUFBSVcscUNBQXFDOzRCQUN2Q04sV0FBVzt3QkFDYjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBSU9RLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRVYsT0FBTztnQkFDckMsSUFBSVcsUUFBUTtnQkFFWixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCLElBQU0sQUFBRUUsYUFBZUMsa0JBQVMsQ0FBeEJELFlBQ0ZFLGlCQUFpQkosVUFBVUssaUJBQWlCLElBQzVDekIsYUFBYXNCLFdBQVdJLGtCQUFrQixDQUFDRixnQkFBZ0JkO29CQUVqRVcsUUFBUSxJQUFJdEIsTUFBTUM7Z0JBQ3BCO2dCQUVBLE9BQU9xQjtZQUNUOzs7O0tBZEEseUJBQU9NLFFBQU8ifQ==