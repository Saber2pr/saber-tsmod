import { Path } from 'saber-node'

/**
 * 'com/main.control' => com/main.control.ts
 * 'com/main.control.tsx' => com/main.control.tsx
 *
 */

console.log(Path.split('com/main.control.tsx'))
