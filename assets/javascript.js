function detail(id) {
  location.href = `detail.html?id=${id}`;
}
function url() {
  location.href = "https://www.hay88.one/?inviteCode=0688697";
}
$(document).ready(function () {
  const FunVisible = () => {
    if (window.pageYOffset > 250) {
      $("#header2").addClass("is-sticky");
    } else {
      $("#header2").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);
  const header = `
    <div class="w-full header1 py-5">
        <div class="container flex items-center justify-center md:justify-between mx-auto md:py-5">
          <div class="">
            <a href="index.html">
              <img class="max-w-[25rem] lg:max-w-[30rem]" src="./assets/images/logo-w8823-1.png" alt="Logo" />
            </a>
          </div>
          <div class="hidden md:flex">
            <button onclick="url()" type="button"
              class="text-white bg-[#2a8fbd]  font-medium  text-2xl px-6 py-2 text-center me-2 mb-2">ĐĂNG NHẬP</button>
            <button onclick="url()" type="button"
              class="text-white bg-[#cc001b]  register border border-white font-medium  text-2xl px-6 py-2 text-center me-2 mb-2">ĐĂNG
              KÝ</button>
          </div>

               
        </div>
      </div>

      <div class=" w-full bg-[#2a8fbd]" id="header2">
        <div class="container relative mx-auto">
          <div class="header2 flex ">
       
            <ul class="items-center text-white font-medium text-2xl uppercase flex-wrap *:leading-10 *:p-4 hidden md:flex *:transition-all *:duration-500">
              <li class="relative hover:bg-[#3498db]"><a href="index.html" class="tittle_navbar">W88s</a></li>


              <li class="relative hover:bg-[#3498db]"><a href="dang-ky-w88.html" class="tittle_navbar">Đăng Ký W88s</a>
              </li>
              <li class="relative hover:bg-[#3498db]"><a href="khuyen-mai-w88.html" class="tittle_navbar">Khuyến Mãi W88s</a>
              </li>
              <li class="relative hover:bg-[#3498db]"><a href="nap-tien-w88.html" class="tittle_navbar">Nạp tiền W88s</a>
              </li>
              <li class="relative hover:bg-[#3498db]"><a href="rut-tien-w88.html" class="tittle_navbar">Rút tiền W88s</a>
              </li>
              <li class="relative hover:bg-[#3498db]"><a href="tai-app-w88.html" class="tittle_navbar">Tải App W88s</a></li>

              <li class="group relative hover:bg-[#3498db]">
                <a href="huong-dan-ca-cuoc.html" class="flex items-center">
                  <div class="mr-1 tittle_navbar">Hướng Dẫn</div>
                </a>
              </li>
            </ul>

            <!-- toggle mobile -->
            <div class="flex items-center justify-start py-3 menu-icon md:hidden">
              <label class="hamburger">
                <svg viewBox="0 0 32 32">
                  <path class="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                  </path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
            <!-- end toggle mobile -->
            <div class="flex  md:hidden mx-auto gap-5 py-3" >
              <button onclick="url()" type="button"
                class="text-white bg-[#2a8fbd]  border border-white font-medium  text-2xl px-6 py-2 text-center ">ĐĂNG NHẬP</button>
              <button onclick="url()" type="button"
                class="text-white bg-[#cc001b]  register border border-white font-medium  text-2xl px-6 py-2 text-center ">ĐĂNG
                KÝ</button>
            </div>



          </div>
        </div>
      </div>
  `;
  $("#header").html(header);
  const footer = `
             <footer class="bg-[#289DCC] pb-10" >
        <div class="container mx-auto">
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-3xl font-semibold text-white">GIỚI THIỆU</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white">W88s.xyz website nhà cái chính thức tại Việt Nam, cung cấp sản phẩm cá cược thể
                thao, casino,… hàng đầu Châu Á. Đăng nhập W88s ngay nhận 90K cược miễn phí</p>
              <hr class="border-white border-t-[1px]">
              <p class="text-white text-[1.4rem]">Hashtag: #w88s #w88s #linkw88s #nhà_cái_w88s #w88s_link #w88s</p>
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-3xl font-bold text-white">CÁC SẢN PHẨM</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="dang-ky-w88.html">Đăng Ký W88s</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="khuyen-mai-w88.html">Khuyến Mãi W88s</a>
              </p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="nap-tien-w88.html">Nạp Tiền W88s</a>
              </p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="rut-tien-w88.html">Rút tiền
                  W88s</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="tai-app-w88.html">Tải App
                  W88s</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="cau-hoi-thuong-gap.html">FAQ –
                  W88s</a></p>

            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-3xl font-bold text-white">HƯỚNG DẪN</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="cau-hoi-thuong-gap.html">Câu Hỏi Thường
                  Gặp</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="mien-tru-trach-nhiem.html">Miễn Trừ Trách
                  Nhiệm</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="chinh-sach-bao-mat.html">Chính Sách Bảo
                  Mật</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="dieu-khoan-su-dung.html">Điều Khoản Sử
                  Dụng</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="lien-he.html">Chăm Sóc Khách
                  Hàng</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="gioi-thieu.html">Về Chúng Tôi</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="tac-gia.html">Tác Giả</a></p>
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-3xl font-bold text-white">THÔNG TIN</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white">Bộ phận CSKH chuyên nghiệp, trực 24/7 sẵn sàng giải đáp thắc mắc người chơi về cách
                đăng ký tài khoản, nạp & rút tiền, luật chơi.</p>
              <p class="text-white">Website: https://w88s.xyz/</p>
              <h1 class="text-3xl font-bold text-white">BẢN ĐỒ</h1>
              <hr class="border-white border-t-[1px]">
              <div class="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15229.67428207065!2d106.63062363812031!3d10.812503615298978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1718092552842!5m2!1sen!2skh"
                  width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer class="bg-[#2a8fbd]">
        <div class="container py-5 mx-auto lg:py-7">
          <div class="flex items-center justify-between">
          <p class="text-center text-white">Copyright © 2024 by W88s - Nhà cái hàng đầu Châu Á</p>
          <img src="./assets//images/_dmca_premi_badge_4.png" alt="">
        </div>
        </div>
      </footer>
    `;
  const sidebar = `<div class="side-menu-mobile fixed top-0 -translate-x-full z-[1000] overflow-y-hidden transition-transform duration-500 ">
      <ul class="w-[60vw] bg-slate-100 h-screen divide-y divide-solid">
        <div class="logo bg-white p-4">
          <img class="max-w-[150px]" src="./assets/images/CMD368_VN.png" alt="">
        </div>
        <li>
          <a href="./index.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">TRANG CHỦ</span>
          </a>
        </li>
        
        <li>
          <a  href="./dang-ky-w88.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">ĐĂNG KÝ W88</span>
          </a>
        </li>
        <li>
          <a href="./khuyen-mai-w88.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">KHUYẾN MÃI W88</span>
          </a>
        </li>
        <li>
          <a  href="nap-tien-w88.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">NẠP TIỀN W88</span>
          </a>
        </li>
        <li>
          <a  href="./rut-tien-w88.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">RÚT TIỀN W88</span>
          </a>
        </li>
        <li>
          <a href="./tai-app-w88.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">TẢI APP W88</span>
          </a>
        </li>
        <li>
          <a href="./huong-dan-ca-cuoc.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">HƯỚNG DẪN</span>
          </a>
        </li>
      </ul>
    </div>`;
  $("#side-bar").html(sidebar);

  $("#footer").html(footer);
  const content_right = `
 <hr class="border-t-[3px] border-[#33a6dd]">

            <h4 class="text-2xl font-bold "><img class="align-[-1.5px] inline-flex max-w-[1.5rem]" src="https://s.w.org/images/core/emoji/15.0.3/svg/2b50.svg" alt=""> THÔNG TIN NHÀ CÁI W88s</h4>
            <img class="max-w-72 mx-auto" src="./assets/images/logo-w88.png" alt="">
            <p><strong>Trụ Sở Chính:</strong> Manila, Philippines</p>
            <p><strong>Cá Cược Thể Thao :</strong> T/X, Kèo góc, Kèo châu á, 1×2, Kèo tỉ số…</p>
            <p><strong>Casino :</strong>  Barcarat, Sicbo, Xì zách, Roulette, Rồng Hổ…</p>
            <p><strong>Games :</strong> Nổ Hũ, Bắn Cá, Keno, Xổ số, P2P…</p>
            <p><strong>Nhà Tài Trợ :</strong> Fullham FC, Burnley FC, Đội Tuyển Argentina…</p>

            <div class="flex justify-center">
              <button onclick="url()" type="button"
                class="flex items-center justify-center text-[#ffec8b] text-2xl font-semibold gap-3 bg-[#33a6dd] py-2 px-8  rounded-full">
                <i class="text-3xl font-normal text-white ri-arrow-right-line"></i> LINK VÀO W88s
              </button>
            </div>

            <hr class="border-t-[3px] border-[#33a6dd]">
            <h4 class="text-2xl font-bold ">SOI KÈO - NHẬN ĐỊNH</h4>

            
            <div class="*:my-5">

              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(6)" class="cursor-pointer h-fit"  src="./assets/images/tay-ban-nha-vs-y-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(6)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>Nhận Định Trận Tây Ban Nha Vs Ý (2h, 21/6) Bảng B – Euro 2024 Tại W88s</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>12:10:CHIỀU</span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>18 THÁNG SÁU 2024</span>
                </div>
              </div>
              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(7)" class="cursor-pointer h-fit"  src="./assets/images/dan-mach-vs-anh-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(7)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>Soi Kèo Trận Đan Mạch Vs Anh (23h, 20/6) Bảng C – Euro 2024 Tại W88s</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>09:58:CHIỀU</span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>17 THÁNG SÁU 2024</span>
                </div>
              </div>
              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(8)" class="cursor-pointer h-fit"  src="./assets/images/duc-vs-hungary-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(8)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>Nhận Định Đức Vs Hungary (23h, 19/6) Bảng A – Euro 2024 Tại W88s</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>08:32:CHIỀU</span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>16 THÁNG SÁU 2024</span>
                </div>
              </div>
              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(9)" class="cursor-pointer h-fit"  src="./assets/images/bo-dao-nha-vs-ch-sec-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(9)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>Nhận Định Bồ Đào Nha Vs CH Séc (2h, 19/6) Bảng F – Euro 2024 Tại W88s</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>04:27:CHIỀU</span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>16 THÁNG SÁU 2024</span>
                </div>
              </div>

            </div>

            <hr class="border-t-[3px] border-[#33a6dd]">
            <h4 class="text-2xl font-bold ">Hướng Dẫn Cá Cược</h4>


            <div class="*:my-5">

              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(1)" class="cursor-pointer h-fit"  src="./assets/images/doi-tuyen-tay-ban-nha-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(1)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>
                    Đội Tuyển Tây Ban Nha: Những Chiến Binh Sẵn Sàng Đối Đầu Ở Euro 2024</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>08:41:CHIỀU </span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>13 THÁNG SÁU 2024</span>
                </div>
              </div>
              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(2)" class="cursor-pointer h-fit"  src="./assets/images/doi-tuyen-y-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(2)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>Đội Tuyển Ý Euro 2024: Azzurri Liệu Có Bảo Vệ Được Ngôi Vô Địch?</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>08:30:CHIỀU</span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>11 THÁNG SÁU 2024</span>
                </div>
              </div>
              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(3)" class="cursor-pointer h-fit"  src="./assets/images/doi-tuyen-duc-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(3)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>Khám Phá Sức Mạnh Đội Tuyển Đức Tại Vòng Chung Kết Euro 2024</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>06:40:CHIỀU</span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>04 THÁNG SÁU 2024</span>
                </div>
              </div>
              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(4)" class="cursor-pointer h-fit"  src="./assets/images/vo-dich-chau-au-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(4)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>Giải Vô Địch Châu Âu: Thông Tin Về Ngày Hội Bóng Đá Lớn Nhất Châu Âu</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>10:26:CHIỀU</span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>30 THÁNG NĂM 2024</span>
                </div>
              </div>
              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(5)" class="cursor-pointer h-fit"  src="./assets/images/doi-tuyen-vo-dich-euro-nhieu-nhat-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(5)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>4 Đội Tuyển Vô Địch Euro Nhiều Nhất: Những Dấu Ấn Không Bao Giờ Phai</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i> 09:00:CHIỀU </span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>29 THÁNG NĂM 2024</span>
                </div>
              </div>
              <div class="flex gap-5">
                <div class="min-w-20">
                <img onclick="detail(6)" class="cursor-pointer h-fit"  src="./assets/images/ket-qua-vong-loai-euro-2024-w88-65x65.jpg" alt=""></div>
                <div class="">
                  <h4 onclick="detail(6)" class="text-gray-900 font-semibold hover:text-[#000000] hover:underline cursor-pointer">
                    <i class="mr-2 text-2xl ri-play-circle-line"></i>Kết Quả Vòng Loại Euro 2024: Những Đội Tuyển Nào Gây Ấn Tượng Mạnh?</h4>
                  <span class="text-[1.2rem] mr-5"><i class="ri-time-line"></i>03:08:CHIỀU</span>
                  <span class="text-[1.2rem]"><i class="ri-calendar-2-line"></i>27 THÁNG NĂM 2024</span>
                </div>
              </div>


            </div>
  `;
  $("#content_right").html(content_right);
  const backtotop = `<button class="Btn-backtotop1">
          <svg class="Btn-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  $(".header2 > ul.items-center > li").each(function () {
    a = $(this).find(".tittle_navbar").text();
    if (active == a) {
      $(this).addClass("bg-[#3498db]");
    }
  });

  $(".menu-icon").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".side-menu-mobile").addClass("-translate-x-full");
    } else {
      $(this).addClass("active");
      $(".side-menu-mobile").removeClass("-translate-x-full");
    }
  });
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".side-menu-mobile").length &&
      !$(event.target).closest(".menu-icon").length
    ) {
      $(".menu-icon").removeClass("active");
      $(".side-menu-mobile").addClass("-translate-x-full");
    }
  });
  $(".icon-dropdown-side-menu-mobile").on("click", function () {
    $(this).toggleClass("rotate-180");
    $(this).closest("li").find("ul").toggleClass("active");
  });

  $("#showloading")
    .delay(500)
    .queue(function (next) {
      $(this).addClass("hidden");
      next();
    });
});
