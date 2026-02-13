"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Context;
    }
});
var _occamlanguages = require("occam-languages");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Context = /*#__PURE__*/ function(ContextBase) {
    _inherits(Context, ContextBase);
    function Context() {
        _class_call_check(this, Context);
        return _call_super(this, Context, arguments);
    }
    _create_class(Context, [
        {
            key: "getLexer",
            value: function getLexer() {
                var context = this.getContext(), lexer = context.getLexer();
                return lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                var context = this.getContext(), parser = context.getParser();
                return parser;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                var context = this.getContext(), filePath = context.getFilePath();
                return filePath;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(includeRelease) {
                var context = this.getContext(), variables = context.getVariables(includeRelease);
                return variables;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators(includeRelease) {
                var context = this.getContext(), combinators = context.getCombinators(includeRelease);
                return combinators;
            }
        },
        {
            key: "getSubproofOrProofAssertions",
            value: function getSubproofOrProofAssertions() {
                var context = this.getContext(), subproofOrProofAssertions = context.getSubproofOrProofAssertions();
                return subproofOrProofAssertions;
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable) {
                var context = this.getContext();
                metavariable = context.findMetavariable(metavariable); ///
                return metavariable;
            }
        },
        {
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                var context = this.getContext(), procedure = context.findProcedureByName(name);
                return procedure;
            }
        },
        {
            key: "findRuleByReference",
            value: function findRuleByReference(reference) {
                var context = this.getContext(), rule = context.findRuleByReference(reference);
                return rule;
            }
        },
        {
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                var context = this.getContext(), frame = context.findFrameByFrameNode(frameNode);
                return frame;
            }
        },
        {
            key: "findStatementByStatementNode",
            value: function findStatementByStatementNode(statementNode) {
                var context = this.getContext(), statement = context.findStatementByStatementNode(statementNode);
                return statement;
            }
        },
        {
            key: "findTopLevelAssertionByReference",
            value: function findTopLevelAssertionByReference(reference) {
                var context = this.getContext(), topLevelAssertion = context.findTopLevelAssertionByReference(reference);
                return topLevelAssertion;
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var context = this.getContext(), variable = context.findVariableByVariableIdentifier(variableIdentifier);
                return variable;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var context = this.getContext(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
                return metavariable;
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                var context = this.getContext(), procedurePresent = context.isProcedurePresentByName(name);
                return procedurePresent;
            }
        },
        {
            key: "isLabelPresentByReference",
            value: function isLabelPresentByReference(reference) {
                var context = this.getContext(), labelPresent = context.isLabelPresentByReference(reference);
                return labelPresent;
            }
        },
        {
            key: "isMetavariablePresentByReference",
            value: function isMetavariablePresentByReference(reference) {
                var context = this.getContext(), metavariablePresent = context.isMetavariablePresentByReference(reference);
                return metavariablePresent;
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                var context = this.getContext();
                context.addRule(rule);
            }
        },
        {
            key: "addJudgement",
            value: function addJudgement(judgement) {
                var context = this.getContext(), judgementAdded = context.addJudgement(judgement);
                return judgementAdded;
            }
        },
        {
            key: "addSubproofOrProofAssertion",
            value: function addSubproofOrProofAssertion(subproofOrProofAssertion) {
                var context = this.getContext();
                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
            }
        }
    ]);
    return Context;
}(_occamlanguages.Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFJ1bGUocnVsZSk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudEFkZGVkID0gY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsImdldExleGVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJnZXRWYXJpYWJsZXMiLCJpbmNsdWRlUmVsZWFzZSIsInZhcmlhYmxlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwibmFtZSIsInByb2NlZHVyZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJydWxlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibGFiZWxQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiYWRkUnVsZSIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFkZGVkIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiQ29udGV4dEJhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhCQUZrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxRQUFRRixRQUFRRCxRQUFRO2dCQUU5QixPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCRyxTQUFTSixRQUFRRyxTQUFTO2dCQUVoQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCSyxXQUFXTixRQUFRSyxXQUFXO2dCQUVwQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLGNBQWM7Z0JBQ3pCLElBQU1SLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCUSxZQUFZVCxRQUFRTyxZQUFZLENBQUNDO2dCQUV2QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLGNBQWM7Z0JBQzNCLElBQU1SLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCVSxjQUFjWCxRQUFRVSxjQUFjLENBQUNGO2dCQUUzQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCWSw0QkFBNEJiLFFBQVFZLDRCQUE0QjtnQkFFdEUs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