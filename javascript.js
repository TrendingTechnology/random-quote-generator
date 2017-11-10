$(document).ready(function() {
  generateContent();
  animateColors();
});

$('#another-quote').on('click', function() {
  generateContent();
});

function generateContent() {
$.ajax({
  url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
  dataType: "json",
  success: function (data) {
    var post = data.shift();
    var tweet;
    $('.quote-content').html(post.content);
    $('.quote-title').html(post.title);
    tweet = post.content.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
    $("a").attr("href", "https://twitter.com/intent/tweet?text=" + tweet + " " + post.link);
  },
    cache: false
});
}

function animateColors() {
  var animate_loop, colors, i;
  colors = ['#B7D2FF', '#4FF2C6', '#E5FF89', '#FF8EAC', '#EC77FF'];
  i = 0;
  animate_loop = function() {
    $('body').animate({
      backgroundColor: colors[i++ % colors.length]
    }, 3500, function() {
      animate_loop();
    });
  };
  animate_loop();
}
