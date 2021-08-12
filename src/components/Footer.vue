<template>
    <div class="footer">
        Developed by Anjo Musni powered by
        <a href="http://www.omdbapi.com/" target="__blank">OMDb API</a>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style lang="scss">
.footer {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    background-color: #1e293b;

    a {
        color: #34d399;
        margin-left: 3px;
    }
}
</style>