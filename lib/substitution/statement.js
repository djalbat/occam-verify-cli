"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _query = require("../utilities/query");
var _node = require("../utilities/node");
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
var substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution");
var StatementSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementSubstitution, Substitution);
    function StatementSubstitution(string, node) {
        _class_call_check(this, StatementSubstitution);
        var _this;
        _this = _call_super(this, StatementSubstitution, [
            string
        ]);
        _this.node = node;
        return _this;
    }
    _create_class(StatementSubstitution, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var statementSubstitution = null;
                if (json !== null) {
                    var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), substitutionString = string, substitutionNode = (0, _node.substitutionNodeFromSubstitutionString)(substitutionString, lexer, parser), node = substitutionNode;
                    statementSubstitution = new _substitution.default(string, node);
                }
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, fileContext) {
                var statementSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode) {
                    var node = substitutionNode, string = fileContext.nodeAsString(substitutionNode);
                    statementSubstitution = new _substitution.default(string, node);
                }
                return statementSubstitution;
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uTm9kZUZyb21TdWJzdGl0dXRpb25TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSkge1xuICAgIHN1cGVyKHN0cmluZyk7XG5cbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tU3Vic3RpdHV0aW9uU3RyaW5nKHN1YnN0aXR1dGlvblN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZTtcblxuICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGUsXG4gICAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsImdldE5vZGUiLCJmcm9tSlNPTiIsImpzb24iLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZUZyb21TdWJzdGl0dXRpb25TdHJpbmciLCJTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O21FQVBJO3FCQUVDO29CQUM2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRixzQ0FBTjtjQUFNQTthQUFBQSxzQkFDUEcsTUFBTSxFQUFFQyxJQUFJO2dDQURMSjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7O1FBRU4sTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLFdBQVc7Z0JBQy9CLElBQUlDLHdCQUF3QjtnQkFFNUIsSUFBSUYsU0FBUyxNQUFNO29CQUNqQixJQUFNLEFBQUVKLFNBQVdJLEtBQVhKLFFBQ0ZPLFFBQVFGLFlBQVlHLFFBQVEsSUFDNUJDLFNBQVNKLFlBQVlLLFNBQVMsSUFDOUJDLHFCQUFxQlgsUUFDckJZLG1CQUFtQkMsSUFBQUEsNENBQXNDLEVBQUNGLG9CQUFvQkosT0FBT0UsU0FDckZSLE9BQU9XO29CQUViTix3QkFBd0IsSUFBSVEscUJBQVksQ0FBQ2QsUUFBUUM7Z0JBQ25EO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRVgsV0FBVztnQkFDakQsSUFBSUMsd0JBQXdCO2dCQUU1QixJQUFNTSxtQkFBbUJkLHNCQUFzQmtCO2dCQUUvQyxJQUFJSixrQkFBa0I7b0JBQ3BCLElBQU1YLE9BQU9XLGtCQUNQWixTQUFTSyxZQUFZWSxZQUFZLENBQUNMO29CQUV4Q04sd0JBQXdCLElBQUlRLHFCQUFZLENBQUNkLFFBQVFDO2dCQUNuRDtnQkFFQSxPQUFPSztZQUNUOzs7V0F6Q21CVDtFQUE4QmlCLHFCQUFZIn0=