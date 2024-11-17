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
var _query = require("../utilities/query");
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
var referenceNodeQuery = (0, _query.nodeQuery)("/referenceSubstitution/reference[0]"), metavariableNodeQuery = (0, _query.nodeQuery)("/referenceSubstitution/reference[1]/metavariable!"), referenceSubstitutionNodeQuery = (0, _query.nodeQuery)("/statement/referenceSubstitution");
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
                var referenceSubstitutionNode = referenceSubstitutionNodeQuery(statementNode);
                if (referenceSubstitutionNode !== null) {
                    var referenceNode = referenceNodeQuery(referenceSubstitutionNode), metavariableNode = metavariableNodeQuery(referenceSubstitutionNode);
                    if (referenceNode !== null && metavariableNode !== null) {
                        var Reference = _dom.default.Reference, Metavariable = _dom.default.Metavariable, reference = Reference.fromReferenceNode(referenceNode, context), metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), node = referenceSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromReferenceAndMetavariable(reference, metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IFJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3JlZmVyZW5jZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWZlcmVuY2VTdWJzdGl0dXRpb24vcmVmZXJlbmNlWzBdXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZmVyZW5jZVN1YnN0aXR1dGlvbi9yZWZlcmVuY2VbMV0vbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvcmVmZXJlbmNlU3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNSZWZlcmVuY2VFcXVhbFRvKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuaXNFcXVhbFRvKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VOb2RlUXVlcnkocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBSZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3JlZmVyZW5jZVN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZSIsImdldFJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZSIsImlzUmVmZXJlbmNlRXF1YWxUbyIsImlzRXF1YWxUbyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUbyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVmZXJlbmNlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJNZXRhdmFyaWFibGUiLCJmcm9tUmVmZXJlbmNlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwibm9kZUFzVG9rZW5zIiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzBEQVZMO21FQUNTO2dFQUN1QjtxQkFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHdDQUMvQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLHNEQUNsQ0UsaUNBQWlDRixJQUFBQSxnQkFBUyxFQUFDO0FBRWxDLElBQUEsQUFBTUYsc0NBQU47Y0FBTUE7YUFBQUEsc0JBQ1BLLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsWUFBWTtnQ0FEdENUOztnQkFFakIsa0JBRmlCQTtZQUVYSztZQUFRQztZQUFNQzs7UUFFcEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxZQUFZLEdBQUdBOzs7a0JBTEhUOztZQVFuQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkosU0FBUztnQkFBSSxPQUFPLElBQUksQ0FBQ0EsU0FBUyxDQUFDSyxTQUFTLENBQUNMO1lBQVk7OztZQUU1RU0sS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkwsWUFBWTtnQkFBSSxPQUFPLElBQUksQ0FBQ0EsWUFBWSxDQUFDSSxTQUFTLENBQUNKO1lBQWU7Ozs7WUFFakZNLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM3QyxJQUFJQyx3QkFBd0I7Z0JBRTVCLElBQU1DLDRCQUE0QmYsK0JBQStCWTtnQkFFakUsSUFBSUcsOEJBQThCLE1BQU07b0JBQ3RDLElBQU1DLGdCQUFnQm5CLG1CQUFtQmtCLDRCQUNuQ0UsbUJBQW1CbEIsc0JBQXNCZ0I7b0JBRS9DLElBQUksQUFBQ0Msa0JBQWtCLFFBQVVDLHFCQUFxQixNQUFPO3dCQUMzRCxJQUFRQyxZQUE0QkMsWUFBRyxDQUEvQkQsV0FBV0UsZUFBaUJELFlBQUcsQ0FBcEJDLGNBQ2JoQixZQUFZYyxVQUFVRyxpQkFBaUIsQ0FBQ0wsZUFBZUgsVUFDdkRSLGVBQWVlLGFBQWFFLG9CQUFvQixDQUFDTCxrQkFBa0JKLFVBQ25FWCxPQUFPYSwyQkFDUFosU0FBU1UsUUFBUVUsWUFBWSxDQUFDckIsT0FDOUJELFNBQVN1QixtQ0FBbUNwQixXQUFXQzt3QkFFN0RTLHdCQUF3QixJQXJDWGxCLHNCQXFDcUNLLFFBQVFDLE1BQU1DLFFBQVFDLFdBQVdDO29CQUNyRjtnQkFDRjtnQkFFQSxPQUFPUztZQUNUOzs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCckIsU0FBUyxFQUFFQyxZQUFZLEVBQUVRLE9BQU87Z0JBQ2xFLElBQU1aLFNBQVN1QixtQ0FBbUNwQixXQUFXQyxlQUN2RHFCLFFBQVFiLFFBQVFjLFFBQVEsSUFDeEJDLFNBQVNmLFFBQVFnQixTQUFTLElBQzFCQyxzQ0FBc0NDLGtCQUFtQyxDQUFDQyx3QkFBd0IsQ0FBQy9CLFFBQVF5QixPQUFPRSxTQUNsSDFCLE9BQU80QixvQ0FBb0NHLE9BQU8sSUFDbEQ5QixTQUFTMkIsb0NBQW9DSSxTQUFTLElBQ3REcEIsd0JBQXdCLElBbkRibEIsc0JBbUR1Q0ssUUFBUUMsTUFBTUMsUUFBUUMsV0FBV0M7Z0JBRXpGLE9BQU9TO1lBQ1Q7OztXQXREbUJsQjtFQUE4QnVDLHFCQUFZO0FBeUQvRCxTQUFTWCxtQ0FBbUNwQixTQUFTLEVBQUVDLFlBQVk7SUFDakUsSUFBTStCLGtCQUFrQmhDLFVBQVVpQyxTQUFTLElBQ3JDQyxxQkFBcUJqQyxhQUFhZ0MsU0FBUyxJQUMzQ3BDLFNBQVMsQUFBQyxJQUEwQnFDLE9BQXZCRixpQkFBZ0IsU0FBMEIsT0FBbkJFLG9CQUFtQjtJQUU3RCxPQUFPckM7QUFDVCJ9