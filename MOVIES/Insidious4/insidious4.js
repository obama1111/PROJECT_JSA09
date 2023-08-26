if (!window.user) {
    window.location.href = "/LOGIN/Login.html"
  }


const themeBG = document.getElementById("theme-icon");
const NewIcon = "/IMGS/3.png"
const LastIcon = "/IMGS/2.png"
let themeOn = false;

function Darktheme() {
    const btn_color = document.getElementById("search_btn")
    btn_color.style.backgroundColor = "black"
    btn_color.style.color = "white"
    // btn_color.addEventListener("focusin", () => {
    //     btn_color.color = "white"
    // })
    const search_color = document.getElementById("search_bar")
    search_color.style.backgroundColor = "#212F3D"


    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#212F3D";
    body.style.color = "white"
    const text_boxes = document.getElementsByClassName("nav-tabs");
    for (const textBox of text_boxes) {
        textBox.style.color = "#FFFFFF";
    }
    themeBG.style.backgroundColor = "yellow"
    themeBG.style.borderRadius = "2em"
    themeBG.src = NewIcon;
    themeBG.alt = "newicon"


}

function Lighttheme() {
    const btn_color = document.getElementById("search_btn")
    btn_color.style.backgroundColor = "#F0F0F0"
    btn_color.style.color = "black"
    // btn_color.addEventListener("focus-in", () => {
    //     btn_color.color = "black"
    // })



    const search_color = document.getElementById("search_bar")
    search_color.style.backgroundColor = "white"
    
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "white";
    body.style.color = "black"

    const text_boxes = document.getElementsByClassName("nav-tabs");
    for (const textBox of text_boxes) {
        textBox.style.color = "black";
    }
    themeBG.style.backgroundColor = "#212F3D"
    themeBG.style.borderRadius = "2em"
    themeBG.src = LastIcon;
    themeBG.alt = "lasticon"
}

themeBG.addEventListener("click", () => {
    if (themeOn === false) {
        Darktheme();
        themeOn = true;
    } else {
        Lighttheme();
        themeOn = false;
    }
})

                                                 

