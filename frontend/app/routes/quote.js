import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return this.store.findAll('quote')
      .then(function(quote) {
        console.log(quote)
        return quote
      })
  }
});
