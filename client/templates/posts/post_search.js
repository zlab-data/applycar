
var search_array
Template.postSearch.events({
  'click .btn': function() {   
     search_array = Posts.find({person_name: document.getElementsByName('SearchName')[0].value});
     Session.set('show', true);
    
    var date = new Date();
    var begun = moment(date).format("YYYY.MM.DD.mm.ss");
    var record = {
      search_name: document.getElementsByName('SearchName')[0].value,
      search_time: begun,
      userId: Meteor.userId()
    };
    console.log(record);
    Records.insert(record);


  }
});

Template.postSearch.helpers({
  getInfo: function() {
     return search_array
  },

  show: function(){
        return Session.get('show');
   }
});



