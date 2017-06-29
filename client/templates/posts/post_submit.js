Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var date = new Date();
    var begun = moment(date).format("YYYY.MM.DD.hh.mm.ss");
    //done by justin
    var parent_disease=[];
    var child_disease=[];
    var person_insurance=[];
    var spouse_insurance=[];
    var person_read_reply=[];
    var user_disease=[];
    var spouse_disease=[];
    $("input:checkbox[name=child_disease]:checked").each(function(){
        parent_disease.push($(this).val());
    });
    $("input:checkbox[name=child_disease]:checked").each(function(){
        child_disease.push($(this).val());
    });
     $("input:checkbox[name=person_insurance]:checked").each(function(){
        person_insurance.push($(this).val());
    });
     $("input:checkbox[name=spouse_insurance]:checked").each(function(){
        spouse_insurance.push($(this).val());
    });
     $("input:checkbox[name=person_read_reply]:checked").each(function(){
        person_read_reply.push($(this).val());
    });
     $("input:checkbox[name=user_disease]:checked").each(function(){
        user_disease.push($(this).val());
    });

     $("input:checkbox[name=spouse_disease]:checked").each(function(){
        spouse_disease.push($(this).val());
    });
     //done by justin




    var post = {


      //done by justin
      parent_disease:parent_disease,
      child_disease:child_disease,
      person_insurance:person_insurance,
      spouse_insurance:spouse_insurance,
      person_read_reply:person_read_reply,
      spouse_disease:spouse_disease,
      user_disease:user_disease,
      person_debit1_bank:$(e.target).find('[name=person_debit1_bank]').val(),
      person_debit1_num:$(e.target).find('[name=person_debit1_num]').val(),
      person_debit2_bank:$(e.target).find('[name=person_debit2_bank]').val(),
      person_debit2_num:$(e.target).find('[name=person_debit2_num]').val(),
      person_debit3_bank:$(e.target).find('[name=person_debit3_bank]').val(),
      person_debit3_num:$(e.target).find('[name=person_debit3_num]').val(),
      spouse_debit1_bank:$(e.target).find('[name=spouse_debit1_bank]').val(),
      spouse_debit1_num:$(e.target).find('[name=spouse_debit1_num]').val(),
      spouse_debit2_bank:$(e.target).find('[name=spouse_debit2_bank]').val(),
      spouse_debit2_num:$(e.target).find('[name=spouse_debit2_num]').val(),
      spouse_debit3_bank:$(e.target).find('[name=spouse_debit3_bank]').val(),
      spouse_debit3_num:$(e.target).find('[name=spouse_debit3_num]').val(),
      parent_1_name:$(e.target).find('[name=parent_1_name]').val(),
      parent_1_birthday:$(e.target).find('[name=parent_1_birthday]').val(),
      parent_1_relation:$(e.target).find('[name=spouse_debit3_num]').val(),
      parent_2_name:$(e.target).find('[name=parent_2_name]').val(),
      parent_2_birthday:$(e.target).find('[name=parent_2_birthday]').val(),
      parent_2_relation:$(e.target).find('[name=parent_2_relation]').val(),
      parent_3_name:$(e.target).find('[name=parent_3_name]').val(),
      parent_3_birthday:$(e.target).find('[name=parent_3_birthday]').val(),
      parent_3_relation:$(e.target).find('[name=parent_3_relation]').val(),
      parent_4_name:$(e.target).find('[name=parent_4_name]').val(),
      parent_4_birthday:$(e.target).find('[name=parent_4_birthday]').val(),
      parent_4_relation:$(e.target).find('[name=parent_4_relation]').val(),
      person_child_num:$(e.target).find('[name=person_child_num]').val(),
      person_addr_type:$(e.target).find('[name=person_addr_type]').val(),
      person_jobname_1:$(e.target).find('[name=person_jobname_1]').val(),
      person_jobplace_1:$(e.target).find('[name=person_jobplace_1]').val(),
      person_jobstart_1:$(e.target).find('[name=person_jobstart_1]').val(),
      person_jobend_1:$(e.target).find('[name=person_jobend_1]').val(),
      person_jobname_2:$(e.target).find('[name=person_jobname_2]').val(),
      person_jobplace_2:$(e.target).find('[name=person_jobplace_2]').val(),
      person_jobstart_2:$(e.target).find('[name=person_jobstart_2]').val(),
      person_jobend_2:$(e.target).find('[name=person_jobend_2]').val(),
      person_jobname_3:$(e.target).find('[name=person_jobname_3]').val(),
      person_jobplace_3:$(e.target).find('[name=person_jobplace_3]').val(),
      person_jobstart_3:$(e.target).find('[name=person_jobstart_3]').val(),
      person_jobend_3:$(e.target).find('[name=person_jobend_3]').val(),
      spouse_jobname_1:$(e.target).find('[name=spouse_jobname_1]').val(),
      spouse_jobplace_1:$(e.target).find('[name=spouse_jobplace_1]').val(),
      spouse_jobstart_1:$(e.target).find('[name=spouse_jobstart_1]').val(),
      spouse_jobend_1:$(e.target).find('[name=spouse_jobend_1]').val(),
      spouse_jobname_2:$(e.target).find('[name=spouse_jobname_2]').val(),
      spouse_jobplace_2:$(e.target).find('[name=spouse_jobplace_2]').val(),
      spouse_jobstart_2:$(e.target).find('[name=spouse_jobstart_2]').val(),
      spouse_jobend_2:$(e.target).find('[name=spouse_jobend_2]').val(),
      spouse_jobname_3:$(e.target).find('[name=spouse_jobname_3]').val(),
      spouse_jobplace_3:$(e.target).find('[name=spouse_jobplace_3]').val(),
      spouse_jobstart_3:$(e.target).find('[name=spouse_jobstart_3]').val(),
      spouse_jobend_3:$(e.target).find('[name=spouse_jobend_3]').val(),
      //done by justin




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
      userId: Meteor.userId(),
      latest: true,
      deleted: false,
      edit_time: begun,
    };

    

    var front_image = $('#user_front_image')[0].files[0];
    var side_image = $('#user_side_image')[0].files[0];
    var hold_image = $('#user_hold_image')[0].files[0];
    var car_front_image =$('#car_front_image')[0].files[0];
    var car_back_image=$('#car_back_image')[0].files[0];

    if (person_name.value.length===0) {
        alert("申请人姓名不能为空");
    }else if("undefined" === typeof front_image){
        alert("请上传正面照片");
    }else if("undefined" === typeof side_image){
        alert("请上传侧面照片");
    }else if("undefined" === typeof hold_image){
        alert("请上传全身手持身份证照片");
    }else{

      
      post._id = Posts.insert(post);   
      //console.log(file)
      Cloudinary.upload(front_image, {public_id: post._id+"_front_image"}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Cloudinary.upload(side_image, {public_id: post._id+"_side_image"}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Cloudinary.upload(hold_image, {public_id: post._id+"_hold_image"}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Cloudinary.upload(car_front_image, {public_id: post._id+"_car_front_image"}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Cloudinary.upload(car_back_image, {public_id: post._id+"_car_back_image"}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });



    Router.go('postPage', post);
    }
    
  }
});

