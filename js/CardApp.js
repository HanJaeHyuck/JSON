class CardApp {
    constructor() {
        this.cardList = $(".card-list");
        this.word = $("#word");
        this.addEvent();
        this.data = [];
        
        $.ajax({
            url: '/data.php',
            method: 'get',
            success: (data) => {
                this.data = data;
                this.loadData(data);
            }
        });

    }

    addEvent(){
        $("#btnSearch").on("click", this.serach);
    }

    //이렇게 바인딩하면 무조껀 this와 함께 실행됨
    serach = () => {
        
        // console.log(this.search);
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
                
                // let newItem = JSON.parse(JSON.stringify(item));
                // console.log(newItem);
                // if(item.price >= word) {

                    // x.replace(item.price, `<span class="highlight">$&</span>`)
                filterData = filterData.map(item => {
                    let newItem = JSON.parse(JSON.stringify(item));
                    newItem.price = newItem.price.toString().replace(newItem.price, `<span class="highlight">$&</span>`);
                    return newItem;     
                });

                this.loadData(filterData);
                // return newItem;
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
            }, 50 + idx * 400);

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
                </div>
            </div>
        </div>`;
    }
}