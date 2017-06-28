Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var date = new Date();
    var begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");

    var post = {
      person_name: $(e.target).find('[name=person_name]').val(),
      person_id: $(e.target).find('[name=person_id]').val(),
      person_gender:$(e.target).find('[name=person_gender]').val(),
      person_birthday:$(e.target).find('[name=person_birthday]').val(),
      person_id_type:$(e.target).find('[name=person_id_type]').val(),
      person_id_issuer:$(e.target).find('[name=person_id_issuer]').val(),
      person_inc_str:$(e.target).find('[name=person_inc_str]').val(),
      person_spouse_income:$(e.target).find('[name=person_spouse_income]').val(),
      person_spouse_inc_str:$(e.target).find('[name=person_spouse_inc_str]').val(),
      person_if_finance:$(e.target).find('[name=person_if_finance]').val(),
      person_finance_invest:$(e.target).find('[name=person_finance_invest]').val(),
      person_spouse_num_debit:$(e.target).find('[name=person_spouse_num_debit]').val(),
      person_num_debit:$(e.target).find('[name=person_num_debit]').val(),
      person_num_crebit:$(e.target).find('[name=person_num_crebit]').val(),
      person_spouse_num_crebit:$(e.target).find('[name=person_spouse_num_crebit]').val(),
      person_if_loan:$(e.target).find('[name=person_if_loan]').val(),
      person_loan_amount:$(e.target).find('[name=person_loan_amount]').val(),
      person_loan_type:$(e.target).find('[name=person_loan_type]').val(),
      person_if_epay:$(e.target).find('[name=person_if_epay]').val(),
      person_spouse_if_epay:$(e.target).find('[name=person_spouse_if_epay]').val(),
      person_shortsight:$(e.target).find('[name=person_shortsight]').val(),
      person_spouse_shortsight:$(e.target).find('[name=person_spouse_shortsight]').val(),
      person_if_healthexam:$(e.target).find('[name=person_if_healthexam]').val(),
      person_if_spouse_healthexam:$(e.target).find('[name=person_if_spouse_healthexam]').val(),
      person_if_serious_ill:$(e.target).find('[name=person_if_serious_ill]').val(),
      person_spouse_if_serious_ill:$(e.target).find('[name=person_spouse_if_serious_ill]').val(),
      person_if_surgery:$(e.target).find('[name=person_if_surgery]').val(),
      person_spouse_if_surgery:$(e.target).find('[name=person_spouse_if_surgery]').val(),
      person_if_smoke:$(e.target).find('[name=person_if_smoke]').val(),
      person_smoke_frequency:$(e.target).find('[name=person_smoke_frequency]').val(),
      person_spouse_if_smoke:$(e.target).find('[name=person_spouse_if_smoke]').val(),
      person_spouse_smoke_frequency:$(e.target).find('[name=person_spouse_smoke_frequency]').val(),
      person_if_drink:$(e.target).find('[name=person_if_drink]').val(),
      person_drink:$(e.target).find('[name=person_drink]').val(),
      person_spouse_if_drink:$(e.target).find('[name=person_spouse_if_drink]').val(),
      person_spouse_drink:$(e.target).find('[name=person_spouse_drink]').val(),
      person_if_staylate:$(e.target).find('[name=person_if_staylate]').val(),
      person_spouse_if_staylate:$(e.target).find('[name=person_spouse_if_staylate]').val(),
      person_if_insomnia:$(e.target).find('[name=person_if_insomnia]').val(),
      person_spouse_if_insomnia:$(e.target).find('[name=person_spouse_if_insomnia]').val(),
      person_if_eatathome:$(e.target).find('[name=person_if_eatathome]').val(),
      person_spouse_if_eatathome:$(e.target).find('[name=person_spouse_if_eatathome]').val(),
      person_exercise_frequency:$(e.target).find('[name=person_exercise_frequency]').val(),
      person_spouse_exercise_frequency:$(e.target).find('[name=person_spouse_exercise_frequency]').val(),
      person_if_exercise_membership:$(e.target).find('[name=person_if_exercise_membership]').val(),
      person_spouse_if_exercise_membership:$(e.target).find('[name=person_spouse_if_exercise_membership]').val(),
      guarantor_relationship:$(e.target).find('[name=guarantor_relationship]').val(),
      guarantor_first_meet:$(e.target).find('[name=guarantor_first_meet]').val(),
      emergency1_name:$(e.target).find('[name=emergency1_name]').val(),
      emergency1_relationship:$(e.target).find('[name=emergency1_relationship]').val(),
      emergency1_contact:$(e.target).find('[name=emergency2_contact]').val(),
      emergency2_name:$(e.target).find('[name=emergency2_name]').val(),
      emergency2_relationship:$(e.target).find('[name=emergency2_relationship]').val(),
      emergency2_contact:$(e.target).find('[name=emergency2_contact]').val(),
      userId: Meteor.userId(),
      latest: true,
      deleted: false,
      edit_time: begun,
    };

    console.log(person_name.value);

    var file = $('#userimage')[0].files[0];
    if (person_name.value.length===0) {
        alert("申请人姓名不能为空");
    }else if("undefined" === typeof file){
        alert("请上传照片");
    }else{
      post._id = Posts.insert(post);   
      //console.log(file)
      Cloudinary.upload(file, {public_id: post._id}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
    Router.go('postPage', post);
    }
    
  }
});

