var botui = new BotUI('zender');

function init() {
  botui.message
    .bot({
      delay: 1000,
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
      recordSerie()
      .then(init);
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
        delay: 2500,
        loading: true,
        content: 'Say no more. It’s done! You can find it on your Scheduled Recordings.'
      })
      .then(bye);
    } else {
      relatedActor()
      .then(init);
    }
  });
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
      recordSerie()
      .then(init);
    }
  });
}


var relatedActor = function () {
  botui.message
    .bot({
      delay: 1000,
      loading: true,
      content: 'I see',
    })

    .then(function () {
      return botui.message
        .bot({
          delay: 2000,
          loading: true,
          content: 'Here is what they say about the show: "The dark and twisted trials of two plastic surgeons.'
      })
    .then(options);
  })
}



var bye = function () {
  botui.message
    .add({
      delay: 1000,
      loading: true,
      content: 'Phew, that was intense! <a href="https://media.giphy.com/media/7lWMhFRq5Z4xa/giphy.gif">Tschüssy</a>'
  })

  botui.message
    .add({
      delay: 2000,
      loading: true,
      content: 'I gotta go refuel my battery now.'
  })

  botui.message
    .add({
      delay: 1000,
      loading: true,
      content: '<a href="https://media.giphy.com/media/7lWMhFRq5Z4xa/giphy.gif">Tschüssy</a>'
  })

}





var bye2 = function () {
  botui.message.add({
    delay: 1000,
    loading: true,
    content: 'Phew, that was intense! <a href="https://media.giphy.com/media/7lWMhFRq5Z4xa/giphy.gif">Tschüssy</a>'
  })

  botui.message.add({
    delay: 2000,
    loading: true,
    content: 'I gotta go refuel my battery now.'
  })

  botui.message.add({
    delay: 1000,
    loading: true,
    content: '<a href="https://media.giphy.com/media/7lWMhFRq5Z4xa/giphy.gif">Tschüssy</a>'
  })



}


init();
