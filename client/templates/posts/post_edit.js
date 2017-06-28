Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    

    var date = new Date();
    var begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
    var previousProperties={
      person_name: this.person_name,
      person_id: this.person_id,
      person_gender:this.person_gender,
      person_birthday:this.person_birthday,
      person_id_type:this.person_id_type,
      person_id_issuer:this.person_id_issuer,
      person_address:this.person_address,
      person_birth_place:this.person_birth_place,
      person_addr_plac:this.eperson_addr_place,
      person_height:this.person_height,
      person_education_level:this.person_education_level,
      person_marriage:this.person_marriage,
      person_if_son:this.person_if_son,
      person_if_driver_lisence:this.person_if_driver_lisence,
      guarantor_company_type:this.guarantor_company_type,
      guarantor_company_industry:this.guarantor_company_industry,
      guarantor_job:this.guarantor_job,
      guarantor_post:this.guarantor_post,
      car_type:this.car_type,
      car_brand:this.car_brand,
      motorcycle_type:this.motorcycle_type,
      car_price:this.car_price,
      gps_expense:this.gps_expense,
      insurance_expense:this.insurance_expense,
      tax:this.tax,
      down_payment:this.down_payment,
      down_payment_percentage:this.down_payment_percentage,
      loan_value:this.loan_value,
      loan_term:this.loan_term,
      car_color:this.car_color,
      financial_product:this.financial_product,
      car_id:this.car_id,
      engine_num:this.engine_num,
      dealer_name:this.dealer_name,
      dealer_phone_num:this.dealer_phone_num,
      applicant_phone_num:this.applicant_phone_num,
      applicant_phone_num_starting_date:this.applicant_phone_num_starting_date,
      spouse_phone_num:this.spouse_phone_num,
      spouse_phone_num_starting_date:this.spouse_phone_num_starting_date,
      family_expense:this.family_expense,
      family_house:this.family_house,
      house_typ:this.ehouse_type,
      repayment:this.repayment,
      house_rent:this.house_rent,
      check_in_date:this.check_in_date,
      children_tuition:this.children_tuition,
      live_with_parent:this.live_with_parent,
      applicant_passport:this.applicant_passport,
      spouse_passport:this.spouse_passport,
      applicant_go_abroad:this.applicant_go_abroad,
      spouse_go_abroad:this.spouse_go_abroad,
      applicant_country:this.applicant_country,
      spouse_country:this.spouse_country,
      applicant_primary_school:this.applicant_primary_school,
      applicant_primary_start:this.applicant_primary_start,
      applicant_middle_school:this.applicant_middle_school,
      applicant_middle_start:this.applicant_middle_start,
      applicant_high_school:this.applicant_high_school,
      applicant_high_start:this.applicant_high_start,
      applicant_undergraduate:this.applicant_undergraduate,
      applicant_undergraduate_start:this.applicant_undergraduate_start,
      applicant_master:this.applicant_master,
      applicant_master_start:this.applicant_master_start,
      spouse_primary_school:this.spouse_primary_school,
      spouse_primary_start:this.spouse_primary_start,
      spouse_middle_school:this.spouse_middle_school,
      spouse_middle_start:this.spouse_middle_start,
      spouse_high_school:this.spouse_high_school,
      spouse_high_start:this.spouse_high_start,
      spouse_undergraduate:this.spouse_undergraduate,
      spouse_undergraduate_start:this.spouse_undergraduate_start,
      spouse_master:this.spouse_master,
      spouse_master_start:this.spouse_master_start,
      applicant_newspaper:this.applicant_newspaper,
      applicant_lawyer:this.applicant_lawyer,
      layer_name:this.layer_name,
      layer_phone_num:this.layer_phone_num,
      applicant_title:this.applicant_title,
      spouse_title:this.spouse_title,
      applicant_certificate:this.applicant_certificate,
      spouse_certificate:this.spouse_certificate,
      applicant_income:this.applicant_income,
      person_inc_str: this.person_inc_str,
      spouse_income:this.spouse_income,
      person_spouse_inc_str: this.person_spouse_inc_str,
      person_if_finance: this.person_if_finance,
      person_finance_invest: this.person_finance_invest,
      person_spouse_num_debit: this.person_spouse_num_debit,
      person_num_debit: this.person_num_debit,
      person_num_crebit: this.person_num_crebit,
      person_spouse_num_crebit: this.person_spouse_num_crebit,
      person_if_loan: this.person_if_loan,
      person_loan_amount: this.person_loan_amount,
      person_loan_type: this.person_loan_type,
      person_if_epay: this.person_if_epay,
      person_spouse_if_epay: this.person_spouse_if_epay,
      person_shortsight: this.person_shortsight,
      person_spouse_shortsight: this.person_spouse_shortsight,
      person_if_healthexam: this.person_if_healthexam,
      person_if_spouse_healthexam: this.person_if_spouse_healthexam,
      person_if_serious_ill: this.person_if_serious_ill,
      person_spouse_if_serious_ill: this.person_spouse_if_serious_ill,
      person_if_surgery: this.person_if_surgery,
      person_spouse_if_surgery: this.person_spouse_if_surgery,
      person_if_smoke: this.person_if_smoke,
      person_smoke_frequen: this.person_smoke_frequen,
      person_spouse_if_smoke: this.person_spouse_if_smoke,
      person_spouse_smoke_frequency: this.person_spouse_smoke_frequency,
      person_if_drink: this.person_if_drink,
      person_drink: this.person_drink,
      person_spouse_if_drink: this.person_spouse_if_drink,
      person_spouse_drink: this.person_spouse_drink,
      person_if_staylate: this.person_if_staylate,
      person_spouse_if_staylate: this.person_spouse_if_staylate,
      person_if_insomnia: this.person_if_insomnia,
      person_spouse_if_insomnia: this.person_spouse_if_insomnia,
      person_if_eatathome: this.person_if_eatathome,
      person_spouse_if_eatathome: this.person_spouse_if_eatathome,
      person_exercise_frequency: this.person_exercise_frequency,
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
      person_id_issuer_date:$(e.target).find('[name=person_id_issuer_date]').val(),
      person_address:$(e.target).find('[name=person_address]').val(),
      person_birth_place:$(e.target).find('[name=person_birth_place]').val(),
      person_addr_place:$(e.target).find('[name=person_addr_place]').val(),
      person_height:$(e.target).find('[name=person_height]').val(),
      person_education_level:$(e.target).find('[name=person_education_level]').val(),
      person_marriage:$(e.target).find('[name=person_marriage]').val(),
      person_if_son:$(e.target).find('[name=person_if_son]').val(),
      person_if_driver_lisence:$(e.target).find('[name=person_if_driver_lisence]').val(),
      guarantor_company_type:$(e.target).find('[name=guarantor_company_type]').val(),
      guarantor_company_industry:$(e.target).find('[name=guarantor_company_industry]').val(),
      guarantor_job:$(e.target).find('[name=guarantor_job]').val(),
      guarantor_post:$(e.target).find('[name=guarantor_post]').val(),
      car_type:$(e.target).find('[name=car_type]').val(),
      car_brand:$(e.target).find('[name=car_brand]').val(),
      motorcycle_type:$(e.target).find('[name=motorcycle_type]').val(),
      car_price:$(e.target).find('[name=car_price]').val(),
      gps_expense:$(e.target).find('[name=gps_expense]').val(),
      insurance_expense:$(e.target).find('[name=insurance_expense]').val(),
      tax:$(e.target).find('[name=tax]').val(),
      down_payment:$(e.target).find('[name=down_payment]').val(),
      down_payment_percentage:$(e.target).find('[name=down_payment_percentage]').val(),
      loan_value:$(e.target).find('[name=loan_value]').val(),
      loan_term:$(e.target).find('[name=loan_term]').val(),
      car_color:$(e.target).find('[name=car_color]').val(),
      financial_product:$(e.target).find('[name=financial_product]').val(),
      car_id:$(e.target).find('[name=car_id]').val(),
      engine_num:$(e.target).find('[name=engine_num]').val(),
      dealer_name:$(e.target).find('[name=dealer_name]').val(),
      dealer_phone_num:$(e.target).find('[name=dealer_phone_num]').val(),
      applicant_phone_num:$(e.target).find('[name=applicant_phone_num]').val(),
      applicant_phone_num_starting_date:$(e.target).find('[name=applicant_phone_num_starting_date]').val(),
      spouse_phone_num:$(e.target).find('[name=spouse_phone_num]').val(),
      spouse_phone_num_starting_date:$(e.target).find('[name=spouse_phone_num_starting_date]').val(),
      family_expense:$(e.target).find('[name=family_expense]').val(),
      family_house:$(e.target).find('[name=family_house]').val(),
      house_type:$(e.target).find('[name=house_type]').val(),
      repayment:$(e.target).find('[name=repayment]').val(),
      house_rent:$(e.target).find('[name=house_rent]').val(),
      check_in_date:$(e.target).find('[name=check_in_date]').val(),
      children_tuition:$(e.target).find('[name=children_tuition]').val(),
      live_with_parent:$(e.target).find('[name=live_with_parent]').val(),
      applicant_passport:$(e.target).find('[name=applicant_passport]').val(),
      spouse_passport:$(e.target).find('[name=spouse_passport]').val(),
      applicant_go_abroad:$(e.target).find('[name=applicant_go_abroad]').val(),
      spouse_go_abroad:$(e.target).find('[name=spouse_go_abroad]').val(),
      applicant_country:$(e.target).find('[name=applicant_country]').val(),
      spouse_country:$(e.target).find('[name=spouse_country]').val(),
      applicant_primary_school:$(e.target).find('[name=applicant_primary_school]').val(),
      applicant_primary_start:$(e.target).find('[name=applicant_primary_start]').val(),
      applicant_middle_school:$(e.target).find('[name=applicant_middle_school]').val(),
      applicant_middle_start:$(e.target).find('[name=applicant_middle_start]').val(),
      applicant_high_school:$(e.target).find('[name=applicant_high_school]').val(),
      applicant_high_start:$(e.target).find('[name=applicant_high_start]').val(),
      applicant_undergraduate:$(e.target).find('[name=applicant_undergraduate]').val(),
      applicant_undergraduate_start:$(e.target).find('[name=applicant_undergraduate_start]').val(),
      applicant_master:$(e.target).find('[name=applicant_master]').val(),
      applicant_master_start:$(e.target).find('[name=applicant_master_start]').val(),
      spouse_primary_school:$(e.target).find('[name=spouse_primary_school]').val(),
      spouse_primary_start:$(e.target).find('[name=spouse_primary_start]').val(),
      spouse_middle_school:$(e.target).find('[name=spouse_middle_school]').val(),
      spouse_middle_start:$(e.target).find('[name=spouse_middle_start]').val(),
      spouse_high_school:$(e.target).find('[name=spouse_high_school]').val(),
      spouse_high_start:$(e.target).find('[name=spouse_high_start]').val(),
      spouse_undergraduate:$(e.target).find('[name=spouse_undergraduate]').val(),
      spouse_undergraduate_start:$(e.target).find('[name=spouse_undergraduate_start]').val(),
      spouse_master:$(e.target).find('[name=spouse_master]').val(),
      spouse_master_start:$(e.target).find('[name=spouse_master_start]').val(),
      applicant_newspaper:$(e.target).find('[name=applicant_newspaper]').val(),
      applicant_lawyer:$(e.target).find('[name=applicant_lawyer]').val(),
      layer_name:$(e.target).find('[name=layer_name]').val(),
      layer_phone_num:$(e.target).find('[name=layer_phone_num]').val(),
      applicant_title:$(e.target).find('[name=applicant_title]').val(),
      spouse_title:$(e.target).find('[name=spouse_title]').val(),
      applicant_certificate:$(e.target).find('[name=applicant_certificate]').val(),
      spouse_certificate:$(e.target).find('[name=spouse_certificate]').val(),
      applicant_income:$(e.target).find('[name=applicant_income]').val(),
      person_inc_str:$(e.target).find('[name=person_inc_str]').val(),
      spouse_income:$(e.target).find('[name=spouse_income]').val(),
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
      latest:true,
      deleted: false,
      edit_time: begun,
    }

   

    var file = $('#user_front_image')[0].files[0];
    console.log(file)


    var currentPostId = this._id;
    if ("undefined" === typeof file) {
      //alert("请重新上传照片")
    
      //var photo = $.cloudinary.image(currentPostId);
      var photo=new File(["http://res.cloudinary.com/dcyqpeqbh/image/upload/"+currentPostId+".jpg"],currentPostId+".jpg",{type: "image/jpeg"})
      console.log(photo)
       Posts.update(currentPostId, {$set: previousProperties}, function(error) {
        if (error) {
          alert(error.reason);
        } 
      });
      postProperties._id = Posts.insert(postProperties);
      Cloudinary.upload(photo, {public_id: postProperties._id}, function(err, res) {
        console.log(err);
        console.log("Upload Result: " + res);
      });

     
      Router.go('postPage', {_id: postProperties._id});


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
      person_id_issuer:this.person_id_issuer,
      person_address:this.person_address,
      person_birth_place:this.person_birth_place,
      person_addr_plac:this.eperson_addr_place,
      person_height:this.person_height,
      person_education_level:this.person_education_level,
      person_marriage:this.person_marriage,
      person_if_son:this.person_if_son,
      person_if_driver_lisence:this.person_if_driver_lisence,
      guarantor_company_type:this.guarantor_company_type,
      guarantor_company_industry:this.guarantor_company_industry,
      guarantor_job:this.guarantor_job,
      guarantor_post:this.guarantor_post,
      car_type:this.car_type,
      car_brand:this.car_brand,
      motorcycle_type:this.motorcycle_type,
      car_price:this.car_price,
      gps_expense:this.gps_expense,
      insurance_expense:this.insurance_expense,
      tax:this.tax,
      down_payment:this.down_payment,
      down_payment_percentage:this.down_payment_percentage,
      loan_value:this.loan_value,
      loan_term:this.loan_term,
      car_color:this.car_color,
      financial_product:this.financial_product,
      car_id:this.car_id,
      engine_num:this.engine_num,
      dealer_name:this.dealer_name,
      dealer_phone_num:this.dealer_phone_num,
      applicant_phone_num:this.applicant_phone_num,
      applicant_phone_num_starting_date:this.applicant_phone_num_starting_date,
      spouse_phone_num:this.spouse_phone_num,
      spouse_phone_num_starting_date:this.spouse_phone_num_starting_date,
      family_expense:this.family_expense,
      family_house:this.family_house,
      house_typ:this.ehouse_type,
      repayment:this.repayment,
      house_rent:this.house_rent,
      check_in_date:this.check_in_date,
      children_tuition:this.children_tuition,
      live_with_parent:this.live_with_parent,
      applicant_passport:this.applicant_passport,
      spouse_passport:this.spouse_passport,
      applicant_go_abroad:this.applicant_go_abroad,
      spouse_go_abroad:this.spouse_go_abroad,
      applicant_country:this.applicant_country,
      spouse_country:this.spouse_country,
      applicant_primary_school:this.applicant_primary_school,
      applicant_primary_start:this.applicant_primary_start,
      applicant_middle_school:this.applicant_middle_school,
      applicant_middle_start:this.applicant_middle_start,
      applicant_high_school:this.applicant_high_school,
      applicant_high_start:this.applicant_high_start,
      applicant_undergraduate:this.applicant_undergraduate,
      applicant_undergraduate_start:this.applicant_undergraduate_start,
      applicant_master:this.applicant_master,
      applicant_master_start:this.applicant_master_start,
      spouse_primary_school:this.spouse_primary_school,
      spouse_primary_start:this.spouse_primary_start,
      spouse_middle_school:this.spouse_middle_school,
      spouse_middle_start:this.spouse_middle_start,
      spouse_high_school:this.spouse_high_school,
      spouse_high_start:this.spouse_high_start,
      spouse_undergraduate:this.spouse_undergraduate,
      spouse_undergraduate_start:this.spouse_undergraduate_start,
      spouse_master:this.spouse_master,
      spouse_master_start:this.spouse_master_start,
      applicant_newspaper:this.applicant_newspaper,
      applicant_lawyer:this.applicant_lawyer,
      layer_name:this.layer_name,
      layer_phone_num:this.layer_phone_num,
      applicant_title:this.applicant_title,
      spouse_title:this.spouse_title,
      applicant_certificate:this.applicant_certificate,
      spouse_certificate:this.spouse_certificate,
      applicant_income:this.applicant_income,
      person_inc_str: this.person_inc_str,
      spouse_income:this.spouse_income,
      person_spouse_inc_str: this.person_spouse_inc_str,
      person_if_finance: this.person_if_finance,
      person_finance_invest: this.person_finance_invest,
      person_spouse_num_debit: this.person_spouse_num_debit,
      person_num_debit: this.person_num_debit,
      person_num_crebit: this.person_num_crebit,
      person_spouse_num_crebit: this.person_spouse_num_crebit,
      person_if_loan: this.person_if_loan,
      person_loan_amount: this.person_loan_amount,
      person_loan_type: this.person_loan_type,
      person_if_epay: this.person_if_epay,
      person_spouse_if_epay: this.person_spouse_if_epay,
      person_shortsight: this.person_shortsight,
      person_spouse_shortsight: this.person_spouse_shortsight,
      person_if_healthexam: this.person_if_healthexam,
      person_if_spouse_healthexam: this.person_if_spouse_healthexam,
      person_if_serious_ill: this.person_if_serious_ill,
      person_spouse_if_serious_ill: this.person_spouse_if_serious_ill,
      person_if_surgery: this.person_if_surgery,
      person_spouse_if_surgery: this.person_spouse_if_surgery,
      person_if_smoke: this.person_if_smoke,
      person_smoke_frequen: this.person_smoke_frequen,
      person_spouse_if_smoke: this.person_spouse_if_smoke,
      person_spouse_smoke_frequency: this.person_spouse_smoke_frequency,
      person_if_drink: this.person_if_drink,
      person_drink: this.person_drink,
      person_spouse_if_drink: this.person_spouse_if_drink,
      person_spouse_drink: this.person_spouse_drink,
      person_if_staylate: this.person_if_staylate,
      person_spouse_if_staylate: this.person_spouse_if_staylate,
      person_if_insomnia: this.person_if_insomnia,
      person_spouse_if_insomnia: this.person_spouse_if_insomnia,
      person_if_eatathome: this.person_if_eatathome,
      person_spouse_if_eatathome: this.person_spouse_if_eatathome,
      person_exercise_frequency: this.person_exercise_frequency,
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


    