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
        this.right.onclick = function () {
            _this.num++;
            if(_this.num>7){
                _this.num=1;
            }
            for (let i = 0; i <8; i++) {
                _this.picli[i].className=""
            }
            _this.picli[_this.num].className="show"           
        }
    }
    

}
new Lunbo().init();