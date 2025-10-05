function formatNumber(num) {
  if (num >= 1e12) return (num / 1e12).toFixed(2).replace(/\.00$/, '') + 'T'
  if (num >= 1e9)  return (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'B'
  if (num >= 1e6)  return (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'M'
  if (num >= 1e3)  return (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'K'
  return num.toString()
}

function formatTime(seconds) {
  const weeks = Math.floor(seconds / (7*24*3600))
  seconds %= 7*24*3600
  const days = Math.floor(seconds / (24*3600))
  seconds %= 24*3600
  const hours = Math.floor(seconds / 3600)
  seconds %= 3600
  const mins = Math.floor(seconds / 60)
  seconds %= 60

  const parts = []
  if (weeks) parts.push(weeks + ' week' + (weeks > 1 ? 's' : ''))
  if (days) parts.push(days + ' day' + (days > 1 ? 's' : ''))
  if (hours) parts.push(hours + ' hour' + (hours > 1 ? 's' : ''))
  if (mins) parts.push(mins + ' minute' + (mins > 1 ? 's' : ''))
  if (seconds) parts.push(Math.round(seconds) + ' second' + (seconds > 1 ? 's' : ''))

  return parts.join(' ')
}