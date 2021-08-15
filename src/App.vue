<template>
    <Nav />
    <main>
        <router-view :key="$route.path"/>
    </main>
</template>

<script>
import Nav from "@/components/Nav";

export default {
    components: {
        Nav,
    },
    created() {
        document.title = 'VMovies'
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;

    &::selection {
        background: transparentize(#42b883, 0.5);
    }
}

::-webkit-scrollbar {
    width: 15px;
    left:-100px;
}

::-webkit-scrollbar-thumb {
    background-color: #34d399;
    background-clip: padding-box;
    border: 4px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
    transition: 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #059669;
}

body {
    background-color: #0f172a;
}

a {
    text-decoration: none;
}

h1 {
    color: #fff;
    font-size: 28px;

    span {
        color: #34d399;
    }
}
</style>
