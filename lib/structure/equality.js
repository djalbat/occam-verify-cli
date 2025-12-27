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
var _equality = /*#__PURE__*/ _interop_require_default(require("../assignment/equality"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
var _equantional = require("../process/equate/equantional");
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
var _Equality;
var _default = (0, _structure.define)((_Equality = /*#__PURE__*/ function() {
    function Equality(string, leftTerm, rightTerm) {
        _class_call_check(this, Equality);
        this.string = string;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(Equality, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                var leftTermType = this.leftTerm.getType(), rightTermType = this.rightTerm.getType(), leftTermTypeEqualToOrSubTypeOfRightTermType = leftTermType.isEqualToOrSubTypeOf(rightTermType), rightTermTypeEqualToOrSubTypeOfLeftTermType = rightTermType.isEqualToOrSubTypeOf(leftTermType);
                if (leftTermTypeEqualToOrSubTypeOfRightTermType) {
                    type = leftTermType; ///
                }
                if (rightTermTypeEqualToOrSubTypeOfLeftTermType) {
                    type = rightTermType; ///
                }
                return type;
            }
        },
        {
            key: "getTerms",
            value: function getTerms() {
                var terms = [
                    this.leftTerm,
                    this.rightTerm
                ];
                return terms;
            }
        },
        {
            key: "isReflexive",
            value: function isReflexive() {
                var leftTermString = this.leftTerm.getString(), rightTermString = this.rightTerm.getString(), reflexive = leftTermString === rightTermString;
                return reflexive;
            }
        },
        {
            key: "isEqual",
            value: function isEqual(context) {
                var equal = false;
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), termsEquate = (0, _equantional.equateTerms)(leftTermNode, rightTermNode, context);
                if (termsEquate) {
                    equal = true;
                }
                return equal;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' equality..."));
                var termsVerify = this.verifyTerms(context);
                if (termsVerify) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.assign(assignments, context);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(equalityString, "' equality."));
                }
                return verifies;
            }
        },
        {
            key: "verifyTerms",
            value: function verifyTerms(context) {
                var _this = this;
                var termsVerify;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' equality's terms..."));
                var leftTermVerifies = this.leftTerm.verify(context, function() {
                    var verifiesAhead;
                    var rightTermVerifies = _this.rightTerm.verify(context, function() {
                        var verifiesAhead;
                        var leftTermType = _this.leftTerm.getType(), rightTermType = _this.rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                        verifiesAhead = leftTermTypeComparableToRightTermType; ///
                        return verifiesAhead;
                    });
                    verifiesAhead = rightTermVerifies; ///
                    return verifiesAhead;
                });
                termsVerify = leftTermVerifies; ///
                if (termsVerify) {
                    context.debug("...verified the '".concat(equalityString, "' equality's terms."));
                }
                return termsVerify;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' stated equality..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(equalityString, "' stated equality."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' derived equality..."));
                verifiesWhenDerived = true; ///
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(equalityString, "' derived equality."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var Variable = _structure.default.Variable, type = this.getType(), leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), leftTermNodeSingularVariableNode = leftTermNode.getSingularVariableNode(), rightTermNodeSingularVariableNode = rightTermNode.getSingularVariableNode(), leftVariableNode = leftTermNodeSingularVariableNode, rightVariableNode = rightTermNodeSingularVariableNode; ///
                var assignment;
                if (leftVariableNode !== null) {
                    var leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, context), leftVariableAssignment = _variable.default.fromVariable(leftVariable);
                    assignment = leftVariableAssignment; ///
                    assignments.push(assignment);
                }
                if (rightVariableNode !== null) {
                    var rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, context), rightVariableAssignment = _variable.default.fromVariable(rightVariable);
                    assignment = rightVariableAssignment; ///
                    assignments.push(assignment);
                }
                var equality = this, equalityAssignment = _equality.default.fromEquality(equality);
                assignment = equalityAssignment; ///
                assignments.push(assignment);
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var equality = null;
                var equalityNode = statementNode.getEqualityNode();
                if (equalityNode !== null) {
                    var node = equalityNode, string = context.nodeAsString(node), leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
                    equality = new Equality(string, leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}(), _define_property(_Equality, "name", "Equality"), _Equality));
