import { uniq } from "lodash";
import { Demo } from "./dome";
export class Demo2 extends Demo {
    head: string = ``;
    get value() {
        return this.head
    }
    async getOne(): Promise<void> {
        console.log(this.demo1)
        console.log(`getOne`);
        const arr =[561, 561, 789, 416, 1]
        console.log(uniq(arr))
    }
}
