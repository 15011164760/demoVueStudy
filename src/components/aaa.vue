<template>
    <div class="hello">
        <div>
            <el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange">
            </el-tree>
            <br>
            <p>===========</p>
            AAA组件：message.msg:{{message.msg}}
            <br>
            AAA组件：message.aaa:{{message.aaa}}
            <br>
            AAA组件：message.bbb:{{message.bbb}}
            <br>
            <br>
            AAA组件：message.jjj.bbb.bbb:{{message.jjj.bbb.bbb}}
            <br>
            <!-- <div @click="changeMsg">this.message值</div> -->
            <p>===========</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: [Object],
                default: {}
            }
        },
        name: 'HelloWorld',
        //   computed:{
        //     ...mapState(["isShow"])
        //   },
        data() {
            return {
                ggg: {},
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1
            }
        },
        mounted() {

        },
        methods: {
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            handleNodeClick(data) {
                console.log(data);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
            },
            getMsg() {
                // this.ggg=this.changeMsg();
            }
            //   changeMsg(){
            //     console.log(this.mssage);
            //     //   this.mssage='dsfsd';
            //   }
        }
    }
</script>
<style scoped>

</style>