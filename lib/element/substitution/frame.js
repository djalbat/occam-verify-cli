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
    function FrameSubstitution(context, string, node, targetFrame, replacementFrame) {
        _class_call_check(this, FrameSubstitution);
        var _this;
        _this = _call_super(this, FrameSubstitution, [
            context,
            string,
            node
        ]);
        _this.targetFrame = targetFrame;
        _this.replacementFrame = replacementFrame;
        return _this;
    }
    _create_class(FrameSubstitution, [
        {
            key: "getTargetFrame",
            value: function getTargetFrame() {
                return this.targetFrame;
            }
        },
        {
            key: "getReplacementFrame",
            value: function getReplacementFrame() {
                return this.replacementFrame;
            }
        },
        {
            key: "getTargetNode",
            value: function getTargetNode() {
                var targetFrameNode = this.targetFrame.getNode(), tergetNode = targetFrameNode; ///
                return tergetNode;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var replacementFrameNode = this.replacementFrame.getNode(), replacementNode = replacementFrameNode; ///
                return replacementNode;
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var targetFrameEqualToReplacementFrame = this.targetFrame.isEqualTo(this.replacementFrame), trivial = targetFrameEqualToReplacementFrame; ///
                return trivial;
            }
        },
        {
            key: "compareFrame",
            value: function compareFrame(frame, context) {
                var frameEqualToReplacementFrame = this.replacementFrame.isEqualTo(frame), comparedToFrame = frameEqualToReplacementFrame; ///
                return comparedToFrame;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var targetFrameComparesToParameter = this.targetFrame.compareParameter(parameter), comparesToParameter = targetFrameComparesToParameter; ///
                return comparesToParameter;
            }
        },
        {
            key: "validate",
            value: function validate(generalContext, specificContext) {
                var validates = false;
                var context = this.getContext(), frameSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(frameSubstitutionString, "' frame substitution..."));
                specificContext = context; ///
                var targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);
                if (targetFrameValidates) {
                    var replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);
                    if (replacementFrameValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...validated the '".concat(frameSubstitutionString, "' frame substitution."));
                }
                return validates;
            }
        },
        {
            key: "validateTargetFrame",
            value: function validateTargetFrame(generalContext, specificContext) {
                var targetFrameValidates = false;
                var context = generalContext, targetFrameString = this.targetFrame.getString(), frameSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(frameSubstitutionString, "' frame subtitution's '").concat(targetFrameString, "' target frame..."));
                var targetFrameSingular = this.targetFrame.isSingular();
                if (targetFrameSingular) {
                    var stated = true, assignments = null;
                    targetFrameValidates = this.targetFrame.validate(assignments, stated, context);
                } else {
                    context.debug("The '".concat(frameSubstitutionString, "' frame subtitution's '").concat(targetFrameString, "' target frame is not singular."));
                }
                if (targetFrameValidates) {
                    context.debug("...validated the '".concat(frameSubstitutionString, "' frame subtitution's '").concat(targetFrameString, "' target frame..."));
                }
                return targetFrameValidates;
            }
        },
        {
            key: "validateReplacementFrame",
            value: function validateReplacementFrame(generalContext, specificContext) {
                var replacementFrameValidates;
                var context = specificContext, replacementFrameString = this.replacementFrame.getString(), frameSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(frameSubstitutionString, "' frame subtitution's '").concat(replacementFrameString, "' replacement frame..."));
                var stated = true, assignments = null;
                replacementFrameValidates = this.replacementFrame.validate(assignments, stated, context);
                if (replacementFrameValidates) {
                    context.debug("...validated the '".concat(frameSubstitutionString, "' frame subtitution's '").concat(replacementFrameString, "' replacement frame..."));
                }
                return replacementFrameValidates;
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
                return (0, _context.literally)(function(context) {
                    var frameSubstitutionString = (0, _string.frameSubstitutionStringFromFrameAndMetavariable)(frame, metavariable), string = frameSubstitutionString, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, context);
                    return frameSubstitution;
                }, context);
            }
        }
    ]);
    return FrameSubstitution;
}(_substitution.default), _define_property(_FrameSubstitution, "name", "FrameSubstitution"), _FrameSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUsIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0VGFyZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRGcmFtZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBjb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmlzRXF1YWxUbyhmcmFtZSksXG4gICAgICAgICAgY29tcGFyZWRUb0ZyYW1lID0gZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb0ZyYW1lO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldEZyYW1lLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGFyZ2V0RnJhbWVTdHJpbmcgPSB0aGlzLnRhcmdldEZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRGcmFtZVNpbmd1bGFyID0gdGhpcy50YXJnZXRGcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVTaW5ndWxhcikge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgICAgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnRhcmdldEZyYW1lLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RnJhbWVTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRGcmFtZVN0cmluZ30nIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRGcmFtZVN0cmluZ30nIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImdldFRhcmdldEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJnZXROb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJjb21wYXJlRnJhbWUiLCJmcmFtZSIsImZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJjb21wYXJlZFRvRnJhbWUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ2YWxpZGF0ZXMiLCJnZXRDb250ZXh0IiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRhcmdldEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUiLCJzdWJzdGl0aXRvaW4iLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInRhcmdldEZyYW1lU3RyaW5nIiwidGFyZ2V0RnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInJlcGxhY2VtZW50RnJhbWVTdHJpbmciLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImxpdGVyYWxseSIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O21FQVJ5Qjt3QkFFRjt1QkFDRzsyQkFDbUI7c0JBQ21CO3VCQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9GLFdBQWVBLElBQUFBLGdCQUFNLHNDQUFDOzthQUFNQyxrQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxnQkFBZ0I7Z0NBRHRDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxXQUFXLEdBQUdBO1FBQ25CLE1BQUtDLGdCQUFnQixHQUFHQTs7Ozs7WUFHMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLENBQUNMLFdBQVcsQ0FBQ00sT0FBTyxJQUMxQ0MsYUFBYUYsaUJBQWlCLEdBQUc7Z0JBRXZDLE9BQU9FO1lBQ1Q7OztZQUVBQyxL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