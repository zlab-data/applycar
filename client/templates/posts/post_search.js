

Template.postSearch.events({
  'click .name_btn': function () {
        let searchName = document.getElementsByName('SearchName')[0].value;
        Session.set('searchArray', Posts.find({person_name: searchName, latest:true,deleted:false}).fetch());
        
        var date = new Date();
        var begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
        var record = {
        search_name: document.getElementsByName('SearchName')[0].value,
        search_time: begun,
        userId: Meteor.userId()
        };
    //console.log(record);
    Records.insert(record);
  },


  'click .id_btn': function () {
        let searchName = document.getElementsByName('SearchId')[0].value;
        Session.set('searchArray', Posts.find({person_id: searchName,latest:true,deleted:false}).fetch());       
        var date = new Date();
        var begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
        var record = {
        search_name: document.getElementsByName('SearchName')[0].value,
        search_time: begun,
        userId: Meteor.userId()
        };
    //console.log(record);
    Records.insert(record);
  }
});

Template.postSearch.helpers({
   getInfo() {
        return Session.get('searchArray');
    }
});



