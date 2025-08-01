"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReferenceSubstitution;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _reference = /*#__PURE__*/ _interop_require_default(require("../context/partial/substitution/reference"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var ReferenceSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(ReferenceSubstitution, Substitution);
    function ReferenceSubstitution(string, node, tokens, reference, metavariable) {
        _class_call_check(this, ReferenceSubstitution);
        var _this;
        _this = _call_super(this, ReferenceSubstitution, [
            string,
            node,
            tokens
        ]);
        _this.reference = reference;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(ReferenceSubstitution, [
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "isReferenceEqualTo",
            value: function isReferenceEqualTo(reference) {
                return this.reference.isEqualTo(reference);
            }
        },
        {
            key: "isMetavariableEqualTo",
            value: function isMetavariableEqualTo(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var referenceSubstitution = null;
                var referenceSubstitutionNode = statementNode.getReferenceSubstitutionNode();
                if (referenceSubstitutionNode !== null) {
                    var lastReferenceNode = referenceSubstitutionNode.getLastReferenceNode(), firstReferenceNode = referenceSubstitutionNode.getFirstReferenceNode(), singularMetavariableNode = lastReferenceNode.getSingularMetavariableNode();
                    if (singularMetavariableNode !== null) {
                        var Reference = _dom.default.Reference, Metavariable = _dom.default.Metavariable, referenceNode = firstReferenceNode, metavariableNode = singularMetavariableNode, reference = Reference.fromReferenceNode(referenceNode, context), metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), node = referenceSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromReferenceAndMetavariable(reference, metavariable);
                        referenceSubstitution = new ReferenceSubstitution(string, node, tokens, reference, metavariable);
                    }
                }
                return referenceSubstitution;
            }
        },
        {
            key: "fromReferenceAndMetavariable",
            value: function fromReferenceAndMetavariable(reference, metavariable, context) {
                var string = stringFromReferenceAndMetavariable(reference, metavariable), lexer = context.getLexer(), parser = context.getParser(), referenceSubstitutionPartialContext = _reference.default.fromStringLexerAndParser(string, lexer, parser), node = referenceSubstitutionPartialContext.getNode(), tokens = referenceSubstitutionPartialContext.getTokens(), referenceSubstitution = new ReferenceSubstitution(string, node, tokens, reference, metavariable);
                return referenceSubstitution;
            }
        }
    ]);
    return ReferenceSubstitution;
}(_substitution.default);
function stringFromReferenceAndMetavariable(reference, metavariable) {
    var referenceString = reference.getString(), metavariableString = metavariable.getString(), string = "[".concat(referenceString, " for ").concat(metavariableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IFJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3JlZmVyZW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNSZWZlcmVuY2VFcXVhbFRvKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuaXNFcXVhbFRvKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRSZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGFzdFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldExhc3RSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgICAgICBmaXJzdFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldEZpcnN0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gbGFzdFJlZmVyZW5jZU5vZGUuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIGlmIChzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBSZWZlcmVuY2UsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gZmlyc3RSZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtyZWZlcmVuY2VTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGUiLCJnZXRSZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGUiLCJpc1JlZmVyZW5jZUVxdWFsVG8iLCJpc0VxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0IiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsImdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJsYXN0UmVmZXJlbmNlTm9kZSIsImdldExhc3RSZWZlcmVuY2VOb2RlIiwiZmlyc3RSZWZlcmVuY2VOb2RlIiwiZ2V0Rmlyc3RSZWZlcmVuY2VOb2RlIiwic2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwiTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUmVmZXJlbmNlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwibm9kZUFzVG9rZW5zIiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzBEQUpMO21FQUNTO2dFQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBLHNCQUNQQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVk7Z0NBRHRDTDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBUUM7WUFBTUM7O1FBRXBCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQUxITDs7WUFRbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJKLFNBQVM7Z0JBQUksT0FBTyxJQUFJLENBQUNBLFNBQVMsQ0FBQ0ssU0FBUyxDQUFDTDtZQUFZOzs7WUFFNUVNLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JMLFlBQVk7Z0JBQUksT0FBTyxJQUFJLENBQUNBLFlBQVksQ0FBQ0ksU0FBUyxDQUFDSjtZQUFlOzs7O1lBRWpGTSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUMsT0FBTztnQkFDN0MsSUFBSUMsd0JBQXdCO2dCQUU1QixJQUFNQyw0QkFBNEJILGNBQWNJLDRCQUE0QjtnQkFFNUUsSUFBSUQsOEJBQThCLE1BQU07b0JBQ3RDLElBQU1FLG9CQUFvQkYsMEJBQTBCRyxvQkFBb0IsSUFDbEVDLHFCQUFxQkosMEJBQTBCSyxxQkFBcUIsSUFDcEVDLDJCQUEyQkosa0JBQWtCSywyQkFBMkI7b0JBRTlFLElBQUlELDZCQUE2QixNQUFNO3dCQUNyQyxJQUFRRSxZQUE0QkMsWUFBRyxDQUEvQkQsV0FBV0UsZUFBaUJELFlBQUcsQ0FBcEJDLGNBQ2JDLGdCQUFnQlAsb0JBQ2hCUSxtQkFBbUJOLDBCQUNuQmpCLFlBQVltQixVQUFVSyxpQkFBaUIsQ0FBQ0YsZUFBZWIsVUFDdkRSLGVBQWVvQixhQUFhSSxvQkFBb0IsQ0FBQ0Ysa0JBQWtCZCxVQUNuRVgsT0FBT2EsMkJBQ1BaLFNBQVNVLFFBQVFpQixZQUFZLENBQUM1QixPQUM5QkQsU0FBUzhCLG1DQUFtQzNCLFdBQVdDO3dCQUU3RFMsd0JBQXdCLElBeENYZCxzQkF3Q3FDQyxRQUFRQyxNQUFNQyxRQUFRQyxXQUFXQztvQkFDckY7Z0JBQ0Y7Z0JBRUEsT0FBT1M7WUFDVDs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkI1QixTQUFTLEVBQUVDLFlBQVksRUFBRVEsT0FBTztnQkFDbEUsSUFBTVosU0FBUzhCLG1DQUFtQzNCLFdBQVdDLGVBQ3ZENEIsUUFBUXBCLFFBQVFxQixRQUFRLElBQ3hCQyxTQUFTdEIsUUFBUXVCLFNBQVMsSUFDMUJDLHNDQUFzQ0Msa0JBQW1DLENBQUNDLHdCQUF3QixDQUFDdEMsUUFBUWdDLE9BQU9FLFNBQ2xIakMsT0FBT21DLG9DQUFvQ0csT0FBTyxJQUNsRHJDLFNBQVNrQyxvQ0FBb0NJLFNBQVMsSUFDdEQzQix3QkFBd0IsSUF0RGJkLHNCQXNEdUNDLFFBQVFDLE1BQU1DLFFBQVFDLFdBQVdDO2dCQUV6RixPQUFPUztZQUNUOzs7V0F6RG1CZDtFQUE4QjBDLHFCQUFZO0FBNEQvRCxTQUFTWCxtQ0FBbUMzQixTQUFTLEVBQUVDLFlBQVk7SUFDakUsSUFBTXNDLGtCQUFrQnZDLFVBQVV3QyxTQUFTLElBQ3JDQyxxQkFBcUJ4QyxhQUFhdUMsU0FBUyxJQUMzQzNDLFNBQVMsQUFBQyxJQUEwQjRDLE9BQXZCRixpQkFBZ0IsU0FBMEIsT0FBbkJFLG9CQUFtQjtJQUU3RCxPQUFPNUM7QUFDVCJ9