class Index{
        constructor(){
              this.youhuo=document.querySelector('.header-t-l');
              this.nav=document.querySelector('.header-t-l ul');
              this.beijin=document.querySelectorAll('.header-s-l ul li')
              
        }
      init(){
          let _this=this
          this.youhuo.onmouseover=function(){
            _this.nav.style.display='block'
            
          }
          this.youhuo.onmouseout=function(){
            _this.nav.style.display='none'
         }
         for(var i=0;i<this.beijin.length;i++){
           this.beijin[i].onmouseover=function(){
             this.style.backgroundColor='#333';
           }
           this.beijin[i].onmouseout=function(){
            this.style.backgroundColor='white';
          }
         }

      }
}
new Index().init();