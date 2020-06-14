import axios from 'axios'
export async function postRobot(mensagem) {
  const payload = {message: mensagem}
  const response = await axios.post('https://dunnorobotback.herokuapp.com/', payload)
  console.log(response.data.Response)
  return Promise.resolve(response.data.Response)
}