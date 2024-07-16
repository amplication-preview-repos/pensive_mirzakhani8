import { TestResult as TTestResult } from "../api/testResult/TestResult";

export const TESTRESULT_TITLE_FIELD = "testName";

export const TestResultTitle = (record: TTestResult): string => {
  return record.testName?.toString() || String(record.id);
};
