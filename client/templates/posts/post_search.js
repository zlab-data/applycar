Template.postSearch.events({
    'click .name_btn': function () {
        let searchName = document.getElementsByName('SearchName')[0].value;
        if (searchName.length !== 0) {
            let keys_to_search = ['person_name', 'spouse_name', 'layer_name', 'emergency1_name', 'emergency2_name',
                    'parent_1_name', 'parent_2_name', 'parent_3_name', 'parent_4_name', 'child_1_name', 'child_2_name',
                    'child_3_name', 'guarantor_name'],
                search_result = [];

            keys_to_search.forEach(function (entry) {
                let command = "search_result = search_result.concat(Posts.find({" + entry + ": '" + searchName + "', latest: true, deleted: false}).fetch());";
                // console.log(command);
                eval(command);
            });

            let uniq = a => [...new Set(a)];
            // console.log(search_result);
            Session.set('searchArray', uniq(search_result));

            let date = new Date();
            let begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
            let record = {
                search_name: document.getElementsByName('SearchName')[0].value,
                search_time: begun,
                userId: Meteor.userId()
            };
            //console.log(record);
            Records.insert(record);
        } else {
            Session.set('searchArray', []);
        }
    },


    'click .id_btn': function () {
        let searchName = document.getElementsByName('SearchId')[0].value;
        if (searchName.length > 0) {
            let keys_to_search = ['person_id', 'spouse_id', 'guarantor_id'],
                search_result = [];

            keys_to_search.forEach(function (entry) {
                let command = "search_result = search_result.concat(Posts.find({" + entry + ": '" + searchName + "', latest: true, deleted: false}).fetch());";
                console.log(command);
                eval(command);
            });

            let uniq = a => [...new Set(a)];
            // console.log(search_result);
            Session.set('searchArray', uniq(search_result));
            let date = new Date();
            let begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
            let record = {
                search_name: document.getElementsByName('SearchName')[0].value,
                search_time: begun,
                userId: Meteor.userId()
            };
            //console.log(record);
            Records.insert(record);
        } else {
            Session.set('searchArray', []);
        }
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
    // console.log(Meteor.userId());
    let user_id = Meteor.userId();
    let posted_info = Posts.find({latest: true, deleted: false}).fetch(),
        result = [];

    if (Meteor.user()['username'] === 'zlabtest') {
        result = posted_info;
    } else {
        posted_info.forEach(function (entry) {
            if (entry['userId'] === user_id) result.push(entry);
        });
    }

    Session.set('searchArray', result);
});

Template.postSearch.helpers({
    getInfo() {
        return Session.get('searchArray');
    },

    isEmpty: function (obj) {
        return obj.length === 0;
    }
});
