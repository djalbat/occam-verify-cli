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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _equate = require("../process/equate");
var _assign = require("../process/assign");
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
var _Equality;
var _default = (0, _elements.define)((_Equality = /*#__PURE__*/ function() {
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
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), termsEquate = (0, _equate.equateTerms)(leftTermNode, rightTermNode, context);
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
                var Variable = _elements.default.Variable, type = this.getType(), leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), leftTermNodeSingularVariableNode = leftTermNode.getSingularVariableNode(), rightTermNodeSingularVariableNode = rightTermNode.getSingularVariableNode(), leftVariableNode = leftTermNodeSingularVariableNode, rightVariableNode = rightTermNodeSingularVariableNode; ///
                var assignment;
                if (leftVariableNode !== null) {
                    var leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, context), leftVariableAssignment = (0, _assign.variableAssignmentFromVariable)(leftVariable);
                    assignment = leftVariableAssignment; ///
                    assignments.push(assignment);
                }
                if (rightVariableNode !== null) {
                    var rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, context), rightVariableAssignment = (0, _assign.variableAssignmentFromVariable)(rightVariable);
                    assignment = rightVariableAssignment; ///
                    assignments.push(assignment);
                }
                var equality = this, equalityAssignment = (0, _assign.equalityAssignmentFromEquality)(equality);
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
    var Term = _elements.default.Term, leftTermNode = equalityNode.getLeftTermNode(), leftTerm = Term.fromTermNode(leftTermNode, context);
    return leftTerm;
}
function rightTermFromEqualityNode(equalityNode, context) {
    var Term = _elements.default.Term, rightTermNode = equalityNode.getRightTermNode(), rightTerm = Term.fromTermNode(rightTermNode, context);
    return rightTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgZXF1YXRlVGVybXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy9lcXVhdGVcIjtcbmltcG9ydCB7IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSwgdmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHJpZ2h0VGVybVR5cGUpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUgPSByaWdodFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGxlZnRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IGxlZnRUZXJtVHlwZTsgIC8vL1xuICAgIH1cblxuICAgIGlmIChyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gcmlnaHRUZXJtVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtcbiAgICAgIHRoaXMubGVmdFRlcm0sXG4gICAgICB0aGlzLnJpZ2h0VGVybVxuICAgIF07XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtc0VxdWF0ZSA9IGVxdWF0ZVRlcm1zKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zVmVyaWZ5ID0gdGhpcy52ZXJpZnlUZXJtcyhjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmeSkge1xuICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG5cbiAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZ5O1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm1WZXJpZmllcyA9IHRoaXMubGVmdFRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICBjb25zdCByaWdodFRlcm1WZXJpZmllcyA9IHRoaXMucmlnaHRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVzQWhlYWQgPSBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZXNBaGVhZCA9IHJpZ2h0VGVybVZlcmlmaWVzOyAvLy9cblxuICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgfSk7XG5cbiAgICB0ZXJtc1ZlcmlmeSA9IGxlZnRUZXJtVmVyaWZpZXM7IC8vL1xuXG4gICAgaWYgKHRlcm1zVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBpZiAoYXNzaWdubWVudHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSA9IGxlZnRUZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSA9IHJpZ2h0VGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBsZWZ0VmFyaWFibGVOb2RlID0gbGVmdFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICByaWdodFZhcmlhYmxlTm9kZSA9IHJpZ2h0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICBpZiAobGVmdFZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGVmdFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUobGVmdFZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgICBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlKGxlZnRWYXJpYWJsZSk7XG5cbiAgICAgIGFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByaWdodFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUocmlnaHRWYXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVmFyaWFibGUocmlnaHRWYXJpYWJsZSk7XG5cbiAgICAgIGFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5KTtcblxuICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RXF1YWxpdHlOb2RlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmZ1bmN0aW9uIHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVxdWFsaXR5Iiwic3RyaW5nIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRTdHJpbmciLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybVN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInJlZmxleGl2ZSIsImlzRXF1YWwiLCJjb250ZXh0IiwiZXF1YWwiLCJsZWZ0VGVybU5vZGUiLCJnZXROb2RlIiwicmlnaHRUZXJtTm9kZSIsInRlcm1zRXF1YXRlIiwiZXF1YXRlVGVybXMiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsInRlcm1zVmVyaWZ5IiwidmVyaWZ5VGVybXMiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiZGVidWciLCJsZWZ0VGVybVZlcmlmaWVzIiwidmVyaWZpZXNBaGVhZCIsInJpZ2h0VGVybVZlcmlmaWVzIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImxlZnRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJyaWdodFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJsZWZ0VmFyaWFibGVOb2RlIiwicmlnaHRWYXJpYWJsZU5vZGUiLCJhc3NpZ25tZW50IiwibGVmdFZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlIiwicHVzaCIsInJpZ2h0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsImVxdWFsaXR5IiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZXF1YWxpdHlOb2RlIiwiZ2V0RXF1YWxpdHlOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJuYW1lIiwiVGVybSIsImdldExlZnRUZXJtTm9kZSIsImZyb21UZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5xQjtzQkFHTztzQkFDbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvRSxXQUFlQSxJQUFBQSxnQkFBTSw2QkFBQzthQUFNQyxTQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FEYkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLGVBQWUsSUFBSSxDQUFDUCxRQUFRLENBQUNLLE9BQU8sSUFDcENHLGdCQUFnQixJQUFJLENBQUNQLFNBQVMsQ0FBQ0ksT0FBTyxJQUN0Q0ksOENBQThDRixhQUFhRyxvQkFBb0IsQ0FBQ0YsZ0JBQ2hGRyw4Q0FBOENILGNBQWNFLG9CQUFvQixDQUFDSDtnQkFFdkYsSUFBSUUsNkNBQTZDO29CQUMv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