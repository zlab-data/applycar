Template.postSearch.events({
    'click .name_btn': function () {
        let searchName = document.getElementsByName('SearchName')[0].value;
        Session.set('searchArray', Posts.find({person_name: searchName, latest: true, deleted: false}).fetch());

        let date = new Date();
        let begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
        let record = {
            search_name: document.getElementsByName('SearchName')[0].value,
            search_time: begun,
            userId: Meteor.userId()
        };
        //console.log(record);
        Records.insert(record);
    },


    'click .id_btn': function () {
        let searchName = document.getElementsByName('SearchId')[0].value;
        Session.set('searchArray', Posts.find({person_id: searchName, latest: true, deleted: false}).fetch());
        let date = new Date();
        let begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
        let record = {
            search_name: document.getElementsByName('SearchName')[0].value,
            search_time: begun,
            userId: Meteor.userId()
        };
        //console.log(record);
        Records.insert(record);
    },

    'click .btn-filter': function () {
        let $panel = $('.filterable'),
            $filters = $panel.find('.filters input'),
            $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
    },


});

Template.postSearch.onCreated(function () {
    Session.set('searchArray', Posts.find({latest: true, deleted: false}).fetch());
});

Template.postSearch.helpers({
    getInfo() {
        return Session.get('searchArray');
    },
});



