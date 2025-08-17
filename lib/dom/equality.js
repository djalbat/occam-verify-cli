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
var _equantional = /*#__PURE__*/ _interop_require_default(require("../unifier/equantional"));
var _equality = /*#__PURE__*/ _interop_require_default(require("../assignment/equality"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
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
var _default = (0, _dom.domAssigned)((_Equality = /*#__PURE__*/ function() {
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
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), termsEquated = _equantional.default.equateTerms(leftTermNode, rightTermNode, context);
                if (termsEquated) {
                    equal = true;
                }
                return equal;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' equality..."));
                var termsVerified = this.verifyTerms(context);
                if (termsVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true;
                    }
                }
                if (verified) {
                    if (stated) {
                        this.assign(assignments, context);
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(equalityString, "' equality."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerms",
            value: function verifyTerms(context) {
                var _this = this;
                var termsVerified;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' equality's terms..."));
                var leftTermVerified = this.leftTerm.verify(context, function() {
                    var verifiedAhead;
                    var rightTermVerified = _this.rightTerm.verify(context, function() {
                        var verifiedAhead;
                        var leftTermType = _this.leftTerm.getType(), rightTermType = _this.rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                        verifiedAhead = leftTermTypeComparableToRightTermType; ///
                        return verifiedAhead;
                    });
                    verifiedAhead = rightTermVerified; ///
                    return verifiedAhead;
                });
                termsVerified = leftTermVerified; ///
                if (termsVerified) {
                    context.debug("...verified the '".concat(equalityString, "' equality's terms."));
                }
                return termsVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' stated equality..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(equalityString, "' stated equality."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiedWhenDerived;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' derived equality..."));
                verifiedWhenDerived = true; ///
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(equalityString, "' derived equality."));
                }
                return verifiedWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var Variable = _dom.default.Variable, type = this.getType(), leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), leftTermNodeSingularVariableNode = leftTermNode.getSingularVariableNode(), rightTermNodeSingularVariableNode = rightTermNode.getSingularVariableNode(), leftVariableNode = leftTermNodeSingularVariableNode, rightVariableNode = rightTermNodeSingularVariableNode; ///
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
    var Term = _dom.default.Term, leftTermNode = equalityNode.getLeftTermNode(), leftTerm = Term.fromTermNode(leftTermNode, context);
    return leftTerm;
}
function rightTermFromEqualityNode(equalityNode, context) {
    var Term = _dom.default.Term, rightTermNode = equalityNode.getRightTermNode(), rightTerm = Term.fromTermNode(rightTermNode, context);
    return rightTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IGVxdWF0aW9uYWxVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL2VxdWFudGlvbmFsXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5pbXBvcnQgVmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L3ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHJpZ2h0VGVybVR5cGUpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUgPSByaWdodFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGxlZnRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IGxlZnRUZXJtVHlwZTsgIC8vL1xuICAgIH1cblxuICAgIGlmIChyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gcmlnaHRUZXJtVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtc0VxdWF0ZWQgPSBlcXVhdGlvbmFsVW5pZmllci5lcXVhdGVUZXJtcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zRXF1YXRlZCkge1xuICAgICAgZXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybXMoY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHRoaXMuYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWZXJpZmllZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmVyaWZpZWQgPSB0aGlzLmxlZnRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgcmlnaHRUZXJtVmVyaWZpZWQgPSB0aGlzLnJpZ2h0VGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICB2ZXJpZmllZEFoZWFkID0gbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSByaWdodFRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgdGVybXNWZXJpZmllZCA9IGxlZnRUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgbGVmdFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGUgPSBsZWZ0VGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSA9IHJpZ2h0VGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSxcbiAgICAgIGxlZnRWYXJpYWJsZU5vZGUgPSBsZWZ0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgcmlnaHRWYXJpYWJsZU5vZGUgPSByaWdodFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIGxldCBhc3NpZ25tZW50O1xuXG4gICAgaWYgKGxlZnRWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKGxlZnRWYXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZShsZWZ0VmFyaWFibGUpO1xuXG4gICAgICBhc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cblxuICAgIGlmIChyaWdodFZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmlnaHRWYXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHJpZ2h0VmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHJpZ2h0VmFyaWFibGUpO1xuXG4gICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMsICAvL1xuICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXF1YWxpdHlcIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gICAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiRXF1YWxpdHkiLCJzdHJpbmciLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFN0cmluZyIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1TdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJyZWZsZXhpdmUiLCJpc0VxdWFsIiwiY29udGV4dCIsImVxdWFsIiwibGVmdFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtc0VxdWF0ZWQiLCJlcXVhdGlvbmFsVW5pZmllciIsImVxdWF0ZVRlcm1zIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiZGVidWciLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInJpZ2h0VGVybVZlcmlmaWVkIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiVmFyaWFibGUiLCJkb20iLCJsZWZ0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwicmlnaHRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlIiwibGVmdFZhcmlhYmxlTm9kZSIsInJpZ2h0VmFyaWFibGVOb2RlIiwiYXNzaWdubWVudCIsImxlZnRWYXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJyaWdodFZhcmlhYmxlIiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJlcXVhbGl0eSIsImVxdWFsaXR5QXNzaWdubWVudCIsIkVxdWFsaXR5QXNzaWdubWVudCIsImZyb21FcXVhbGl0eSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImdldEVxdWFsaXR5Tm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwibmFtZSIsIlRlcm0iLCJnZXRMZWZ0VGVybU5vZGUiLCJmcm9tVGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7a0VBQ2M7K0RBQ0M7K0RBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSS9CLFdBQWVBLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FEUkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLGVBQWUsSUFBSSxDQUFDUCxRQUFRLENBQUNLLE9BQU8sSUFDcENHLGdCQUFnQixJQUFJLENBQUNQLFNBQVMsQ0FBQ0ksT0FBTyxJQUN0Q0ksOENBQThDRixhQUFhRyxvQkFBb0IsQ0FBQ0YsZ0JBQ2hGRyw4Q0FBOENILGNBQWNFLG9CQUFvQixDQUFDSDtnQkFFdkYsSUFBSUUsNkNBQTZDO29CQUMvQ0gsT0FBT0MsY0FBZSxHQUFHO2dCQUMzQjtnQkFFQSxJQUFJSSw2Q0FBNkM7b0JBQy9DTCxPQUFPRSxlQUFlLEdBQUc7Z0JBQzNC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