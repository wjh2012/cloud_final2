<template>
    <hr/>
    <div :style="{height:100+'px'}">
        <button v-on:click="renew()">
                현재 시간
        </button>

        <div>
            <font size= "14px">
                {{today}}
            </font>
        </div>
    </div>
    <hr/>
    <div>
        <div>
            <button v-on:mouseover="red()">
                빨강
            </button>
            <button v-on:mouseover="blue()">
                파랑
            </button>
            <button v-on:mouseover="green()">
                초록
            </button>
        </div>
        <div class="hello"></div>
    </div>

    <div id="app">
        <transition-group name="accordion" mode="out-in">
            <li v-for="item in dataArray" v-bind:key="item">{{item}}</li>
        </transition-group>

        <label><input v-model="addItem" placeholder="추가할 리스트"></label>
        <button v-on:click="addList">추가</button>
        <button v-on:click="removeLast">삭제</button>    
    </div>
</template>

<style>
    .hello{
        background: v-bind(activeColor);
        width:300px;
        height:300px;
        border:1px solid black;
        display: inline-block;
        text-align:center;
    }
    .accordion-enter-active,
    .accordion-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .accordion-enter-active {
    transition-delay: .3s;
    }

    .accordion-enter-from,
    .accordion-leave-to {
    transform: translateX(20px);
    opacity: 0;
    } 
</style>


<script>
    import dayjs from "dayjs"
    export default {
        component:{
            dayjs,
        },
        data() {
            return {
                value:20,
                activeColor : '',
                today:"",
                dataArray:['컴퓨터공학과','전자공학과'],
                addItem:''
            };
        },
        methods:{
            renew(){
                setInterval(() => {
                    this.today= dayjs().format("YYYY-MM-DD HH:mm:ss")
                }, 1000);
            },
            red(){
                this.activeColor='red'
            },
            blue(){
                this.activeColor='blue'
            },
            green(){
                this.activeColor='green'
            },

            addList(){
                this.dataArray.push(this.addItem)
                this.addItem=''
            },
            removeLast(){
                var lastIdx = this.dataArray.length - 1
                this.dataArray.splice(lastIdx, 1)
            }
        }
    }
</script>