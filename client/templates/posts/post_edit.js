Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var date = new Date();
    var begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
    var previousProperties={
      person_name: this.person_name,
      person_id: this.person_id,
      person_gender:this.person_gender,
      person_birthday:this.person_birthday,
      person_id_type:this.person_id_type,
      person_id_issuer:this.person_id_issuer,
      userId: Meteor.userId(),
      latest:false,
      deleted: false,
      edit_time: this.edit_time
    }

    


    var postProperties = {
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
      latest:true,
      deleted: false,
      edit_time: begun,
    }

   

    var file = $('#userimage')[0].files[0];
    //console.log(file)
    if ("undefined" === typeof file) {
      alert("请重新上传照片")
    }else{
      Posts.update(currentPostId, {$set: previousProperties}, function(error) {
        if (error) {
          alert(error.reason);
        } 
      });
      postProperties._id = Posts.insert(postProperties);
      Cloudinary.upload(file, {public_id: postProperties._id}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Router.go('postPage', {_id: postProperties._id});
    }

    
  },

  'click .delete': function(e) {
    e.preventDefault();
    var previousProperties={
      person_name: this.person_name,
      person_id: this.person_id,
      person_gender:this.person_gender,
      person_birthday:this.person_birthday,
      person_id_type:this.person_id_type,
      userId: Meteor.userId(),
      latest:false,
      deleted: true,
      edit_time: this.edit_time
    }
    if (confirm("确定删除这份申请表吗?")) {
      var currentPostId = this._id;
      Posts.update(currentPostId, {$set: previousProperties}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('postsList');
      }
      });
      
    }
  }
});


Template.postEdit.helpers({
  getId: function(){
    var result="http://res.cloudinary.com/dcyqpeqbh/image/upload/v1498217696/"+this._id+".jpg"
    return result
  }
})


    