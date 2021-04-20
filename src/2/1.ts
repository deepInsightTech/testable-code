export function helloWorld(name: string) {
  return () => {  // IO operation which returns void
    console.log(`Hello World: ${name}`)
  }
}

const program = helloWorld('Mahi')

program()
