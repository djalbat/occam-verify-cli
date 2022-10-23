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
        var dependencyReleaseNames = releaseContext.getDependencyReleaseNames(), dependencyReleasesVVerified = dependencyReleaseNames.every(function(dependencyReleaseName) {
            var _$releaseName = dependencyReleaseName, releaseVerified = verifyRelease(_$releaseName, releaseContextMap, releaseContexts);
            if (releaseVerified) {
                return true;
            }
        });
        if (dependencyReleasesVVerified) {
            var releaseNames = dependencyReleaseNames, releaseContexts1 = releaseNames.map(function(releaseName) {
                var releaseContext = releaseContextMap[releaseName];
                return releaseContext;
            });
            var dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependencyReleaseNames, releaseContextMap);
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
function retrieveDependencyReleaseContexts(dependencyReleaseNames, releaseContextMap) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    dependencyReleaseNames.forEach(function(dependencyReleaseName) {
        var dependencyReleaseContext = releaseContextMap[dependencyReleaseName], dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);
        if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
            var releaseContext = dependencyReleaseContext, _$dependencyReleaseNames = releaseContext.getDependencyReleaseNames();
            retrieveDependencyReleaseContexts(_$dependencyReleaseNames, releaseContextMap, dependencyReleaseContexts);
            dependencyReleaseContexts.push(dependencyReleaseContext);
        }
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXAsIHJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VWZXJpZmllZCgpO1xuXG4gIGlmICghcmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwYWNrYWdlLi4uYCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZU5hbWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jeVJlbGVhc2VOYW1lcygpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY3lSZWxlYXNlTmFtZXMuZXZlcnkoKGRlcGVuZGVuY3lSZWxlYXNlTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5UmVsZWFzZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIHJlbGVhc2VDb250ZXh0TWFwLCByZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVsZWFzZU5hbWVzID0gZGVwZW5kZW5jeVJlbGVhc2VOYW1lcywgIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZU5hbWVzLm1hcCgocmVsZWFzZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeVJlbGVhc2VOYW1lcywgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGNvbnN0IGZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJlbGVhc2VWZXJpZmllZCA9IGZpbGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3JlbGVhc2VOYW1lfScgcmVsZWFzZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeVJlbGVhc2VOYW1lcywgcmVsZWFzZUNvbnRleHRNYXAsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBbXSkge1xuICBkZXBlbmRlbmN5UmVsZWFzZU5hbWVzLmZvckVhY2goKGRlcGVuZGVuY3lSZWxlYXNlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW2RlcGVuZGVuY3lSZWxlYXNlTmFtZV0sXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKCFkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZU5hbWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jeVJlbGVhc2VOYW1lcygpO1xuXG4gICAgICByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeVJlbGVhc2VOYW1lcywgcmVsZWFzZUNvbnRleHRNYXAsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2goZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJlbGVhc2UiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0TWFwIiwicmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlVmVyaWZpZWQiLCJpc1JlbGVhc2VWZXJpZmllZCIsImRlYnVnIiwiZGVwZW5kZW5jeVJlbGVhc2VOYW1lcyIsImdldERlcGVuZGVuY3lSZWxlYXNlTmFtZXMiLCJkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQiLCJldmVyeSIsImRlcGVuZGVuY3lSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lcyIsIm1hcCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwiZmlsZXNWZXJpZmllZCIsInZlcmlmeUZpbGVzIiwicHVzaCIsImluZm8iLCJmb3JFYWNoIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7MERBRkE7Ozs7OztBQUVULFNBQVNBLGNBQWNDLFdBQVcsRUFBRUMsaUJBQWlCLEVBQXdCO1FBQXRCQyxrQkFBQUEsaUVBQWtCLEVBQUU7SUFDeEYsSUFBTUMsaUJBQWlCRixpQkFBaUIsQ0FBQ0QsWUFBWTtJQUVyRCxJQUFJSSxrQkFBa0JELGVBQWVFLGlCQUFpQjtJQUV0RCxJQUFJLENBQUNELGlCQUFpQjtRQUNwQkQsZUFBZUcsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpOLGFBQVk7UUFFbkQsSUFBTU8seUJBQXlCSixlQUFlSyx5QkFBeUIsSUFDakVDLDhCQUE4QkYsdUJBQXVCRyxLQUFLLENBQUMsU0FBQ0MsdUJBQTBCO1lBQ3BGLElBQU1YLGdCQUFjVyx1QkFDZFAsa0JBQWtCTCxjQUFjQyxlQUFhQyxtQkFBbUJDO1lBRXRFLElBQUlFLGlCQUFpQjtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUssNkJBQTZCO1lBQy9CLElBQU1HLGVBQWVMLHdCQUNmTCxtQkFBa0JVLGFBQWFDLEdBQUcsQ0FBQyxTQUFDYixhQUFnQjtnQkFDbEQsSUFBTUcsaUJBQWlCRixpQkFBaUIsQ0FBQ0QsWUFBWTtnQkFFckQsT0FBT0c7WUFDVDtZQUVOLElBQU1XLDRCQUE0QkMsa0NBQWtDUix3QkFBd0JOO1lBRTVGRSxlQUFlYSxVQUFVLENBQUNkLGtCQUFpQlk7WUFFM0MsSUFBTUcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNmO1lBRWxDQyxrQkFBa0JhLGVBQWdCLEdBQUc7WUFFckMsSUFBSWIsaUJBQWlCO2dCQUNuQkYsaUJBQWdCaUIsSUFBSSxDQUFDaEI7Z0JBRXJCQSxlQUFlaUIsSUFBSSxDQUFDLEFBQUMsaUJBQTRCLE9BQVpwQixhQUFZO1lBQ25ELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9JO0FBQ1Q7QUFFQSxTQUFTVyxrQ0FBa0NSLHNCQUFzQixFQUFFTixpQkFBaUIsRUFBa0M7UUFBaENhLDRCQUFBQSxpRUFBNEIsRUFBRTtJQUNsSFAsdUJBQXVCYyxPQUFPLENBQUMsU0FBQ1YsdUJBQTBCO1FBQ3hELElBQU1XLDJCQUEyQnJCLGlCQUFpQixDQUFDVSxzQkFBc0IsRUFDbkVZLDREQUE0RFQsMEJBQTBCVSxRQUFRLENBQUNGO1FBRXJHLElBQUksQ0FBQ0MsMkRBQTJEO1lBQzlELElBQU1wQixpQkFBaUJtQiwwQkFDakJmLDJCQUF5QkosZUFBZUsseUJBQXlCO1lBRXZFTyxrQ0FBa0NSLDBCQUF3Qk4sbUJBQW1CYTtZQUU3RUEsMEJBQTBCSyxJQUFJLENBQUNHO1FBQ2pDLENBQUM7SUFDSDtJQUVBLE9BQU9SO0FBQ1QifQ==