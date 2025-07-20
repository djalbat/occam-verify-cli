"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CombinedCustomGrammar;
    }
});
var _occamgrammarutilities = require("occam-grammar-utilities");
var _occamcustomgrammars = require("occam-custom-grammars");
var _node = /*#__PURE__*/ _interop_require_default(require("../node"));
var _nodeMap = /*#__PURE__*/ _interop_require_default(require("../nodeMap"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var CombinedCustomGrammar = /*#__PURE__*/ function(CombinedCustomGrammarBase) {
    _inherits(CombinedCustomGrammar, CombinedCustomGrammarBase);
    function CombinedCustomGrammar() {
        _class_call_check(this, CombinedCustomGrammar);
        return _call_super(this, CombinedCustomGrammar, arguments);
    }
    _create_class(CombinedCustomGrammar, [
        {
            key: "getCombinedRules",
            value: function getCombinedRules() {
                var rules = this.getRules(), combinedRules = rules; ///
                return combinedRules;
            }
        },
        {
            key: "postProcess",
            value: function postProcess(rules) {
                var combinedRules = this.getCombinedRules();
                rules = _to_consumable_array(rules).concat(_to_consumable_array(combinedRules));
                rules.forEach(function(rule) {
                    var ruleName = rule.getName(), NonTerminalNode = _nodeMap.default[ruleName] || _node.default; ///
                    rule.setNonTerminalNode(NonTerminalNode);
                });
                rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
                return rules;
            }
        }
    ]);
    return CombinedCustomGrammar;
}(_occamcustomgrammars.CombinedCustomGrammar);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBDb21iaW5lZEN1c3RvbUdyYW1tYXIgYXMgQ29tYmluZWRDdXN0b21HcmFtbWFyQmFzZSB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcbmltcG9ydCBub2RlTWFwIGZyb20gXCIuLi9ub2RlTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciBleHRlbmRzIENvbWJpbmVkQ3VzdG9tR3JhbW1hckJhc2Uge1xuICBnZXRDb21iaW5lZFJ1bGVzKCkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIGNvbWJpbmVkUnVsZXMgPSBydWxlczsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkUnVsZXM7XG4gIH1cblxuICBwb3N0UHJvY2VzcyhydWxlcykge1xuICAgIGNvbnN0IGNvbWJpbmVkUnVsZXMgPSB0aGlzLmdldENvbWJpbmVkUnVsZXMoKTtcblxuICAgIHJ1bGVzID0gWyAvLy9cbiAgICAgIC4uLnJ1bGVzLFxuICAgICAgLi4uY29tYmluZWRSdWxlcyxcbiAgICBdO1xuXG4gICAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IG5vZGVNYXBbcnVsZU5hbWVdIHx8IE5vZGU7IC8vL1xuXG4gICAgICBydWxlLnNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZ2V0Q29tYmluZWRSdWxlcyIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJjb21iaW5lZFJ1bGVzIiwicG9zdFByb2Nlc3MiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vZGVNYXAiLCJOb2RlIiwic2V0Tm9uVGVybWluYWxOb2RlIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hckJhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3FDQU5rQjttQ0FDNEI7MkRBRWxEOzhEQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsZ0JBQWdCRixPQUFRLEdBQUc7Z0JBRWpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUgsS0FBSztnQkFDZixJQUFNRSxnQkFBZ0IsSUFBSSxDQUFDSCxnQkFBZ0I7Z0JBRTNDQyxRQUFRLEFBQ04scUJBQUdBLGNBQ0gscUJBQUdFO2dCQUdMRixNQUFNSSxPQUFPLENBQUMsU0FBQ0M7b0JBQ2IsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QkMsa0JBQWtCQyxnQkFBTyxDQUFDSCxTQUFTLElBQUlJLGFBQUksRUFBRSxHQUFHO29CQUV0REwsS0FBS00sa0JBQWtCLENBQUNIO2dCQUMxQjtnQkFFQVIsUUFBUVksSUFBQUEsNkNBQXNCLEVBQUNaLFFBQVMsR0FBRztnQkFFM0MsT0FBT0E7WUFDVDs7O1dBMUJtQkY7RUFBOEJlLDBDQUF5QiJ9