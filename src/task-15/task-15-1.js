function createLogger() {
  const messages = []
  return {
    log: function (message) {
      messages.push(message)
    },
    getLogs: function () {
      messages.forEach((message) => console.log(message))
    }
  }
}

// Тестируем
const greetings = 'Hi'
const farewell = 'Bye'

const logger = createLogger()

logger.log(greetings)
logger.log(farewell)

logger.getLogs()
