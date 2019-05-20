$('document').ready(()=>{
  var download = (id, success, failure, status)=>{
    var total = 0;
    var iterate = ()=>{
      total = total + Math.random()*10;
      if(total > 100){ return success(); }
      if(Math.random() < 0.05){ return failure(); }
      status(total);
      setTimeout(iterate, 200)
    }
    iterate();
  }
  var successCallback = ()=>{
    $('#Status').html('Download Success');
  };
  var failureCallback = ()=>{
    $('#Status').html('Download Failure');
  };
  var statusCallback = (status)=>{
    $('#Status').html(status.toFixed(0) + '%');
  };
  $('#Starter').click(()=>{
    download('id', successCallback, failureCallback, statusCallback);
  })
});