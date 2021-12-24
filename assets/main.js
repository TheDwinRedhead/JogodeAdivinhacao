function comer() { 
  var input = document.querySelector('input')
  input.focus()

  function raffle() {
    return Math.round(Math.random() * 10)
  }

  function raffleNumber(amount) {
    var secrets = []
    var number = 1
    while (number <= amount) {
      var randomNumber = raffle()

      if (randomNumber !== 0) {
        var find = false

        for (var i = 0; i < secrets.length; i++) {
          if (secrets[i] == randomNumber) {
            find = true
            break
          }
        }

        if (find == false) {
          secrets.push(randomNumber)
          number++
        }
      }
    }
    return secrets
  }

  //var secret = Math.round(Math.random() * 10);

  var secrets =  raffleNumber(1)
  console.log(secrets)

 

  function verify() {
    var find = false

    for (var i = 0; i < secrets.length; i++) {
      if (input.value == secrets[i]) {
        find = true;
        add("acertou!!");
        break
      }
    }

    if (find == false) {
      add('errou.')
    }
    
    input.value = ''
    return find
  }

  function add(number) {
    var i = 0 
    const list = document.querySelector("[data-list]")
    const text = document.createElement("p")
    text.classList.add("results")
    const result = `<p> Você ${number} O numero correto era ${secrets}</p>`

    text.innerHTML = result 

    list.appendChild(text)
  }

  function reload() {
    location.reload();
  }

  var button = document.querySelector("[data-form-button]")
  button.onclick = verify

  var buttonRe = document.querySelector("[data-form-buttonRe]")
  buttonRe.onclick = reload

}

comer()