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