const movies1 = [
    {
        id: "01",
        title: "Elemental",
        poster: "https://artofthemovies.co.uk/cdn/shop/products/IMG_0735_incinemas-219707.jpg?v=1674596999",
        description: "Xứ Sở Các Nguyên Tố từ Disney và Pixar lấy bối cảnh tại thành phố các nguyên tố, nơi lửa, nước, đất và không khí cùng chung sống với nhau. Câu chuyện xoay quanh nhân vật Ember, một cô nàng cá tính, thông minh, mạnh mẽ và đầy sức hút. Tuy nhiên, mối quan hệ của cô với Wade - một anh chàng hài hước, luôn thuận thế đẩy dòng - khiến Ember cảm thấy ngờ vực với thế giới này. Được đạo diễn bởi Peter Sohn, sản xuất bởi Denise Ream, và lồng tiếng bởi Leah Lewis (Ember) và Mamoudou Athie (Wade), phim dự kiến khởi chiếu tại rạp vào tháng 23.06.2023.",
        category: "Gia đình, Hài, Hoạt hình"
    },
    // {
    //     id: "02",
    //     title: "Spider-Man: Across the Spider-Verse",
    //     poster: "https://cdn-amz.woka.io/images/I/91k0c-+8eqL.jpg",
    //     description: "Người Nhện: Du Hành Vũ Trụ Nhện – Spider-Man: Across the Spider-Verse (2023) Miles Morales tái xuất trong phần tiếp theo của bom tấn hoạt hình từng đoạt giải Oscar – Spider-Man: Across the Spider-Verse. Sau khi gặp lại Gwen Stacy, chàng Spider-Man thân thiện đến từ Brooklyn phải du hành qua đa vũ trụ và gặp một nhóm Người Nhện chịu trách nhiệm bảo vệ các thế giới song song. Nhưng khi nhóm siêu anh hùng xung đột về cách xử lý một mối đe dọa mới, Miles buộc phải đọ sức với các Người Nhện khác và phải xác định lại ý nghĩa của việc trở thành một người hùng để có thể cứu những người cậu yêu thương nhất.",
    //     category: "Phiêu lưu, Hành động, Hoạt hình"

    // },
    {
        id: "03",
        title: "JOKER",
        poster: "https://i.mpcdn.top/poster/joker-7587.jpg?1576725090",
        description: "Joker từ lâu đã là siêu ác nhân huyền thoại của điện ảnh thế giới. Nhưng có bao giờ bạn tự hỏi, Joker đến từ đâu và điều gì đã biến Joker trở thành biểu tượng tội lỗi của thành phố Gotham? JOKER sẽ là cái nhìn độc đáo về tên ác nhân khét tiếng của Vũ trụ DC – một câu chuyện gốc thấm nhuần, nhưng tách biệt rõ ràng với những truyền thuyết quen thuộc xoay quanh nhân vật mang đầy tính biểu tượng này. Bộ phim đã xuất sắc giành giải thưởng Sư Tử Vàng- Phim Hay Nhất tại LHP Venice lần thứ 76, cùng tràng pháo tay dài 8 phút, và lời khen ngợi dành cho diễn xuất của tài tử Joaquin Phoenix. Một bộ phim không thể bỏ lỡ của tháng 10 năm nay.",
        category: "Tâm lý, Chiến tranh"
    },

    {
        id: "04",
        title: "US",
        poster: "https://i2-prod.mirror.co.uk/incoming/article13965173.ece/ALTERNATES/n310p/0_Us-Movie-Poster.jpg",
        description: "Us- Chúng ta mang đến một câu chuyện đầy ám ảnh, thông minh và rất thời đại mới. Trong cuộc sống thực, kẻ thù đáng sợ nhất có lẽ thường thấy không phải là tội phạm mất hết nhân tính, và cũng không phải là bom hạt nhân. Kẻ thù đáng sợ nhất từ trước đến nay đều là chính bản thân chúng ta.",
        category: "Kinh dị, Tâm lý"
    },

    // {
    //     id: "05",
    //     title: "Quỷ Quyệt 5: Cửa Đỏ Vô Định",
    //     poster: "https://dmaxcinemas.com/Modules/CineUploadFiles/Movie/image/insidious5%20310x390_235016.jpg",
    //     description: "Insidious 5: The Red Door:Trong phần tiếp theo sau mười năm kể từ hai phần phim đầu tiên, Josh Lambert (do Patrick Wilson thủ vai) chuyển đến phía Đông để đưa cậu con trai Dalton (do Ty Simpkins thủ vai) đến trường đại học bình dị, nằm giữa những cây thường xuân. Tuy nhiên, giấc mơ đại học của Dalton lại trở thành ác mộng khi những con quỷ đã bị kìm hãm trong quá khứ, bằng một cách nào đó đã trở lại và tiếp tục ám hai cha con.",
    //     category: "kinh dị, tâm lý,"
    // },
]

movies1.forEach(movie => {
    document.getElementById("img_rm").insertAdjacentHTML("afterbegin",
    `
    <img src="${movie.poster}" alt=""> 
    <h3> ${movie.title} </h3> 
    
    `
    )
})







// footer
const contactUS = [
    {
        id: "1",
        name: "Nguyễn Hoàng Sơn",
        phoneNum: "SĐT: 0123456789",
        facebook: "https://www.facebook.com/tatsunori.makoto.3"
    },
    {
        id: "2",
        name: "Hoàng Phúc Sáng",
        phoneNum: "SĐT: 0123123123",
        facebook: "https://www.facebook.com/SacChocoBer"
    },
]
contactUS.forEach(text => {
    document.getElementById("texts").insertAdjacentHTML("afterbegin",
    `
        <p>${text.name}</p>
        <p>${text.phoneNum}</p>
        <a href="${text.facebook}" target=_blank>${text.facebook}</a>
    `
)
const text_color = document.getElementById("link_text")
text_color.style.color = "red"

});


