<script>
    import Button from '../assets/Button.svelte'
    import {light_icon, dark_icon} from '../assets/icons'
    import {searchRegion} from '../store/store'

    let isLight = true

    const handleClick = () => {
        isLight = !isLight
        window.document.body.classList.toggle('dark')

    }

    $:mode = isLight ? {text:'Dark Mode',icon:dark_icon} : {text:'Light Mode',icon:light_icon}

</script>

<nav class="z-50 flex justify-between bg-white items-center w-screen fixed px-6 md:px-12 py-5 shadow-md overflow-hidden dark:bg-hex-2b3945 lg:(px-18)">
    <a href="/" on:click={()=> $searchRegion = {searched:"",region:""}} class="font-bold text-xl">Where in the world?</a>
    <Button button="default text-[14px] font-semibold" text={mode.text} on:click={handleClick}>{@html mode.icon}</Button>
</nav>