function leftTermFromEqualityNode(equalityNode, context) {
    var Term = _structure.default.Term, leftTermNode = equalityNode.getLeftTermNode(), leftTerm = Term.fromTermNode(leftTermNode, context);
    return leftTerm;
}
function rightTermFromEqualityNode(equalityNode, context) {
    var Term = _structure.default.Term, rightTermNode = equalityNode.getRightTermNode(), rightTerm = Term.fromTermNode(rightTermNode, context);
    return rightTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IEVxdWFsaXR5QXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC9lcXVhbGl0eVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgeyBlcXVhdGVUZXJtcyB9IGZyb20gXCIuLi9wcm9jZXNzL2VxdWF0ZS9lcXVhbnRpb25hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSB0aGlzLmxlZnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IHRoaXMucmlnaHRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmxleGl2ZSA9IChsZWZ0VGVybVN0cmluZyA9PT0gcmlnaHRUZXJtU3RyaW5nKTtcblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybXNFcXVhdGUgPSBlcXVhdGVUZXJtcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zRXF1YXRlKSB7XG4gICAgICBlcXVhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc1ZlcmlmeSA9IHRoaXMudmVyaWZ5VGVybXMoY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZnkpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuXG4gICAgICAgIHRoaXMuYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZlcmlmeTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmVyaWZpZXMgPSB0aGlzLmxlZnRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgY29uc3QgcmlnaHRUZXJtVmVyaWZpZXMgPSB0aGlzLnJpZ2h0VGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICB2ZXJpZmllc0FoZWFkID0gbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVzQWhlYWQgPSByaWdodFRlcm1WZXJpZmllczsgLy8vXG5cbiAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgIH0pO1xuXG4gICAgdGVybXNWZXJpZnkgPSBsZWZ0VGVybVZlcmlmaWVzOyAvLy9cblxuICAgIGlmICh0ZXJtc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGxlZnRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlID0gbGVmdFRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlID0gcmlnaHRUZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGxlZnRWYXJpYWJsZU5vZGUgPSBsZWZ0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0VmFyaWFibGVOb2RlID0gcmlnaHRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBsZXQgYXNzaWdubWVudDtcblxuICAgIGlmIChsZWZ0VmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsZWZ0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZShsZWZ0VmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKGxlZnRWYXJpYWJsZSk7XG5cbiAgICAgIGFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByaWdodFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUocmlnaHRWYXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHJpZ2h0VmFyaWFibGUpO1xuXG4gICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMsICAvL1xuICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWFsaXR5XCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICAgIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoc3RyaW5nLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gc3RydWN0dXJlLFxuICAgICAgICBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmZ1bmN0aW9uIHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gc3RydWN0dXJlLFxuICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFcXVhbGl0eSIsInN0cmluZyIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRUeXBlIiwidHlwZSIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1TdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJyZWZsZXhpdmUiLCJpc0VxdWFsIiwiY29udGV4dCIsImVxdWFsIiwibGVmdFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtc0VxdWF0ZSIsImVxdWF0ZVRlcm1zIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJ0ZXJtc1ZlcmlmeSIsInZlcmlmeVRlcm1zIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImFzc2lnbiIsImRlYnVnIiwibGVmdFRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJyaWdodFRlcm1WZXJpZmllcyIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsIlZhcmlhYmxlIiwic3RydWN0dXJlIiwibGVmdFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInJpZ2h0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSIsImxlZnRWYXJpYWJsZU5vZGUiLCJyaWdodFZhcmlhYmxlTm9kZSIsImFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJwdXNoIiwicmlnaHRWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eU5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsIm5hbWUiLCJUZXJtIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZnJvbVRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7aUVBUHNCOytEQUNTOytEQUNBOzJCQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxpQkFBTSw2QkFBQzthQUFNQyxTQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FEYkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLGVBQWUsSUFBSSxDQUFDUCxRQUFRLENBQUNLLE9BQU8sSUFDcENHLGdCQUFnQixJQUFJLENBQUNQLFNBQVMsQ0FBQ0ksT0FBTyxJQUN0Q0ksOENBQThDRixhQUFhRyxvQkFBb0IsQ0FBQ0YsZ0JB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