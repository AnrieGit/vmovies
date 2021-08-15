<template>
    <div class="main-cover">
        <div class="overlay"></div>

        <div class="main-content">
            <div class="title">
                <h1>Welcome to <span>V</span>Movies</h1>
            </div>

            <p>
                <span>V</span>Movies is a simple Movie Information App powered by <a href="http://www.omdbapi.com/" target="__blank">OMDb API.</a><br>
                Developed by <a href="https://anjomusni.herokuapp.com/" target="__blank">Anjo Musni</a> and built with Vuejs.
            </p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
};
</script>

<style lang="scss" scoped>
.main-cover {
    position: relative;
    height: 100vh;
    background-image: url("../assets/main.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    .main-content {
        position: relative;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;

        .title {
            margin-bottom: 26px;

            h1 {
                color: #fff;
                font-size: 56px;
                transition: all 0.3s ease;

                @media screen and (max-width: 600px) {
                    font-size: 32px;
                }
            }

            span {
                color: #34d399;
            }
        }

        p {
            text-align: center;
            color: #fff;
            margin-bottom: 26px;
            padding: 0 26px 0 26px;
            line-height: 1.4rem;
            transition: all 0.3s ease;

            span {
                color: #34d399;
            }

            a {
                color: #34d399;
                margin-left: 3px;
            }
        }
    }
}
</style>
