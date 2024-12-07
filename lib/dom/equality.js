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
var _equality = /*#__PURE__*/ _interop_require_default(require("../assignment/equality"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
var _query = require("../utilities/query");
var _unification = require("../utilities/unification");
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
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
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
                var equality = this, equalityUnified = (0, _unification.unifyEquality)(equality, context), equal = equalityUnified; ///
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
                        verifiedWhenStated = this.verifyWhenStated(context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        if (assignments !== null) {
                            var Variable = _dom.default.Variable, type = this.getType(), leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), leftVariableNode = variableNodeQuery(leftTermNode), rightVariableNode = variableNodeQuery(rightTermNode), leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, context), rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, context);
                            var assignment;
                            if (leftVariable !== null) {
                                var leftVariableAssignment = _variable.default.fromVariable(leftVariable);
                                assignment = leftVariableAssignment; ///
                                assignments.push(assignment);
                            }
                            if (rightVariable !== null) {
                                var rightVariableAssignment = _variable.default.fromVariable(rightVariable);
                                assignment = rightVariableAssignment; ///
                                assignments.push(assignment);
                            }
                            var equality = this, equalityAssignment = _equality.default.fromEquality(equality);
                            assignment = equalityAssignment; ///
                            assignments.push(assignment);
                        }
                        verified = true;
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
            value: function verifyWhenStated(context) {
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
                var equal = this.isEqual(context);
                verifiedWhenDerived = equal; ///
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(equalityString, "' derived equality."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var equality = null;
                var equalityNode = equalityNodeQuery(statementNode);
                if (equalityNode !== null) {
                    var Term = _dom.default.Term, leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), leftTerm = Term.fromTermNode(leftTermNode, context), rightTerm = Term.fromTermNode(rightTermNode, context), node = equalityNode, string = context.nodeAsString(node);
                    equality = new Equality(string, leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}(), _define_property(_Equality, "name", "Equality"), _Equality));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEVxdWFsaXR5QXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC9lcXVhbGl0eVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHVuaWZ5RXF1YWxpdHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmNvbnN0IGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHJpZ2h0VGVybVR5cGUpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUgPSByaWdodFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGxlZnRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IGxlZnRUZXJtVHlwZTsgIC8vL1xuICAgIH1cblxuICAgIGlmIChyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gcmlnaHRUZXJtVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5VW5pZmllZCA9IHVuaWZ5RXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIGVxdWFsID0gZXF1YWxpdHlVbmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1zKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZShsZWZ0VmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUocmlnaHRWYXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZShsZWZ0VmFyaWFibGUpO1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyaWdodFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByaWdodFZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUocmlnaHRWYXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vXG4gICAgICAgICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VGVybVZlcmlmaWVkID0gdGhpcy5sZWZ0VGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHJpZ2h0VGVybVZlcmlmaWVkID0gdGhpcy5yaWdodFRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNDb21wYXJhYmxlVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gcmlnaHRUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHRlcm1zVmVyaWZpZWQgPSBsZWZ0VGVybVZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgZXF1YWwgPSB0aGlzLmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZXF1YWw7ICAvLy9cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWFsaXR5XCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICBsZWZ0VGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZXF1YWxpdHlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJFcXVhbGl0eSIsInN0cmluZyIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRUeXBlIiwidHlwZSIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybVN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInJlZmxleGl2ZSIsImlzRXF1YWwiLCJjb250ZXh0IiwiZXF1YWxpdHkiLCJlcXVhbGl0eVVuaWZpZWQiLCJ1bmlmeUVxdWFsaXR5IiwiZXF1YWwiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJWYXJpYWJsZSIsImRvbSIsImxlZnRUZXJtTm9kZSIsImdldE5vZGUiLCJyaWdodFRlcm1Ob2RlIiwibGVmdFZhcmlhYmxlTm9kZSIsInJpZ2h0VmFyaWFibGVOb2RlIiwibGVmdFZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJyaWdodFZhcmlhYmxlIiwiYXNzaWdubWVudCIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJwdXNoIiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJkZWJ1ZyIsImxlZnRUZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwicmlnaHRUZXJtVmVyaWZpZWQiLCJsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlIiwiaXNDb21wYXJhYmxlVG8iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eU5vZGUiLCJUZXJtIiwiZnJvbVRlcm1Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7OzJEQWJnQjsrREFDZTsrREFDQTtxQkFFTDsyQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUM5QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLHNCQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDO0lBRXJDLFdBQWVJLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVD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