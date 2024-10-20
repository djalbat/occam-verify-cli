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
                var labelsVerifiedWhenDeclared = this.labels.every(function(label) {
                    var labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                if (labelsVerifiedWhenDeclared) {
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
                var Label = _shim.default.Label, Supposition = _shim.default.Supposition, Consequent = _shim.default.Consequent, labelNodes = labelNodesQuery(axiomNode), consequentNode = consequentNodeQuery(axiomNode), suppositionNodes = suppositionNodesQuery(axiomNode), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = Consequent.fromConsequentNode(consequentNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = null, axiom = new Axiom(fileContext, string, labels, suppositions, consequent, proof);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgc3RyaW5nRnJvbUxhYmVscyB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9heGlvbS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb20vY29uc2VxdWVudFwiKSxcbiAgICAgIHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvYXhpb20vc3VwcG9zaXRpb25cIik7XG5cbmNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCA9IGxhYmVsLnZlcmlmeVdoZW5EZWNsYXJlZCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBheGlvbSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgU3VwcG9zaXRpb24sIENvbnNlcXVlbnQgfSA9IHNoaW0sXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIEF4aW9tXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb207XG4iXSwibmFtZXMiOlsibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJBeGlvbSIsInZlcmlmeSIsInZlcmlmaWVkIiwiYXhpb21TdHJpbmciLCJzdHJpbmciLCJmaWxlQ29udGV4dCIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJsYWJlbHMiLCJldmVyeSIsImxhYmVsIiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsImNvbnNlcXVlbnQiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21BeGlvbU5vZGUiLCJheGlvbU5vZGUiLCJMYWJlbCIsInNoaW0iLCJTdXBwb3NpdGlvbiIsIkNvbnNlcXVlbnQiLCJsYWJlbE5vZGVzIiwiY29uc2VxdWVudE5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJzdHJp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