"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementSubstitutionNodeAndTokens;
    }
});
var _nodeAndTokens = /*#__PURE__*/ _interop_require_wildcard(require("../../nodeAndTokens"));
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
var bnf = "\n\n            _ ::= statementSubstitution... <END_OF_LINE> ;\n            \n      ", rule = (0, _nodeAndTokens.ruleFromBNF)(bnf);
var StatementSubstitutionNodeAndTokens = /*#__PURE__*/ function(NodeAndTokens) {
    _inherits(StatementSubstitutionNodeAndTokens, NodeAndTokens);
    function StatementSubstitutionNodeAndTokens() {
        _class_call_check(this, StatementSubstitutionNodeAndTokens);
        return _call_super(this, StatementSubstitutionNodeAndTokens, arguments);
    }
    _create_class(StatementSubstitutionNodeAndTokens, null, [
        {
            key: "fromStatementSubstitutionString",
            value: function fromStatementSubstitutionString(statementSubstitutionString, context) {
                var string = statementSubstitutionString, statementSubstitutionNodeAndTokens = _nodeAndTokens.default.fromString(StatementSubstitutionNodeAndTokens, string, context);
                return statementSubstitutionNodeAndTokens;
            }
        }
    ]);
    return StatementSubstitutionNodeAndTokens;
}(_nodeAndTokens.default);
_define_property(StatementSubstitutionNodeAndTokens, "rule", rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlQW5kVG9rZW5zL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlQW5kVG9rZW5zIGZyb20gXCIuLi8uLi9ub2RlQW5kVG9rZW5zXCI7XG5cbmltcG9ydCB7IHJ1bGVGcm9tQk5GIH0gZnJvbSBcIi4uLy4uL25vZGVBbmRUb2tlbnNcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgICAgICAgICBfIDo6PSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICAgICAgICBcbiAgICAgIGAsXG4gICAgICBydWxlID0gcnVsZUZyb21CTkYoYm5mKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyBleHRlbmRzIE5vZGVBbmRUb2tlbnMge1xuICBzdGF0aWMgcnVsZSA9IHJ1bGU7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcoc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zID0gTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMsIHN0cmluZywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMiLCJibmYiLCJydWxlIiwicnVsZUZyb21CTkYiLCJmcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiY29udGV4dCIsInN0cmluZyIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMiLCJOb2RlQW5kVG9rZW5zIiwiZnJvbVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7cUVBWEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFCLElBQU1DLE1BQU8sd0ZBS1BDLE9BQU9DLElBQUFBLDBCQUFXLEVBQUNGO0FBRVYsSUFBQSxBQUFNRCxtREFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBR1pJLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ0MsMkJBQTJCLEVBQUVDLE9BQU87Z0JBQ3pFLElBQU1DLFNBQVNGLDZCQUNURyxxQ0FBcUNDLHNCQUFhLENBQUNDLFVBQVUsQ0FMbERWLG9DQUt1Rk8sUUFBUUQ7Z0JBRWhILE9BQU9FO1lBQ1Q7OztXQVJtQlI7RUFBMkNTLHNCQUFhO0FBQzNFLGlCQURtQlQsb0NBQ1pFLFFBQU9BIn0=