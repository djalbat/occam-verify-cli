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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
var _constants = require("../constants");
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
var _default = (0, _structure.define)((_Frame = /*#__PURE__*/ function() {
    function Frame(string, node, tokens, assumptions) {
        _class_call_check(this, Frame);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.assumptions = assumptions;
    }
    _create_class(Frame, [
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
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
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
                    var Assumption = _structure.default.Assumption, assumption = Assumption.fromJSON(json, context), assumptions = [
                        assumption
                    ], string = null, node = null, tokens = null;
                    frame = new Frame(string, node, tokens, assumptions);
                }
                return frame;
            }
        },
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var frame = null;
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var frameNode = judgementNode.getFrameNode(), frame = frameFromFrameNode(frameNode, context);
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var frame = null;
                var frameNode = definedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var frame = null;
                var frameNode = containedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(), _define_property(_Frame, "name", "Frame"), _Frame));
function frameFromFrameNode(frameNode, context) {
    var Frame = _structure.default.Frame, node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), assumptions = assumptionsFromFrameNode(frameNode, context), frame = new Frame(string, node, tokens, assumptions);
    return frame;
}
function assumptionsFromFrameNode(frameNode, context) {
    var Assumption = _structure.default.Assumption, assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionNodes.map(function(assumptionNode) {
        var assumption = Assumption.fromAssumptionNode(assumptionNode, context);
        return assumption;
    });
    return assumptions;
}
function assumptionsStringFromAssumptions(assumptions) {
    var assumptionsString = assumptions.reduce(function(assumptionsString, assumption) {
        var assumptionString = assumption.getString();
        assumptionsString = assumptionsString === null ? assumptionString : "".concat(assumptionsString, ", ").concat(assumptionString);
        return assumptionsString;
    }, null);
    return assumptionsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc3RydWN0dXJlIGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IHsgUywgTk9USElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBhc3N1bXB0aW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnMubGVuZ3RoOyB9XG5cbiAgZ2V0QXNzdW1wdGlvbigpIHtcbiAgICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBc3N1bXB0aW9uID0gZmlyc3QodGhpcy5hc3N1bXB0aW9ucyk7XG5cbiAgICAgIGFzc3VtcHRpb24gPSBmaXJzdEFzc3VtcHRpb247IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuZ2V0QXNzdW1wdGlvbigpO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBhc3N1bXB0aW9uLmdldE1ldGF2YXJpYWJsZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHsgcmV0dXJuIHRoaXMubm9kZS5pc1Npbmd1bGFyKCk7IH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUEgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKVxuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlLFxuICAgICAgICAgICAgZXF1YWxUbyA9IG1ldGF2YXJpYWJsZUEuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUIpO1xuXG4gICAgICBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gZXF1YWxUbzsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2goZnJhbWVOb2RlKTsgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLmFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc0Fzc3VtcHRpb24gPSBhc3N1bXB0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNBc3N1bXB0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc01hdGNoO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbnNWZXJpZnkgPSB0aGlzLnZlcmlmeUFzc3VtcHRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb25zVmVyaWZ5KSB7XG4gICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICghc2luZ3VsYXIpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2ZXJpZnlBc3N1bXB0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25zVmVyaWZ5ID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKGxlbmd0aCA+IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT1RISU5HLFxuICAgICAgICAgICAgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb24ke3NPck5vdGhpbmd9Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgYXNzdW1wdGlvbnNWZXJpZnkgPSB0aGlzLmFzc3VtcHRpb25zLmV2ZXJ5KChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25WZXJpZmllcyA9IGFzc3VtcHRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBhc3N1bXB0aW9uVmVyaWZpZXM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb24ke3NPck5vdGhpbmd9LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllcyA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5nZXRBc3N1bXB0aW9uKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uSlNPTiA9IGFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICAgIGpzb24gPSBhc3N1bXB0aW9uSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID1zdHJ1Y3R1cmUsXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zID0gW1xuICAgICAgICAgICAgICBhc3N1bXB0aW9uXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgICAgdG9rZW5zID0gbnVsbDtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGFzc3VtcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBhc3N1bXB0aW9ucyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gc3RydWN0dXJlLFxuICAgICAgICBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9ucy5yZWR1Y2UoKGFzc3VtcHRpb25zU3RyaW5nLCBhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBhc3N1bXB0aW9uc1N0cmluZyA9IChhc3N1bXB0aW9uc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXNzdW1wdGlvbnNTdHJpbmd9LCAke2Fzc3VtcHRpb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJGcmFtZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJhc3N1bXB0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRBc3N1bXB0aW9ucyIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiZmlyc3RBc3N1bXB0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lTm9kZSIsIm1hdGNoZXMiLCJtYXRjaCIsImVxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJjb250ZXh0IiwibWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUEiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlQiIsIm1hdGNoRnJhbWVOb2RlIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwiZnJhbWVTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJzdWJzdGl0dXRpb25NYXRjaGVzQXNzdW1wdGlvbiIsImRlYnVnIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNNYXRjaCIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsImFzc3VtcHRpb25zVmVyaWZ5IiwidmVyaWZ5QXNzdW1wdGlvbnMiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYWRkRnJhbWUiLCJzT3JOb3RoaW5nIiwiUyIsIk5PVEhJTkciLCJhc3N1bXB0aW9uc1N0cmluZyIsImFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zIiwiZXZlcnkiLCJhc3N1bXB0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImpzb24iLCJhc3N1bXB0aW9uSlNPTiIsImZyb21KU09OIiwiQXNzdW1wdGlvbiIsInN0cnVjdHVyZSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImZyb21Bc3N1bXB0aW9uTm9kZSIsInJlZHVjZSIsImFzc3VtcHRpb25TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3lCQVYrQjtpRUFFVDt5QkFHSzs2QkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0lBRVIsV0FBZUUsSUFBQUEsaUJBQU0sMEJBQUM7YUFBTUMsTUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztnQ0FEbkJKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDTCxXQUFXLENBQUNNLE1BQU07WUFBRTs7O1lBRTlDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsYUFBYTtnQkFFakIsSUFBTUYsU0FBUyxJQUFJLENBQUNELFNBQVM7Z0JBRTdCLElBQUlDLFdBQVcsR0FBRztvQkFDaEIsSUFBTUcsa0JBQWtCaEIsTUFBTSxJQUFJLENBQUNPLFdBQVc7b0JBRTlDUSxhQUFhQyxpQkFBaUIsR0FBRztnQkFDbkM7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxlQUFlO2dCQUVuQixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWixJQUFNSixhQUFhLElBQUksQ0FBQ0QsYUFBYTtvQkFFckNJLGVBQWVILFdBQVdFLGVBQWU7Z0JBQzNDO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNSCxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWkcsbUJBQW1CLElBQUksQ0FBQ2pCLElBQUksQ0FBQ2dCLG1CQUFtQjtnQkFDbEQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBZSxPQUFPLElBQUksQ0FBQ2YsSUFBSSxDQUFDZSxVQUFVO1lBQUk7OztZQUU5Q0csS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLEtBQUs7Z0JBQ2IsSUFBTUMsWUFBWUQsTUFBTWYsT0FBTyxJQUN6QmlCLFVBQVUsSUFBSSxDQUFDckIsSUFBSSxDQUFDc0IsS0FBSyxDQUFDRixZQUMxQkcsVUFBVUYsU0FBVSxHQUFHO2dCQUU3QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ1gsWUFBWSxFQUFFWSxPQUFPO2dCQUNyRCxJQUFJQztnQkFFSixJQUFNWixXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWixJQUFNYSxnQkFBZ0JkLGNBQ2hCZSwyQkFBMkIsSUFBSSxDQUFDNUIsSUFBSSxDQUFDNkIsMkJBQTJCLElBQ2hFWixtQkFBbUJXLHlCQUF5QlosbUJBQW1CO29CQUVyRUgsZUFBZVksUUFBUUssa0NBQWtDLENBQUNiO29CQUUxRCxJQUFNYyxnQkFBZ0JsQixjQUNoQlUsVUFBVUksY0FBY1QsU0FBUyxDQUFDYTtvQkFFeENMLGtDQUFrQ0gsU0FBVSxHQUFHO2dCQUNqRDtnQkFFQSxPQUFPRztZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVaLFNBQVM7Z0JBQUksT0FBTyxJQUFJLENBQUNwQixJQUFJLENBQUNzQixLQUFLLENBQUNGO1lBQVk7OztZQUUvRGEsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWSxFQUFFVCxPQUFPO2dCQUNyQyxJQUFJVSxzQkFBc0I7Z0JBRTFCLElBQU1DLGNBQWMsSUFBSSxDQUFDckMsTUFBTSxFQUN6QnNDLHFCQUFxQkgsYUFBYS9CLFNBQVM7Z0JBRWpEc0IsUUFBUWEsS0FBSyxDQUFDLEFBQUMsaUJBQWlFRixPQUFqREMsb0JBQW1CLGdDQUEwQyxPQUFaRCxhQUFZO2dCQUU1RixJQUFJLENBQUNELHFCQUFxQjtvQkFDeEJBLHNCQUFzQixJQUFJLENBQUNqQyxXQUFXLENBQUNxQyxJQUFJLENBQUMsU0FBQzdCO3dCQUMzQyxJQUFNOEIsZ0NBQWdDOUIsV0FBV3VCLGlCQUFpQixDQUFDQyxjQUFjVDt3QkFFakYsSUFBSWUsK0JBQStCOzRCQUNqQyxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLElBQUlMLHFCQUFxQjtvQkFDdkJWLFFBQVFnQixLQUFLLENBQUMsQUFBQyxtQkFBb0VMLE9BQWxEQyxvQkFBbUIsaUNBQTJDLE9BQVpELGFBQVk7Z0JBQ2pHO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhLEVBQUVsQixPQUFPOztnQkFDdkMsSUFBSW1CO2dCQUVKLElBQU1SLGNBQWMsSUFBSSxDQUFDckMsTUFBTSxFQUN6QjhDLHNCQUFzQkYsY0FBY0csUUFBUTtnQkFFbERyQixRQUFRYSxLQUFLLENBQUMsQUFBQyxpQkFBbUVGLE9BQW5EUyxxQkFBb0IsaUNBQTJDLE9BQVpULGFBQVk7Z0JBRTlGUSxxQkFBcUJELGNBQWNJLGlCQUFpQixDQUFDLFNBQUNiO29CQUNwRCxJQUFNQyxzQkFBc0IsTUFBS0YsaUJBQWlCLENBQUNDLGNBQWNUO29CQUVqRSxJQUFJVSxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSVMsb0JBQW9CO29CQUN0Qm5CLFFBQVFnQixLQUFLLENBQUMsQUFBQyxtQkFBcUVMLE9BQW5EUyxxQkFBb0IsaUNBQTJDLE9BQVpULGFBQVk7Z0JBQ2xHO2dCQUVBLE9BQU9RO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUV6QixPQUFPO2dCQUNqQyxJQUFJMEIsV0FBVztnQkFFZixJQUFNZixjQUFjLElBQUksQ0FBQ3JDLE1BQU0sRUFBRyxHQUFHO2dCQUVyQzBCLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZO2dCQUU1QyxJQUFNZ0Isb0JBQW9CLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNKLGFBQWFDLFFBQVF6QjtnQkFFdEUsSUFBSTJCLG1CQUFtQjtvQkFDckIsSUFBSUUscUJBQXFCLE9BQ3JCQyxzQkFBc0I7b0JBRTFCLElBQUlMLFFBQVE7d0JBQ1ZJLHFCQUFxQixJQUFJLENBQUNFLGdCQUFnQixDQUFDUCxhQUFheEI7b0JBQzFELE9BQU87d0JBQ0w4QixzQkFBc0IsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ2hDO29CQUMvQztvQkFFQSxJQUFJNkIsc0JBQXNCQyxxQkFBcUI7d0JBQzdDSixXQUFXO29CQUNiO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBTWhDLFFBQVEsSUFBSSxFQUFFLEdBQUc7b0JBRXZCTSxRQUFRaUMsUUFBUSxDQUFDdkM7b0JBRWpCTSxRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVk7Z0JBQ2hEO2dCQUVBLE9BQU9lO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCUCxXQUFXLEVBQUV4QixPQUFPO2dCQUNuQyxJQUFJNkIscUJBQXFCO2dCQUV6QixJQUFNbEIsY0FBYyxJQUFJLENBQUNyQyxNQUFNLEVBQUcsR0FBRztnQkFFckMwQixRQUFRYSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWTtnQkFFNUMsSUFBTXRCLFdBQVcsSUFBSSxDQUFDQyxVQUFVO2dCQUVoQyxJQUFJLENBQUNELFVBQVU7b0JBQ2JXLFFBQVFhLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpGLGFBQVk7Z0JBQ3BDLE9BQU87b0JBQ0xrQixxQkFBcUI7Z0JBQ3ZCO2dCQUVBLElBQUlBLG9CQUFvQjtvQkFDdEI3QixRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVk7Z0JBQ2hEO2dCQUVBLE9BQU9rQjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQmhDLE9BQU87Z0JBQ3ZCLElBQUk4QjtnQkFFSixJQUFNbkIsY0FBYyxJQUFJLENBQUNyQyxNQUFNLEVBQUcsR0FBRztnQkFFckMwQixRQUFRYSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWTtnQkFFNUNtQixzQkFBc0I7Z0JBRXRCLElBQUlBLHFCQUFxQjtvQkFDdkI5QixRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVk7Z0JBQ2hEO2dCQUVBLE9BQU9tQjtZQUNUOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkosV0FBVyxFQUFFQyxNQUFNLEVBQUV6QixPQUFPO2dCQUM1QyxJQUFJMkIsb0JBQW9CLE1BQU8sR0FBRztnQkFFbEMsSUFBTTVDLFNBQVMsSUFBSSxDQUFDRCxTQUFTO2dCQUU3QixJQUFJQyxTQUFTLEdBQUc7b0JBQ2QsSUFBTW1ELGFBQWEsQUFBQ25ELFNBQVMsSUFDUm9ELFlBQUMsR0FDQ0Msa0JBQU8sRUFDeEJDLG9CQUFvQkMsaUNBQWlDLElBQUksQ0FBQzdELFdBQVc7b0JBRTNFdUIsUUFBUWEsS0FBSyxDQUFDLEFBQUMsa0JBQWlEcUIsT0FBaENHLG1CQUFrQixnQkFBeUIsT0FBWEgsWUFBVztvQkFFM0VULFNBQVMsTUFBTyxHQUFHO29CQUVuQkQsY0FBYyxNQUFNLEdBQUc7b0JBRXZCRyxvQkFBb0IsSUFBSSxDQUFDbEQsV0FBVyxDQUFDOEQsS0FBSyxDQUFDLFNBQUN0RDt3QkFDMUMsSUFBTXVELHFCQUFxQnZELFdBQVdzQyxNQUFNLENBQUNDLGFBQWFDLFFBQVF6Qjt3QkFFbEUsT0FBT3dDO29CQUNUO29CQUVBLElBQUliLG1CQUFtQjt3QkFDckIzQixRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQW1Ea0IsT0FBaENHLG1CQUFrQixnQkFBeUIsT0FBWEgsWUFBVztvQkFDL0U7Z0JBQ0Y7Z0JBRUEsT0FBT1A7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFFBQVEsRUFBRWxCLFdBQVcsRUFBRUMsTUFBTSxFQUFFekIsT0FBTztnQkFDeEQsSUFBSTJDLHdCQUF3QjtnQkFFNUIsSUFBTWhDLGNBQWMsSUFBSSxDQUFDckMsTUFBTSxFQUN6QnNFLGlCQUFpQkYsU0FBU2hFLFNBQVM7Z0JBRXpDc0IsUUFBUWEsS0FBSyxDQUFDLEFBQUMsa0JBQWtEK0IsT0FBakNqQyxhQUFZLHVCQUFvQyxPQUFmaUMsZ0JBQWU7Z0JBRWhGLElBQU1DLGVBQWVILFNBQVNJLE9BQU87Z0JBRXJDLElBQUlELGlCQUFpQkUsbUNBQW9CLEVBQUU7b0JBQ3pDLElBQU1yQixXQUFXLElBQUksQ0FBQ0gsTUFBTSxDQUFDQyxhQUFhQyxRQUFRekI7b0JBRWxEMkMsd0JBQXdCakIsVUFBVSxHQUFHO2dCQUN2QztnQkFFQSxJQUFJaUIsdUJBQXVCO29CQUN6QjNDLFFBQVFnQixLQUFLLENBQUMsQUFBQyxvQkFBb0Q0QixPQUFqQ2pDLGFBQVksdUJBQW9DLE9BQWZpQyxnQkFBZTtnQkFDcEY7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxPQUFPO2dCQUVYLElBQU01RCxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWixJQUFNSixhQUFhLElBQUksQ0FBQ0QsYUFBYSxJQUMvQmtFLGlCQUFpQmpFLFdBQVcrRCxNQUFNO29CQUV4Q0MsT0FBT0MsZ0JBQWlCLEdBQUc7Z0JBQzdCO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0YsSUFBSSxFQUFFakQsT0FBTztnQkFDM0IsSUFBSU4sUUFBUTtnQkFFWixJQUFJdUQsU0FBUyxNQUFNO29CQUNqQixJQUFNLEFBQUVHLGFBQWNDLGtCQUFTLENBQXZCRCxZQUNGbkUsYUFBYW1FLFdBQVdELFFBQVEsQ0FBQ0YsTUFBTWpELFVBQ3ZDdkIsY0FBYzt3QkFDWlE7cUJBQ0QsRUFDRFgsU0FBUyxNQUNUQyxPQUFPLE1BQ1BDLFNBQVM7b0JBRWZrQixRQUFRLElBQUlyQixNQUFNQyxRQUFRQyxNQUFNQyxRQUFRQztnQkFDMUM7Z0JBRUEsT0FBT2lCO1lBQ1Q7OztZQUVPNEQsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYzNELFNBQVMsRUFBRUssT0FBTztnQkFDckMsSUFBSU4sUUFBUTtnQkFFWixJQUFJQyxjQUFjLE1BQU07b0JBQ3RCRCxRQUFRNkQsbUJBQW1CNUQsV0FBV0s7Z0JBQ3hDO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVPOEQsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUV6RCxPQUFPO2dCQUM3QyxJQUFNTCxZQUFZOEQsY0FBY0MsWUFBWSxJQUN0Q2hFLFFBQVE2RCxtQkFBbUI1RCxXQUFXSztnQkFFNUMsT0FBT047WUFDVDs7O1lBRU9pRSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFNUQsT0FBTztnQkFDM0QsSUFBSU4sUUFBUTtnQkFFWixJQUFNQyxZQUFZaUUscUJBQXFCRixZQUFZO2dCQUVuRCxJQUFJL0QsY0FBYyxNQUFNO29CQUN0QkQsUUFBUTZELG1CQUFtQjVELFdBQVdLO2dCQUN4QztnQkFFQSxPQUFPTjtZQUNUOzs7WUFFT21FLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQkMsc0JBQXNCLEVBQUU5RCxPQUFPO2dCQUMvRCxJQUFJTixRQUFRO2dCQUVaLElBQU1DLFlBQVltRSx1QkFBdUJKLFlBQVk7Z0JBRXJELElBQUkvRCxjQUFjLE1BQU07b0JBQ3RCRCxRQUFRNkQsbUJBQW1CNUQsV0FBV0s7Z0JBQ3hDO2dCQUVBLE9BQU9OO1lBQ1Q7Ozs7S0E1REEseUJBQU9xRSxRQUFPO0FBK0RoQixTQUFTUixtQkFBbUI1RCxTQUFTLEVBQUVLLE9BQU87SUFDNUMsSUFBTSxBQUFFM0IsUUFBVWdGLGtCQUFTLENBQW5CaEYsT0FDRkUsT0FBT29CLFdBQ1ByQixTQUFTMEIsUUFBUWdFLFlBQVksQ0FBQ3pGLE9BQzlCQyxTQUFTd0IsUUFBUWlFLFlBQVksQ0FBQzFGLE9BQzlCRSxjQUFjeUYseUJBQXlCdkUsV0FBV0ssVUFDbEROLFFBQVEsSUFBSXJCLE1BQU1DLFFBQVFDLE1BQU1DLFFBQVFDO0lBRTlDLE9BQU9pQjtBQUNUO0FBRUEsU0FBU3dFLHlCQUF5QnZFLFNBQVMsRUFBRUssT0FBTztJQUNsRCxJQUFNLEFBQUVvRCxhQUFlQyxrQkFBUyxDQUF4QkQsWUFDRmUsa0JBQWtCeEUsVUFBVXlFLGtCQUFrQixJQUM5QzNGLGNBQWMwRixnQkFBZ0JFLEdBQUcsQ0FBQyxTQUFDQztRQUNqQyxJQUFNckYsYUFBYW1FLFdBQVdtQixrQkFBa0IsQ0FBQ0QsZ0JBQWdCdEU7UUFFakUsT0FBT2Y7SUFDVDtJQUVOLE9BQU9SO0FBQ1Q7QUFFQSxTQUFTNkQsaUNBQWlDN0QsV0FBVztJQUNuRCxJQUFNNEQsb0JBQW9CNUQsWUFBWStGLE1BQU0sQ0FBQyxTQUFDbkMsbUJBQW1CcEQ7UUFDL0QsSUFBTXdGLG1CQUFtQnhGLFdBQVdQLFNBQVM7UUFFN0MyRCxvQkFBb0IsQUFBQ0Esc0JBQXNCLE9BQ3BCb0MsbUJBQ0MsQUFBQyxHQUF3QkEsT0FBdEJwQyxtQkFBa0IsTUFBcUIsT0FBakJvQztRQUVqRCxPQUFPcEM7SUFDVCxHQUFHO0lBRUgsT0FBT0E7QUFDVCJ9