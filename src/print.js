export default function printMe() {
  console.log('I get called from print.js!') // placed here to to see webpack watch in action
  // cosnole.log('I get called from print.js!'); // intentional mistake to see the source map come up in Error message due to devtool incline source map
}