<script>
    import { navigation } from '../stores.js';
    
    let className = '';
    let storyblokEditableData = {};
    let ariaControls = '';
    
    function toggle() {
        navigation.update((s) => {
            s['open'] = !s['open'];
            return s;
        });
    }
    
    function close() {
        navigation.update((s) => {
            s['open'] = false;
            return s;
        });
    }
    
    function subscribeToAstro() {
        document.addEventListener('astro:after-swap', close)
    }
    </script>
    
    <button 
        data-blok-c={storyblokEditableData['data-blok-c']} 
        data-blok-uid={storyblokEditableData['data-blok-uid']} 
        class={[className, 'hamburger pointer-events-auto px-2.5 py-3.5 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 focus-visible:ring-2 focus:outline-none ring-primary-950 dark:ring-primary-200 text-primary-950 dark:text-primary-200 rounded-full transition-all duration-200 ease-in-out min-w-[50px]'].join(' ')} 
        aria-controls={ariaControls} 
        aria-expanded={$navigation.open} 
        aria-label="open navigation" 
        on:click={toggle}
        use:subscribeToAstro
    >
        <svg aria-hidden="true" class="stroke-primary-950 dark:stroke-primary-200" width="30px" height="22px">
            <line x1="15%" y1="10%" x2="95%" y2="10%" stroke-width="3" stroke-linecap="round" />
            <line x1="5%" y1="50%" x2="95%" y2="50%" stroke-width="3" stroke-linecap="round" />
            <line x1="15%" y1="90%" x2="95%" y2="90%" stroke-width="3" stroke-linecap="round" />
        </svg>
    </button>
    
    <style>
    .hamburger > svg {
        display: block;
        width: 100%;
        height: 100%;
        transition: translate 0.2s ease-in-out;
    }
    
    .hamburger > svg line {
        transition: 
            rotate 0.2s ease-in-out,
            translate 0.2s 0.2s ease-in-out,
            opacity 0.2s 0.2s ease-in-out;
    }
    
    .hamburger[aria-expanded="true"] > svg line {
        transition: 
            translate 0.2s ease-in-out,
            rotate 0.2s 0.2s ease-in-out;
    }
    
    .hamburger > svg line:first-child {
        transform-origin: center 0%;
    }
    
    .hamburger > svg line:last-child {
        transform-origin: center 100%;
    }
    
    .hamburger[aria-expanded="true"] > svg line:first-child {
        translate: 0% 40%;
        rotate: 45deg;
    }
    
    .hamburger[aria-expanded="true"] > svg line:last-child {
        translate: 0% -40%;
        rotate: -45deg;
    }
    
    .hamburger[aria-expanded="true"] > svg line:nth-child(2) {
        opacity: 0;
    }
    </style>