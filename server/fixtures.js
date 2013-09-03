// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var slinId = Meteor.users.insert({
    profile: {name: 'Slin Lee'}
  });
  var slin = Meteor.users.findOne(slinId);

  var kellyId = Meteor.users.insert({
    profile: {name: 'Kelly Miyashiro'}
  });
  var kelly = Meteor.users.findOne(kellyId);

  var kellyblogId = Posts.insert({
    title: 'Kelly Miyashiro - UX Design',
    userId: kelly._id,
    author: kelly.profile.name,
    url: 'http://kellymiyashiro.com/',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0
  });

  Comments.insert({
    postId: kellyblogId,
    userId: slin._id,
    author: slin.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Kelly, can I get involved?'
  });

  Comments.insert({
    postId: kellyblogId,
    userId: kelly._id,
    author: kelly.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Sure you can, Slin!'
  });

  Posts.insert({
    title: 'Introducing Telescope',
    author: 'Sacha Grief',
    url: 'http://sachagrief.com/introducing-telescope/',
    submitted: now,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com',
    submitted: now,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com',
    submitted: now,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: slin.profile.name,
      userId: slin._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}

