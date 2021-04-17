export function helloWorld(name: string) {
  return () => {
    console.log(`Hello World: ${name}`)
  }
}

const program = helloWorld('Mahi')

program()
