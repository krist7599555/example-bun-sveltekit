<script lang='ts'>
import type { PageData } from './$types'
import * as math from './math'
import { hi } from '$lib/hi'
let counter = 0
export let data: PageData
$: counter2 = counter * counter
</script>

data = {JSON.stringify(data)}

I'm counting ... {counter} {counter2}
<button
  on:click={() => {
    counter = math.inc(counter);
    // counter = counter + 5;
  }}>Count up</button
>
