<template>
    <div>
        <div>
            <el-button type="primary" class="btn" @click="$router.push('/')">назад</el-button>
        </div>
        <canvas ref="drawingCanvas" width="500" height="500" class="canvas"></canvas>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {namespace} from 'vuex-class'

    const canvas = namespace('CanvasModule');
    @Component
    export default class Canvas extends Vue {
        public canvas: any = null;
        public context: any = null;
        public x: number = 225;
        public y: number = 225;
        public selectX: number = 10;
        public selectY: number = 10;
        public isSelectedRect: boolean = false;
        public color = 'rgba(0,255,0, .5)';
        @canvas.State
        public img!: any;

        @canvas.Action
        public getImage!: () => any;

        public createBaseCanvas() {
            this.fillRect(this.x, this.y, this.color);
            if (!this.isSelectedRect) {
                this.x > 225 ? this.x -= 5 : true;
                this.y > 225 ? this.y -= 5 : true;
                this.x < 225 ? this.x += 5 : true;
                this.y < 225 ? this.y += 5 : true;
            }

        }

        public mouseDownToCanvas(e: {offsetX: number,offsetY: number}) {
            let x: number = e.offsetX;
            let y: number = e.offsetY;
            if (this.isCursorInRect(x, y)) {
                this.selectX = this.x - x;
                this.selectY = this.y - y;
                this.isSelectedRect = true;
                this.color = 'rgba(0,0,255, .5)';
            }
        }

        public mouseUpToCanvas() {
            this.isSelectedRect = false;
            this.color = 'rgba(0,255,0, .5)';
        }

        public mouseMoveToCanvas(e: {offsetX: number,offsetY: number}) {
            if (this.isSelectedRect) {
                this.x = e.offsetX + this.selectX;
                this.y = e.offsetY + this.selectY;
            }

        }

        public isCursorInRect(x: number, y: number) {
            return x >= this.x && x <= this.x + 50 &&
                y >= this.y && y <= this.y + 50
        }

        public fillRect(x: number, y: number, color: string) {
            this.context.clearRect(0, 0, 500, 500);
            if (this.img.src) {
                this.context.drawImage(this.img, 0, 0);
            }
            this.context.fillStyle = color;
            this.context.fillRect(x, y, 50, 50);
        }


        mounted() {
            this.getImage();
            this.canvas = this.$refs.drawingCanvas;
            this.context = this.canvas.getContext("2d");
            this.canvas.addEventListener('mousedown', this.mouseDownToCanvas);
            this.$el.addEventListener('mouseup', this.mouseUpToCanvas);
            this.canvas.addEventListener('mousemove', this.mouseMoveToCanvas);
            setInterval(this.createBaseCanvas, 30);
        }
    }
</script>

<style scoped lang="scss">
    .canvas {
        outline: 1px solid red;
        margin: 20px auto;
    }
</style>