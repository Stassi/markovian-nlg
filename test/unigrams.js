import { expect } from 'chai';
import { describe } from 'mocha';
import { lockeWandering } from './corpora';
import unigrams from '../src/unigrams';

describe('#unigrams', () => {
  const { corpus, unigrams: lockeUnigrams } = lockeWandering;
  it('should return all unigrams within a corpus', () => {
    expect(unigrams(corpus)).to.have.members(lockeUnigrams);
  });
});
