class Lunbo {
    constructor() {
        this.banner = document.querySelector('#banner');
        this.picli = document.querySelectorAll('#banner .banner-t li');
        this.btnli = document.querySelectorAll('#banner .banner-b li');
        this.left = document.querySelector('.banner-t .lt');
        this.right = document.querySelector('.banner-t .gt');
        this.num = 0; //当前操作的按钮的索引。
        this.timer = null;

    }
    init() {
        let _this = this;
        //右箭头
        this.right.onclick = function () {
            _this.num++;
            if (_this.num > 7) {
                _this.num = 0;
            }
            for (let i = 0; i < 8; i++) {
                _this.picli[i].className = "";
                _this.btnli[i].className = "";
            }
            _this.picli[_this.num].className = "show";
            _this.btnli[_this.num].className = "focus";
        }
        //左箭头
        this.left.onclick = function () {
            _this.num--;
            if (_this.num < 0) {
                _this.num = 7;
            }
            for (let i = 0; i < 8; i++) {
                _this.picli[i].className = "";
                _this.btnli[i].className = "";
            }
            _this.picli[_this.num].className = "show";
            _this.btnli[_this.num].className = "focus";
        }
        //定时轮播
        this.timer = setInterval(function () {
            _this.num++;
            for (let i = 0; i < 8; i++) {
                _this.picli[i].className = "";
                _this.btnli[i].className = "";
            }
            if (_this.num > 7) {
                _this.num = 0;
            }
            _this.picli[_this.num].className = "show";
            _this.btnli[_this.num].className = "focus";
        }, 2000)
    }
}

new Lunbo().init();
export {
    Lunbo
} //暴露