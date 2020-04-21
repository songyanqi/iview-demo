<style>
    .completed {
        text-decoration: line-through;
    }

    .selected {
        color: red;
    }
</style>
<template>
  <Layout :style="{marginLeft: '200px'}">
        <Head></Head>
        <Content :style="{padding: '0 16px 16px'}">
            <!-- 全局组件 -->
            <header-menu :items ='headerList'></header-menu>
            <Card>
                <div id="todo-app">
                    <div>
                        <input type="button" value="全部标为完成"/>
                        <input type="text" placeholder="添加 todo" v-model="newTodoTitle" @keyup.enter="addTodo"/>
                    </div>
                    <!-- todo list -->
                    <ul>
                        <li v-for='todo in todos' :key='todo.id'>
                            <span :class="{completed:todo.completed,'finished':todo.finished}" @dblclick="editTodo(todo)">{{todo.title}}</span>
                            <input type="button" value="标为完成" @click="markAsCompleted(todo)"/>
                            <input type="button" value="删除" @click="removeTodo(todo)">
                            <input type="text" value="编辑 todo..." 
                                v-if="editedTodo !== null && editedTodo.id === todo.id" 
                                v-model="todo.title" 
                                @keyup.enter="editDone(todo)"
                                @keyup.esc="cancelEdit(todo)"
                            />
                        </li>
                    </ul>
                    <!-- end todo list -->
                    <div>
                        <span>剩余 3 项未完成 ---</span>
                        <span>筛选：
                        <input type="button" class="selected" value="全部">
                        <input type="button" value="进行中">
                        <input type="button" value="已完成">
                        <input type="button" value="清除已完成">
                        <input type="button" value="清除全部">
                        </span>
                    </div>
                </div>
            </Card>
        </Content>
    </Layout>
</template>
<script>
export default {
    /**
     * 功能
     * 在顶部输入框输入内容，按回车键添加 todo
     * 全部 todo 列表显示在输入框下方的列表
     * 可将单个 todo 标为完成
     * 可删除单个 todo
     * 双击 todo 进行编辑，按 esc 键取消编辑
     * 下方显示未完成的 todo 数量
     * 可通过筛选按钮筛选未完成的 todo、已完成的 todo 等
     * 可一次性将全部 todo 标为完成，可一次性清除全部已完成 todo，或者一次性清除全部 todo。
     * 其它更加丰富的功能...
     */
    data(){
        return {
            headerList:[
                {name:'实用方法'},
                {name:'数组-字符串（赋值）'}
            ],
            todos: [
                // {id: 0, title: '学习 Vue'},
                // {id: 1, title: '整个牛项目'},
                // {id: 2, title: '迎娶白富美走上人生巅峰'},
            ],
            newTodoTitle: '',
            id:0,
            editedTodo:null
        }
    },
    methods:{
        // 添加todo
        addTodo(){
            this.todos.push({id: this.id++, title: this.newTodoTitle,completed:false});
            console.log(this.todos)
            this.newTodoTitle = ''
        },
        // 标记完成
        markAsCompleted(todo){
            todo.completed = true
            console.log(todo,'todo')
        },
        // 删除todo
        /** 
         * 这里用到两个 JavaScript 数组的相关方法，this.todos.indexOf(todo) 用来定位元素的位置，
         * 然后我们删除掉这个位置的元素 splice(index, 1)，1 表示只删除一个，即当前位置（index 的值）的元素。
         */ 
        removeTodo(todo){
            this.todos.splice(this.todos.indexOf(todo), 1)
        },
        // 编辑title
        editTodo(todo){
            this.editedTodo = {id: todo.id, title: todo.title,finished: todo.finished}
            console.log(this.editedTodo)
        },
        // 编辑成功
        editDone(todo){
            this.editedTodo = null
        },
        cancelEdit(todo){
            todo.title = this.editedTodo.title;
            this.editedTodo = null
        }

    }
}
</script>
