import { useMemo, useSyncExternalStore } from "react";
import {
  computeCourseProgress,
  computeModuleProgress,
  getCourseProgressSnapshotVersion,
  subscribeCourseProgress,
} from "@/utils/courseProgress";

export function useCourseProgress(modules) {
  const totalLessons = useMemo(() => {
    return modules.reduce((acc, m) => acc + (m.lessons?.length || 0), 0);
  }, [modules]);

  const version = useSyncExternalStore(
    subscribeCourseProgress,
    getCourseProgressSnapshotVersion,
    () => 0,
  );

  return useMemo(
    () => computeCourseProgress(modules),
    [modules, version],
  );
}

export function useModuleProgress(module) {
  const version = useSyncExternalStore(
    subscribeCourseProgress,
    getCourseProgressSnapshotVersion,
    () => 0,
  );

  return useMemo(
    () => computeModuleProgress(module),
    [module, version],
  );
}
