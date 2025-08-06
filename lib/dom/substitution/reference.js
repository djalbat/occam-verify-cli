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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _reference = /*#__PURE__*/ _interop_require_default(require("../../context/partial/substitution/reference"));
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
var _default = (0, _dom.domAssigned)(/*#__PURE__*/ function(Substitution) {
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
}(_substitution.default));
function stringFromReferenceAndMetavariable(reference, metavariable) {
    var referenceString = reference.getString(), metavariableString = metavariable.getString(), string = "[".concat(referenceString, " for ").concat(metavariableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vc3Vic3RpdHV0aW9uL3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBSZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsL3N1YnN0aXR1dGlvbi9yZWZlcmVuY2VcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJlZmVyZW5jZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1JlZmVyZW5jZUVxdWFsVG8ocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5pc0VxdWFsVG8ocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpOyB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmIChyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsYXN0UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0TGFzdFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgICAgIGZpcnN0UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0Rmlyc3RSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBsYXN0UmVmZXJlbmNlTm9kZS5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgaWYgKHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBmaXJzdFJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBSZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7cmVmZXJlbmNlU3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGUiLCJnZXRSZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGUiLCJpc1JlZmVyZW5jZUVxdWFsVG8iLCJpc0VxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0IiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsImdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJsYXN0UmVmZXJlbmNlTm9kZSIsImdldExhc3RSZWZlcmVuY2VOb2RlIiwiZmlyc3RSZWZlcmVuY2VOb2RlIiwiZ2V0Rmlyc3RSZWZlcmVuY2VOb2RlIiwic2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwiTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUmVmZXJlbmNlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwibm9kZUFzVG9rZW5zIiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJEQU5nQjttRUFDUztnRUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloRCxXQUFlQSxJQUFBQSxnQkFBVyxnQkFBQzs7YUFBTUMsc0JBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVk7Z0NBRDFCTDs7Z0JBRTdCLGtCQUY2QkE7WUFFdkJDO1lBQVFDO1lBQU1DOztRQUVwQixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CSixTQUFTO2dCQUFJLE9BQU8sSUFBSSxDQUFDQSxTQUFTLENBQUNLLFNBQVMsQ0FBQ0w7WUFBWTs7O1lBRTVFTSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCTCxZQUFZO2dCQUFJLE9BQU8sSUFBSSxDQUFDQSxZQUFZLENBQUNJLFNBQVMsQ0FBQ0o7WUFBZTs7OztZQUVqRk0sS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdDLElBQUlDLHdCQUF3QjtnQkFFNUIsSUFBTUMsNEJBQTRCSCxjQUFjSSw0QkFBNEI7Z0JBRTVFLElBQUlELDhCQUE4QixNQUFNO29CQUN0QyxJQUFNRSxvQkFBb0JGLDBCQUEwQkcsb0JBQW9CLElBQ2xFQyxxQkFBcUJKLDBCQUEwQksscUJBQXFCLElBQ3BFQywyQkFBMkJKLGtCQUFrQkssMkJBQTJCO29CQUU5RSxJQUFJRCw2QkFBNkIsTUFBTTt3QkFDckMsSUFBUUUsWUFBNEJDLFlBQUcsQ0FBL0JELFdBQVdFLGVBQWlCRCxZQUFHLENBQXBCQyxjQUNiQyxnQkFBZ0JQLG9CQUNoQlEsbUJBQW1CTiwwQkFDbkJqQixZQUFZbUIsVUFBVUssaUJBQWlCLENBQUNGLGVBQWViLFVBQ3ZEUixlQUFlb0IsYUFBYUksb0JBQW9CLENBQUNGLGtCQUFrQmQsVUFDbkVYLE9BQU9hLDJCQUNQWixTQUFTVSxRQUFRaUIsWUFBWSxDQUFDNUIsT0FDOUJELFNBQVM4QixtQ0FBbUMzQixXQUFXQzt3QkFFN0RTLHdCQUF3QixJQUFJZCxzQkFBc0JDLFFBQVFDLE1BQU1DLFFBQVFDLFdBQVdDO29CQUNyRjtnQkFDRjtnQkFFQSxPQUFPUztZQUNUOzs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QjVCLFNBQVMsRUFBRUMsWUFBWSxFQUFFUSxPQUFPO2dCQUNsRSxJQUFNWixTQUFTOEIsbUNBQW1DM0IsV0FBV0MsZUFDdkQ0QixRQUFRcEIsUUFBUXFCLFFBQVEsSUFDeEJDLFNBQVN0QixRQUFRdUIsU0FBUyxJQUMxQkMsc0NBQXNDQyxrQkFBbUMsQ0FBQ0Msd0JBQXdCLENBQUN0QyxRQUFRZ0MsT0FBT0UsU0FDbEhqQyxPQUFPbUMsb0NBQW9DRyxPQUFPLElBQ2xEckMsU0FBU2tDLG9DQUFvQ0ksU0FBUyxJQUN0RDNCLHdCQUF3QixJQUFJZCxzQkFBc0JDLFFBQVFDLE1BQU1DLFFBQVFDLFdBQVdDO2dCQUV6RixPQUFPUztZQUNUOzs7O0VBekQ2RDRCLHFCQUFZO0FBNEQzRSxTQUFTWCxtQ0FBbUMzQixTQUFTLEVBQUVDLFlBQVk7SUFDakUsSUFBTXNDLGtCQUFrQnZDLFVBQVV3QyxTQUFTLElBQ3JDQyxxQkFBcUJ4QyxhQUFhdUMsU0FBUyxJQUMzQzNDLFNBQVMsQUFBQyxJQUEwQjRDLE9BQXZCRixpQkFBZ0IsU0FBMEIsT0FBbkJFLG9CQUFtQjtJQUU3RCxPQUFPNUM7QUFDVCJ9