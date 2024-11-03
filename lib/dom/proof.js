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
var _query = require("../utilities/query");
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
var derivationNodeQuery = (0, _query.nodeQuery)("/proof/derivation");
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
            key: "getLastProofStep",
            value: function getLastProofStep() {
                return this.derivation.getLastProofStep();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var lastProofStep = this.getLastProofStep(), lastProofStepStatement = lastProofStep.getStatement(), statement = lastProofStepStatement; ///
                return statement;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, conclusion, context) {
                var verified = false;
                var localContext = _local.default.fromContext(context); ///
                context = localContext; ///
                var derivationVerified = this.derivation.verify(substitutions, context);
                if (derivationVerified) {
                    var lastProofStep = context.getLastProofStep();
                    if (lastProofStep !== null) {
                        var statement = this.getStatement(), conclusionStatement = conclusion.getStatement(), conclusionStatementEqualToStatement = conclusionStatement.isEqualTo(statement);
                        if (conclusionStatementEqualToStatement) {
                            verified = true;
                        }
                    }
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromProofNode",
            value: function fromProofNode(proofNode, fileContext) {
                var proof = null;
                if (proofNode !== null) {
                    var Derivation = _dom.default.Derivation, derivationNode = derivationNodeQuery(proofNode), derivation = Derivation.fromDerivationNode(derivationNode, fileContext);
                    proof = new Proof(derivation);
                }
                return proof;
            }
        }
    ]);
    return Proof;
}(), _define_property(_Proof, "name", "Proof"), _Proof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgZGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZi9kZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9vZiB7XG4gIGNvbnN0cnVjdG9yKGRlcml2YXRpb24pIHtcbiAgICB0aGlzLmRlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0RGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHsgcmV0dXJuIHRoaXMuZGVyaXZhdGlvbi5nZXRMYXN0UHJvb2ZTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcCA9IHRoaXMuZ2V0TGFzdFByb29mU3RlcCgpLFxuICAgICAgICAgIGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQgPSBsYXN0UHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb25jbHVzaW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHQoY29udGV4dCk7IC8vL1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBkZXJpdmF0aW9uVmVyaWZpZWQgPSB0aGlzLmRlcml2YXRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgbGFzdFByb29mU3RlcCA9IGNvbnRleHQuZ2V0TGFzdFByb29mU3RlcCgpO1xuXG4gICAgICBpZiAobGFzdFByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50ID0gY29uY2x1c2lvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSBjb25jbHVzaW9uU3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9vZlwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gICAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBkZXJpdmF0aW9uTm9kZSA9IGRlcml2YXRpb25Ob2RlUXVlcnkocHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIGRlcml2YXRpb24gPSBEZXJpdmF0aW9uLmZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBwcm9vZiA9IG5ldyBQcm9vZihkZXJpdmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2Y7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlcml2YXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb29mIiwiZGVyaXZhdGlvbiIsImdldERlcml2YXRpb24iLCJnZXRMYXN0UHJvb2ZTdGVwIiwiZ2V0U3RhdGVtZW50IiwibGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbiIsImNvbnRleHQiLCJ2ZXJpZmllZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0IiwiZGVyaXZhdGlvblZlcmlmaWVkIiwiY29uY2x1c2lvblN0YXRlbWVudCIsImNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiZnJvbVByb29mTm9kZSIsInByb29mTm9kZSIsImZpbGVDb250ZXh0IiwicHJvb2YiLCJEZXJpdmF0aW9uIiwiZG9tIiwiZGVyaXZhdGlvbk5vZGUiLCJmcm9tRGVyaXZhdGlvbk5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7NERBQ1M7cUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlQyxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsVUFBVTtnQ0FEU0Q7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXFCLE9BQU8sSUFBSSxDQUFDRixVQUFVLENBQUNFLGdCQUFnQjtZQUFJOzs7WUFFaEVDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNHLHlCQUF5QkQsY0FBY0QsWUFBWSxJQUNuREcsWUFBWUQsd0JBQXdCLEdBQUc7Z0JBRTdDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ3ZDLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsZUFBZUMsY0FBWSxDQUFDQyxXQUFXLENBQUNKLFVBQVUsR0FBRztnQkFFM0RBLFVBQVVFLGNBQWMsR0FBRztnQkFFM0IsSUFBTUcscUJBQXFCLElBQUksQ0FBQ2YsVUFBVSxDQUFDTyxNQUFNLENBQUNDLGVBQWVFO2dCQUVqRSxJQUFJSyxvQkFBb0I7b0JBQ3RCLElBQU1YLGdCQUFnQk0sUUFBUVIsZ0JBQWdCO29CQUU5QyxJQUFJRSxrQkFBa0IsTUFBTTt3QkFDMUIsSUFBTUUsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JhLHNCQUFzQlAsV0FBV04sWUFBWSxJQUM3Q2Msc0NBQXNDRCxvQkFBb0JFLFNBQVMsQ0FBQ1o7d0JBRTFFLElBQUlXLHFDQUFxQzs0QkFDdkNOLFdBQVc7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUlPUSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVDLFdBQVc7Z0JBQ3pDLElBQUlDLFFBQVE7Z0JBRVosSUFBSUYsY0FBYyxNQUFNO29CQUN0QixJQUFNLEFBQUVHLGFBQWVDLFlBQUcsQ0FBbEJELFlBQ0ZFLGlCQUFpQjdCLG9CQUFvQndCLFlBQ3JDcEIsYUFBYXVCLFdBQVdHLGtCQUFrQixDQUFDRCxnQkFBZ0JKO29CQUVqRUMsUUFBUSxJQUFJdkIsTUFBTUM7Z0JBQ3BCO2dCQUVBLE9BQU9zQjtZQUNUOzs7O0tBZEEseUJBQU9LLFFBQU8ifQ==