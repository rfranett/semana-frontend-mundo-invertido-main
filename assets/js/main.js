
import {Subscribetohellfire } from './firebase/hellfire.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
  const subscription = {
      Nome: txtName.value,
      Email: txtEmail.value,
      Level: txtLevel.value,
      Character: txtCharacter.value
    }

    // salvar no banco de dados!
    const subscriptionId = await btnSubscribetohellfire(subscription)
    console.log('Inscrito com suceesso: ${subscriptionId}')
})

