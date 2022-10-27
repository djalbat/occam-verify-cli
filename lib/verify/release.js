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
                releaseContext.info("Verified the '".concat(releaseName, "' package."));
            }
        }
    }
    return releaseVerified;
}
function retrieveDependencyReleaseContexts(dependencies, releaseContextMap) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    dependencies.forEachDependency(function(dependency) {
        var dependencyName = dependency.getName(), dependencyReleaseName = dependencyName, dependencyReleaseContext = releaseContextMap[dependencyReleaseName], dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);
        if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
            var releaseContext = dependencyReleaseContext, _$dependencies = releaseContext.getDependencies();
            retrieveDependencyReleaseContexts(_$dependencies, releaseContextMap, dependencyReleaseContexts);
            dependencyReleaseContexts.push(dependencyReleaseContext);
        }
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXAsIHJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICB2ZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKVxuXG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZmllZDsgLy8vXG5cbiAgaWYgKCFyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICByZWxlYXNlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UuLi5gKTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXAsIHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmNpZXMubWFwRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gICAgICAgICAgICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY2llcywgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGNvbnN0IGZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJlbGVhc2VWZXJpZmllZCA9IGZpbGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jaWVzLCByZWxlYXNlQ29udGV4dE1hcCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW2RlcGVuZGVuY3lSZWxlYXNlTmFtZV0sXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKCFkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgICAgcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY2llcywgcmVsZWFzZUNvbnRleHRNYXAsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2goZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJlbGVhc2UiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0TWFwIiwicmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJ2ZXJpZmllZCIsImlzVmVyaWZpZWQiLCJyZWxlYXNlVmVyaWZpZWQiLCJkZWJ1ZyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCIsImV2ZXJ5RGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJuYW1lIiwiZ2V0TmFtZSIsIm1hcERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsImZpbGVzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlcyIsInB1c2giLCJpbmZvIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlTmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBEQUZBOzs7Ozs7QUFFVCxTQUFTQSxjQUFjQyxXQUFXLEVBQUVDLGlCQUFpQixFQUF3QjtRQUF0QkMsa0JBQUFBLGlFQUFrQixFQUFFO0lBQ3hGLElBQU1DLGlCQUFpQkYsaUJBQWlCLENBQUNELFlBQVksRUFDL0NJLFdBQVdELGVBQWVFLFVBQVU7SUFFMUMsSUFBSUMsa0JBQWtCRixVQUFVLEdBQUc7SUFFbkMsSUFBSSxDQUFDRSxpQkFBaUI7UUFDcEJILGVBQWVJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaUCxhQUFZO1FBRW5ELElBQU1RLGVBQWVMLGVBQWVNLGVBQWUsSUFDN0NDLDhCQUE4QkYsYUFBYUcsZUFBZSxDQUFDLFNBQUNDLFlBQWU7WUFDekUsSUFBTUMsT0FBT0QsV0FBV0UsT0FBTyxJQUN6QmQsZ0JBQWNhLE1BQ2RQLGtCQUFrQlAsY0FBY0MsZUFBYUMsbUJBQW1CQztZQUV0RSxJQUFJSSxpQkFBaUI7Z0JBQ25CLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtRQUVOLElBQUlJLDZCQUE2QjtZQUMvQixJQUFNUixtQkFBa0JNLGFBQWFPLGFBQWEsQ0FBQyxTQUFDSCxZQUFlO2dCQUMzRCxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCZCxnQkFBY2EsTUFDZFYsaUJBQWlCRixpQkFBaUIsQ0FBQ0QsY0FBWTtnQkFFckQsT0FBT0c7WUFDVDtZQUVOLElBQU1hLDRCQUE0QkMsa0NBQWtDVCxjQUFjUDtZQUVsRkUsZUFBZWUsVUFBVSxDQUFDaEIsa0JBQWlCYztZQUUzQyxJQUFNRyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ2pCO1lBRWxDRyxrQkFBa0JhLGVBQWdCLEdBQUc7WUFFckMsSUFBSWIsaUJBQWlCO2dCQUNuQkosaUJBQWdCbUIsSUFBSSxDQUFDbEI7Z0JBRXJCQSxlQUFlbUIsSUFBSSxDQUFDLEFBQUMsaUJBQTRCLE9BQVp0QixhQUFZO1lBQ25ELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9NO0FBQ1Q7QUFFQSxTQUFTVyxrQ0FBa0NULFlBQVksRUFBRVAsaUJBQWlCLEVBQWtDO1FBQWhDZSw0QkFBQUEsaUVBQTRCLEVBQUU7SUFDeEdSLGFBQWFlLGlCQUFpQixDQUFDLFNBQUNYLFlBQWU7UUFDN0MsSUFBTVksaUJBQWlCWixXQUFXRSxPQUFPLElBQ25DVyx3QkFBd0JELGdCQUN4QkUsMkJBQTJCekIsaUJBQWlCLENBQUN3QixzQkFBc0IsRUFDbkVFLDREQUE0RFgsMEJBQTBCWSxRQUFRLENBQUNGO1FBRXJHLElBQUksQ0FBQ0MsMkRBQTJEO1lBQzlELElBQU14QixpQkFBaUJ1QiwwQkFDakJsQixpQkFBZUwsZUFBZU0sZUFBZTtZQUVuRFEsa0NBQWtDVCxnQkFBY1AsbUJBQW1CZTtZQUVuRUEsMEJBQTBCSyxJQUFJLENBQUNLO1FBQ2pDLENBQUM7SUFDSDtJQUVBLE9BQU9WO0FBQ1QifQ==