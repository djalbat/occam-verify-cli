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
var _necessary = require("necessary");
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _constants = require("../constants");
var _element = require("../utilities/element");
var _metaTypeNames = require("../metaTypeNames");
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
var _Frame;
var first = _necessary.arrayUtilities.first;
var _default = (0, _elements.define)((_Frame = /*#__PURE__*/ function() {
    function Frame(context, string, node, assumptions) {
        _class_call_check(this, Frame);
        this.context = context;
        this.string = string;
        this.node = node;
        this.assumptions = assumptions;
    }
    _create_class(Frame, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getAssumptions",
            value: function getAssumptions() {
                return this.assumptions;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.assumptions.length;
            }
        },
        {
            key: "getAssumption",
            value: function getAssumption() {
                var assumption = null;
                var length = this.getLength();
                if (length === 1) {
                    var firstAssumption = first(this.assumptions);
                    assumption = firstAssumption; ///
                }
                return assumption;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable = null;
                var singular = this.isSingular();
                if (singular) {
                    var assumption = this.getAssumption();
                    metavariable = assumption.getMetavariable();
                }
                return metavariable;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                var singular = this.isSingular();
                if (singular) {
                    metavariableName = this.node.getMetavariableName();
                }
                return metavariableName;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                return this.node.isSingular();
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(frame) {
                var frameNode = frame.getNode(), matches = this.node.match(frameNode), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable, context) {
                var metavariableEqualToMetavariable;
                var singular = this.isSingular();
                if (singular) {
                    var metavariableA = metavariable, singularMetavariableNode = this.node.getSingularMetavariableNode(), metavariableName = singularMetavariableNode.getMetavariableName();
                    metavariable = context.findMetavariableByMetavariableName(metavariableName);
                    var metavariableB = metavariable, equalTo = metavariableA.isEqualTo(metavariableB);
                    metavariableEqualToMetavariable = equalTo; ///
                }
                return metavariableEqualToMetavariable;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                return this.node.match(frameNode);
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches = false;
                var frameString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(frameString, "' frame..."));
                if (!substitutionMatches) {
                    substitutionMatches = this.assumptions.some(function(assumption) {
                        var substitutionMatchesAssumption = assumption.matchSubstitution(substitution, context);
                        if (substitutionMatchesAssumption) {
                            return true;
                        }
                    });
                }
                if (substitutionMatches) {
                    context.debug("...matched the '".concat(substitutionString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "matchSubstitutions",
            value: function matchSubstitutions(substitutions, context) {
                var _this = this;
                var substitutionsMatch;
                var frameString = this.string, substitutionsString = substitutions.asString();
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame..."));
                substitutionsMatch = substitutions.everySubstitution(function(substitution) {
                    var substitutionMatches = _this.matchSubstitution(substitution, context);
                    if (substitutionMatches) {
                        return true;
                    }
                });
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionsMatch;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                var assumptionsVerify = this.verifyAssumptions(assignments, stated, context);
                if (assumptionsVerify) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    var frame = this; ///
                    context.addFrame(frame);
                    context.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' stated frame..."));
                var singular = this.isSingular();
                if (!singular) {
                    context.trace("The '".concat(frameString, "' stated frame must be singular."));
                } else {
                    verifiesWhenStated = true;
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(frameString, "' stated frame."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' derived frame..."));
                verifiesWhenDerived = true;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(frameString, "' derived frame."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "verifyAssumptions",
            value: function verifyAssumptions(assignments, stated, context) {
                var assumptionsVerify = true; ///
                var length = this.getLength();
                if (length > 0) {
                    var sOrNothing = length > 1 ? _constants.S : _constants.NOTHING, assumptionsString = assumptionsStringFromAssumptions(this.assumptions);
                    context.trace("Verifying the '".concat(assumptionsString, "' assumption").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    assumptionsVerify = this.assumptions.every(function(assumption) {
                        var assumptionVerifies = assumption.verify(assignments, stated, context);
                        return assumptionVerifies;
                    });
                    if (assumptionsVerify) {
                        context.debug("...verified the '".concat(assumptionsString, "' assumption").concat(sOrNothing, "."));
                    }
                }
                return assumptionsVerify;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiesGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verifies = this.verify(assignments, stated, context);
                    verifiesGivenMetaType = verifies; ///
                }
                if (verifiesGivenMetaType) {
                    context.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiesGivenMetaType;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = null;
                var singular = this.isSingular();
                if (singular) {
                    var assumption = this.getAssumption(), assumptionJSON = assumption.toJSON();
                    json = assumptionJSON; ///
                }
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var frame = null;
                if (json !== null) {
                    var Assumption = _elements.default.Assumption, assumption = Assumption.fromJSON(json, context), assumptions = [
                        assumption
                    ], string = null, node = null;
                    frame = new Frame(string, node, assumptions);
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(), _define_property(_Frame, "name", "Frame"), _Frame));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IFMsIE5PVEhJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmcmFtZUZyb21GcmFtZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucy5sZW5ndGg7IH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEFzc3VtcHRpb24gPSBmaXJzdCh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgYXNzdW1wdGlvbiA9IGZpcnN0QXNzdW1wdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5nZXRBc3N1bXB0aW9uKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGFzc3VtcHRpb24uZ2V0TWV0YXZhcmlhYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkgeyByZXR1cm4gdGhpcy5ub2RlLmlzU2luZ3VsYXIoKTsgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKGZyYW1lTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpXG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGUsXG4gICAgICAgICAgICBlcXVhbFRvID0gbWV0YXZhcmlhYmxlQS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBlcXVhbFRvOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChmcmFtZU5vZGUpOyB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuYXNzdW1wdGlvbnMuc29tZSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzQXNzdW1wdGlvbiA9IGFzc3VtcHRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc0Fzc3VtcHRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNNYXRjaDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIHN1YnN0aXR1dGlvbnNNYXRjaCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5QXNzdW1wdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvbnNWZXJpZnkpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKCFzaW5ndWxhcikge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZlcmlmeUFzc3VtcHRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWZXJpZnkgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNPck5vdGhpbmcgPSAobGVuZ3RoID4gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgUyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PVEhJTkcsXG4gICAgICAgICAgICBhc3N1bXB0aW9uc1N0cmluZyA9IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbiR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBhc3N1bXB0aW9uc1ZlcmlmeSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZlcmlmaWVzID0gYXNzdW1wdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGFzc3VtcHRpb25WZXJpZmllcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbiR7c09yTm90aGluZ30uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gdmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmdldEFzc3VtcHRpb24oKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25KU09OID0gYXNzdW1wdGlvbi50b0pTT04oKTtcblxuICAgICAganNvbiA9IGFzc3VtcHRpb25KU09OOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPWVsZW1lbnRzLFxuICAgICAgICAgICAgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtcbiAgICAgICAgICAgICAgYXNzdW1wdGlvblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgICBub2RlID0gbnVsbDtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRnJhbWUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFzc3VtcHRpb25zIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRBc3N1bXB0aW9ucyIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiZmlyc3RBc3N1bXB0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lTm9kZSIsIm1hdGNoZXMiLCJtYXRjaCIsImVxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVCIiwibWF0Y2hGcmFtZU5vZGUiLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJmcmFtZVN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsInN1YnN0aXR1dGlvbk1hdGNoZXNBc3N1bXB0aW9uIiwiZGVidWciLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc01hdGNoIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwiYXNzdW1wdGlvbnNWZXJpZnkiLCJ2ZXJpZnlBc3N1bXB0aW9ucyIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsInNPck5vdGhpbmciLCJTIiwiTk9USElORyIsImFzc3VtcHRpb25zU3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMiLCJldmVyeSIsImFzc3VtcHRpb25WZXJpZmllcyIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwidG9KU09OIiwianNvbiIsImFzc3VtcHRpb25KU09OIiwiZnJvbUpTT04iLCJBc3N1bXB0aW9uIiwiZWxlbWVudHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7Ozt5QkFYK0I7Z0VBRVY7eUJBR007dUJBQ1E7NkJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLDBCQUFDO2FBQU1DLE1BQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVc7Z0NBRHBCSjtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osV0FBVztZQUN6Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0wsV0FBVyxDQUFDTSxNQUFNO1lBQUU7OztZQUU5Q0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGFBQWE7Z0JBRWpCLElBQU1GLFNBQVMsSUFBSSxDQUFDRCxTQUFTO2dCQUU3QixJQUFJQyxXQUFXLEdBQUc7b0JBQ2hCLElBQU1HLGtCQUFrQmhCLE1BQU0sSUFBSSxDQUFDTyxXQUFXO29CQUU5Q1EsYUFBYUMsaUJBQWlCLEdBQUc7Z0JBQ25DO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1osSUFBTUosYUFBYSxJQUFJLENBQUNELGFBQWE7b0JBRXJDSSxlQUFlSCxXQUFXRSxlQUFlO2dCQUMzQztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUgsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1pHLG1CQUFtQixJQUFJLENBQUNoQixJQUFJLENBQUNlLG1CQUFtQjtnQkFDbEQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBZSxPQUFPLElBQUksQ0FBQ2QsSUFBSSxDQUFDYyxVQUFVO1lBQUk7OztZQUU5Q0csS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLEtBQUs7Z0JBQ2IsSUFBTUMsWUFBWUQsTUFBTWQsT0FBTyxJQUN6QmdCLFVBQVUsSUFBSSxDQUFDcEIsSUFBSSxDQUFDcUIsS0FBSyxDQUFDRixZQUMxQkcsVUFBVUYsU0FBVSxHQUFHO2dCQUU3QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ1gsWUFBWSxFQUFFZCxPQUFPO2dCQUNyRCxJQUFJMEI7Z0JBRUosSUFBTVgsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1osSUFBTVksZ0JBQWdCYixjQUNoQmMsMkJBQTJCLElBQUksQ0FBQzFCLElBQUksQ0FBQzJCLDJCQUEyQixJQUNoRVgsbUJBQW1CVSx5QkFBeUJYLG1CQUFtQjtvQkFFckVILGVBQWVkLFFBQVE4QixrQ0FBa0MsQ0FBQ1o7b0JBRTFELElBQU1hLGdCQUFnQmpCLGNBQ2hCVSxVQUFVRyxjQUFjUixTQUFTLENBQUNZO29CQUV4Q0wsa0NBQWtDRixTQUFVLEdBQUc7Z0JBQ2pEO2dCQUVBLE9BQU9FO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVgsU0FBUztnQkFBSSxPQUFPLElBQUksQ0FBQ25CLElBQUksQ0FBQ3FCLEtBQUssQ0FBQ0Y7WUFBWTs7O1lBRS9EWSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZLEVBQUVsQyxPQUFPO2dCQUNyQyxJQUFJbUMsc0JBQXNCO2dCQUUxQixJQUFNQyxjQUFjLElBQUksQ0FBQ25DLE1BQU0sRUFDekJvQyxxQkFBcUJILGFBQWE3QixTQUFTO2dCQUVqREwsUUFBUXNDLEtBQUssQ0FBQyxBQUFDLGlCQUFpRUYsT0FBakRDLG9CQUFtQixnQ0FBMEMsT0FBWkQsYUFBWTtnQkFFNUYsSUFBSSxDQUFDRCxxQkFBcUI7b0JBQ3hCQSxzQkFBc0IsSUFBSSxDQUFDaEMsV0FBVyxDQUFDb0MsSUFBSSxDQUFDLFNBQUM1Qjt3QkFDM0MsSUFBTTZCLGdDQUFnQzdCLFdBQVdzQixpQkFBaUIsQ0FBQ0MsY0FBY2xDO3dCQUVqRixJQUFJd0MsK0JBQStCOzRCQUNqQyxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLElBQUlMLHFCQUFxQjtvQkFDdkJuQyxRQUFReUMsS0FBSyxDQUFDLEFBQUMsbUJBQW9FTCxPQUFsREMsb0JBQW1CLGlDQUEyQyxPQUFaRCxhQUFZO2dCQUNqRztnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsYUFBYSxFQUFFM0MsT0FBTzs7Z0JBQ3ZDLElBQUk0QztnQkFFSixJQUFNUixjQUFjLElBQUksQ0FBQ25DLE1BQU0sRUFDekI0QyxzQkFBc0JGLGNBQWNHLFFBQVE7Z0JBRWxEOUMsUUFBUXNDLEtBQUssQ0FBQyxBQUFDLGlCQUFtRUYsT0FBbkRTLHFCQUFvQixpQ0FBMkMsT0FBWlQsYUFBWTtnQkFFOUZRLHFCQUFxQkQsY0FBY0ksaUJBQWlCLENBQUMsU0FBQ2I7b0JBQ3BELElBQU1DLHNCQUFzQixNQUFLRixpQkFBaUIsQ0FBQ0MsY0FBY2xDO29CQUVqRSxJQUFJbUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlTLG9CQUFvQjtvQkFDdEI1QyxRQUFReUMsS0FBSyxDQUFDLEFBQUMsbUJBQXFFTCxPQUFuRFMscUJBQW9CLGlDQUEyQyxPQUFaVCxhQUFZO2dCQUNsRztnQkFFQSxPQUFPUTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFbEQsT0FBTztnQkFDakMsSUFBSW1ELFdBQVc7Z0JBRWYsSUFBTWYsY0FBYyxJQUFJLENBQUNuQyxNQUFNLEVBQUcsR0FBRztnQkFFckNELFFBQVFzQyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWTtnQkFFNUMsSUFBTWdCLG9CQUFvQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSixhQUFhQyxRQUFRbEQ7Z0JBRXRFLElBQUlvRCxtQkFBbUI7b0JBQ3JCLElBQUlFLHFCQUFxQixPQUNyQkMsc0JBQXNCO29CQUUxQixJQUFJTCxRQUFRO3dCQUNWSSxxQkFBcUIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1AsYUFBYWpEO29CQUMxRCxPQUFPO3dCQUNMdUQsc0JBQXNCLElBQUksQ0FBQ0UsaUJBQWlCLENBQUN6RDtvQkFDL0M7b0JBRUEsSUFBSXNELHNCQUFzQkMscUJBQXFCO3dCQUM3Q0osV0FBVztvQkFDYjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQU0vQixRQUFRLElBQUksRUFBRSxHQUFHO29CQUV2QnBCLFFBQVEwRCxRQUFRLENBQUN0QztvQkFFakJwQixRQUFReUMsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVk7Z0JBQ2hEO2dCQUVBLE9BQU9lO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCUCxXQUFXLEVBQUVqRCxPQUFPO2dCQUNuQyxJQUFJc0QscUJBQXFCO2dCQUV6QixJQUFNbEIsY0FBYyxJQUFJLENBQUNuQyxNQUFNLEVBQUcsR0FBRztnQkFFckNELFFBQVFzQyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWTtnQkFFNUMsSUFBTXJCLFdBQVcsSUFBSSxDQUFDQyxVQUFVO2dCQUVoQyxJQUFJLENBQUNELFVBQVU7b0JBQ2JmLFFBQVFzQyxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaRixhQUFZO2dCQUNwQyxPQUFPO29CQUNMa0IscUJBQXFCO2dCQUN2QjtnQkFFQSxJQUFJQSxvQkFBb0I7b0JBQ3RCdEQsUUFBUXlDLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTCxhQUFZO2dCQUNoRDtnQkFFQSxPQUFPa0I7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0J6RCxPQUFPO2dCQUN2QixJQUFJdUQ7Z0JBRUosSUFBTW5CLGNBQWMsSUFBSSxDQUFDbkMsTUFBTSxFQUFHLEdBQUc7Z0JBRXJDRCxRQUFRc0MsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVk7Z0JBRTVDbUIsc0JBQXNCO2dCQUV0QixJQUFJQSxxQkFBcUI7b0JBQ3ZCdkQsUUFBUXlDLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTCxhQUFZO2dCQUNoRDtnQkFFQSxPQUFPbUI7WUFDVDs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JKLFdBQVcsRUFBRUMsTUFBTSxFQUFFbEQsT0FBTztnQkFDNUMsSUFBSW9ELG9CQUFvQixNQUFPLEdBQUc7Z0JBRWxDLElBQU0zQyxTQUFTLElBQUksQ0FBQ0QsU0FBUztnQkFFN0IsSUFBSUMsU0FBUyxHQUFHO29CQUNkLElBQU1rRCxhQUFhLEFBQUNsRCxTQUFTLElBQ1JtRCxZQUFDLEdBQ0NDLGtCQUFPLEVBQ3hCQyxvQkFBb0JDLGlDQUFpQyxJQUFJLENBQUM1RCxXQUFXO29CQUUzRUgsUUFBUXNDLEtBQUssQ0FBQyxBQUFDLGtCQUFpRHFCLE9BQWhDRyxtQkFBa0IsZ0JBQXlCLE9BQVhILFlBQVc7b0JBRTNFVCxTQUFTLE1BQU8sR0FBRztvQkFFbkJELGNBQWMsTUFBTSxHQUFHO29CQUV2Qkcsb0JBQW9CLElBQUksQ0FBQ2pELFdBQVcsQ0FBQzZELEtBQUssQ0FBQyxTQUFDckQ7d0JBQzFDLElBQU1zRCxxQkFBcUJ0RCxXQUFXcUMsTUFBTSxDQUFDQyxhQUFhQyxRQUFRbEQ7d0JBRWxFLE9BQU9pRTtvQkFDVDtvQkFFQSxJQUFJYixtQkFBbUI7d0JBQ3JCcEQsUUFBUXlDLEtBQUssQ0FBQyxBQUFDLG9CQUFtRGtCLE9BQWhDRyxtQkFBa0IsZ0JBQXlCLE9BQVhILFlBQVc7b0JBQy9FO2dCQUNGO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxRQUFRLEVBQUVsQixXQUFXLEVBQUVDLE1BQU0sRUFBRWxELE9BQU87Z0JBQ3hELElBQUlvRSx3QkFBd0I7Z0JBRTVCLElBQU1oQyxjQUFjLElBQUksQ0FBQ25DLE1BQU0sRUFDekJvRSxpQkFBaUJGLFNBQVM5RCxTQUFTO2dCQUV6Q0wsUUFBUXNDLEtBQUssQ0FBQyxBQUFDLGtCQUFrRCtCLE9BQWpDakMsYUFBWSx1QkFBb0MsT0FBZmlDLGdCQUFlO2dCQUVoRixJQUFNQyxlQUFlSCxTQUFTSSxPQUFPO2dCQUVyQyxJQUFJRCxpQkFBaUJFLG1DQUFvQixFQUFFO29CQUN6QyxJQUFNckIsV0FBVyxJQUFJLENBQUNILE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUWxEO29CQUVsRG9FLHdCQUF3QmpCLFVBQVUsR0FBRztnQkFDdkM7Z0JBRUEsSUFBSWlCLHVCQUF1QjtvQkFDekJwRSxRQUFReUMsS0FBSyxDQUFDLEFBQUMsb0JBQW9ENEIsT0FBakNqQyxhQUFZLHVCQUFvQyxPQUFmaUMsZ0JBQWU7Z0JBQ3BGO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsT0FBTztnQkFFWCxJQUFNM0QsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1osSUFBTUosYUFBYSxJQUFJLENBQUNELGFBQWEsSUFDL0JpRSxpQkFBaUJoRSxXQUFXOEQsTUFBTTtvQkFFeENDLE9BQU9DLGdCQUFpQixHQUFHO2dCQUM3QjtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBSU9FLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNGLElBQUksRUFBRTFFLE9BQU87Z0JBQzNCLElBQUlvQixRQUFRO2dCQUVaLElBQUlzRCxTQUFTLE1BQU07b0JBQ2pCLElBQU0sQUFBRUcsYUFBY0MsaUJBQVEsQ0FBdEJELFlBQ0ZsRSxhQUFha0UsV0FBV0QsUUFBUSxDQUFDRixNQUFNMUUsVUFDdkNHLGNBQWM7d0JBQ1pRO3FCQUNELEVBQ0RWLFNBQVMsTUFDVEMsT0FBTztvQkFFYmtCLFFBQVEsSUFBSXJCLE1BQU1FLFFBQVFDLE1BQU1DO2dCQUNsQztnQkFFQSxPQUFPaUI7WUFDVDs7OztLQWxCQSx5QkFBTzJELFFBQU8ifQ==