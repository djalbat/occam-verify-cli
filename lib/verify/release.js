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
    var releaseContext = releaseContextMap[releaseName], verified = releaseContext.isVerified();
    var releaseVerified = verified; ///
    if (!releaseVerified) {
        releaseContext.debug("Verifying the '".concat(releaseName, "' package..."));
        var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
            var name = dependency.getName(), _$releaseName = name, releaseVerified = verifyRelease(_$releaseName, releaseContextMap, releaseContexts);
            if (releaseVerified) {
                return true;
            }
        });
        if (dependencyReleasesVVerified) {
            var releaseContexts1 = dependencies.mapDependency(function(dependency) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXAsIHJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICB2ZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKVxuXG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZmllZDsgLy8vXG5cbiAgaWYgKCFyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICByZWxlYXNlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UuLi5gKTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXAsIHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmNpZXMubWFwRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gICAgICAgICAgICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY2llcywgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGNvbnN0IGZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJlbGVhc2VWZXJpZmllZCA9IGZpbGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3JlbGVhc2VOYW1lfScgcmVsZWFzZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jaWVzLCByZWxlYXNlQ29udGV4dE1hcCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXBlbmRlbmN5KSA9PiB7XG4gICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbZGVwZW5kZW5jeVJlbGVhc2VOYW1lXSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoIWRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgICByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jaWVzLCByZWxlYXNlQ29udGV4dE1hcCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMucHVzaChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UmVsZWFzZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dCIsInZlcmlmaWVkIiwiaXNWZXJpZmllZCIsInJlbGVhc2VWZXJpZmllZCIsImRlYnVnIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkIiwiZXZlcnlEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIiwibWFwRGVwZW5kZW5jeSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwiZmlsZXNWZXJpZmllZCIsInZlcmlmeUZpbGVzIiwicHVzaCIsImluZm8iLCJmb3JFYWNoIiwiZGVwZW5kZW5jeU5hbWUiLCJkZXBlbmRlbmN5UmVsZWFzZU5hbWUiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzswREFGQTs7Ozs7O0FBRVQsU0FBU0EsY0FBY0MsV0FBVyxFQUFFQyxpQkFBaUIsRUFBd0I7UUFBdEJDLGtCQUFBQSxpRUFBa0IsRUFBRTtJQUN4RixJQUFNQyxpQkFBaUJGLGlCQUFpQixDQUFDRCxZQUFZLEVBQy9DSSxXQUFXRCxlQUFlRSxVQUFVO0lBRTFDLElBQUlDLGtCQUFrQkYsVUFBVSxHQUFHO0lBRW5DLElBQUksQ0FBQ0UsaUJBQWlCO1FBQ3BCSCxlQUFlSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWlAsYUFBWTtRQUVuRCxJQUFNUSxlQUFlTCxlQUFlTSxlQUFlLElBQzdDQyw4QkFBOEJGLGFBQWFHLGVBQWUsQ0FBQyxTQUFDQyxZQUFlO1lBQ3pFLElBQU1DLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJkLGdCQUFjYSxNQUNkUCxrQkFBa0JQLGNBQWNDLGVBQWFDLG1CQUFtQkM7WUFFdEUsSUFBSUksaUJBQWlCO2dCQUNuQixPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7UUFFTixJQUFJSSw2QkFBNkI7WUFDL0IsSUFBTVIsbUJBQWtCTSxhQUFhTyxhQUFhLENBQUMsU0FBQ0gsWUFBZTtnQkFDM0QsSUFBTUMsT0FBT0QsV0FBV0UsT0FBTyxJQUN6QmQsZ0JBQWNhLE1BQ2RWLGlCQUFpQkYsaUJBQWlCLENBQUNELGNBQVk7Z0JBRXJELE9BQU9HO1lBQ1Q7WUFFTixJQUFNYSw0QkFBNEJDLGtDQUFrQ1QsY0FBY1A7WUFFbEZFLGVBQWVlLFVBQVUsQ0FBQ2hCLGtCQUFpQmM7WUFFM0MsSUFBTUcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNqQjtZQUVsQ0csa0JBQWtCYSxlQUFnQixHQUFHO1lBRXJDLElBQUliLGlCQUFpQjtnQkFDbkJKLGlCQUFnQm1CLElBQUksQ0FBQ2xCO2dCQUVyQkEsZUFBZW1CLElBQUksQ0FBQyxBQUFDLGlCQUE0QixPQUFadEIsYUFBWTtZQUNuRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPTTtBQUNUO0FBRUEsU0FBU1csa0NBQWtDVCxZQUFZLEVBQUVQLGlCQUFpQixFQUFrQztRQUFoQ2UsNEJBQUFBLGlFQUE0QixFQUFFO0lBQ3hHUixhQUFhZSxPQUFPLENBQUMsU0FBQ1gsWUFBZTtRQUNuQyxJQUFNWSxpQkFBaUJaLFdBQVdFLE9BQU8sSUFDbkNXLHdCQUF3QkQsZ0JBQ3hCRSwyQkFBMkJ6QixpQkFBaUIsQ0FBQ3dCLHNCQUFzQixFQUNuRUUsNERBQTREWCwwQkFBMEJZLFFBQVEsQ0FBQ0Y7UUFFckcsSUFBSSxDQUFDQywyREFBMkQ7WUFDOUQsSUFBTXhCLGlCQUFpQnVCLDBCQUNqQmxCLGlCQUFlTCxlQUFlTSxlQUFlO1lBRW5EUSxrQ0FBa0NULGdCQUFjUCxtQkFBbUJlO1lBRW5FQSwwQkFBMEJLLElBQUksQ0FBQ0s7UUFDakMsQ0FBQztJQUNIO0lBRUEsT0FBT1Y7QUFDVCJ9