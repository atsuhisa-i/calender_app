$(function(){
  function buildHTML(comment){
    var html = `<p class="comment__text">${comment.text}</p>`
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comments__list').append(html);
      $('.textbox').val('');
      $('.comment__textbox').val('');
      $('.form__button').prop('disabled', false);
    })
    .fall(function(){
      alert('error');
    })
  })
});