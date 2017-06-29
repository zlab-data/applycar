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
      front_image_code : Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_front_image_1",
      side_image_code:Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_side_image_1",
      hold_image_code:Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_hold_image_1",
      car_front_image_code:Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_car_front_image_1",
      car_back_image_code:Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_car_back_image_1",
      //done by justin

      //edit!
      child_1_name:$(e.target).find('[name=child_1_name]').val(),
      child_1_gender:$(e.target).find('[name=child_1_gender]').val(),
      child_1_birthday:$(e.target).find('[name=child_1_birthday]').val(),
      child_2_name:$(e.target).find('[name=child_2_name]').val(),
      child_2_gender:$(e.target).find('[name=child_2_gender]').val(),
      child_2_birthday:$(e.target).find('[name=child_2_birthday]').val(),
      child_3_name:$(e.target).find('[name=child_3_name]').val(),
      child_3_gender:$(e.target).find('[name=child_3_gender]').val(),
      child_3_birthday:$(e.target).find('[name=child_3_birthday]').val(),
      person_spouse_insomnia:$(e.target).find('[name=person_spouse_insomnia]').val(),
      spouse_license_type:$(e.target).find('[name=spouse_license_type]').val(),
      spouse_license_num:$(e.target).find('[name=spouse_license_num]').val(),
      spouse_license_issue_date:$(e.target).find('[name=spouse_license_issue_date]').val(),
      spouse_license_due:$(e.target).find('[name=spouse_license_due]').val(),
      spouse_income_month:$(e.target).find('[name=spouse_income_month]').val(),
      spouse_company:$(e.target).find('[name=spouse_company]').val(),
      spouse_company_phone:$(e.target).find('[name=spouse_company_phone]').val(),
      spouse_company_addr:$(e.target).find('[name=spouse_company_addr]').val(),

      person_credit1_bank:$(e.target).find('[name=person_credit1_bank]').val(),
      person_credit1_num:$(e.target).find('[name=person_credit1_num]').val(),
      person_credit2_bank:$(e.target).find('[name=person_credit2_bank]').val(),
      person_credit2_num:$(e.target).find('[name=person_credit2_num]').val(),
      person_credit3_bank:$(e.target).find('[name=person_credit3_bank]').val(),
      person_credit3_num:$(e.target).find('[name=person_credit3_num]').val(),
      person_credit_total:$(e.target).find('[name=person_credit_total]').val(),
      person_spouse_num_credit:$(e.target).find('[name=person_spouse_num_credit]').val(),
      spouse_credit1_bank:$(e.target).find('[name=spouse_credit1_bank]').val(),
      spouse_credit1_num:$(e.target).find('[name=spouse_credit1_num]').val(),
      spouse_credit2_bank:$(e.target).find('[name=spouse_credit2_bank]').val(),
      spouse_credit2_num:$(e.target).find('[name=spouse_credit2_num]').val(),
      spouse_credit3_bank:$(e.target).find('[name=spouse_credit3_bank]').val(),
      spouse_credit3_num:$(e.target).find('[name=spouse_credit3_num]').val(),
      spouse_credit_total:$(e.target).find('[name=spouse_credit_total]').val(),
      
      spouse_company_type:$(e.target).find('[name=spouse_company_type]').val(),
      spouse_company_industry:$(e.target).find('[name=spouse_company_industry]').val(),
      spouse_job:$(e.target).find('[name=spouse_job]').val(),
      spouse_post:$(e.target).find('[name=spouse_post]').val(),
      guarantor_name:$(e.target).find('[name=guarantor_name]').val(),
      guarantor_gender:$(e.target).find('[name=guarantor_gender]').val(),
      guarantor_birthday:$(e.target).find('[name=guarantor_birthday]').val(),
      guarantor_id_type:$(e.target).find('[name=guarantor_id_type]').val(),
      guarantor_id:$(e.target).find('[name=guarantor_id]').val(),
      guarantor_id_issuer:$(e.target).find('[name=guarantor_id_issuer]').val(), 
      guarantor_id_issuer_date:$(e.target).find('[name=guarantor_id_issuer_date]').val(),
      guarantor_address:$(e.target).find('[name=guarantor_address]').val(),
      guarantor_company:$(e.target).find('[name=guarantor_company]').val(),
      guarantor_income_month:$(e.target).find('[name=guarantor_income_month]').val(),
      guarantor_company_phone:$(e.target).find('[name=guarantor_company_phone]').val(),
      guarantor_company_addr:$(e.target).find('[name=guarantor_company_addr]').val(),
//edit!

