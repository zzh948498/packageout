import { uniq } from "lodash";
import { Demo } from "./demo/dome";
import { Demo2 } from "./demo/dome2";
import { readFileSync } from "fs";
export class Man extends Demo {
    head: string = ``;
    get value() {
        return this.head
    }
    async getOne(): Promise<void> {
        console.log(this.demo1)
        console.log(`getOne`);
        const arr = [561, 561, 789, 416, 1]
        console.log(uniq(arr))
       const file = readFileSync('./dome.ts');
       console.log(file)
    }
}
try {
    const man = new Man()
    man.getOne();
} catch (e) {
    console.log(e)
}

const demo2 = new Demo2()
demo2.getOne();
console.log('otto-0120')
console.log('otto-0120-666')
