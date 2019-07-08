import nlp from 'compromise';

const bigrams = corpus => nlp(corpus)
  .ngrams()
  .bigrams()
  .out('array');

export default bigrams;
