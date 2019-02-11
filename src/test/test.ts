import { Name } from '../core/utils/rule'
import { Path } from 'saber-node'

const test = $name => {
  const resolv = Path.split($name)
  let name = resolv.str
  let type = resolv.type
  if (!Name.pass(type)) {
    name = type
    type = Name.passtype(resolv.type)
  }
  console.log(`
resolve: name:[${resolv.str}]  type:${resolv.type}
result:  name:[${name}]  type:${type}
`)
}
test('demo')
