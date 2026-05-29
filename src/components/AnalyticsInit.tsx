"use client";

import { useEffect } from "react";
import { initFirebaseAnalytics } from "@/lib/firebase";

export default function AnalyticsInit() {
  useEffect(() => {
    // Initialize Firebase Analytics on client mount
    void initFirebaseAnalytics();
  }, []);
  return null;
}
