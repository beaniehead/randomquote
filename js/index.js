$(function() {

  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift();
      var colourStart = "#0A5CD4";
      //$('body').css('background-color',colour2);
      //$('#quoter').css('background-color', colour2);
      $('#quote-title').html('<em>- ' + post.title + '</em>');
      $('#quote-title').css('color', colourStart);
      $('#quote-content').html(post.content);
      $('#quote-content').css('color', colourStart);
      $('#quoteMark').css('color', colourStart);

    },
    cache: false
  });
});

$("#quoter").on("click", function() {

  var letters = '0123456789ABCDEF';
  var colour = '#';
  var colour2 = '#';
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
    colour2 += letters[Math.floor(Math.random() * 16)]

  }

  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      $('body').css('background-color', colour2);
      $('#quoter').css('background-color', colour2);
      $('#quote-title').html('- ' + post.title);
      $('#quote-title').css('color', colour2);
      $('#quote-content').html(post.content);
      $('#quote-content p').css('color', colour2);
      $('#quoteMark').css('color', colour2);
      $('#tweetButton').css('color', colour2);
      
      // If the Source is available, use it. Otherwise hide it.
      /*if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
        $('#quote-source').html('Source:' + post.custom_meta.Source);
      } else {
        $('#quote-source').html('');
      }*/
    },
    cache: false
  });
});

$("a#tweetButton").on("click", function() {
  var _href = $("a#tweetButton").attr("href");
  var quote = $("#quote-content").text();
  var quotee = $("#quote-title").text();
  $('a#tweetButton').attr('href', 'https://twitter.com/intent/tweet?text=' + quote + quotee);
});