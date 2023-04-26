import React, { useState } from "react";
import Icon from "../../utils/Icon";
import CheckBox from "../../utils/CheckBox";
import arrow from "../../images/static/arrow.png";

const Library = () => {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <>
      <div className="navigation">
        <div className="navigation__url">
          <h3>Systems Library</h3>
        </div>
        <div className="navigation__btns">
          <div onClick={() => setShowFilter(!showFilter)} className="btn c-btn">
            <Icon name="filter" color="#8f9092" size={22} />
          </div>
          <div className="btn c-btn">
            <Icon name="create-new" color="#8f9092" size={20} />
            <div className="c-text">Create new system</div>
          </div>
        </div>
      </div>
      <div className="library_wrapper">
        {showFilter ? (
          <div className="library_filter">
            <div className="filter_wrapper">
              <h3>Filter</h3>
              <div className="filter_wrapper__filters">
                <div className="c-group">
                  <div className="c-input-group">
                    <input type="text" id="name" required className="c-input" />
                    <label className="c-input-label">ID</label>
                  </div>
                  <div className="c-input-group">
                    <input type="text" id="name" required className="c-input" />
                    <label className="c-input-label">System Name</label>
                  </div>
                  <div className="c-input-group">
                    <input type="text" id="name" required className="c-input" />
                    <label className="c-input-label">User</label>
                  </div>
                  <div className="c-input-group">
                    <input type="text" id="name" required className="c-input" />
                    <label className="c-input-label">By group name</label>
                  </div>
                </div>
                <div className="c-group">
                  <div className="c-input-group">
                    <input type="text" id="name" required className="c-input" />
                    <label className="c-input-label">CPU</label>
                  </div>
                  <div className="c-input-group">
                    <input type="text" id="name" required className="c-input" />
                    <label className="c-input-label">GPU</label>
                  </div>
                  <div className="c-input-group">
                    <input type="text" id="name" required className="c-input" />
                    <label className="c-input-label">Creation date</label>
                  </div>
                  <div className="c-input-group">
                    <input type="text" id="name" required className="c-input" />
                    <label className="c-input-label">Label</label>
                  </div>
                </div>
              </div>
              <div className="filter_wrapper__btns">
                <div onClick={() => setShowFilter(false)} className="c-btn">
                  Collapse filter
                </div>
                <div className="c-btn-search">Search</div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="systems_list">
          <div className="systems_wrapper">
            <h3>Systems</h3>
            <div className="systems_wrapper__list">
              <div className="table">
                <div className="table-header">
                  <div className="header__item center">
                    <CheckBox />
                  </div>
                  <div className="header__item center">
                    <a id="name" className="filter__link" href="#">
                      ID
                    </a>
                  </div>
                  <div className="header__item">
                    <a
                      id="wins"
                      className="filter__link filter__link--number"
                      href="#"
                    >
                      Creator name
                    </a>
                  </div>
                  <div className="header__item">
                    <a
                      id="draws"
                      className="filter__link filter__link--number"
                      href="#"
                    >
                      System name
                    </a>
                  </div>
                  <div className="header__item">
                    <a
                      id="losses"
                      className="filter__link filter__link--number"
                      href="#"
                    >
                      Creation date
                    </a>
                  </div>
                  <div className="header__item">
                    <a
                      id="total"
                      className="filter__link filter__link--number"
                      href="#"
                    >
                      Stars
                    </a>
                  </div>
                </div>
                <div className="table-content">
                  <div className="table-row">
                    <div className="table-data center">
                      <CheckBox />
                    </div>
                    <div className="table-data center">312312</div>
                    <div className="table-data">
                      <div className="creator">
                        <div className="creator__img">YB</div>
                        <div className="creator__info">
                          <div className="creator__info__name">
                            Yauheni Bulyha
                          </div>
                          <div className="creator__info__email">
                            test@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-data">Pro PC build I7-9700</div>
                    <div className="table-data">2022-07-22</div>
                    <div className="table-data">5</div>
                  </div>
                  <div className="table-row">
                    <div className="table-data center">
                      <CheckBox />
                    </div>
                    <div className="table-data center">002</div>
                    <div className="table-data">
                      <div className="creator">
                        <div className="creator__img">YB</div>
                        <div className="creator__info">
                          <div className="creator__info__name">
                            Yauheni Bulyha
                          </div>
                          <div className="creator__info__email">
                            test@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-data">Pro PC build I7-9700</div>
                    <div className="table-data">2022-07-22</div>
                    <div className="table-data">3</div>
                  </div>
                  <div className="table-row">
                    <div className="table-data center">
                      <CheckBox />
                    </div>
                    <div className="table-data center">003</div>
                    <div className="table-data">
                      <div className="creator">
                        <div className="creator__img">YB</div>
                        <div className="creator__info">
                          <div className="creator__info__name">
                            Yauheni Bulyha
                          </div>
                          <div className="creator__info__email">
                            test@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-data">Pro PC build I7-9700</div>
                    <div className="table-data">2022-07-22</div>
                    <div className="table-data">2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="systems_wrapper__navigation">
              <div className="page_limit">
                Show 5 more on page
                <img className="left" src={arrow} alt="None" />
              </div>

              <div className="pagination">
                <div className="control">
                  <img className="left" src={arrow} alt="None" />
                </div>
                <div className="page">1</div>
                <div className="page current">2</div>
                <div className="page">3</div>
                <div className="control">
                  <img className="right" src={arrow} alt="None" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
