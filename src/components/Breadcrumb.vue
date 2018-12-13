<template>
    <Breadcrumb :style="{margin: '16px 0'}">
        <BreadcrumbItem
            v-for="( item , index ) in items"
            :key="index"
        >
            {{ item.name }}
        </BreadcrumbItem>
    </Breadcrumb>
    
</template>
<script>
export default {
    props:[
        "items"
    ],
    data(){
        return{
            obj : [
                {
                    name : 'about',
                    path : '/about',
                }
            ]
        }
    }
}
</script>

