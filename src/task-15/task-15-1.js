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

const logger = createLogger()

logger.log('Hi')
logger.log('Buy')

logger.getLogs()
