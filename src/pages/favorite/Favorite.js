import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../";
import { fetchFavorite, fetchFavoriteById } from "../../http/favoriteAPI";

const Favorite = observer(() => {
  const [favoriteInfo, setFavoriteInfo] = useState([]);

  const { user } = useContext(Context);

  useEffect(() => {
    fetchFavoriteById(user.userInfo.id).then((data) => setFavoriteInfo(data));
  }, []);

  return (
    <div className="favorite">
      <div className="favorite__top">
        <div className="h-name">Favorite</div>
        <div className="h-info">
          This is your favorite list, which includes all picked items.
        </div>
      </div>

      <div className="favorite__cards"></div>

      <div className="favorite__main">
        <div className="favorite__main__header">
          <div className="head">
            <div className="header__info">
              <p>Favorite items</p>
              <div className="items-count">(21)</div>
            </div>
            <div className="btns">
              <div className="sort-btn"></div>
              <div className="sort-btn active"></div>
            </div>
            <div className="status">
              <div className="btn-status active">Pending</div>
              <div className="btn-status">Competed</div>
            </div>
          </div>
        </div>

        <div className="favorite__main__list">

          {favoriteInfo.map((info, index) => (
            <div key={index} className="item-container">
              <div className="item">
                <div className="item__name">
                  <div className="label">Component</div>
                  <div className="name">{info.device_name}</div>
                </div>

                <div className="item__price">
                  <div className="label">Price</div>
                  <div className="name">600$</div>
                </div>

                <div className="item__release">
                  <div className="label">Release</div>
                  <div className="name">{info.createdAt}</div>
                  
                </div>

                <div className="item__rating">
                  <div className="label">Rating</div>
                  <div className="name">
                    This product have 5 stars rating and 142 times votes
                  </div>
                </div>
              </div>

              <div className="item_btns">
                <div className="item-btn green">More Info</div>
                <div className="item-btn">View Links</div>
                <div className="item-btn red">Delete</div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
});

export default Favorite;
