<template>
    <Nav />
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
    components: {
        Nav,
        Footer,
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
        color: #10b981;
    }
}
</style>
