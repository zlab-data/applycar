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


    