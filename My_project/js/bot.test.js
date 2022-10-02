var i = 0;
test.each(compare.utterances[i])(
  "compare passes for text value %j from array with result: " +
    compare.answers[i],
  (utterance) =>
    expect(
      compare.compare(compare.utterances, compare.answers, utterance)
    ).toBe(compare.answers[i][0])
);

var utterances_quality_tests_0 = ["hi", "hey", "labdien"];
test.each(utterances_quality_tests_0)(
  "compare passes for text value %j from array with result: " +
    compare.answers[i],
  (utterance) =>
    expect(
      compare.compare(compare.utterances, compare.answers, utterance)
    ).toBe(compare.answers[i][0])
);