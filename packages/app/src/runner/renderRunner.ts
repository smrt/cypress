function injectReporterStyle () {
  const style = document.createElement('style')
  style.innerText = `
    .reporter {
      min-height: 0;
      width: 300px;
      left: 750px;
      position: absolute;
    }
  `
  document.head.appendChild(style)
}

export async function renderRunner (ready: (...args: unknown[]) => void) {
  const response = await window.fetch('/api')
  const data = await response.json()
  const script = document.createElement('script')

  script.src = '/__cypress/runner/cypress_runner.js'
  script.type = 'text/javascript'

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/__cypress/runner/cypress_runner.css'

  document.head.appendChild(script)
  document.head.appendChild(link)

  injectReporterStyle()

  script.onload = () => {
    ready(data)
  }
}
