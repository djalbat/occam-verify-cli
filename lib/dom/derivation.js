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
var _Derivation;
var last = _necessary.arrayUtilities.last;
var proofStepNodesQuery = (0, _query.nodesQuery)("/derivation/proofStep|lastProofStep");
var _default = (0, _dom.domAssigned)((_Derivation = /*#__PURE__*/ function() {
    function Derivation(proofSteps) {
        _class_call_check(this, Derivation);
        this.proofSteps = proofSteps;
    }
    _create_class(Derivation, [
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                return this.proofSteps;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = last(this.proofSteps);
                return lastProofStep;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var verified;
                verified = this.proofSteps.every(function(proofStep) {
                    var proofStepVerifiedAndUnified = proofStep.verifyAndUnify(substitutions, context);
                    if (proofStepVerifiedAndUnified) {
                        return true;
                    }
                });
                return verified;
            }
        }
    ], [
        {
            key: "fromDerivationNode",
            value: function fromDerivationNode(derivationNode, fileContext) {
                var ProofStep = _dom.default.ProofStep, proofStepNodes = proofStepNodesQuery(derivationNode), proofSteps = proofStepNodes.map(function(proofStepNode) {
                    var proofStep = ProofStep.fromProofStepNode(proofStepNode, fileContext);
                    return proofStep;
                }), derivation = new Derivation(proofSteps);
                return derivation;
            }
        }
    ]);
    return Derivation;
}(), _define_property(_Derivation, "name", "Derivation"), _Derivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb29mU3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Rlcml2YXRpb24vcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXBcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlcml2YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICB2ZXJpZmllZCA9IHRoaXMucHJvb2ZTdGVwcy5ldmVyeSgocHJvb2ZTdGVwKSA9PiB7IC8vL1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVmVyaWZpZWRBbmRVbmlmaWVkID0gcHJvb2ZTdGVwLnZlcmlmeUFuZFVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwVmVyaWZpZWRBbmRVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlcml2YXRpb25cIjtcblxuICBzdGF0aWMgZnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBkb20sXG4gICAgICAgICAgcHJvb2ZTdGVwTm9kZXMgPSBwcm9vZlN0ZXBOb2Rlc1F1ZXJ5KGRlcml2YXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gcHJvb2ZTdGVwTm9kZXMubWFwKChwcm9vZlN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlcml2YXRpb24gPSBuZXcgRGVyaXZhdGlvbihwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBkZXJpdmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9vZlN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiRGVyaXZhdGlvbiIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInZlcmlmaWVkIiwiZXZlcnkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBWZXJpZmllZEFuZFVuaWZpZWQiLCJ2ZXJpZnlBbmRVbmlmeSIsImZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJQcm9vZlN0ZXAiLCJkb20iLCJwcm9vZlN0ZXBOb2RlcyIsIm1hcCIsInByb29mU3RlcE5vZGUiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsImRlcml2YXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7Ozt5QkFYK0I7MkRBRWY7cUJBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUczQixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVSLElBQU1FLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQztJQUV2QyxXQUFlQyxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsVUFBVTtnQ0FEU0Q7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCVCxLQUFLLElBQUksQ0FBQ00sVUFBVTtnQkFFMUMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDO2dCQUVKQSxXQUFXLElBQUksQ0FBQ1AsVUFBVSxDQUFDUSxLQUFLLENBQUMsU0FBQ0M7b0JBQ2hDLElBQU1DLDhCQUE4QkQsVUFBVUUsY0FBYyxDQUFDTixlQUFlQztvQkFFNUUsSUFBSUksNkJBQTZCO3dCQUMvQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVDLFdBQVc7Z0JBQ25ELElBQU0sQUFBRUMsWUFBY0MsWUFBRyxDQUFqQkQsV0FDRkUsaUJBQWlCckIsb0JBQW9CaUIsaUJBQ3JDYixhQUFhaUIsZUFBZUMsR0FBRyxDQUFDLFNBQUNDO29CQUMvQixJQUFNVixZQUFZTSxVQUFVSyxpQkFBaUIsQ0FBQ0QsZUFBZUw7b0JBRTdELE9BQU9MO2dCQUNULElBQ0FZLGFBQWEsSUFBSXRCLFdBQVdDO2dCQUVsQyxPQUFPcUI7WUFDVDs7OztLQWJBLDhCQUFPQyxRQUFPIn0=