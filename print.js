const ulBegin = '<ul>'
const ulEnd = '</ul>'
const liBegin = '<li>'
const liEnd = '</li>'

function printList(words) {
  let result = ulBegin
  words.forEach(word => {
    result += liBegin + word + liEnd
  })
  result += ulEnd
  return result
}

export function printUsers(users) {
  let output = '<h2>User emails from XMLHttpRequest: </h2>'
  const emails = users.map(user => user.email).sort()
  output += printList(emails)

  output += '<h2>User usernames from fetch:</h2>'
  const names = users.map(user => user.username).sort((a, b) => a.length - b.length)
  output += printList(names)

  const outputDiv = document.getElementById('output')
  outputDiv.innerHTML = output
}

export default e => {
  let error = `<h2>There is an excepton: ${e.message}</h2>`
  const outputDiv = document.getElementById('output')
  outputDiv.innerHTML = error
}