//Added 22-69, 153-156, 158,160,162,164
      person_if_drug:$(e.target).find('[name=person_if_drug]').val(),
      spouse_if_drug:$(e.target).find('[name=spouse_if_drug]').val(),
      person_if_allergy:$(e.target).find('[name=person_if_allergy]').val(),
      spouse_if_allergy:$(e.target).find('[name=spouse_if_allergy]').val(),

      person_ill:$(e.target).find('[name=person_ill]').val(),
      person_ill_time:$(e.target).find('[name=person_ill_time]').val(),
      spouse_ill:$(e.target).find('[name=spouse_ill]').val(),
      spouse_ill_time:$(e.target).find('[name=spouse_ill_time]').val(),
      person_surgery:$(e.target).find('[name=person_surgery]').val(),
      person_surgery_time:$(e.target).find('[name=person_surgery_time]').val(),
      spouse_surgery:$(e.target).find('[name=spouse_surgery]').val(),
      spouse_surgery_time:$(e.target).find('[name=spouse_surgery_time]').val(),

      person_license_type: $(e.target).find('[name=person_license_type]').val(),
      person_license_num: $(e.target).find('[name=person_license_num]').val(),
      person_license_issue_date:$(e.target).find('[name=person_license_issue_date]').val(),
      person_license_due:$(e.target).find('[name=person_license_due]').val(),
      person_income_month:$(e.target).find('[name=person_income_month]').val(),
      person_company:$(e.target).find('[name=person_company]').val(),
      person_company_phone:$(e.target).find('[name=person_company_phone]').val(),
      person_company_addr:$(e.target).find('[name=person_company_addr]').val(),   
      person_company_type:$(e.target).find('[name=person_company_type]').val(),
      person_company_industry:$(e.target).find('[name=person_company_industry]').val(),
      person_job:$(e.target).find('[name=person_job]').val(),
      person_post:$(e.target).find('[name=person_post]').val(),
      spouse_name:$(e.target).find('[name=spouse_name]').val(),
      spouse_birthday:$(e.target).find('[name=spouse_birthday]').val(),
      spouse_id_type:$(e.target).find('[name=spouse_id_type]').val(),
      spouse_id_issuer:$(e.target).find('[name=spouse_id_issuer]').val(),
      spouse_id_issuer_date:$(e.target).find('[name=spouse_id_issuer_date]').val(),
      spouse_id:$(e.target).find('[name=spouse_id]').val(),
      spouse_birth_place:$(e.target).find('[name=spouse_birth_place]').val(),
      spouse_addr_place:$(e.target).find('[name=spouse_addr_place]').val(),
      spouse_addr_type:$(e.target).find('[name=spouse_addr_type]').val(),
      spouse_education_level:$(e.target).find('[name=spouse_education_level]').val(),
      spouse_height:$(e.target).find('[name=spouse_height]').val(),
      spouse_if_driver_lisence:$(e.target).find('[name=spouse_if_driver_lisence]').val(),

//Added 21-69, 153-156, 
      type_person_name:$(e.target).find('[name=type_person_name]').val(),
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
      person_num_credit:$(e.target).find('[name=person_num_credit]').val(),
      person_spouse_num_credit:$(e.target).find('[name=person_spouse_num_credit]').val(),
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

    
    var front_image_code=Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_front_image_1";
    var side_image_code=Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_side_image_1";
    console.log(side_image_code);
    var hold_image_code=Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_hold_image_1";
    console.log(hold_image_code)
    var car_front_image_code=Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_car_front_image_1";
    console.log(car_front_image_code)
    var car_back_image_code=Meteor.userId()+$(e.target).find('[name=person_id]').val()+"_car_back_image_1";



    var front_image = $('#user_front_image')[0].files[0];
    var side_image = $('#user_side_image')[0].files[0];
    var hold_image = $('#user_hold_image')[0].files[0];
    var car_front_image =$('#car_front_image')[0].files[0];
    var car_back_image=$('#car_back_image')[0].files[0];
    var all_required=document.getElementsByClassName('required-field');
    var finish=true;
    for (var i=0; i < all_required.length; i++){
      if (all_required[i].value.length===0){
        finish=false;
      }
    }

      if (person_name.value.length===0) {
          alert("申请人姓名不能为空");
      }else if (person_id.value.length===0) {
          alert("申请人身份证号不能为空");
      }else if("undefined" === typeof front_image){
          alert("请上传正面照片");
      }else if("undefined" === typeof side_image){
          alert("请上传侧面照片");
      }else if("undefined" === typeof hold_image){
          alert("请上传全身手持身份证照片");
      }else if("undefined" === typeof car_front_image){
          alert("请上传车辆正面照片");
      }else if("undefined" === typeof car_back_image){
          alert("请上传车辆背面照片");
      }else if(finish===false){
        alert("请完成所有必填资料");
      }
      else{
      post._id = Posts.insert(post);   
      //console.log(file)
      Cloudinary.upload(front_image, {public_id: front_image_code}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Cloudinary.upload(side_image, {public_id: side_image_code}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Cloudinary.upload(hold_image, {public_id: hold_image_code}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Cloudinary.upload(car_front_image, {public_id: car_front_image_code}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });
      Cloudinary.upload(car_back_image, {public_id: car_back_image_code}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });



    Router.go('postPage', post);
    }
    
  }
});

