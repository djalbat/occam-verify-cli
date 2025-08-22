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
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term");
var EquationalUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(EquationalUnifier, Unifier);
    function EquationalUnifier() {
        _class_call_check(this, EquationalUnifier);
        return _call_super(this, EquationalUnifier, arguments);
    }
    _create_class(EquationalUnifier, [
        {
            key: "equateTerms",
            value: function equateTerms(leftTermNode, rightTermNode, context) {
                var termsEquate;
                var generalNonTerminalNode = leftTermNode, specificNonTerminalNode = rightTermNode, nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);
                termsEquate = nonTerminalNodeUnifies; ///
                return termsEquate;
            }
        },
        {
            key: "equateStatements",
            value: function equateStatements(statementANode, statementBNode, context) {
                var statementsEquate;
                var generalNonTerminalNode = statementANode, specificNonTerminalNode = statementBNode, nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);
                statementsEquate = nonTerminalNodeUnifies; ///
                return statementsEquate;
            }
        }
    ]);
    return EquationalUnifier;
}(_unifier.default);
_define_property(EquationalUnifier, "maps", [
    {
        generalNodeQuery: termNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(leftTermNode, rightTermNode, context) {
            var termUnifies = false;
            if (!termUnifies) {
                var depth = Infinity, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);
                if (leftTermNodeMatchesRightTermNode) {
                    termUnifies = true;
                }
            }
            if (!termUnifies) {
                var equivalences = context.getEquivalences(), termNodes = [
                    leftTermNode,
                    rightTermNode
                ], equivalence = equivalences.findEquivalenceByTermNodes(termNodes);
                if (equivalence !== null) {
                    termUnifies = true;
                }
            }
            if (!termUnifies) {
                var depth1 = 1, leftTermNodeMatchesRightTermNode1 = leftTermNode.match(rightTermNode, depth1);
                if (leftTermNodeMatchesRightTermNode1) {
                    var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, childNodesUnify = equationalUnifier.unifyChildNodes(leftChildNodes, rightChildNodes, context);
                    if (childNodesUnify) {
                        termUnifies = true;
                    }
                }
            }
            return termUnifies;
        }
    }
]);
var equationalUnifier = new EquationalUnifier();
var _default = equationalUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFudGlvbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgRXF1YXRpb25hbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zRXF1YXRlO1xuXG4gICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVzID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICB0ZXJtc0VxdWF0ZSA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1zRXF1YXRlO1xuICB9O1xuXG4gIGVxdWF0ZVN0YXRlbWVudHMoc3RhdGVtZW50QU5vZGUsIHN0YXRlbWVudEJOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudHNFcXVhdGU7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50QU5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Qk5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZXMgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudHNFcXVhdGUgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzRXF1YXRlO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksICAvLy9cbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LCAvLy9cbiAgICAgIHVuaWZ5OiAobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghdGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBkZXB0aCA9IEluZmluaXR5LFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSAxLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNVbmlmeSA9IGVxdWF0aW9uYWxVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNVbmlmeSkge1xuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgZXF1YXRpb25hbFVuaWZpZXIgPSBuZXcgRXF1YXRpb25hbFVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXF1YXRpb25hbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkVxdWF0aW9uYWxVbmlmaWVyIiwiZXF1YXRlVGVybXMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiY29udGV4dCIsInRlcm1zRXF1YXRlIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllcyIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiZXF1YXRlU3RhdGVtZW50cyIsInN0YXRlbWVudEFOb2RlIiwic3RhdGVtZW50Qk5vZGUiLCJzdGF0ZW1lbnRzRXF1YXRlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJ1bmlmeSIsInRlcm1VbmlmaWVzIiwiZGVwdGgiLCJJbmZpbml0eSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVW5pZnkiLCJlcXVhdGlvbmFsVW5pZmllciIsInVuaWZ5Q2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUZBOzs7ZUFBQTs7OzhEQXZGb0I7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1DLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztnQkFDOUMsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCSixjQUN6QkssMEJBQTBCSixlQUMxQksseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILHdCQUF3QkMseUJBQXlCSDtnQkFFMUdDLGNBQWNHLHdCQUF3QixHQUFHO2dCQUV6QyxPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsY0FBYyxFQUFFQyxjQUFjLEVBQUVSLE9BQU87Z0JBQ3RELElBQUlTO2dCQUVKLElBQU1QLHlCQUF5QkssZ0JBQ3pCSiwwQkFBMEJLLGdCQUMxQkoseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILHdCQUF3QkMseUJBQXlCSDtnQkFFMUdTLG1CQUFtQkwsd0JBQXdCLEdBQUc7Z0JBRTlDLE9BQU9LO1lBQ1Q7OztXQXZCSWI7RUFBMEJjLGdCQUFPO0FBeUJyQyxpQkF6QklkLG1CQXlCR2UsUUFBTztJQUNaO1FBQ0VDLGtCQUFrQmxCO1FBQ2xCbUIsbUJBQW1CbkI7UUFDbkJvQixPQUFPLFNBQUNoQixjQUFjQyxlQUFlQztZQUNuQyxJQUFJZSxjQUFjO1lBRWxCLElBQUksQ0FBQ0EsYUFBYTtnQkFDaEIsSUFBTUMsUUFBUUMsVUFDUkMsbUNBQW1DcEIsYUFBYXFCLEtBQUssQ0FBQ3BCLGVBQWVpQjtnQkFFM0UsSUFBSUUsa0NBQWtDO29CQUNwQ0gsY0FBYztnQkFDaEI7WUFDRjtZQUVBLElBQUksQ0FBQ0EsYUFBYTtnQkFDaEIsSUFBTUssZUFBZXBCLFFBQVFxQixlQUFlLElBQ3RDQyxZQUFZO29CQUNWeEI7b0JBQ0FDO2lCQUNELEVBQ0R3QixjQUFjSCxhQUFhSSwwQkFBMEIsQ0FBQ0Y7Z0JBRTVELElBQUlDLGdCQUFnQixNQUFNO29CQUN4QlIsY0FBYztnQkFDaEI7WUFDRjtZQUVBLElBQUksQ0FBQ0EsYUFBYTtnQkFDaEIsSUFBTUMsU0FBUSxHQUNSRSxvQ0FBbUNwQixhQUFhcUIsS0FBSyxDQUFDcEIsZUFBZWlCO2dCQUUzRSxJQUFJRSxtQ0FBa0M7b0JBQ3BDLElBQU1PLHNCQUFzQjNCLGNBQ3RCNEIsdUJBQXVCM0IsZUFDdkI0QixnQ0FBZ0NGLG9CQUFvQkcsYUFBYSxJQUNqRUMsaUNBQWlDSCxxQkFBcUJFLGFBQWEsSUFDbkVFLGlCQUFpQkgsK0JBQ2pCSSxrQkFBa0JGLGdDQUNsQkcsa0JBQWtCQyxrQkFBa0JDLGVBQWUsQ0FBQ0osZ0JBQWdCQyxpQkFBaUIvQjtvQkFFM0YsSUFBSWdDLGlCQUFpQjt3QkFDbkJqQixjQUFjO29CQUNoQjtnQkFDRjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNa0Isb0JBQW9CLElBQUlyQztJQUU5QixXQUFlcUMifQ==