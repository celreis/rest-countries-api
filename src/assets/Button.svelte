<script>
    export let text;
    export let button = "default"
</script>

<div class="{button} dark:(bg-hex-2b3945 text-white hover:bg-white hover:text-hex-2b3945)" on:click>
    <span>{text}</span>
    <slot></slot>
</div>

<style>
    div{
        @apply bg-white;
    }
    div:hover{
        @apply bg-hex-2b3945 text-white;
    }

    .default{
        @apply px-4 py-2 gap-2 rounded-md inline-flex flex-row-reverse items-center cursor-pointer;
    }

    .filterBtn{
        @apply px-4 py-4 rounded-md inline-flex justify-between cursor-pointer;
    }

    .backBtn{
        @apply px-8 py-2 gap-2 text-[14px] shadow-md rounded-md inline-flex flex-row-reverse items-center cursor-pointer;
    }
</style>