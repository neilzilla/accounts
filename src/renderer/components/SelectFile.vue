<template>
    <div>
        <ul
        >
            <li
                v-for="(file, i) in files"
                :key="`filename-${i}`"
                v-if="displayType(i) !== 'hidden'"
                :class="displayClass(i)"
            >
                {{ file }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "SelectFile",
        data(){
            return {
                index: 0,
                files: [
                    'test',
                    'testing',
                    'testing 1 2 3',
                    'another test',
                    'db75',
                    'New...'
                ],
                amount: 3 // must be odd
            }
        },
        computed: {
            listState(){
                
                const amount = (this.amount - 1) / 2;

                // get central
                var list = [this.files[this.index]];

                // get before
                if(this.index < amount){

                }

                
            }
        },
        methods: {
            displayType(i){
                if(i === this.index) return 'selected';
                return 'small'
            },
            displayClass(i){
                const displayType = this.displayType(i)

                const newFile = this.files[i] === 'New...' && i === this.index ? 'text-orange ' : '';

                if(displayType === 'selected') return newFile + 'text-40px';
                if(displayType === 'small') return newFile + 'text-10px';
                return 'hidden';
            },
            shortcuts(ev){
                console.log('event', ev)
                if(ev.code === 'Space') return this.cycle();
                if(ev.code === 'Enter') return this.cycle();
            },
            cycle(){
                var position = this.index + 1;
                if(position === this.files.length) position = 0;
                this.index = position
            }
        },
        async fetch(){
            this.files = await window.files.list();
        },
        mounted(){
            window.addEventListener('keydown', this.shortcuts)
        },
        beforeUnmount(){
            window.removeEventListener('keydown', this.shortcuts)

        }

    }
</script>
