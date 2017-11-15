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
          text: 'Record',
          value: 'yes'
        }, {
          text: 'Do not record',
          value: 'no'
        }]
      })
  }).then(function (res) {
    if(res.value == 'yes') {
      botui.message.bot({
        delay: 2500,
        loading: true,
        content: 'Say no more. It’s done! You can find it on your Scheduled Recordings'
      })
    } else {
      relatedActor()
      .then(init);
    }
  });
}

var relatedActor = function () {
  botui.message
    .bot({
      delay: 3000,
      loading: true,
      content: 'I see',
    })

    .then(function () {
    return botui.message
    .bot({
      delay: 3000,
      loading: true,
      content: 'Here is what they say about the show: "The dark and twisted trials of two plastic surgeons.'
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



























var changeTemp = function () {
  botui.message
    .bot({
      delay: 500,
      content: 'Change the temperature to ...'
    })
    .then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          size: 10,
          icon: 'thermometer-empty',
          value: temperature, // show the current temperature as default
          sub_type: 'number',
          placeholder: '26'
        }
      })
    }).then(function (res) {
      temperature = res.value; // save new value
      return botui.message
        .bot({
          delay: 1500,
          loading: true, // pretend like we are doing something
          content: 'temperature set to ' + res.value
        });
    }).then(init); // loop to initial state
}


init();
