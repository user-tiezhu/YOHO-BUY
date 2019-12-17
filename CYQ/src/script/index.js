class Index {
    constructor() {
        this.youhuo = document.querySelector('.header-t-l');
        this.nav = document.querySelector('.header-t-l ul');
        this.beijin = document.querySelectorAll('.header-s-l ul li')
    //    lunbo
         this.list=document.querySelectorAll('.banner-t ul li')
         this.pic=document.querySelectorAll('.banner-t ul li img')
         //左右箭头
         this.lt=document.querySelector('.banner-t .lt')
         this.gt=document.querySelector('.banner-t .gt')
    }
    init() {
        let _this = this
        this.youhuo.onmouseover = function () {
            _this.nav.style.display = 'block'

        }
        this.youhuo.onmouseout = function () {
            _this.nav.style.display = 'none'
        }
        for (var i = 0; i < this.beijin.length; i++) {
            this.beijin[i].onmouseover = function () {
                this.style.backgroundColor = '#333';
            }
            this.beijin[i].onmouseout = function () {
                this.style.backgroundColor = '';
            }
        }
        this.lunbo()
    }
    //轮播图
    lunbo(){
        let _this=this
        this.lt.onmouseover=function(){
            this.style.backgroundColor='#333'
        }
        this.gt.onmouseover=function(){
            this.style.backgroundColor='#333'
        }
        this.lt.onmouseout=function(){
            this.style.backgroundColor='#fff'
        }
        this.gt.onmouseout=function(){
            this.style.backgroundColor='#fff'
        }       
    }
    
}
new Index().init();