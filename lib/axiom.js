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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_wildcard(require("./topLevelAssertion"));
var _query = require("./utilities/query");
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
var labelNodesQuery = (0, _query.nodesQuery)("/axiom/label"), consequentNodeQuery = (0, _query.nodeQuery)("/axiom/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/axiom/supposition");
var Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Axiom, TopLevelAssertion);
    function Axiom() {
        _class_call_check(this, Axiom);
        return _call_super(this, Axiom, arguments);
    }
    _create_class(Axiom, [
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var axiomString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(axiomString, "' axiom..."));
                var labelsVerifiedAtTopLevel = this.labels.every(function(label) {
                    var labelVVerifiedAtTopLevel = label.verifyAtTopLevel(_this.fileContext);
                    if (labelVVerifiedAtTopLevel) {
                        return true;
                    }
                });
                if (labelsVerifiedAtTopLevel) {
                    var localContext = _local.default.fromFileContext(this.fileContext), suppositionsVerified = this.suppositions.every(function(supposition) {
                        var suppositionVerified = supposition.verify(localContext);
                        if (suppositionVerified) {
                            return true;
                        }
                    });
                    if (suppositionsVerified) {
                        var consequentVerified = this.consequent.verify(localContext);
                        if (consequentVerified) {
                            var axiom = this; ///
                            this.fileContext.addAxiom(axiom);
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(axiomString, "' axiom."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(Axiom, json, fileContext);
            }
        },
        {
            key: "fromAxiomNode",
            value: function fromAxiomNode(axiomNode, fileContext) {
                var labelNodes = labelNodesQuery(axiomNode), consequentNode = consequentNodeQuery(axiomNode), suppositionNodes = suppositionNodesQuery(axiomNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = _consequent.default.fromConsequentNode(consequentNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = null, axiom = new Axiom(fileContext, string, labels, suppositions, consequent, proof);
                return axiom;
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Axiom: Axiom
});
var _default = Axiom;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IHN0cmluZ0Zyb21MYWJlbHMgfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvYXhpb20vbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2F4aW9tL3N1cHBvc2l0aW9uXCIpO1xuXG5jbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCA9IGxhYmVsLnZlcmlmeUF0VG9wTGV2ZWwodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBheGlvbSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIEF4aW9tXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb207XG4iXSwibmFtZXMiOlsibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJBeGlvbSIsInZlcmlmeSIsInZlcmlmaWVkIiwiYXhpb21TdHJpbmciLCJzdHJpbmciLCJmaWxlQ29udGV4dCIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWRBdFRvcExldmVsIiwibGFiZWxzIiwiZXZlcnkiLCJsYWJlbCIsImxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCIsInZlcmlmeUF0VG9wTGV2ZWwiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsImNvbnNlcXVlbnQiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21BeGlvbU5vZGUiLCJheGlvbU5vZGUiLCJsYWJlbE5vZGVzIiwiY29uc2VxdWVudE5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiTGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiQ29uc2VxdWVudCIsImZyb21Db25zZXF1ZW50Tm9kZSIsInN0cmluZ0Zyb21MYWJlbHMiLCJwcm9vZiIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJGQTs7O2VBQUE7OzsyREF6RmlCOzREQUNDO2lFQUNLO2tFQUNDOzREQUNDO3lFQUNLO3FCQUdROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGlCQUM3QkMsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDLHNCQUNoQ0Msd0JBQXdCSCxJQUFBQSxpQkFBVSxFQUFDO0FBRXpDLElBQUEsQUFBTUksc0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsY0FBYyxJQUFJLENBQUNDLE1BQU0sRUFBRyxHQUFHO2dCQUVyQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpILGFBQVk7Z0JBRXJELElBQU1JLDJCQUEyQixJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLFNBQUNDO29CQUNsRCxJQUFNQywyQkFBMkJELE1BQU1FLGdCQUFnQixDQUFDLE1BQUtQLFdBQVc7b0JBRXhFLElBQUlNLDBCQUEwQjt3QkFDNUIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJSiwwQkFBMEI7b0JBQzVCLElBQU1NLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDLElBQUksQ0FBQ1YsV0FBVyxHQUM1RFcsdUJBQXVCLElBQUksQ0FBQ0MsWUFBWSxDQUFDUixLQUFLLENBQUMsU0FBQ1M7d0JBQzlDLElBQU1DLHNCQUFzQkQsWUFBWWpCLE1BQU0sQ0FBQ1k7d0JBRS9DLElBQUlNLHFCQUFxQjs0QkFDdkIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFTixJQUFJSCxzQkFBc0I7d0JBQ3hCLElBQU1JLHFCQUFxQixJQUFJLENBQUNDLFVBQVUsQ0FBQ3BCLE1BQU0sQ0FBQ1k7d0JBRWxELElBQUlPLG9CQUFvQjs0QkFDdEIsSUFBTUUsUUFBUSxJQUFJLEVBQUcsR0FBRzs0QkFFeEIsSUFBSSxDQUFDakIsV0FBVyxDQUFDa0IsUUFBUSxDQUFDRDs0QkFFMUJwQixXQUFXO3dCQUNiO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDRyxXQUFXLENBQUNtQixLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWnJCLGFBQVk7Z0JBQ3pEO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT3VCLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRXJCLFdBQVc7Z0JBQUksT0FBT3NCLDBCQUFpQixDQUFDRixRQUFRLENBOUNsRXpCLE9BOEMwRTBCLE1BQU1yQjtZQUFjOzs7WUFFM0Z1QixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUV4QixXQUFXO2dCQUN6QyxJQUFNeUIsYUFBYW5DLGdCQUFnQmtDLFlBQzdCRSxpQkFBaUJsQyxvQkFBb0JnQyxZQUNyQ0csbUJBQW1CakMsc0JBQXNCOEIsWUFDekNyQixTQUFTc0IsV0FBV0csR0FBRyxDQUFDLFNBQUNDO29CQUN2QixJQUFNeEIsUUFBUXlCLGNBQUssQ0FBQ0MsYUFBYSxDQUFDRixXQUFXN0I7b0JBRTdDLE9BQU9LO2dCQUNULElBQ0FPLGVBQWVlLGlCQUFpQkMsR0FBRyxDQUFDLFNBQUNJO29CQUNuQyxJQUFNbkIsY0FBY29CLG9CQUFXLENBQUNDLG1CQUFtQixDQUFDRixpQkFBaUJoQztvQkFFckUsT0FBT2E7Z0JBQ1QsSUFDQUcsYUFBYW1CLG1CQUFVLENBQUNDLGtCQUFrQixDQUFDVixnQkFBZ0IxQixjQUMzREQsU0FBU3NDLElBQUFBLG1DQUFnQixFQUFDbEMsU0FDMUJtQyxRQUFRLE1BQ1JyQixRQUFRLElBakVadEIsTUFpRXNCSyxhQUFhRCxRQUFRSSxRQUFRUyxjQUFjSSxZQUFZc0I7Z0JBRS9FLE9BQU9yQjtZQUNUOzs7V0FwRUl0QjtFQUFjMkIsMEJBQWlCO0FBdUVyQ2lCLE9BQU9DLE1BQU0sQ0FBQ0MsYUFBSSxFQUFFO0lBQ2xCOUMsT0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=