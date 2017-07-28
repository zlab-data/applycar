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
        if ($filters.prop('disabled') === true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
    },


    'keyup .filterable .filters input': function (e) {
        /* Ignore tab key */
        let code = e.keyCode || e.which;
        if (code === '9') return;

        /* Useful DOM data and selectors */
        let $input = $(document.activeElement),
            inputContent = $input.val().toLowerCase(),
            $panel = $input.parents('.filterable'),
            column = $panel.find('.filters th').index($input.parents('th')),
            $table = $panel.find('.table'),
            $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        let $filteredRows = $rows.filter(function () {
            let value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));
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

    isEmpty: function (obj) {
        return obj.length === 0;
    }
});
