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
        let word = this.word.val();
        let filterData = this.data.filter(item => item.name.includes(word));
        this.loadData(filterData);
        let regex = new RegExp(word,"gi");
        let content = document.querySelector(".name").innerHTML;
        content = content.replace(regex, `<span class="highlight">$&</span>`);
        document.querySelector(".name").innerHTML = content;
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
                <img src="/img/${item.image}" alt="${item.name}">
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