var swig = require('swig-templates'),
  expect = require('expect.js'),
  extras = require('../');

describe('Tags:', function () {

  describe('markdown', function () {
    extras.useTag(swig, 'markdown');
    it('{% markdown %}# This is an H1{% endmarkdown %}', function () {
      expect(swig.render('{% markdown %}# This is an H1{% endmarkdown %}'))
        .to.equal('<h1>This is an H1</h1>');
    });
  });

  describe('switch', function () {
    extras.useTag(swig, 'switch');
    extras.useTag(swig, 'case');

    it('switches', function () {
      expect(swig.render('{% switch foo %}{% case "a" %}This is A{% case "b" %}This is B{% endswitch %}', { locals: { foo: 'a' }}))
        .to.equal('This is A');
    });
  });

});
