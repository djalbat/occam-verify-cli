"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Axiom;
    }
});
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
                var labelsString = (0, _topLevelAssertion.labelsStringFromLabels)(this.labels);
                this.fileContext.trace("Verifying the '".concat(labelsString, "' axiom..."));
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
                    this.fileContext.debug("...verified the '".concat(labelsString, "' axiom."));
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
                }), consequent = _consequent.default.fromConsequentNode(consequentNode, fileContext), proof = null, axiom = new Axiom(fileContext, labels, suppositions, consequent, proof);
                return axiom;
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbGFiZWxzU3RyaW5nRnJvbUxhYmVscyB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvYXhpb20vbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2F4aW9tL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyh0aGlzLmxhYmVscyk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCA9IGxhYmVsLnZlcmlmeUF0VG9wTGV2ZWwodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBheGlvbSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGZpbGVDb250ZXh0LCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXhpb20iLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsInZlcmlmeSIsInZlcmlmaWVkIiwibGFiZWxzU3RyaW5nIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyIsImxhYmVscyIsImZpbGVDb250ZXh0IiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwiLCJldmVyeSIsImxhYmVsIiwibGFiZWxWVmVyaWZpZWRBdFRvcExldmVsIiwidmVyaWZ5QXRUb3BMZXZlbCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwiY29uc2VxdWVudFZlcmlmaWVkIiwiY29uc2VxdWVudCIsImF4aW9tIiwiYWRkQXhpb20iLCJkZWJ1ZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tTm9kZSIsImxhYmVsTm9kZXMiLCJjb25zZXF1ZW50Tm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJMYWJlbCIsImZyb21MYWJlbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJDb25zZXF1ZW50IiwiZnJvbUNvbnNlcXVlbnROb2RlIiwicHJvb2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OzREQWJIO2lFQUNL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