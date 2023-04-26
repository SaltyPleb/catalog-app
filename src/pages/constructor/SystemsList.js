import React, { useContext } from "react";
import CheckBox from "../../utils/CheckBox";
import arrow from "../../images/static/arrow.png";
import { useHistory } from "react-router-dom";
import { CONSTRUCTOR_SYSTEMS_ROUTE } from "../../utils/consts";
import Icon from "../../utils/Icon";
import { Context } from "../..";

const SystemsList = () => {
  const history = useHistory();
  const { constructor } = useContext(Context);

  return (
    <>
      <div className="navigation">
        <div className="navigation__url">
          <h3>Client Systems</h3>
        </div>
        <div className="navigation__btns">
          <div className="btn c-btn">
            <Icon name="create-new" color="#8f9092" size={20} />
            <div className="c-text">Create new system</div>
          </div>
        </div>
      </div>
      <div className="systems_list">
        <div className="systems_wrapper">
          {/* <h3>Systems</h3> */}
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
                {constructor.systems.map(({title, components, init_params, system_params}) => (
                  <div
                    className="table-row"
                    key={title}
                    onClick={() =>
                      history.push(CONSTRUCTOR_SYSTEMS_ROUTE + "/" + title)
                    }
                  >
                    <div className="table-data center">
                      <CheckBox />
                    </div>
                    <div className="table-data center">{system_params.id}</div>
                    <div className="table-data">
                      <div className="creator">
                        <div className="creator__img">{system_params.creatorPrefix}</div>
                        <div className="creator__info">
                          <div className="creator__info__name">
                            {system_params.creatorName}
                          </div>
                          <div className="creator__info__email">
                            {system_params.mailUser}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-data">{system_params.systemName}</div>
                    <div className="table-data">{system_params.creationDate}</div>
                    <div className="table-data">{system_params.systemStarts}</div>
                  </div>
                ))}
                {/* <div className="table-row">
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
                </div> */}
              </div>
            </div>
          </div>
          <div className="systems_wrapper__navigation">
            <div className="page_limit">
              Show 5 more on page
              <img className="left" src={arrow} alt="None" />
            </div>

            {/* <div className="pagination">
                <div className="control">
                <img className="left" src={arrow} alt="None" />
                </div>
                <div className="page">1</div>
                <div className="page current">2</div>
                <div className="page">3</div>
                <div className="control">
                <img className="right" src={arrow} alt="None" />
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemsList;
