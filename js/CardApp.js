class CardApp {
    constructor() {
        this.cardList = $(".card-list");
        this.word = $("#word");
        this.select_price = $("#select_price");
        this.data = [];
        this.range = $(".slider");
        
        $(".register").hide();
        $.ajax({
            url: '/data.json',
            method: 'get',
            success: (data) => {
                this.data = data;
                // ...을 사용하게 되면 배열중에서 가장 큰값 가장 작은값을 불러온다/
                this.range.attr("max", Math.max(...data.map( x => x.price)));
                this.range.val(Math.max(...data.map( x => x.price)));
                this.range.attr("min", Math.min(...data.map( x => x.price)));
                this.loadData(data);
                this.select_price.text(this.range.val() +"원");
            }
        });
        this.addEvent();
    }

    addEvent(){
        $("#btnSearch").on("click", this.serach);
        this.range.on("change", this.filter);
        $("#register").on("click", this.loadRegisterPage);
        $("#registerOK").on("click", this.uploadCard);
        $("#likeSort").on("click", this.likeSort);
        // $(".like").on("click", this.likeUp);
        $(document).on("click", ".like", this.likeUp);
    }

    likeUp = (e) => {
        let qwe = $(e.target).siblings(".result");
        console.log(qwe);
    }

    uplike = (e) => {
        let value = $(e.target).data("result");
        $(e.target).siblings(".result").html((value + 1) + "명");
        $(e.target).data("result", value + 1);
    }

    likeSort = () => {
        let filterData = this.data.filter( x => x.result ).sort((a, b) => a.result - b.result);
        this.loadData(filterData);
    }

    uploadCard = () => {
        let name = $("#name").val();
        let price = $("#price").val();
        let result = $("#result").val();
        this.data.push({image:"busan.jpg",name:name, price:price, result:result});
        this.loadData(this.data);
        $(".register").hide('slow');
        $(".container").show("show");
    }

    loadRegisterPage = () => {
        $(".container").hide('slow');
        $(".register").show("show");
    }

    filter = () => {
        //여기에 range의 범위 안에 있는 값들만을 출력하도록 만들어봐.
        console.log(this.range.val());
        this.select_price.text(this.range.val() +"원");
        let filterData = this.data.filter( x => this.range.val() >= x.price ).sort((a, b) => a.price - b.price);
        //sort비교 함수 
        this.loadData(filterData);
    }


    //이렇게 바인딩하면 무조껀 this와 함께 실행됨
    serach = () => {
        let word = this.word.val();
        let regex = new RegExp(word,"gi");
        let search = $("#searchOpt option:selected").val();
        if(search =="name") {
            this.data.forEach(item => {

            let filterData = this.data.filter(item => item.name.includes(word)).map(item => {
            let newItem = JSON.parse(JSON.stringify(item));
                newItem.name = newItem.name.replace(regex, `<span class="highlight">$&</span>`);
                return newItem;
            });
            this.loadData(filterData);

            });

        } else if(search =="price") {
            this.data.forEach(item => {

                let filterData = this.data.filter( item => word >= item.price );
                console.log(filterData);
                
                filterData = filterData.map(item => {
                    let newItem = JSON.parse(JSON.stringify(item));
                    newItem.price = newItem.price.toString().replace(newItem.price, `<span class="highlight">$&</span>`);
                    return newItem;     
                });

                this.loadData(filterData);

            });    
        }
               
    }

    loadData(data) {
        this.cardList.empty();
        data.forEach((item, idx) => {
            let str = this.makeCard(item);
            this.cardList.append(str);
            setTimeout(() => {
                $(".card-list > .card").eq(idx).addClass("active");
            }, 50 + idx * 200);

        });
    }

    makeCard(item) {
        return `
        <div class="card">
            <div class="img">
                <img src="/img/${item.image}" alt="${item.image}">
            </div>
            <div class="info">
                <h4 class="name">${item.name}</h4>
                <h4 class="price">${item.price}원</h4>
                <div class="grade">
                    <span class="result">${item.result}명</span>
                    <button class="like">좋아요</button>
                </div>
                
            </div>
        </div>`;
    }
}