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
            key: "getFrameSubstitutionNode",
            value: function getFrameSubstitutionNode() {
                var node = this.getNode(), frameSubstitutionNode = node; ///
                return frameSubstitutionNode;
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
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                return this.targetFrame.compareMetavariableName(metavariableName);
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                return this.targetFrame.getMetavariableName();
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
                var context = this.getContext();
                specificContext = context; ///
                var frameSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(frameSubstitutionString, "' frame substitution..."));
                var valid = this.isValid(context);
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(frameSubstitutionString, "' frame substitution is already valid."));
                } else {
                    var targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);
                    if (targetFrameValidates) {
                        var replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);
                        if (replacementFrameValidates) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        var substitution = this; ///
                        context.addSubstitution(substitution);
                        context.debug("...validated the '".concat(frameSubstitutionString, "' frame substitution."));
                    }
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
                    context.debug("...validated the '".concat(frameSubstitutionString, "' frame subtitution's '").concat(replacementFrameString, "' replacement frame."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUsIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0VGFyZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gdGhpcy50YXJnZXRGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRGcmFtZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBjb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmlzRXF1YWxUbyhmcmFtZSksXG4gICAgICAgICAgY29tcGFyZWRUb0ZyYW1lID0gZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb0ZyYW1lO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldEZyYW1lLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuaXNWYWxpZChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGFyZ2V0RnJhbWVTdHJpbmcgPSB0aGlzLnRhcmdldEZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRGcmFtZVNpbmd1bGFyID0gdGhpcy50YXJnZXRGcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVTaW5ndWxhcikge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgICAgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnRhcmdldEZyYW1lLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RnJhbWVTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRGcmFtZVN0cmluZ30nIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRGcmFtZVN0cmluZ30nIHJlcGxhY2VtZW50IGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0YXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJnZXRUYXJnZXRGcmFtZSIsImdldFJlcGxhY2VtZW50RnJhbWUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldEZyYW1lTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudEZyYW1lTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsImNvbXBhcmVGcmFtZSIsImZyYW1lIiwiZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImNvbXBhcmVkVG9GcmFtZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInZhbGlkYXRlcyIsImdldENvbnRleHQiLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWQiLCJpc1ZhbGlkIiwiZGVidWciLCJ0YXJnZXRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVTdHJpbmciLCJ0YXJnZXRGcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwicmVwbGFjZW1lbnRGcmFtZVN0cmluZyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibGl0ZXJhbGx5IiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7bUVBUnlCO3dCQUVGO3VCQUNHOzJCQUNtQjtzQkFDbUI7dUJBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0YsV0FBZUEsSUFBQUEsZ0JBQU0sc0NBQUM7O2FBQU1DLGtCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQjtnQ0FEdENMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFdBQVcsR0FBR0E7UUFDbkIsTUFBS0MsZ0JBQWdCLEdBQUdBOzs7OztZQUcxQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLHdCQUF3QlAsTUFBTSxHQUFHO2dCQUV2QyxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLENBQUNSLFdBQVcsQ0FBQ0ssT0FBTyxJQUMxQ0ksYUFBYUQsaUJBQWlCLEdBQUc7Z0JBRXZDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ1YsZ0JBQWdCLENBQUNJLE9BQU8sSUFDcERPLGtCQUFrQkQsc0JBQXNCLEdBQUc7Z0JBRWpELE9B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