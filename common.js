class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="header">
      <div class="inner">
        <div class="topArea">
          <h1 class="xans-element- xans-layout xans-layout-logotop">
            <a href="/BLDP_WEB/index.html"
              ><img src="/BLDP_WEB/images2/BDLP_logo/BDLP_logo_01.png"
            /></a>
          </h1>
        </div>
        <div
          id="category"
          class="xans-element- xans-layout xans-layout-category"
        >
          <div>
            <a href="/BLDP_WEB/brand_story/brand_story.html"
              ><span class="title">Story</span></a
            >
          </div>
          <div>
            <a href="javascript:void(0);"><span class="title">Product</span></a>
            <div class="depth_1">
              <ul>
                <li>
                  <a href="/BLDP_WEB/product/BDLP_original.html"
                    >BDLP 엑소좀</a
                  >
                </li>
                <li>
                  <a href="/BLDP_WEB/product/BDLP_pink.html">BDLP 핑크</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="displaynone">
            <a href="javascript:void(0);"><span class="title">Shop</span></a>
            <div class="position depth_1">
              <ul></ul>
            </div>
          </div> -->
          <!--div><a href="/magazine/magazine_list.html?cate_no=23"><span class="title">스킨부스터</span></a></div-->
          <div>
            <a href="#"><span class="title">Review</span></a>
          </div>
          <div>
            <a href="javascript:void(0);"
              ><span class="title">Community</span></a
            >
            <div
              class="xans-element- xans-layout xans-layout-boardinfo depth_1"
            >
              <ul>
                <li class="xans-record-"><a href="#">Notice</a></li>
                <li class="xans-record-">
                  <a href="#">병의원 사업자 사업자용</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="header_right_section">
          <ul>
            <!--
            <li> 
              <div
                class="xans-element- xans-layout xans-layout-multishoplist list"
              >
                <button type="button" class="toggle">
                  <span>LANGUAGE &lt;!--한국어--&gt;</span>
                </button>
                <ul
                  class="xans-element- xans-layout xans-layout-multishoplistitem"
                >
                  <li class="selected xans-record-">
                    <a href="#">
                      <span class="name">한국어</span>
                      &lt;!--   <span class="unit">KRW</span>--&gt;
                    </a>
                  </li>
                  <li class="xans-record-">
                    <a href="#">
                      <span class="name">中文</span>
                      &lt;!-- <span class="unit">THB</span> --&gt;
                    </a>
                  </li>
                  <li class="xans-record-">
                    <a href="#">
                      <span class="name">English</span>
                      &lt;!--  <span class="unit">USD</span>--&gt;
                    </a>
                  </li>
                  <li class="xans-record-">
                    <a href="#">
                      <span class="name">日本語</span>
                      &lt;!--  <span class="unit">JPY</span>--&gt;
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            -->
            <!-- <li class="xans-element- xans-order xans-order-tabinfo basket"></li> -->
            <li class="slide_icon">
              <div class="menuicon-button"><div class="menuicon"></div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      `;
    }
  }

  customElements.define('app-header', HeaderComponent);
  
  class NavComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="side_bar">
      <div id="search_layer">
        <div class="close_btn"><i class="xi-close-thin"></i></div>
        <div class="search_wrap">
          <form
            id="searchBarForm"
            name=""
            action="/"
            method="get"
            target="_self"
            enctype="multipart/form-data"
          >
            <input
              id="banner_action"
              name="banner_action"
              value="/"
              type="hidden"
            />
            <div class="xans-element- xans-layout xans-layout-searchheader">
              <!--
                    $product_page=/product/detail.html
                    $category_page=/product/list.html
                -->
              <fieldset>
                <legend>검색</legend>
                <input
                  id="keyword"
                  name="keyword"
                  fw-filter=""
                  fw-label="검색어"
                  fw-msg=""
                  class="inputTypeText"
                  placeholder=""
                  onmousedown="SEARCH_BANNER.clickSearchForm(this)"
                  value=""
                  type="text"
                /><input
                  type="image"
                  src="images/search.svg"
                  alt="검색"
                  onclick="SEARCH_BANNER.submitSearchBanner(this); return false;"
                  style="max-height: 30px; margin-bottom: 10px"
                />
              </fieldset>
            </div>
          </form>
          <div class="xans-element- xans-search xans-search-hotkeyword">
            <ul>
              <li>인기검색어</li>
              <li class="xans-record-"><a href="#">v핏 밴드</a></li>
              <li class="xans-record-"><a href="#">리프팅밴드</a></li>
              <li class="xans-record-"><a href="#">멍부진크림</a></li>
              <li class="xans-record-"><a href="#">진�&nbsp;�크림</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="side_mypage"
        class="xans-element- xans-layout xans-layout-statelogoff"
      >
        <ul>
          <!-- <li><a href="#">Login</a></li>
          <li><a href="#">Join</a></li>
          <li><a href="#">Cart</a></li> -->
          <li class="close_btn"><i class="xi-close"></i></li>
        </ul>
      </div>
      <div class="wrapper">
        <div class="xans-element- xans-layout xans-layout-category category">
          <div>
            <a href="/BLDP_WEB/brand_story/brand_story.html"
              ><span class="title">Story</span></a
            >
          </div>
          <div>
            <a href="javascript:void(0);"><span class="title">Product</span></a>
            <div class="depth_1">
              <ul>
                <li>
                  <a href="/BLDP_WEB/product/BDLP_original.html"
                    >BDLP 엑소좀</a
                  >
                </li>
                <li>
                  <a href="/BLDP_WEB/product/BDLP_pink.html">BDLP 핑크</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div>
            <a href="#"><span class="title">Shop</span></a>
          </div> -->
          <!-- <div class="displaynone">
            <a href="javascript:void(0);"><span class="title">Shop</span></a>
            <div class="position depth_1">
              <ul> -->
          <!-- <li class="xans-record-"><a href="#"></a></li> -->
          <!-- </ul>
            </div>
          </div> -->
          <!--div><a href="/magazine/magazine_list.html?cate_no=23"><span class="title">스킨부스터</span></a></div-->
          <div>
            <a href="#"><span class="title">Review</span></a>
          </div>
          <div>
            <a href="javascript:void(0);"
              ><span class="title">Community</span></a
            >
            <div
              class="xans-element- xans-layout xans-layout-boardinfo depth_1"
            >
              <ul>
                <li class="xans-record-"><a href="#">Notice</a></li>
                <li class="xans-record-">
                  <a href="#">병의원 사업자 사업자용</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div id="search_btn"><a href="javascript:void(0);">Search</a></div> -->
          <div>
            <!-- <a href="#" style="font-size: 19px">병의원 가입절차 및 이용방법</a> -->
          </div>
        </div>
      </div>
      <div class="side_sns">
        <!-- <ul>
          <li>
            <a href="#"><i class="xi-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="xi-facebook"></i></a>
          </li> -->
        <!--li><a href="#none"><i class="xi-naver"></i></a></li-->
        <!-- <li>
            <a href="#"><i class="xi-youtube-play"></i></a>
          </li>
          <li>
            <a href="#"><i class="xi-kakaotalk"></i></a>
          </li> 
        </ul> -->
      </div>
    </div>
      `;
    }
  }

  customElements.define('app-nav', NavComponent);

  class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <div id="footer">
      <!--div class="consult_btn"><a href="#" target="_blank">1:1 TALK</a></div-->
      <div class="inner">
        <div class="xans-element- xans-layout xans-layout-footer">
          <div class="address">
            <img
              style="height: 50px"
              src="/BLDP_WEB/images2/BDLP_logo/BDLP_logo_white.png"
            />
            <br /><br /><br />
            <span class="tit">
              주식회사 닥터디자이너 | 사업자등록번호 553-87-01557 | 대표: 고웅진
              | 전화: 010-8884-1557
            </span>
            <br />
            <span class="tit">
              주소: 인천광역시 남동구 인하로507번길 22 (구월동) 3-4층
            </span>
            <br /><br />
            <span>개인정보 처리방침 | 사이트 이용약관 | 가맹문의</span>
            <br />
            <span> Copyright 2023. ©DR DESIGNER. All rights Reserved. </span>
          </div>
          <div class="bottom_sns">
            <ul>
              <!-- <li>
                <a href="#" target="_blank"><i class="xi-instagram"></i></a>
              </li>
              <li>
                <a href="#" target="_blank"><i class="xi-facebook"></i></a>
              </li> -->
              <!--li><a href="#none"><i class="xi-naver"></i></a></li-->
              <!-- <li>
                <a href="#" target="_blank"><i class="xi-youtube-play"></i></a>
              </li>
              <li>
                <a href="#" target="_blank"><i class="xi-kakaotalk"></i></a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="scroll_btn">
        <a href="#none" art="top"><i class="xi-angle-up"></i></a>
      </div>
      <div class="footer-bottom-logo">
        <img src="/BLDP_WEB/images2/BDLP_logo/BDLP_circle_logo_white.png" />
      </div>
    </div>
      `;
    }
  }

  customElements.define('app-footer', FooterComponent);