var botui = new BotUI('zender');

function init() {
  botui.message
    .bot({
      delay: 1500,
      loading: true,
      content: 'zzZzzzzZzzz...'
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Let`s chat!',
          value: 'yes'
        }]
      })
  }).then(function (res) {
    if(res.value == 'yes') {
      hej();
    } else {
      relatedActor()
      .then(hej);
    }
  });
}

function hej() {
  botui.message
    .bot({
      delay: 2000,
      loading: true,
      content: 'Hej there!',
    })
    .then(function () {
      return botui.message
        .bot({
          delay: 2000,
          loading: true,
          content: 'I don’t know you, but I love Game of Thrones'
      })
    .then(options);
  })
}

function options() {
  botui.message
    .bot({
      delay: 1500,
      loading: true,
      content: 'How do you feel about that?'
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Love it!',
          value: 'yes'
        }, {
          text: 'Meh',
          value: 'no'
        }]
      })
  }).then(function (res) {
    if(res.value == 'yes') {
      recordSerie();
    } else {
      relatedActor()
      .then(hej);
    }
  });
}

var recordSerie = function () {
  botui.message
    .bot({
      delay: 1500,
      loading: true,
      content: 'You know, I can record the next episodes for you. Would you like that?'
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Sure thing',
          value: 'yes'
        }, {
          text: 'Not Really',
          value: 'no'
        }]
      })
  }).then(function (res) {
    if(res.value == 'yes') {
      botui.message.bot({
        delay: 2000,
        loading: true,
        content: 'Say no more.'
      })
      .then(function () {
        return botui.message
          .add({
            delay: 4000,
            loading: true,
            content: 'It’s done! You can find it on your <a href="https://zattoo.com/recordings/">Scheduled Recordings</a>'
          })
      })
      .then(bye);
    } else {
      relatedActor()
      .then(hej);
    }
  });
}

var recordMovie = function () {
  botui.message
    .bot({
      delay: 1500,
      loading: true,
      content: 'You know, I can record it for you. Would you like that?'
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Sure thing',
          value: 'yes'
        }, {
          text: 'Not Really',
          value: 'no'
        }]
      })
  }).then(function (res) {
    if(res.value == 'yes') {
      botui.message.bot({
        delay: 2000,
        loading: true,
        content: 'Say no more.'
      })
      .then(function () {
        return botui.message
          .add({
            delay: 4000,
            loading: true,
            content: 'It’s done! You can find it on your <a href="https://zattoo.com/recordings/">Scheduled Recordings</a>'
          })
      })
      .then(bye);
    } else {
      byeSad()
      .then(hej);
    }
  });
}


var relatedActor = function () {
  botui.message
    .add({
      delay: 4000,
      loading: true,
      content: 'I see.'
    })

    .then(function () {
      return botui.message
        .add({
          delay: 5000,
          loading: true,
          content: 'Well, I can not blame you for that'
        })
    })

    .then(function () {
      return botui.message
        .add({
          delay: 4000,
          loading: true,
          content: 'Speaking of Game of Thrones, do you know that Peter Dinklage was in Nip/Tuck?'
        })
    })

    .then(function () {
      return botui.message
        .add({
          delay: 4000,
          loading: true,
          content: 'Here’s what they say about the movie:'
        })
    })

    .then(function () {
      return botui.message
        .add({
          delay: 4000,
          loading: true,
          content: '<i>The Golden Globe-winning drama explores the world of plastic surgery and the extreme lengths one takes in the quest for external beauty.</i>'
        })
    })

    .then(recordMovie);
}



var bye = function () {
  botui.message
    .add({
      delay: 4000,
      loading: true,
      content: 'Phew, that was intense!'
    })

    .then(function () {
      return botui.message
        .add({
          delay: 4000,
          loading: true,
          content: 'I gotta go refuel my battery now.'
        })
    })

    .then(function () {
      return botui.message
        .add({
          delay: 2000,
          loading: true,
          content: '<a href="https://media.giphy.com/media/7lWMhFRq5Z4xa/giphy.gif">Tschüssy</a>'
        })
    })
}

var byeSad = function () {
  botui.message
    .add({
      delay: 4000,
      loading: true,
      content: 'Ouch. Guess I am having a bad hair day'
    })

    .then(function () {
      return botui.message
        .add({
          delay: 4000,
          loading: true,
          content: 'Will head to the saloon now.'
        })
    })

    .then(function () {
      return botui.message
        .add({
          delay: 2000,
          loading: true,
          content: '<a href="https://media.giphy.com/media/7lWMhFRq5Z4xa/giphy.gif">Here is a cat gif to brighten up your day.</a>'
        })
    })
}


init();
