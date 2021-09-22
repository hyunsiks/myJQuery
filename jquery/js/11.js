$(function() {
    $(".filter").change(filterText);
    var regexes = [];
    clearFilter();
  
    function filterText() {
      var v = $(this).val();
      var index = $(".filter").index(this);
      console.log(this, v, index)
      if (v == "all") {
        clearFilter();
      } else {
        regexes[index] = new RegExp(v);
        $('.content').show().filter(function() {
          var t = $(this).text();
          return !regexes.reduce(function(accumulator, regex) {
            return accumulator && regex.test(t)
          }, true)
        }).hide();
      }
    }
  
    function clearFilter() {
      $('.filter').val('all').each(function(i) {
        regexes[i] = /./;
      });
      $('.content').show();
    }
  
  })
  