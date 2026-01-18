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
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _elements = require("../../elements");
var _fragment = require("../../utilities/fragment");
var _context = require("../../utilities/context");
var _instantiate = require("../../process/instantiate");
var _string = require("../../utilities/string");
var _element = require("../../utilities/element");
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
var _FrameSubstitution;
var _default = (0, _elements.define)((_FrameSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameSubstitution, Substitution);
    function FrameSubstitution(context, string, node, frame, metavariable) {
        _class_call_check(this, FrameSubstitution);
        var _this;
        _this = _call_super(this, FrameSubstitution, [
            context,
            string,
            node
        ]);
        _this.frame = frame;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(FrameSubstitution, [
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getTargetNode",
            value: function getTargetNode() {
                var metavariableNode = this.metavariable.getNode(), targetNode = metavariableNode; ///
                return targetNode;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var frameNode = this.frame.getNode(), replacementnode = frameNode; ///
                return replacementnode;
            }
        },
        {
            key: "isFrameEqualToFrame",
            value: function isFrameEqualToFrame(frame) {
                return this.frame.isEqualTo(frame);
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var metavariableComparesToParameter = this.metavariable.compareParameter(parameter), comparesToParameter = metavariableComparesToParameter; ///
                return comparesToParameter;
            }
        },
        {
            key: "validate",
            value: function validate(context) {
                var validates = false;
                var frameSubstitutionString = this.getString(); ///
                context.trace("Verifiying the '".concat(frameSubstitutionString, "' frame substitution..."));
                var frameSingular = this.frame.isSingular();
                if (frameSingular) {
                    if (this.metavariable !== null) {
                        var metavariablePresent = context.isMetavariablePresent(this.metavariable);
                        if (metavariablePresent) {
                            var frameMetavariable = this.frame.getMetavariable(), frameMetavariablePresent = context.isMetavariablePresent(frameMetavariable);
                            if (frameMetavariablePresent) {
                                validates = true;
                            } else {
                                context.debug("The '".concat(frameSubstitutionString, "' frame substitution's general frame's metavariable is not present."));
                            }
                        } else {
                            context.debug("The '".concat(frameSubstitutionString, "' frame substitution's specific frame's metavariable is not present."));
                        }
                    } else {
                        context.debug("The '".concat(frameSubstitutionString, "' frame substitution's general frame is not singular."));
                    }
                } else {
                    context.debug("The '".concat(frameSubstitutionString, "' frame substitution's specific frame is not singular."));
                }
                if (validates) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...verified the '".concat(frameSubstitutionString, "' frame substitution."));
                }
                return validates;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementNode = statement.getNode(), frameSubstitution = (0, _element.frameSubstitutionFromStatementNode)(statementNode, context);
                return frameSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, context) {
                return (0, _fragment.withinFragment)(function(context) {
                    var frameAndMetavariableString = (0, _string.frameSubstitutionStringFromFrameAndMetavariable)(frame, metavariable), string = frameAndMetavariableString, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, context);
                    metavariable = (0, _context.unchainMetavariable)(metavariable);
                    context.addMetavariable(metavariable);
                    return frameSubstitution;
                }, context);
            }
        }
    ]);
    return FrameSubstitution;
}(_substitution.default), _define_property(_FrameSubstitution, "name", "FrameSubstitution"), _FrameSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgd2l0aGluRnJhZ21lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZyYWdtZW50XCI7XG5pbXBvcnQgeyB1bmNoYWluTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRhcmdldE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgIHJldHVybiB0YXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50bm9kZSA9IGZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRub2RlO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG9GcmFtZShmcmFtZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5pc0VxdWFsVG8oZnJhbWUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLm1ldGF2YXJpYWJsZS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZpeWluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSB0aGlzLmZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICBpZiAodGhpcy5tZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlID0gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChmcmFtZU1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyBnZW5lcmFsIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyBzcGVjaWZpYyBmcmFtZSdzIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgZ2VuZXJhbCBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHNwZWNpZmljIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHdpdGhpbkZyYWdtZW50KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmcmFtZUFuZE1ldGF2YXJpYWJsZVN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gZnJhbWVBbmRNZXRhdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IHVuY2hhaW5NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZnJhbWUiLCJtZXRhdmFyaWFibGUiLCJnZXRGcmFtZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFRhcmdldE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInRhcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJmcmFtZU5vZGUiLCJyZXBsYWNlbWVudG5vZGUiLCJpc0ZyYW1lRXF1YWxUb0ZyYW1lIiwiaXNFcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsIm1ldGF2YXJpYWJsZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZVByZXNlbnQiLCJkZWJ1ZyIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwid2l0aGluRnJhZ21lbnQiLCJmcmFtZUFuZE1ldGF2YXJpYWJsZVN0cmluZyIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInVuY2hhaW5NZXRhdmFyaWFibGUiLCJhZGRNZXRhdmFyaWFibGUiLCJTdWJzdGl0dXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzttRUFUeUI7d0JBRUY7d0JBQ1E7dUJBQ0s7MkJBQ1M7c0JBQ21CO3VCQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9GLFdBQWVBLElBQUFBLGdCQUFNLHNDQUFDOzthQUFNQyxrQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxZQUFZO2dD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