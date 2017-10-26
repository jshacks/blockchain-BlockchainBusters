app = {
  showSwal: function(type){
    if(type == 'basic'){
      swal("Here's a message!");

    }else if(type == 'title-and-text'){
      swal("Here's a message!", "It's pretty, isn't it?")

    }else if(type == 'success-message'){
      swal("Good job!", "You clicked the button!", "success")

    }else if(type == 'add-song'){
      swal({  title: "Add a new song",
        text: "Add a new song to your catalog",
        html:
        '<form class="form-horizontal">\n' +
        '  <div class="form-group">\n' +
        '     <label class="col-md-3 control-label">Name</label>\n' +
        '     <div class="col-md-9">\n' +
        '       <input type="text" placeholder="Name" class="form-control">\n' +
        '     </div>\n' +
        '  </div>'+
        '  <div class="form-group">\n' +
        '    <label class="col-md-3 control-label">Album</label>' +
        '    <div class="col-md-9">' +
        '       <select class="form-control">\n' +
        '          <option>Album One</option>' +
        '          <option>Album Two</option>' +
        '       </select>\n' +
        '    </div>' +
        '  </div>\n' +
        '  <div class="form-group">\n' +
        '    <label class="col-md-3 control-label">Price</label>' +
        '     <div class="col-md-9">\n' +
        '       <div class="input-group song-price">\n' +
        '         <span class="input-group-addon">©</span>\n' +
        '         <input type="text" class="form-control">\n' +
        '       </div>'+
        '     </div>'+
        '  </div>'+
        '  <div class="form-group">\n' +
        '     <label class="col-md-3 control-label">Upload</label>\n' +
        '     <div class="col-md-9">\n' +
        '       <input type="file" placeholder="Upload" class="form-control">\n' +
        '     </div>\n' +
        '  </div>'+
        '</form>',
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn btn-info btn-fill",
        confirmButtonText: "Add",
        cancelButtonClass: "btn btn-danger btn-fill",
        closeOnConfirm: false
      },function(){
        swal("Done!", "Your song is safe with us.", "success");
      });

    }else if(type == 'warning-message-and-cancel'){
      swal({  title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
      },function(isConfirm){
        if (isConfirm){
          swal("Deleted!", "Your imaginary file has been deleted.", "success");
        }else{
          swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });

    }else if(type == 'custom-html'){
      swal({  title: 'HTML example',
        html:
        'You can use <b>bold text</b>, ' +
        '<a href="http://github.com">links</a> ' +
        'and other HTML tags'
      });

    }else if(type == 'auto-close'){
      swal({ title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    } else if(type == 'input-field'){
      swal({
            title: 'Input something',
            html: '<p><input id="input-field" class="form-control">',
            showCancelButton: true,
            closeOnConfirm: false,
            allowOutsideClick: false
          },
          function() {
            swal({
              html:
              'You entered: <strong>' +
              $('#input-field').val() +
              '</strong>'
            });
          })
    }
  },
}
