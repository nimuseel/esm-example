import { foo } from "esm-example/foo";
import { bar } from "esm-example/bar";


function init() {
    const fooValue = foo();
    const barValue = bar();

    console.log(fooValue);
    console.log(barValue);
}

init();