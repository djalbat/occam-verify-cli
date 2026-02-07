"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get equateStatements () {
        return equateStatements;
    },
    get equateTerms () {
        return equateTerms;
    }
});
var _occamfurtle = require("occam-furtle");
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
var nodeQuery = _occamfurtle.queryUtilities.nodeQuery;
var termNodeQuery = nodeQuery("/term");
var EquationalPass = /*#__PURE__*/ function(EquivalencePass) {
    _inherits(EquationalPass, EquivalencePass);
    function EquationalPass() {
        _class_call_check(this, EquationalPass);
        return _call_super(this, EquationalPass, arguments);
    }
    return EquationalPass;
}(_occamlanguages.EquivalencePass);
_define_property(EquationalPass, "maps", [
    {
        leftNodeQuery: termNodeQuery,
        rightNodeQuery: termNodeQuery,
        run: function(leftTermNode, rightTermNode, context) {
            var success = false;
            if (!success) {
                var depth = Infinity, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);
                if (leftTermNodeMatchesRightTermNode) {
                    success = true;
                }
            }
            if (!success) {
                var equivalences = context.getEquivalences(), termNodes = [
                    leftTermNode,
                    rightTermNode
                ], equivalence = equivalences.findEquivalenceByTermNodes(termNodes);
                if (equivalence !== null) {
                    success = true;
                }
            }
            if (!success) {
                var depth1 = 1, leftTermNodeMatchesRightTermNode1 = leftTermNode.match(rightTermNode, depth1);
                if (leftTermNodeMatchesRightTermNode1) {
                    var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, descended = equationalPass.descend(leftChildNodes, rightChildNodes, context);
                    if (descended) {
                        success = true;
                    }
                }
            }
            return success;
        }
    }
]);
var equationalPass = new EquationalPass();
function equateTerms(leftTermNode, rightTermNode, context) {
    var termsEquate;
    var leftNode = leftTermNode, rightNode = rightTermNode, success = equationalPass.run(leftNode, rightNode, context);
    termsEquate = success; ///
    return termsEquate;
}
function equateStatements(leftStatementNode, rightStatementNode, context) {
    var statementsEquate;
    var leftNode = leftStatementNode, rightNode = rightStatementNode, success = equationalPass.run(leftNode, rightNode, context);
    statementsEquate = success; ///
    return statementsEquate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2VxdWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5pbXBvcnQgeyBFcXVpdmFsZW5jZVBhc3MgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpO1xuXG5jbGFzcyBFcXVhdGlvbmFsUGFzcyBleHRlbmRzIEVxdWl2YWxlbmNlUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGxlZnROb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksICAvLy9cbiAgICAgIHJpZ2h0Tm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LCAvLy9cbiAgICAgIHJ1bjogKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGRlcHRoID0gSW5maW5pdHksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGUubWF0Y2gocmlnaHRUZXJtTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgaWYgKGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGRlcHRoID0gMSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBsZWZ0Q2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJpZ2h0Q2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSBlcXVhdGlvbmFsUGFzcy5kZXNjZW5kKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgZXF1YXRpb25hbFBhc3MgPSBuZXcgRXF1YXRpb25hbFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWF0ZVRlcm1zKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybXNFcXVhdGU7XG5cbiAgY29uc3QgbGVmdE5vZGUgPSBsZWZ0VGVybU5vZGUsIC8vL1xuICAgICAgICByaWdodE5vZGUgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGVxdWF0aW9uYWxQYXNzLnJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCBjb250ZXh0KTtcblxuICB0ZXJtc0VxdWF0ZSA9IHN1Y2Nlc3M7IC8vL1xuXG4gIHJldHVybiB0ZXJtc0VxdWF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWF0ZVN0YXRlbWVudHMobGVmdFN0YXRlbWVudE5vZGUsIHJpZ2h0U3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50c0VxdWF0ZTtcblxuICBjb25zdCBsZWZ0Tm9kZSA9IGxlZnRTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgcmlnaHROb2RlID0gcmlnaHRTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGVxdWF0aW9uYWxQYXNzLnJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCBjb250ZXh0KTtcblxuICBzdGF0ZW1lbnRzRXF1YXRlID0gc3VjY2VzczsgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudHNFcXVhdGU7XG59XG4iXSwibmFtZXMiOlsiZXF1YXRlU3RhdGVtZW50cyIsImVxdWF0ZVRlcm1zIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJ0ZXJtTm9kZVF1ZXJ5IiwiRXF1YXRpb25hbFBhc3MiLCJFcXVpdmFsZW5jZVBhc3MiLCJtYXBzIiwibGVmdE5vZGVRdWVyeSIsInJpZ2h0Tm9kZVF1ZXJ5IiwicnVuIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwiZGVwdGgiLCJJbmZpbml0eSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJlcXVhdGlvbmFsUGFzcyIsImRlc2NlbmQiLCJ0ZXJtc0VxdWF0ZSIsImxlZnROb2RlIiwicmlnaHROb2RlIiwibGVmdFN0YXRlbWVudE5vZGUiLCJyaWdodFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRzRXF1YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE4RWdCQTtlQUFBQTs7UUFaQUM7ZUFBQUE7OzsyQkFoRWU7OEJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBTSxBQUFFQyxZQUFjQywyQkFBYyxDQUE1QkQ7QUFFUixJQUFNRSxnQkFBZ0JGLFVBQVU7QUFFaEMsSUFBQSxBQUFNRywrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7V0FBQUE7RUFBdUJDLCtCQUFlO0FBQzFDLGlCQURJRCxnQkFDR0UsUUFBTztJQUNaO1FBQ0VDLGVBQWVKO1FBQ2ZLLGdCQUFnQkw7UUFDaEJNLEtBQUssU0FBQ0MsY0FBY0MsZUFBZUM7WUFDakMsSUFBSUMsVUFBVTtZQUVkLElBQUksQ0FBQ0EsU0FBUztnQkFDWixJQUFNQyxRQUFRQyxVQUNSQyxtQ0FBbUNOLGFBQWFPLEtBQUssQ0FBQ04sZUFBZUc7Z0JBRTNFLElBQUlFLGtDQUFrQztvQkFDcENILFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLElBQUksQ0FBQ0EsU0FBUztnQkFDWixJQUFNSyxlQUFlTixRQUFRTyxlQUFlLElBQ3RDQyxZQUFZO29CQUNWVjtvQkFDQUM7aUJBQ0QsRUFDRFUsY0FBY0gsYUFBYUksMEJBQTBCLENBQUNGO2dCQUU1RCxJQUFJQyxnQkFBZ0IsTUFBTTtvQkFDeEJSLFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLElBQUksQ0FBQ0EsU0FBUztnQkFDWixJQUFNQyxTQUFRLEdBQ1JFLG9DQUFtQ04sYUFBYU8sS0FBSyxDQUFDTixlQUFlRztnQkFFM0UsSUFBSUUsbUNBQWtDO29CQUNwQyxJQUFNTyxzQkFBc0JiLGNBQ3RCYyx1QkFBdUJiLGVBQ3ZCYyxnQ0FBZ0NGLG9CQUFvQkcsYUFBYSxJQUNqRUMsaUNBQWlDSCxxQkFBcUJFLGFBQWEsSUFDbkVFLGlCQUFpQkgsK0JBQ2pCSSxrQkFBa0JGLGdDQUNsQkcsWUFBWUMsZUFBZUMsT0FBTyxDQUFDSixnQkFBZ0JDLGlCQUFpQmpCO29CQUUxRSxJQUFJa0IsV0FBVzt3QkFDYmpCLFVBQVU7b0JBQ1o7Z0JBQ0Y7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTWtCLGlCQUFpQixJQUFJM0I7QUFFcEIsU0FBU0osWUFBWVUsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDOUQsSUFBSXFCO0lBRUosSUFBTUMsV0FBV3hCLGNBQ1h5QixZQUFZeEIsZUFDWkUsVUFBVWtCLGVBQWV0QixHQUFHLENBQUN5QixVQUFVQyxXQUFXdkI7SUFFeERxQixjQUFjcEIsU0FBUyxHQUFHO0lBRTFCLE9BQU9vQjtBQUNUO0FBRU8sU0FBU2xDLGlCQUFpQnFDLGlCQUFpQixFQUFFQyxrQkFBa0IsRUFBRXpCLE9BQU87SUFDN0UsSUFBSTBCO0lBRUosSUFBTUosV0FBV0UsbUJBQ1hELFlBQVlFLG9CQUNaeEIsVUFBVWtCLGVBQWV0QixHQUFHLENBQUN5QixVQUFVQyxXQUFXdkI7SUFFeEQwQixtQkFBbUJ6QixTQUFTLEdBQUc7SUFFL0IsT0FBT3lCO0FBQ1QifQ==