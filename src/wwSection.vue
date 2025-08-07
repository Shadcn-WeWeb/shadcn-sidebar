<template>
    <wwLayout path="sidebarContent" class="sidebar-section-base"></wwLayout>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
};
</script>

<style lang="scss" scoped>
.sidebar-section-base {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    background: hsl(0 0% 98%);
}
</style>