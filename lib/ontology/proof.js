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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
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
var _default = (0, _ontology.define)((_Proof = /*#__PURE__*/ function() {
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
                    var Derivation = _ontology.default.Derivation, derivationNode = proofNode.getDerivationNode(), derivation = Derivation.fromDerivationNode(derivationNode, context);
                    proof = new Proof(derivation);
                }
                return proof;
            }
        }
    ]);
    return Proof;
}(), _define_property(_Proof, "name", "Proof"), _Proof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9wcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb29mIHtcbiAgY29uc3RydWN0b3IoZGVyaXZhdGlvbikge1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gIH1cblxuICBnZXREZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuZGVyaXZhdGlvbi5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RTdGVwID0gdGhpcy5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbGFzdFN0ZXBTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb25jbHVzaW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7IC8vL1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBkZXJpdmF0aW9uVmVyaWZpZXMgPSB0aGlzLmRlcml2YXRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgY29uc3QgbGFzdFN0ZXAgPSBjb250ZXh0LmdldExhc3RTdGVwKCk7XG5cbiAgICAgIGlmIChsYXN0U3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50ID0gY29uY2x1c2lvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSBjb25jbHVzaW9uU3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9vZlwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IERlcml2YXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgZGVyaXZhdGlvbk5vZGUgPSBwcm9vZk5vZGUuZ2V0RGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgICAgIGRlcml2YXRpb24gPSBEZXJpdmF0aW9uLmZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHByb29mID0gbmV3IFByb29mKGRlcml2YXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvb2YiLCJkZXJpdmF0aW9uIiwiZ2V0RGVyaXZhdGlvbiIsImdldExhc3RTdGVwIiwiZ2V0U3RhdGVtZW50IiwibGFzdFN0ZXAiLCJsYXN0U3RlcFN0YXRlbWVudCIsInN0YXRlbWVudCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uIiwiY29udGV4dCIsInZlcmlmaWVzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJkZXJpdmF0aW9uVmVyaWZpZXMiLCJjb25jbHVzaW9uU3RhdGVtZW50IiwiY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJmcm9tUHJvb2ZOb2RlIiwicHJvb2ZOb2RlIiwicHJvb2YiLCJEZXJpdmF0aW9uIiwib250b2xvZ3kiLCJkZXJpdmF0aW9uTm9kZSIsImdldERlcml2YXRpb25Ob2RlIiwiZnJvbURlcml2YXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHFCOzREQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl6QixXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzthQUFNQyxNQUNkQyxVQUFVO2dDQURJRDtRQUV4QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBZ0IsT0FBTyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0UsV0FBVztZQUFJOzs7WUFFdERDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0YsV0FBVyxJQUMzQkcsb0JBQW9CRCxTQUFTRCxZQUFZLElBQ3pDRyxZQUFZRCxtQkFBbUIsR0FBRztnQkFFeEMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFDdkMsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxlQUFlQyxjQUFZLENBQUNDLFdBQVcsQ0FBQ0osVUFBVSxHQUFHO2dCQUUzREEsVUFBVUUsY0FBYyxHQUFHO2dCQUUzQixJQUFNRyxxQkFBcUIsSUFBSSxDQUFDZixVQUFVLENBQUNPLE1BQU0sQ0FBQ0MsZUFBZUU7Z0JBRWpFLElBQUlLLG9CQUFvQjtvQkFDdEIsSUFBTVgsV0FBV00sUUFBUVIsV0FBVztvQkFFcEMsSUFBSUUsYUFBYSxNQUFNO3dCQUNyQixJQUFNRSxZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3QmEsc0JBQXNCUCxXQUFXTixZQUFZLElBQzdDYyxzQ0FBc0NELG9CQUFvQkUsU0FBUyxDQUFDWjt3QkFFMUUsSUFBSVcscUNBQXFDOzRCQUN2Q04sV0FBVzt3QkFDYjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBSU9RLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRVYsT0FBTztnQkFDckMsSUFBSVcsUUFBUTtnQkFFWixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCLElBQU0sQUFBRUUsYUFBZUMsaUJBQVEsQ0FBdkJELFlBQ0ZFLGlCQUFpQkosVUFBVUssaUJBQWlCLElBQzVDekIsYUFBYXNCLFdBQVdJLGtCQUFrQixDQUFDRixnQkFBZ0JkO29CQUVqRVcsUUFBUSxJQUFJdEIsTUFBTUM7Z0JBQ3BCO2dCQUVBLE9BQU9xQjtZQUNUOzs7O0tBZEEseUJBQU9NLFFBQU8ifQ==