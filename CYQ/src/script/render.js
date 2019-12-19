

    class Render {
        constructor() {
            this.goodslist = document.querySelector('.goodslist');
        }

        init() {
            let _this=this;
            ajax({
                url: 'http://10.31.161.198/YOHO-BUY/CYQ/php/yohodata.php',
                dataType:'json'
            }).then(function (data) {
                console.log(data);
                //遍历render
                let strhtml='<ul>';
                for(let value of data){
                    strhtml+=`
                    <li>
                    <a href="details.html?sid=${value.sid}">
                        <img src="${value.url}">

                    </a>
                </li>
                    `;
                }
                strhtml+='</ul>';
                _this.goodslist.innerHTML=strhtml;
            });
        }

    }

    new Render().init();
    export {Render}
