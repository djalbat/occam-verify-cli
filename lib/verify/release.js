"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRelease;
    }
});
var _files = /*#__PURE__*/ _interopRequireDefault(require("../verify/files"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyRelease(releaseName, releaseContextMap) {
    var releaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var releaseContext = releaseContextMap[releaseName];
    var releaseVerified = releaseContext.isReleaseVerified();
    if (!releaseVerified) {
        releaseContext.debug("Verifying the '".concat(releaseName, "' package..."));
        var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.every(function(dependency) {
            var name = dependency.getName(), _$releaseName = name, releaseVerified = verifyRelease(_$releaseName, releaseContextMap, releaseContexts);
            if (releaseVerified) {
                return true;
            }
        });
        if (dependencyReleasesVVerified) {
            var releaseContexts1 = dependencies.map(function(dependency) {
                var name = dependency.getName(), _$releaseName = name, releaseContext = releaseContextMap[_$releaseName];
                return releaseContext;
            });
            var dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependencies, releaseContextMap);
            releaseContext.initialise(releaseContexts1, dependencyReleaseContexts);
            var filesVerified = (0, _files.default)(releaseContext);
            releaseVerified = filesVerified; ///
            if (releaseVerified) {
                releaseContexts1.push(releaseContext);
                releaseContext.info("Verified the '".concat(releaseName, "' release."));
            }
        }
    }
    return releaseVerified;
}
function retrieveDependencyReleaseContexts(dependencies, releaseContextMap) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    dependencies.forEach(function(dependency) {
        var dependencyName = dependency.getName(), dependencyReleaseName = dependencyName, dependencyReleaseContext = releaseContextMap[dependencyReleaseName], dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);
        if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
            var releaseContext = dependencyReleaseContext, _$dependencies = releaseContext.getDependencies();
            retrieveDependencyReleaseContexts(_$dependencies, releaseContextMap, dependencyReleaseContexts);
            dependencyReleaseContexts.push(dependencyReleaseContext);
        }
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXAsIHJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VWZXJpZmllZCgpO1xuXG4gIGlmICghcmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwYWNrYWdlLi4uYCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQgPSBkZXBlbmRlbmNpZXMuZXZlcnkoKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXAsIHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jaWVzLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgY29uc3QgZmlsZXNWZXJpZmllZCA9IHZlcmlmeUZpbGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmVsZWFzZVZlcmlmaWVkID0gZmlsZXNWZXJpZmllZDsgIC8vL1xuXG4gICAgICBpZiAocmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0cy5wdXNoKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyByZWxlYXNlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmNpZXMsIHJlbGVhc2VDb250ZXh0TWFwLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gW10pIHtcbiAgZGVwZW5kZW5jaWVzLmZvckVhY2goKGRlcGVuZGVuY3kpID0+IHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtkZXBlbmRlbmN5UmVsZWFzZU5hbWVdLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmICghZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICAgIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmNpZXMsIHJlbGVhc2VDb250ZXh0TWFwLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5wdXNoKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSZWxlYXNlIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dE1hcCIsInJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZVZlcmlmaWVkIiwiaXNSZWxlYXNlVmVyaWZpZWQiLCJkZWJ1ZyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCIsImV2ZXJ5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIiwibWFwIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJmaWxlc1ZlcmlmaWVkIiwidmVyaWZ5RmlsZXMiLCJwdXNoIiwiaW5mbyIsImZvckVhY2giLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlTmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBEQUZBOzs7Ozs7QUFFVCxTQUFTQSxjQUFjQyxXQUFXLEVBQUVDLGlCQUFpQixFQUF3QjtRQUF0QkMsa0JBQUFBLGlFQUFrQixFQUFFO0lBQ3hGLElBQU1DLGlCQUFpQkYsaUJBQWlCLENBQUNELFlBQVk7SUFFckQsSUFBSUksa0JBQWtCRCxlQUFlRSxpQkFBaUI7SUFFdEQsSUFBSSxDQUFDRCxpQkFBaUI7UUFDcEJELGVBQWVHLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaTixhQUFZO1FBRW5ELElBQU1PLGVBQWVKLGVBQWVLLGVBQWUsSUFDN0NDLDhCQUE4QkYsYUFBYUcsS0FBSyxDQUFDLFNBQUNDLFlBQWU7WUFDL0QsSUFBTUMsT0FBT0QsV0FBV0UsT0FBTyxJQUN6QmIsZ0JBQWNZLE1BQ2RSLGtCQUFrQkwsY0FBY0MsZUFBYUMsbUJBQW1CQztZQUV0RSxJQUFJRSxpQkFBaUI7Z0JBQ25CLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtRQUVOLElBQUlLLDZCQUE2QjtZQUMvQixJQUFNUCxtQkFBa0JLLGFBQWFPLEdBQUcsQ0FBQyxTQUFDSCxZQUFlO2dCQUNqRCxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCYixnQkFBY1ksTUFDZFQsaUJBQWlCRixpQkFBaUIsQ0FBQ0QsY0FBWTtnQkFFckQsT0FBT0c7WUFDVDtZQUVOLElBQU1ZLDRCQUE0QkMsa0NBQWtDVCxjQUFjTjtZQUVsRkUsZUFBZWMsVUFBVSxDQUFDZixrQkFBaUJhO1lBRTNDLElBQU1HLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDaEI7WUFFbENDLGtCQUFrQmMsZUFBZ0IsR0FBRztZQUVyQyxJQUFJZCxpQkFBaUI7Z0JBQ25CRixpQkFBZ0JrQixJQUFJLENBQUNqQjtnQkFFckJBLGVBQWVrQixJQUFJLENBQUMsQUFBQyxpQkFBNEIsT0FBWnJCLGFBQVk7WUFDbkQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0k7QUFDVDtBQUVBLFNBQVNZLGtDQUFrQ1QsWUFBWSxFQUFFTixpQkFBaUIsRUFBa0M7UUFBaENjLDRCQUFBQSxpRUFBNEIsRUFBRTtJQUN4R1IsYUFBYWUsT0FBTyxDQUFDLFNBQUNYLFlBQWU7UUFDbkMsSUFBTVksaUJBQWlCWixXQUFXRSxPQUFPLElBQ25DVyx3QkFBd0JELGdCQUN4QkUsMkJBQTJCeEIsaUJBQWlCLENBQUN1QixzQkFBc0IsRUFDbkVFLDREQUE0RFgsMEJBQTBCWSxRQUFRLENBQUNGO1FBRXJHLElBQUksQ0FBQ0MsMkRBQTJEO1lBQzlELElBQU12QixpQkFBaUJzQiwwQkFDakJsQixpQkFBZUosZUFBZUssZUFBZTtZQUVuRFEsa0NBQWtDVCxnQkFBY04sbUJBQW1CYztZQUVuRUEsMEJBQTBCSyxJQUFJLENBQUNLO1FBQ2pDLENBQUM7SUFDSDtJQUVBLE9BQU9WO0FBQ1QifQ==