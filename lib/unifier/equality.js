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
var _equivalences = require("../utilities/equivalences");
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
var EqualityUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(EqualityUnifier, Unifier);
    function EqualityUnifier() {
        _class_call_check(this, EqualityUnifier);
        return _call_super(this, EqualityUnifier, arguments);
    }
    _create_class(EqualityUnifier, [
        {
            key: "unify",
            value: function unify(leftTermNode, rightTermNode, localContext) {
                var equalityUnified;
                var nonTerminalNodeA = leftTermNode, nonTerminalNodeB = rightTermNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);
                equalityUnified = nonTerminalNodeUnified; ///
                return equalityUnified;
            }
        }
    ]);
    return EqualityUnifier;
}(_unifier.default);
_define_property(EqualityUnifier, "maps", [
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(termNodeA, termNodeB, localContext) {
            var termUnifiedWithTerm;
            var leftTermNode = termNodeA, rightTermNode = termNodeB, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);
            if (leftTermNodeMatchesRightTermNode) {
                termUnifiedWithTerm = true;
            } else {
                var equivalences = localContext.getEquivalences(), termNodes = [
                    leftTermNode,
                    rightTermNode
                ], equivalence = (0, _equivalences.findEquivalenceByTermNodes)(equivalences, termNodes);
                termUnifiedWithTerm = equivalence !== null;
            }
            if (!termUnifiedWithTerm) {
                var nonTerminalNodeA = termNodeA, nonTerminalNodeB = termNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = equalityUnifier.unifyChildNodes(childNodesA, childNodesB, localContext);
                termUnifiedWithTerm = childNodesVerified; ///
            }
            return termUnifiedWithTerm;
        }
    }
]);
var equalityUnifier = new EqualityUnifier();
var _default = equalityUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgRXF1YWxpdHlVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5VW5pZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBsZWZ0VGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQpO1xuXG4gICAgZXF1YWxpdHlVbmlmaWVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxpdHlVbmlmaWVkO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZFdpdGhUZXJtO1xuXG4gICAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRlcm1Ob2RlQSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0ZXJtTm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGUubWF0Y2gocmlnaHRUZXJtTm9kZSk7XG5cbiAgICAgICAgaWYgKGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlKSB7XG4gICAgICAgICAgdGVybVVuaWZpZWRXaXRoVGVybSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZXF1aXZhbGVuY2VzID0gbG9jYWxDb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMoZXF1aXZhbGVuY2VzLCB0ZXJtTm9kZXMpO1xuXG4gICAgICAgICAgdGVybVVuaWZpZWRXaXRoVGVybSA9IChlcXVpdmFsZW5jZSAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRlcm1VbmlmaWVkV2l0aFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gZXF1YWxpdHlVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZFdpdGhUZXJtID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZFdpdGhUZXJtO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgZXF1YWxpdHlVbmlmaWVyID0gbmV3IEVxdWFsaXR5VW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBlcXVhbGl0eVVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImxvY2FsQ29udGV4dCIsImVxdWFsaXR5VW5pZmllZCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInRlcm1VbmlmaWVkV2l0aFRlcm0iLCJsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSIsIm1hdGNoIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsImVxdWFsaXR5VW5pZmllciIsInVuaWZ5Q2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0VBOzs7ZUFBQTs7OzhEQWhFb0I7cUJBRU07NEJBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNQyxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtnQkFDN0MsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CSixjQUNuQkssbUJBQW1CSixlQUNuQksseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCSDtnQkFFN0ZDLGtCQUFrQkcsd0JBQXdCLEdBQUc7Z0JBRTdDLE9BQU9IO1lBQ1Q7OztXQVhJTDtFQUF3QlUsZ0JBQU87QUFhbkMsaUJBYklWLGlCQWFHVyxRQUFPO0lBQ1o7UUFDRUMsWUFBWWQ7UUFDWmUsWUFBWWY7UUFDWkcsT0FBTyxTQUFDYSxXQUFXQyxXQUFXWDtZQUM1QixJQUFJWTtZQUVKLElBQU1kLGVBQWVZLFdBQ2ZYLGdCQUFnQlksV0FDaEJFLG1DQUFtQ2YsYUFBYWdCLEtBQUssQ0FBQ2Y7WUFFNUQsSUFBSWMsa0NBQWtDO2dCQUNwQ0Qsc0JBQXNCO1lBQ3hCLE9BQU87Z0JBQ0wsSUFBTUcsZUFBZWYsYUFBYWdCLGVBQWUsSUFDM0NDLFlBQVk7b0JBQ1ZuQjtvQkFDQUM7aUJBQ0QsRUFDRG1CLGNBQWNDLElBQUFBLHdDQUEwQixFQUFDSixjQUFjRTtnQkFFN0RMLHNCQUF1Qk0sZ0JBQWdCO1lBQ3pDO1lBRUEsSUFBSSxDQUFDTixxQkFBcUI7Z0JBQ3hCLElBQU1WLG1CQUFtQlEsV0FDbkJQLG1CQUFtQlEsV0FDbkJTLDZCQUE2QmxCLGlCQUFpQm1CLGFBQWEsSUFDM0RDLDZCQUE2Qm5CLGlCQUFpQmtCLGFBQWEsSUFDM0RFLGNBQWNILDRCQUNkSSxjQUFjRiw0QkFDZEcscUJBQXFCQyxnQkFBZ0JDLGVBQWUsQ0FBQ0osYUFBYUMsYUFBYXhCO2dCQUVyRlksc0JBQXNCYSxvQkFBb0IsR0FBRztZQUMvQztZQUVBLE9BQU9iO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTWMsa0JBQWtCLElBQUk5QjtJQUU1QixXQUFlOEIifQ==