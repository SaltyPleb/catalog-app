import React from "react";
import Rightnav from "../catalog/rightnav";
import "./constructor.css";

const Constructor = () => {
  return (
    <>
      <div className="constructor_main">
        <Rightnav />
        <div className="selected_items">
          <div className="lv_name">Selected items</div>
          <div className="selection_block">
            <div className="sel_item">
              1. GPU - GTX 1660 Ti - 450$ <div className="link_icon"></div>
            </div>
            <div className="sel_item">
              2. CPU - I7-7700k - 450$
            </div>
            
          </div>
          <hr />
          <div className="sum_countes">
          <div className="lv_name">Total sum</div>
          <div className="sel_item">
            All components ~900$
            <p/>
            Delivery - ~50$
            <p/>
            Total price - ~950$
          </div>
          </div>
        </div>
        <div className="main">
          <div className="component_bloks">
            {/* <div className="components">
            //  need to make it better or just delete 
              <div className="component_name">GPU</div>
              <div className="component_name">CPU</div>
              <div className="component_name">Motherboard</div>
              <div className="component_name">RAM</div>
              <div className="component_name">Storage</div>
              <div className="component_name">Cooling(CPU)</div>
              <div className="component_name">Power supply</div>
              <div className="component_name">Case</div>
            </div> */}
            
            {/* remove this to separate js component*/}
            <div className="pluses">
              <div className="comp_block">
                <div className="component_name">GPU</div>
                <div className="plus_block">
                  <div className="big_plus" />
                  <div className="construcotr_img_holder">
                    <img className="product_icon" src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"/>
                  </div>
                </div>
              </div>
              <div className="comp_block">
                <div className="component_name">CPU</div>
                <div className="plus_block">
                  <div className="big_plus" />
                  <div className="construcotr_img_holder">
                    <img className="product_icon" src="https://ae04.alicdn.com/kf/HTB15o5iXnHuK1RkSndVq6xVwpXan/Intel-Core-i7-7700K-4-4-2-8.jpg"/>
                  </div>
                </div>
              </div>
              <div className="comp_block">
                <div className="component_name">Motherboard</div>
                <div className="plus_block">
                  <div className="big_plus" />
                </div>
              </div>
              <div className="comp_block">
                <div className="component_name">RAM</div>
                <div className="plus_block">
                  <div className="big_plus" />
                </div>
              </div>
              <div className="comp_block">
                <div className="component_name">Storage</div>
                <div className="plus_block">
                  <div className="big_plus" />
                </div>
              </div>
              <div className="comp_block">
                <div className="component_name">Cooling(CPU)</div>
                <div className="plus_block">
                  <div className="big_plus" />
                </div>
              </div>
              <div className="comp_block">
                <div className="component_name">Power supply</div>
                <div className="plus_block">
                  <div className="big_plus" />
                </div>
              </div>
              <div className="comp_block">
                <div className="component_name">Case</div>
                <div className="plus_block">
                  <div className="big_plus" />
                </div>
              </div>
              
            </div>
          </div>
          <div className="search_results">
            {/* draft */}
            <div className="res_cards">
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
              <div className="serach_card">
                <img
                  className="search_img"
                  src="https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png"
                  alt="loading"
                />
                <div className="res_info">asudhua</div>
                <div className="link_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Constructor;
