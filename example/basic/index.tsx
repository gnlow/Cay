export let clicks = 0

export default
<button $click={() => clicks++}>
    Fired {clicks} arrows
</button>